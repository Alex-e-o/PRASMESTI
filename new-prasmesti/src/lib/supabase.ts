import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Les clés sont lues depuis l'environnement Vite (.env) :
//   VITE_SUPABASE_URL=...
//   VITE_SUPABASE_ANON_KEY=...
// La clé "anon" est publiable (la sécurité repose sur les règles RLS côté Supabase),
// elle peut donc être committée si tu veux une démo portable via GitHub.

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

/** Vrai uniquement si un projet Supabase est configuré. Sinon l'app retombe sur le fallback local. */
export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(url as string, anonKey as string, {
      auth: { persistSession: true, autoRefreshToken: true },
    })
  : null;
