#!/usr/bin/env node
// Création des 12 comptes de l'espace privé (1 admin + 1 par État membre).
//
// À exécuter UNE fois, après avoir appliqué supabase/schema.sql :
//
//   SUPABASE_URL="https://xxxx.supabase.co" \
//   SUPABASE_SERVICE_ROLE_KEY="eyJ..." \
//   node scripts/seed-supabase.mjs
//
// La clé service_role contourne toutes les règles RLS : elle ne doit jamais être
// committée, ni placée dans un fichier .env lu par Vite (tout VITE_* finit dans
// le bundle public). Elle se récupère dans Project Settings → API.
//
// Par défaut, un mot de passe fort et DIFFÉRENT est généré pour chaque compte,
// puis affiché une seule fois : à distribuer à chaque point focal par un canal
// sûr. Passer SEED_PASSWORD=... impose un mot de passe commun (démonstration
// uniquement).

import { randomBytes } from 'node:crypto';
import { writeFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

const projectRef = process.env.SUPABASE_PROJECT_REF ?? 'tuwrobkndmvmdozxkmmh';
const url = process.env.SUPABASE_URL ?? `https://${projectRef}.supabase.co`;

/**
 * Récupère la clé secrète du projet via l'API Management.
 * Évite de faire circuler la clé service_role à la main : un Personal Access
 * Token se révoque en un clic, une clé service_role divulguée impose de la
 * régénérer et de redéployer tout ce qui l'utilise.
 */
async function fetchServiceKey(accessToken) {
  const response = await fetch(
    `https://api.supabase.com/v1/projects/${projectRef}/api-keys?reveal=true`,
    { headers: { Authorization: `Bearer ${accessToken}` } },
  );
  if (!response.ok) {
    throw new Error(`API Management : HTTP ${response.status} ${await response.text()}`);
  }
  const keys = await response.json();
  const key = keys.find((k) => k.type === 'secret') ?? keys.find((k) => k.name === 'service_role');
  if (!key?.api_key) throw new Error('Aucune clé secrète exploitable renvoyée par l’API.');
  return key.api_key;
}

const serviceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY ??
  (process.env.SUPABASE_ACCESS_TOKEN ? await fetchServiceKey(process.env.SUPABASE_ACCESS_TOKEN) : null);

if (!serviceKey) {
  console.error('SUPABASE_SERVICE_ROLE_KEY ou SUPABASE_ACCESS_TOKEN est requis.');
  process.exit(1);
}

const EMAIL_DOMAIN = 'prasmesti.ceeac-eccas.org';

// Doit rester aligné sur src/data/countryProfiles.ts (annuaire de connexion)
// et sur les slugs de src/data/eccasFlags.ts (référentiel des États membres).
const ACCOUNTS = [
  { username: 'admin', role: 'admin', slug: null, name: 'Administrateur PRASMESTI' },
  { username: 'gabon', role: 'country', slug: 'gabon', name: 'Point focal — Gabon' },
  { username: 'angola', role: 'country', slug: 'angola', name: 'Point focal — Angola' },
  { username: 'burundi', role: 'country', slug: 'burundi', name: 'Point focal — Burundi' },
  { username: 'cameroun', role: 'country', slug: 'cameroon', name: 'Point focal — Cameroun' },
  { username: 'centrafrique', role: 'country', slug: 'central-african-republic', name: 'Point focal — Centrafrique' },
  { username: 'congo', role: 'country', slug: 'congo', name: 'Point focal — République du Congo' },
  { username: 'guinee-equatoriale', role: 'country', slug: 'equatorial-guinea', name: 'Point focal — Guinée équatoriale' },
  { username: 'rdc', role: 'country', slug: 'drc', name: 'Point focal — République Démocratique du Congo' },
  { username: 'rwanda', role: 'country', slug: 'rwanda', name: 'Point focal — Rwanda' },
  { username: 'sao-tome', role: 'country', slug: 'sao-tome', name: 'Point focal — Sao Tomé-et-Principe' },
  { username: 'tchad', role: 'country', slug: 'chad', name: 'Point focal — Tchad' },
];

const generatePassword = () => `${randomBytes(12).toString('base64url')}!7Aa`;

const admin = createClient(url, serviceKey, { auth: { persistSession: false } });

const credentials = [];

for (const account of ACCOUNTS) {
  const email = `${account.username}@${EMAIL_DOMAIN}`;
  const password = process.env.SEED_PASSWORD ?? generatePassword();

  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  let userId = data?.user?.id;

  if (error) {
    // Le script doit rester rejouable : un compte déjà présent n'est pas un échec.
    if (!/already/i.test(error.message)) {
      console.error(`✗ ${email} : ${error.message}`);
      continue;
    }
    const { data: existing } = await admin.auth.admin.listUsers();
    userId = existing?.users.find((user) => user.email === email)?.id;
    if (!userId) {
      console.error(`✗ ${email} : compte existant introuvable.`);
      continue;
    }
    console.log(`= ${email} (compte déjà présent, profil mis à jour)`);
  } else {
    credentials.push({ email, password });
    console.log(`✓ ${email}`);
  }

  const { error: profileError } = await admin.from('profiles').upsert({
    id: userId,
    role: account.role,
    country_slug: account.slug,
    name: account.name,
  });
  if (profileError) console.error(`  ⚠ profil : ${profileError.message}`);
}

// Les identifiants vont dans un fichier hors dépôt plutôt qu'à l'écran : une
// sortie de terminal se retrouve trop facilement dans un historique ou un
// copier-coller. Fichier à supprimer une fois les mots de passe distribués.
if (credentials.length) {
  const out = process.env.CREDENTIALS_OUT ?? 'identifiants-prasmesti.txt';
  const lines = [
    'Identifiants de l’espace privé PRASMESTI',
    'À transmettre à chaque point focal par un canal sûr, puis SUPPRIMER ce fichier.',
    'Chaque titulaire devrait changer son mot de passe à la première connexion.',
    '',
    ...credentials.map(({ email, password }) => `${email.padEnd(45)} ${password}`),
    '',
  ].join('\n');
  writeFileSync(out, lines, 'utf8');
  console.log(`\n${credentials.length} identifiants écrits dans : ${out}`);
}

console.log('\nAucune donnée de questionnaire n’a été insérée : chaque État membre');
console.log('reste la seule source de ses propres chiffres.');
