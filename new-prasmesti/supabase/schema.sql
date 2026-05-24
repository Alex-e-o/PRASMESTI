-- ============================================================================
-- PRASMESTI — Schéma Supabase (à exécuter dans le SQL Editor du projet)
-- ============================================================================
-- Tables :
--   profiles                 : rôle + pays rattaché à chaque utilisateur auth
--   country_stats            : statistiques par pays (lecture publique)
--   questionnaire_submissions: réponses du questionnaire par pays (privé)
-- ----------------------------------------------------------------------------

-- 1) PROFILS ------------------------------------------------------------------
create table if not exists public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  role         text not null default 'country' check (role in ('admin', 'country')),
  country_slug text,
  name         text,
  created_at   timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Chacun lit son profil ; l'admin lit tout.
create policy "profiles_self_read" on public.profiles
  for select using (
    id = auth.uid()
    or exists (select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
  );

-- Helpers (rôle / pays de l'utilisateur courant)
create or replace function public.current_role() returns text
  language sql stable as $$ select role from public.profiles where id = auth.uid() $$;
create or replace function public.current_country() returns text
  language sql stable as $$ select country_slug from public.profiles where id = auth.uid() $$;

-- 2) STATISTIQUES PAR PAYS ----------------------------------------------------
create table if not exists public.country_stats (
  country_slug    text primary key,
  completion      int,
  domain_progress jsonb,
  blockers        jsonb,
  updated_at      timestamptz not null default now()
);

alter table public.country_stats enable row level security;

-- Lecture PUBLIQUE (les pages "État de mise en œuvre" sont publiques)
create policy "country_stats_public_read" on public.country_stats
  for select using (true);

-- Écriture : l'admin partout, un pays uniquement sur sa ligne
create policy "country_stats_write" on public.country_stats
  for all using (
    public.current_role() = 'admin' or country_slug = public.current_country()
  ) with check (
    public.current_role() = 'admin' or country_slug = public.current_country()
  );

-- 3) RÉPONSES DU QUESTIONNAIRE ------------------------------------------------
create table if not exists public.questionnaire_submissions (
  country_slug text primary key,
  answers      jsonb not null default '{}'::jsonb,
  submitted_at timestamptz not null default now(),
  submitted_by uuid references auth.users (id)
);

alter table public.questionnaire_submissions enable row level security;

-- Lecture/écriture : l'admin partout, un pays uniquement sur sa ligne
create policy "questionnaire_rw" on public.questionnaire_submissions
  for all using (
    public.current_role() = 'admin' or country_slug = public.current_country()
  ) with check (
    public.current_role() = 'admin' or country_slug = public.current_country()
  );
