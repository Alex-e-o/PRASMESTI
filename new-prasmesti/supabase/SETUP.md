# Configuration Supabase — espace privé PRASMESTI

L'application fonctionne **sans Supabase** : elle bascule alors sur un mode démonstration
(`localStorage`, comptes de l'annuaire `src/data/countryProfiles.ts`). Les étapes ci-dessous
activent la persistance partagée réelle.

## Ce que la base gère

| Table | Rôle |
|---|---|
| `profiles` | rôle (`admin` / `country`), pays rattaché, nom, photo de profil |
| `country_reports` | questionnaires versionnés, statut `draft` / `submitted` |
| `country_stats` | indicateurs publiés, **lecture publique** (pages « État de mise en œuvre ») |
| `activity_log` | journal en ajout seul, **lecture réservée à l'admin** |
| bucket `avatars` | photos de profil, privé, servi par URL signée |

## 1. Créer le projet
1. https://supabase.com → **New project** (région Europe conseillée).
2. **Project Settings → API** : relever **Project URL** et la clé **anon public**.

## 2. Variables d'environnement
Créer `new-prasmesti/.env` :

```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGci...
```

> La clé `anon` est publiable : la sécurité repose sur les règles RLS.
> La clé **`service_role`**, elle, contourne toute la RLS — ne jamais la committer
> ni la préfixer `VITE_` (tout `VITE_*` se retrouve dans le bundle public).

## 3. Schéma
Dans **SQL Editor**, exécuter [`schema.sql`](./schema.sql). Le fichier est rejouable.

Points à connaître :
- les fonctions `auth_role()` / `is_admin()` sont en `SECURITY DEFINER` — sans cela, une
  politique de `profiles` qui interroge `profiles` provoque une récursion infinie ;
- un trigger empêche un compte pays de se promouvoir admin ou de changer de pays ;
- les enregistrements de questionnaires et les publications d'indicateurs sont journalisés
  par des triggers, pas par le navigateur.

## 4. Créer les 12 comptes

```bash
SUPABASE_URL="https://xxxx.supabase.co" SUPABASE_SERVICE_ROLE_KEY="eyJ..." node scripts/seed-supabase.mjs
```

Le script crée 1 admin + 1 compte par État membre, génère un **mot de passe unique par
compte** et l'affiche une seule fois — à transmettre à chaque point focal par un canal sûr.
Il est rejouable : un compte déjà présent voit simplement son profil mis à jour.

Pour un mot de passe commun (démonstration seulement) : ajouter `SEED_PASSWORD="…"`.

## 5. Données de départ : aucune, volontairement

Aucun indicateur n'est pré-rempli pour un État membre. Tant qu'un pays n'a rien soumis, il
n'a pas de ligne dans `country_stats` et l'interface affiche « données non encore
transmises » — un état distinct d'un score de zéro, qui se lirait comme un mauvais résultat.
Chaque État reste ainsi l'unique source de ses propres chiffres, et aucun classement
inter-pays ne repose sur des valeurs estimées.

## 6. Vérifier

Relancer `npm run dev`, se connecter, enregistrer un brouillon puis soumettre le
questionnaire : la page publique du pays doit passer de « données non encore transmises »
aux indicateurs calculés, et l'historique (compte admin) doit montrer la connexion,
l'enregistrement du brouillon, la soumission et la publication.
