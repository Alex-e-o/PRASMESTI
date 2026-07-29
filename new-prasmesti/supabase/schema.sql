-- ============================================================================
-- PRASMESTI — Schéma Supabase v2 (à exécuter dans le SQL Editor du projet)
-- ============================================================================
-- Rejouable : le fichier peut être ré-exécuté sans casser une base existante.
--
--   profiles        : rôle + pays rattaché + avatar de chaque utilisateur auth
--   country_reports : questionnaires par pays, versionnés (brouillon / soumis)
--   country_stats   : indicateurs publiés d'un pays (lecture publique)
--   activity_log    : journal d'activité en ajout seul, lisible par l'admin seul
--
-- Principe de gouvernance : aucun chiffre n'est pré-rempli pour un État membre.
-- L'ABSENCE de ligne dans country_stats signifie « pas encore transmis » — un
-- état distinct de zéro, que l'interface publique affiche comme tel. Chaque
-- État reste ainsi l'unique source de ses propres chiffres.
-- ----------------------------------------------------------------------------

-- 0) MIGRATION depuis le schéma v1 ------------------------------------------
-- La v1 stockait une ligne unique par pays dans questionnaire_submissions, sans
-- statut ni historique, avec un submitted_at NOT NULL qui rendait tout
-- enregistrement de brouillon impossible. Elle n'a jamais été déployée.
drop table if exists public.questionnaire_submissions cascade;
drop function if exists public.current_role() cascade;   -- collisionnait avec la fonction système SQL
drop function if exists public.current_country() cascade;

-- 1) PROFILS (table) ----------------------------------------------------------
-- La table vient AVANT les fonctions helpers : le corps d'une fonction `language
-- sql` est validé dès sa création, donc elle ne peut pas référencer une table
-- qui n'existe pas encore.
create table if not exists public.profiles (
  id           uuid primary key references auth.users (id) on delete cascade,
  role         text not null default 'country' check (role in ('admin', 'country')),
  country_slug text,
  name         text,
  avatar_path  text,                       -- chemin dans le bucket « avatars »
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

alter table public.profiles add column if not exists avatar_path text;
alter table public.profiles add column if not exists updated_at timestamptz not null default now();

-- 2) HELPERS ------------------------------------------------------------------
-- SECURITY DEFINER : ces fonctions lisent profiles en contournant la RLS. Sans
-- cela, une policy de profiles qui interroge profiles se rappelle elle-même et
-- Postgres échoue en « infinite recursion detected in policy ».
-- search_path figé = protection contre le détournement par schéma.

create or replace function public.auth_role()
  returns text
  language sql
  stable
  security definer
  set search_path = public
as $$ select role from public.profiles where id = auth.uid() $$;

create or replace function public.auth_country()
  returns text
  language sql
  stable
  security definer
  set search_path = public
as $$ select country_slug from public.profiles where id = auth.uid() $$;

create or replace function public.is_admin()
  returns boolean
  language sql
  stable
  security definer
  set search_path = public
as $$ select coalesce(public.auth_role() = 'admin', false) $$;

-- Un pays n'écrit que sur sa propre ligne ; l'admin écrit partout.
create or replace function public.owns_country(target text)
  returns boolean
  language sql
  stable
  security definer
  set search_path = public
as $$ select public.is_admin() or target = public.auth_country() $$;

revoke execute on function public.auth_role() from anon;
revoke execute on function public.auth_country() from anon;

-- 3) PROFILS (sécurité) -------------------------------------------------------
alter table public.profiles enable row level security;

drop policy if exists "profiles_self_read" on public.profiles;   -- nom de la v1
drop policy if exists "profiles_read" on public.profiles;
create policy "profiles_read" on public.profiles
  for select using (id = auth.uid() or public.is_admin());

-- Chacun peut mettre à jour son propre profil (nom, avatar) ; l'admin, tous.
drop policy if exists "profiles_update" on public.profiles;
create policy "profiles_update" on public.profiles
  for update using (id = auth.uid() or public.is_admin())
  with check (id = auth.uid() or public.is_admin());

-- Garde-fou : sans cela, un compte pays pourrait se promouvoir admin ou changer
-- de pays via un simple update sur sa propre ligne.
create or replace function public.profiles_guard_privileges()
  returns trigger
  language plpgsql
  security definer
  set search_path = public
as $$
begin
  if not public.is_admin() then
    if new.role is distinct from old.role
       or new.country_slug is distinct from old.country_slug then
      raise exception 'Seul un administrateur peut modifier le rôle ou le pays d''un profil.';
    end if;
  end if;
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists profiles_guard_privileges on public.profiles;
create trigger profiles_guard_privileges
  before update on public.profiles
  for each row execute function public.profiles_guard_privileges();

-- 4) QUESTIONNAIRES PAR PAYS --------------------------------------------------
-- Versionné : chaque soumission fige une version ; le brouillon en cours reste
-- modifiable. Un seul brouillon par pays à la fois.
create table if not exists public.country_reports (
  id           uuid primary key default gen_random_uuid(),
  country_slug text not null,
  version      int  not null default 1,
  status       text not null default 'draft' check (status in ('draft', 'submitted')),
  answers      jsonb not null default '{}'::jsonb,
  created_by   uuid references auth.users (id),
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  submitted_at timestamptz,                -- NULL tant que le rapport est un brouillon
  submitted_by uuid references auth.users (id),
  constraint country_reports_submitted_has_date
    check ((status = 'submitted') = (submitted_at is not null))
);

create unique index if not exists country_reports_one_draft
  on public.country_reports (country_slug) where status = 'draft';
create index if not exists country_reports_by_country
  on public.country_reports (country_slug, submitted_at desc nulls last);

alter table public.country_reports enable row level security;

drop policy if exists "country_reports_read" on public.country_reports;
create policy "country_reports_read" on public.country_reports
  for select using (public.owns_country(country_slug));

drop policy if exists "country_reports_insert" on public.country_reports;
create policy "country_reports_insert" on public.country_reports
  for insert with check (public.owns_country(country_slug));

drop policy if exists "country_reports_update" on public.country_reports;
create policy "country_reports_update" on public.country_reports
  for update using (public.owns_country(country_slug))
  with check (public.owns_country(country_slug));

-- Pas de policy DELETE : les rapports ne se suppriment pas depuis l'application.

-- 5) INDICATEURS PUBLIÉS ------------------------------------------------------
create table if not exists public.country_stats (
  country_slug     text primary key,
  completion       int check (completion between 0 and 100),
  -- Part des cases d'alignement réellement renseignées : un taux calculé sur
  -- trois réponses ne doit pas se lire comme un questionnaire complet.
  coverage         int check (coverage between 0 and 100),
  domain_progress  jsonb,
  blockers         jsonb,
  source_report_id uuid references public.country_reports (id) on delete set null,
  updated_by       uuid references auth.users (id),
  updated_at       timestamptz not null default now()
);

alter table public.country_stats add column if not exists coverage int;
alter table public.country_stats add column if not exists source_report_id uuid references public.country_reports (id) on delete set null;
alter table public.country_stats add column if not exists updated_by uuid references auth.users (id);

alter table public.country_stats enable row level security;

-- Lecture PUBLIQUE : les pages « État de mise en œuvre » sont ouvertes à tous.
drop policy if exists "country_stats_public_read" on public.country_stats;
create policy "country_stats_public_read" on public.country_stats
  for select using (true);

drop policy if exists "country_stats_write" on public.country_stats;   -- nom de la v1
drop policy if exists "country_stats_insert" on public.country_stats;
drop policy if exists "country_stats_update" on public.country_stats;
create policy "country_stats_insert" on public.country_stats
  for insert with check (public.owns_country(country_slug));
create policy "country_stats_update" on public.country_stats
  for update using (public.owns_country(country_slug))
  with check (public.owns_country(country_slug));

-- 6) JOURNAL D'ACTIVITÉ -------------------------------------------------------
-- En ajout seul : aucune policy update/delete n'existe, donc une ligne écrite ne
-- peut plus être modifiée ni effacée depuis l'application.
create table if not exists public.activity_log (
  id           bigint generated always as identity primary key,
  actor_id     uuid references auth.users (id) on delete set null,
  actor_name   text,
  actor_email  text,
  country_slug text,
  action       text not null,   -- login | logout | report.draft_saved | report.submitted | stats.published | profile.avatar_updated
  entity       text,            -- libellé de l'élément concerné
  status       text not null default 'done' check (status in ('done', 'pending', 'failed')),
  meta         jsonb not null default '{}'::jsonb,
  created_at   timestamptz not null default now()
);

create index if not exists activity_log_recent on public.activity_log (created_at desc);
create index if not exists activity_log_by_country on public.activity_log (country_slug, created_at desc);

alter table public.activity_log enable row level security;

-- Lecture réservée à l'admin — exigence explicite du cahier des charges.
drop policy if exists "activity_log_admin_read" on public.activity_log;
create policy "activity_log_admin_read" on public.activity_log
  for select using (public.is_admin());

-- Chacun ne peut journaliser que ses propres actions, sous sa propre identité.
drop policy if exists "activity_log_self_insert" on public.activity_log;
create policy "activity_log_self_insert" on public.activity_log
  for insert with check (actor_id = auth.uid());

-- 7) JOURNALISATION AUTOMATIQUE ----------------------------------------------
-- Les écritures de données passent par des triggers plutôt que par le client :
-- un navigateur peut mentir ou se fermer avant d'avoir journalisé, un trigger
-- non. Seules les connexions sont journalisées côté application (voir
-- src/lib/activityLog.ts), faute de hook d'authentification exposé au client.
create or replace function public.log_report_activity()
  returns trigger
  language plpgsql
  security definer
  set search_path = public
as $$
declare
  actor public.profiles%rowtype;
begin
  select * into actor from public.profiles where id = auth.uid();

  insert into public.activity_log (actor_id, actor_name, country_slug, action, entity, status, meta)
  values (
    auth.uid(),
    coalesce(actor.name, 'Système'),
    new.country_slug,
    case when new.status = 'submitted' then 'report.submitted' else 'report.draft_saved' end,
    'Questionnaire ' || new.country_slug,
    case when new.status = 'submitted' then 'done' else 'pending' end,
    jsonb_build_object('report_id', new.id, 'version', new.version)
  );
  return new;
end;
$$;

drop trigger if exists country_reports_log on public.country_reports;
create trigger country_reports_log
  after insert or update of status, answers on public.country_reports
  for each row execute function public.log_report_activity();

create or replace function public.log_stats_activity()
  returns trigger
  language plpgsql
  security definer
  set search_path = public
as $$
declare
  actor public.profiles%rowtype;
begin
  select * into actor from public.profiles where id = auth.uid();

  insert into public.activity_log (actor_id, actor_name, country_slug, action, entity, status, meta)
  values (
    auth.uid(),
    coalesce(actor.name, 'Système'),
    new.country_slug,
    'stats.published',
    'Indicateurs publics ' || new.country_slug,
    'done',
    jsonb_build_object('completion', new.completion)
  );
  return new;
end;
$$;

drop trigger if exists country_stats_log on public.country_stats;
create trigger country_stats_log
  after insert or update on public.country_stats
  for each row execute function public.log_stats_activity();

create or replace function public.touch_updated_at()
  returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end; $$;

drop trigger if exists country_reports_touch on public.country_reports;
create trigger country_reports_touch
  before update on public.country_reports
  for each row execute function public.touch_updated_at();

-- 8) PHOTOS DE PROFIL (Storage) ----------------------------------------------
-- Bucket privé : les photos sont servies par URL signée, jamais publiquement.
-- Convention de chemin : « <user_id>/<fichier> » — c'est le premier segment qui
-- porte la règle d'accès.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('avatars', 'avatars', false, 2097152, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
  set file_size_limit = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "avatars_read" on storage.objects;
create policy "avatars_read" on storage.objects
  for select using (
    bucket_id = 'avatars'
    and (owner = auth.uid() or public.is_admin())
  );

drop policy if exists "avatars_insert" on storage.objects;
create policy "avatars_insert" on storage.objects
  for insert with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "avatars_update" on storage.objects;
create policy "avatars_update" on storage.objects
  for update using (
    bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text
  );

drop policy if exists "avatars_delete" on storage.objects;
create policy "avatars_delete" on storage.objects
  for delete using (
    bucket_id = 'avatars' and (storage.foldername(name))[1] = auth.uid()::text
  );

-- 9) SYNCHRONISATION TEMPS RÉEL ----------------------------------------------
-- Permet aux pages publiques de refléter une soumission sans redéploiement.
-- Le bloc garde le fichier rejouable : réinscrire une table déjà publiée est
-- une erreur, pas une opération neutre.
do $$
begin
  alter publication supabase_realtime add table public.country_stats;
exception
  when duplicate_object then null;
end;
$$;

-- ----------------------------------------------------------------------------
-- DONNÉES DE DÉPART : volontairement aucune.
-- Seuls les comptes et leurs profils sont créés (voir scripts/seed-supabase.mjs).
-- Aucun indicateur n'est inventé pour un État membre : tant qu'un pays n'a rien
-- transmis, il n'a pas de ligne dans country_stats et le site public affiche
-- « données non encore transmises ».
-- ----------------------------------------------------------------------------
