import { isSupabaseConfigured, supabase } from '../lib/supabase';
import { findProfileByEmail, findProfileByLogin, type PrivateRole } from '../data/countryProfiles';
import { clearLocalActor, readLocalActor, writeLocalActor } from '../lib/localSession';
import { logActivity } from '../lib/activityLog';

export type PrivateUser = {
  name: string;
  email: string;
  role: PrivateRole;
  /** Slug du pays pour un compte « country » ; absent pour l'admin. */
  countrySlug?: string;
  /** URL signée de la photo de profil, régénérée à chaque session. */
  avatarUrl?: string;
};

export type LoginResult = { ok: true } | { ok: false; error: string };

/**
 * Charge l'utilisateur de la session en cours.
 *
 * Quand Supabase est configuré, la session Supabase fait seule autorité : une
 * entrée localStorage ne suffit plus à ouvrir l'espace privé, contrairement à
 * la version précédente où écrire un drapeau dans la console suffisait à entrer.
 */
export async function loadPrivateUser(): Promise<PrivateUser | null> {
  if (isSupabaseConfigured && supabase) {
    const { data } = await supabase.auth.getSession();
    const session = data.session;
    if (!session?.user) {
      clearLocalActor();
      return null;
    }

    const email = session.user.email ?? '';
    const directory = findProfileByEmail(email);

    const { data: row } = await supabase
      .from('profiles')
      .select('role, country_slug, name, avatar_path')
      .eq('id', session.user.id)
      .maybeSingle();

    const user: PrivateUser = {
      name: row?.name ?? directory?.name ?? email,
      email,
      role: ((row?.role as PrivateRole) ?? directory?.role ?? 'country'),
      countrySlug: (row?.country_slug as string | undefined) ?? directory?.countrySlug,
      avatarUrl: await signAvatarUrl(row?.avatar_path as string | undefined),
    };
    writeLocalActor(user);
    return user;
  }

  return readLocalActor();
}

/** Le bucket des avatars est privé : une URL signée, valable 1 h, est requise. */
export async function signAvatarUrl(path?: string | null): Promise<string | undefined> {
  if (!path || !supabase) return undefined;
  const { data } = await supabase.storage.from('avatars').createSignedUrl(path, 3600);
  return data?.signedUrl;
}

export async function signInPrivate(identifier: string, password: string): Promise<LoginResult> {
  if (isSupabaseConfigured && supabase) {
    // L'identifiant saisi peut être un nom court (annuaire) ou l'email complet.
    const directory = findProfileByLogin(identifier);
    const email = directory?.email ?? identifier.trim();

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) {
      return { ok: false, error: 'Identifiants incorrects.' };
    }

    const user = await loadPrivateUser();
    if (!user) return { ok: false, error: 'Session introuvable après la connexion.' };

    await logActivity({ action: 'login', entity: 'Espace privé', status: 'done' });
    return { ok: true };
  }

  const directory = findProfileByLogin(identifier);
  if (!directory || password !== directory.demoPassword) {
    return { ok: false, error: 'Identifiants incorrects.' };
  }
  writeLocalActor({
    name: directory.name,
    email: directory.email,
    role: directory.role,
    countrySlug: directory.countrySlug,
  });
  await logActivity({ action: 'login', entity: 'Espace privé', status: 'done' });
  return { ok: true };
}

export async function signOutPrivate(): Promise<void> {
  // Journaliser avant de fermer la session : après le signOut, la RLS refuserait
  // l'insertion et la trace serait perdue.
  await logActivity({ action: 'logout', entity: 'Espace privé', status: 'done' });
  if (isSupabaseConfigured && supabase) {
    await supabase.auth.signOut();
  }
  clearLocalActor();
}

export { findProfileByEmail };
