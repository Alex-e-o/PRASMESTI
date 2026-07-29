#!/usr/bin/env node
// Applique supabase/schema.sql au projet via l'API Management de Supabase.
//
//   SUPABASE_ACCESS_TOKEN="$(cat chemin/vers/token.txt)" node scripts/apply-schema.mjs
//
// Le jeton (Personal Access Token, https://supabase.com/dashboard/account/tokens)
// est lu depuis l'environnement et n'est jamais écrit dans le dépôt. Il est
// révocable à tout moment depuis le dashboard.

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PROJECT_REF = process.env.SUPABASE_PROJECT_REF ?? 'tuwrobkndmvmdozxkmmh';
const token = process.env.SUPABASE_ACCESS_TOKEN;

if (!token) {
  console.error('SUPABASE_ACCESS_TOKEN est requis.');
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const sql = readFileSync(join(here, '..', 'supabase', 'schema.sql'), 'utf8');

const response = await fetch(`https://api.supabase.com/v1/projects/${PROJECT_REF}/database/query`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query: sql }),
});

const body = await response.text();

if (!response.ok) {
  console.error(`✗ HTTP ${response.status}`);
  console.error(body);
  process.exit(1);
}

console.log('✓ Schéma appliqué.');
if (body && body !== '[]') console.log(body.slice(0, 500));
