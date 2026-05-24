import { isSupabaseConfigured, supabase } from '../lib/supabase';
import { findProfileByEmail, findProfileByLogin, type PrivateRole } from '../data/countryProfiles';

export type PrivateUser = {
  name: string;
  email: string;
  role: PrivateRole;
  /** Slug du pays pour un compte "country" ; undefined pour l'admin. */
  countrySlug?: string;
};

const AUTH_KEY = 'prasmesti-private-auth';
const USER_KEY = 'prasmesti-private-user';

const defaultUser: PrivateUser = {
  name: 'Administrateur PRASMESTI',
  email: 'admin@prasmesti.ceeac-eccas.org',
  role: 'admin',
};

export function isPrivateAuthenticated() {
  return window.localStorage.getItem(AUTH_KEY) === 'true';
}

export function getPrivateUser(): PrivateUser {
  const raw = window.localStorage.getItem(USER_KEY);
  if (!raw) return defaultUser;
  try {
    return JSON.parse(raw) as PrivateUser;
  } catch {
    return defaultUser;
  }
}

function persistSession(user: PrivateUser) {
  window.localStorage.setItem(AUTH_KEY, 'true');
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
}

type LoginResult = { ok: true } | { ok: false; error: string };

export async function loginPrivate(identifier: string, password: string): Promise<LoginResult> {
  // ── Voie Supabase (si configuré) ──
  if (isSupabaseConfigured && supabase) {
    // L'identifiant peut être un username (annuaire) ou directement l'email.
    const profile = findProfileByLogin(identifier);
    const email = profile?.email ?? identifier.trim();

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) {
      return { ok: false, error: 'Identifiants incorrects.' };
    }

    // Rôle/pays : depuis la table profiles, avec repli sur l'annuaire committé.
    let user: PrivateUser = {
      name: profile?.name ?? data.user.email ?? 'Utilisateur',
      email: data.user.email ?? email,
      role: profile?.role ?? 'country',
      countrySlug: profile?.countrySlug,
    };
    const { data: row } = await supabase
      .from('profiles')
      .select('role, country_slug, name')
      .eq('id', data.user.id)
      .maybeSingle();
    if (row) {
      user = {
        name: row.name ?? user.name,
        email: user.email,
        role: (row.role as PrivateRole) ?? user.role,
        countrySlug: row.country_slug ?? user.countrySlug,
      };
    }
    persistSession(user);
    return { ok: true };
  }

  // ── Fallback local (démo sans backend) ──
  const profile = findProfileByLogin(identifier);
  if (!profile || password !== profile.demoPassword) {
    return { ok: false, error: 'Identifiants incorrects.' };
  }
  persistSession({
    name: profile.name,
    email: profile.email,
    role: profile.role,
    countrySlug: profile.countrySlug,
  });
  return { ok: true };
}

export async function logoutPrivate() {
  if (isSupabaseConfigured && supabase) {
    await supabase.auth.signOut();
  }
  window.localStorage.removeItem(AUTH_KEY);
  window.localStorage.removeItem(USER_KEY);
}

// Réexport pratique pour les composants
export { findProfileByEmail };
