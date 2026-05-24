# Configuration Supabase — espace privé PRASMESTI

L'application fonctionne **sans Supabase** (fallback local `localStorage`, comptes de
démonstration ci-dessous). Pour activer la persistance partagée (cloud), suivre ces étapes.

## 1. Créer le projet
1. Aller sur https://supabase.com → **New project** (région Europe conseillée).
2. Une fois créé : **Project Settings → API**, récupérer :
   - **Project URL** → `VITE_SUPABASE_URL`
   - **anon public** → `VITE_SUPABASE_ANON_KEY`

## 2. Variables d'environnement
Créer un fichier `new-prasmesti/.env` :

```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

> La clé `anon` est **publiable** (la sécurité repose sur les règles RLS). Pour une démo
> portable via GitHub, tu peux committer ces valeurs (dans `.env` ou en dur), c'est sans risque.

## 3. Schéma
Dans **SQL Editor**, exécuter le contenu de [`schema.sql`](./schema.sql).

## 4. Créer les 12 comptes
Dans **Authentication → Users → Add user** (email + mot de passe, "Auto-confirm" activé),
créer les comptes suivants, puis insérer leur profil (voir SQL plus bas).

Mot de passe de démonstration commun : **`Prasmesti@2026`**

| Rôle | Email | Pays |
|------|-------|------|
| admin | admin@prasmesti.ceeac-eccas.org | — |
| country | gabon@prasmesti.ceeac-eccas.org | gabon |
| country | angola@prasmesti.ceeac-eccas.org | angola |
| country | burundi@prasmesti.ceeac-eccas.org | burundi |
| country | cameroun@prasmesti.ceeac-eccas.org | cameroon |
| country | centrafrique@prasmesti.ceeac-eccas.org | central-african-republic |
| country | congo@prasmesti.ceeac-eccas.org | congo |
| country | guinee-equatoriale@prasmesti.ceeac-eccas.org | equatorial-guinea |
| country | rdc@prasmesti.ceeac-eccas.org | drc |
| country | rwanda@prasmesti.ceeac-eccas.org | rwanda |
| country | sao-tome@prasmesti.ceeac-eccas.org | sao-tome |
| country | tchad@prasmesti.ceeac-eccas.org | chad |

Puis lier chaque utilisateur à un profil (remplacer les UUID par ceux créés) :

```sql
-- exemple : insert into public.profiles (id, role, country_slug, name)
-- values ('<uuid-auth-user>', 'country', 'gabon', 'Point focal — Gabon');
```

> Astuce : on peut aussi automatiser cette création via un script `supabase` admin
> (clé service_role) — à ne **pas** committer. Demandez-moi si vous voulez ce script.

## 5. Vérifier
Relancer `npm run dev`. Au login, les comptes ci-dessus fonctionnent via Supabase.
Sans `.env`, ce sont les **mêmes identifiants** qui fonctionnent en fallback local.
