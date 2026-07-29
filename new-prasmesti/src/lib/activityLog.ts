import { isSupabaseConfigured, supabase } from './supabase';
import { readLocalActor } from './localSession';

// Journal d'activité de l'espace privé.
//
// Répartition des responsabilités quand Supabase est configuré :
//  · Les écritures de données (brouillon, soumission, publication d'indicateurs)
//    sont journalisées par des TRIGGERS Postgres — un onglet qui se ferme au
//    mauvais moment ne peut donc pas faire disparaître une trace.
//  · Les connexions et déconnexions sont journalisées ici : elles n'ont pas
//    d'écriture en base à laquelle s'accrocher.
//
// Sans Supabase (mode démonstration), tout est journalisé localement, sinon
// l'historique resterait vide.

export type ActivityAction =
  | 'login'
  | 'logout'
  | 'report.draft_saved'
  | 'report.submitted'
  | 'stats.published'
  | 'profile.avatar_updated';

export type ActivityStatus = 'done' | 'pending' | 'failed';

export type ActivityDraft = {
  action: ActivityAction;
  countrySlug?: string;
  entity?: string;
  status?: ActivityStatus;
  meta?: Record<string, unknown>;
};

export type ActivityEntry = {
  id: string;
  createdAt: string;
  actorName: string;
  actorEmail?: string;
  countrySlug?: string;
  action: ActivityAction;
  entity?: string;
  status: ActivityStatus;
};

export type ActivityFilters = {
  from?: string;
  to?: string;
  search?: string;
  limit?: number;
};

const LOCAL_KEY = 'prasmesti-activity';
const LOCAL_MAX = 500;

const readLocalLog = (): ActivityEntry[] => {
  try {
    const raw = window.localStorage.getItem(LOCAL_KEY);
    return raw ? (JSON.parse(raw) as ActivityEntry[]) : [];
  } catch {
    return [];
  }
};

const appendLocal = (draft: ActivityDraft): void => {
  const actor = readLocalActor();
  const entry: ActivityEntry = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    actorName: actor?.name ?? 'Utilisateur inconnu',
    actorEmail: actor?.email,
    countrySlug: draft.countrySlug ?? actor?.countrySlug,
    action: draft.action,
    entity: draft.entity,
    status: draft.status ?? 'done',
  };
  try {
    const next = [entry, ...readLocalLog()].slice(0, LOCAL_MAX);
    window.localStorage.setItem(LOCAL_KEY, JSON.stringify(next));
  } catch {
    /* journal local plein ou indisponible */
  }
};

/**
 * Journalise une action portée par l'utilisateur lui-même (connexion,
 * déconnexion, changement de photo). Ne jette jamais : perdre une ligne de
 * journal ne doit pas faire échouer l'action qu'elle décrit.
 */
export async function logActivity(draft: ActivityDraft): Promise<void> {
  if (!isSupabaseConfigured || !supabase) {
    appendLocal(draft);
    return;
  }
  try {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return;
    const actor = readLocalActor();
    await supabase.from('activity_log').insert({
      actor_id: data.user.id,
      actor_name: actor?.name ?? data.user.email ?? 'Utilisateur',
      actor_email: data.user.email,
      country_slug: draft.countrySlug ?? actor?.countrySlug ?? null,
      action: draft.action,
      entity: draft.entity ?? null,
      status: draft.status ?? 'done',
      meta: draft.meta ?? {},
    });
  } catch {
    /* le journal ne bloque jamais le parcours utilisateur */
  }
}

/**
 * Journalise uniquement en mode démonstration : quand Supabase est branché,
 * ces mêmes actions sont déjà tracées par les triggers, et les écrire ici
 * produirait des doublons.
 */
export function logActivityIfOffline(draft: ActivityDraft): void {
  if (isSupabaseConfigured) return;
  appendLocal(draft);
}

const matchesSearch = (entry: ActivityEntry, needle: string): boolean =>
  [entry.actorName, entry.entity, entry.action, entry.countrySlug]
    .filter(Boolean)
    .some((field) => (field as string).toLowerCase().includes(needle));

/** Lit le journal. Côté Supabase, la RLS le réserve déjà au compte admin. */
export async function listActivity(filters: ActivityFilters = {}): Promise<ActivityEntry[]> {
  const limit = filters.limit ?? 200;
  const needle = filters.search?.trim().toLowerCase() ?? '';

  if (isSupabaseConfigured && supabase) {
    let query = supabase
      .from('activity_log')
      .select('id, created_at, actor_name, actor_email, country_slug, action, entity, status')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (filters.from) query = query.gte('created_at', filters.from);
    if (filters.to) query = query.lte('created_at', filters.to);
    if (needle) {
      query = query.or(
        `entity.ilike.%${needle}%,actor_name.ilike.%${needle}%,action.ilike.%${needle}%`,
      );
    }

    const { data, error } = await query;
    if (error || !data) return [];
    return data.map((row) => ({
      id: String(row.id),
      createdAt: row.created_at as string,
      actorName: (row.actor_name as string) ?? 'Utilisateur',
      actorEmail: (row.actor_email as string) ?? undefined,
      countrySlug: (row.country_slug as string) ?? undefined,
      action: row.action as ActivityAction,
      entity: (row.entity as string) ?? undefined,
      status: (row.status as ActivityStatus) ?? 'done',
    }));
  }

  return readLocalLog()
    .filter((entry) => (filters.from ? entry.createdAt >= filters.from : true))
    .filter((entry) => (filters.to ? entry.createdAt <= filters.to : true))
    .filter((entry) => (needle ? matchesSearch(entry, needle) : true))
    .slice(0, limit);
}
