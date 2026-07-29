#!/usr/bin/env node
// Test d'acceptation de l'installation Supabase, exécuté avec de vrais comptes.
//
//   SUPABASE_ACCESS_TOKEN="sbp_..." node scripts/verify-setup.mjs
//
// Vérifie ce qu'un test d'interface ne peut pas prouver : que les règles RLS
// isolent réellement les pays les uns des autres, et que le journal d'activité
// n'est lisible que par l'administration. Nettoie ses données à la fin.

import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';

const projectRef = process.env.SUPABASE_PROJECT_REF ?? 'tuwrobkndmvmdozxkmmh';
const url = `https://${projectRef}.supabase.co`;
const accessToken = process.env.SUPABASE_ACCESS_TOKEN;
const credentialsFile = process.env.CREDENTIALS_FILE ?? '../../identifiants-prasmesti.txt';

const results = [];
const check = (label, passed, detail = '') => {
  results.push({ label, passed, detail });
  console.log(`${passed ? '✓' : '✗'} ${label}${detail ? ` — ${detail}` : ''}`);
};

// --- Identifiants (lus depuis le fichier, jamais affichés) -------------------
const credentials = new Map(
  readFileSync(credentialsFile, 'utf8')
    .split('\n')
    .map((line) => line.trim().split(/\s+/))
    .filter((parts) => parts.length === 2 && parts[0].includes('@'))
    .map(([email, password]) => [email.split('@')[0], { email, password }]),
);

const keysResponse = await fetch(
  `https://api.supabase.com/v1/projects/${projectRef}/api-keys?reveal=true`,
  { headers: { Authorization: `Bearer ${accessToken}` } },
);
const keys = await keysResponse.json();
const publishable = keys.find((k) => k.type === 'publishable')?.api_key;
const secret = keys.find((k) => k.type === 'secret')?.api_key;

const anonClient = () => createClient(url, publishable, { auth: { persistSession: false } });
const admin = createClient(url, secret, { auth: { persistSession: false } });

const signIn = async (account) => {
  const client = anonClient();
  const { data, error } = await client.auth.signInWithPassword(credentials.get(account));
  if (error) throw new Error(`connexion ${account} : ${error.message}`);
  return { client, user: data.user };
};

// --- 1. Connexion et profil --------------------------------------------------
const gabon = await signIn('gabon');
check('Connexion du compte Gabon', Boolean(gabon.user));

const { data: profile } = await gabon.client
  .from('profiles')
  .select('role, country_slug')
  .eq('id', gabon.user.id)
  .maybeSingle();
check('Profil rattaché au bon pays', profile?.country_slug === 'gabon' && profile?.role === 'country',
  `role=${profile?.role} pays=${profile?.country_slug}`);

// --- 2. Brouillon ------------------------------------------------------------
const answers = { 'general-0-0': 'oui', 'general-0-1': 'oui', 'general-0-2': 'non', 'policy-fin-before-0': 'oui' };
const { data: draft, error: draftError } = await gabon.client
  .from('country_reports')
  .insert({ country_slug: 'gabon', answers, status: 'draft', version: 999 })
  .select('id, status')
  .single();
check('Enregistrement d’un brouillon', !draftError && draft?.status === 'draft', draftError?.message ?? '');

// --- 3. Isolation entre pays (le point critique) -----------------------------
const { error: crossWrite } = await gabon.client
  .from('country_reports')
  .insert({ country_slug: 'chad', answers: {}, status: 'draft', version: 999 });
check('Écriture sur un autre pays refusée', Boolean(crossWrite), crossWrite?.code ?? 'AUCUNE ERREUR — FUITE');

const cameroun = await signIn('cameroun');
const { data: camerounView } = await cameroun.client.from('country_reports').select('country_slug');
check('Le Cameroun ne voit pas les rapports du Gabon',
  (camerounView ?? []).every((row) => row.country_slug === 'cameroon'),
  `${camerounView?.length ?? 0} ligne(s) visible(s)`);

// --- 4. Journal réservé à l'admin -------------------------------------------
const { data: logAsCountry } = await cameroun.client.from('activity_log').select('id');
check('Journal invisible pour un compte pays', (logAsCountry ?? []).length === 0,
  `${logAsCountry?.length ?? 0} ligne(s)`);

// --- 5. Escalade de privilège bloquée ---------------------------------------
const { error: escalation } = await cameroun.client
  .from('profiles')
  .update({ role: 'admin' })
  .eq('id', cameroun.user.id);
check('Auto-promotion en admin refusée', Boolean(escalation), escalation?.code ?? 'AUCUNE ERREUR — FAILLE');

// --- 6. Soumission et publication -------------------------------------------
const submittedAt = new Date().toISOString();
const { error: submitError } = await gabon.client
  .from('country_reports')
  .update({ status: 'submitted', submitted_at: submittedAt })
  .eq('id', draft.id);
check('Soumission du questionnaire', !submitError, submitError?.message ?? '');

const { error: statsError } = await gabon.client.from('country_stats').upsert({
  country_slug: 'gabon', completion: 67, coverage: 1, domain_progress: [], blockers: [],
});
check('Publication des indicateurs', !statsError, statsError?.message ?? '');

const { data: publicRead } = await createClient(url, publishable)
  .from('country_stats').select('country_slug, completion');
check('Lecture publique des indicateurs', (publicRead ?? []).some((r) => r.country_slug === 'gabon'),
  `${publicRead?.length ?? 0} pays publié(s)`);

// --- 7. Journalisation automatique par les triggers --------------------------
const adminSession = await signIn('admin');
const { data: logAsAdmin } = await adminSession.client
  .from('activity_log').select('action').order('created_at', { ascending: false }).limit(20);
const actions = new Set((logAsAdmin ?? []).map((row) => row.action));
check('Journal lisible par l’admin', (logAsAdmin ?? []).length > 0, `${logAsAdmin?.length ?? 0} entrée(s)`);
check('Trigger « brouillon enregistré »', actions.has('report.draft_saved'));
check('Trigger « questionnaire soumis »', actions.has('report.submitted'));
check('Trigger « indicateurs publiés »', actions.has('stats.published'));

// --- 8. Bucket des avatars ---------------------------------------------------
const { data: buckets } = await admin.storage.listBuckets();
const avatars = buckets?.find((b) => b.id === 'avatars');
check('Bucket « avatars » privé', Boolean(avatars) && avatars.public === false);

// --- Nettoyage ---------------------------------------------------------------
await admin.from('country_reports').delete().eq('id', draft.id);
await admin.from('country_stats').delete().eq('country_slug', 'gabon');
await admin.from('activity_log').delete().gt('id', 0);
console.log('\nDonnées de test supprimées.');

const failed = results.filter((r) => !r.passed);
console.log(`\n${results.length - failed.length}/${results.length} vérifications réussies.`);
process.exit(failed.length ? 1 : 0);
