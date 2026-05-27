import { isSupabaseConfigured, supabase } from './supabase';

// ── Types ──────────────────────────────────────────────────────────────────

export type DomainProgress = { label: string; value: number };
export type BlockerSlice = { label: string; value: number; color: string };

/** Sous-ensemble des stats d'un pays qui peut être dérivé/édité depuis l'espace privé. */
export type CountryStatsOverride = {
  completion?: number;
  domainProgress?: DomainProgress[];
  blockers?: BlockerSlice[];
  updatedAt?: string;
};

/** Réponses du questionnaire : nom du champ → valeur. */
export type QuestionnaireAnswers = Record<string, string>;

// ── Règle de mapping par défaut : questionnaire → indicateurs ────────────────
// Réglable. Logique retenue (validée) :
//  - Taux de complétion = % de cases « oui » parmi les cases répondues.
//  - Blocages = comptage des colonnes « obstacles » (politique / financier / administratif),
//    le reste étant rangé en « infrastructure ».
//  - Progrès par domaine = moyenne (en %) des réponses regroupées par préfixe de section.

const POSITIVE = new Set(['yes', 'oui', 'true', '1', 'done', 'ok', 'on']);
const PARTIAL = new Set(['partial', 'partiel', 'half', 'en-cours']);
const NEGATIVE = new Set(['no', 'non', 'false', '0']);

// Les clés ci-dessous correspondent aux préfixes des noms de champs du
// questionnaire (cf. PrivateQuestionnairePage) afin que chaque domaine reflète
// une section réelle. Une section sans correspondance retombe sur la complétion.
const DOMAIN_BUCKETS: { key: string; label: string }[] = [
  { key: 'policy', label: 'Policy alignment' },
  { key: 'general', label: 'Data reporting' },
  { key: 'piliers', label: 'Teacher training' },
  { key: 'objectifs', label: 'Digital tools' },
  { key: 'cibles', label: 'STI innovation' },
];

const BLOCKER_COLORS: Record<string, string> = {
  Financial: '#d4641a',
  Administrative: '#1e5299',
  Policy: '#5a8ec8',
  Infrastructure: '#9ad1ff',
};

const normalize = (value: string): string => value.trim().toLowerCase();

const score = (value: string): number => {
  const v = normalize(value);
  if (POSITIVE.has(v)) return 1;
  if (PARTIAL.has(v)) return 0.5;
  return 0;
};

/** Une « case de décision » : seul ce vocabulaire alimente les indicateurs (le
 *  texte libre — notes, métadonnées — est ignoré pour ne pas fausser les calculs). */
const isDecision = (value: string): boolean => {
  const v = normalize(value);
  return POSITIVE.has(v) || PARTIAL.has(v) || NEGATIVE.has(v);
};

export function deriveStatsFromAnswers(answers: QuestionnaireAnswers): CountryStatsOverride {
  // On ne tient compte que des cases de décision (oui / non / partiel) ;
  // les champs libres et métadonnées sont écartés du calcul.
  const entries = Object.entries(answers).filter(([, v]) => isDecision(v));
  const total = entries.length || 1;

  // Complétion globale
  const positiveSum = entries.reduce((acc, [, v]) => acc + score(v), 0);
  const completion = Math.round((positiveSum / total) * 100);

  // Progrès par domaine (moyenne par bucket de préfixe)
  const domainProgress: DomainProgress[] = DOMAIN_BUCKETS.map(({ key, label }) => {
    const bucket = entries.filter(([name]) => name.toLowerCase().includes(key));
    if (bucket.length === 0) return { label, value: completion };
    const avg = bucket.reduce((acc, [, v]) => acc + score(v), 0) / bucket.length;
    return { label, value: Math.round(avg * 100) };
  });

  // Blocages : on compte les colonnes d'obstacles renseignées comme bloquantes
  const counts: Record<string, number> = { Financial: 0, Administrative: 0, Policy: 0, Infrastructure: 0 };
  entries.forEach(([name, v]) => {
    if (score(v) >= 1) return; // pas un blocage si "oui"
    const n = name.toLowerCase();
    if (n.includes('fin')) counts.Financial += 1;
    else if (n.includes('admin')) counts.Administrative += 1;
    else if (n.includes('pol')) counts.Policy += 1;
    else counts.Infrastructure += 1;
  });
  const blockerTotal = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
  const blockers: BlockerSlice[] = Object.entries(counts).map(([label, n]) => ({
    label,
    value: Math.round((n / blockerTotal) * 100),
    color: BLOCKER_COLORS[label],
  }));

  return { completion, domainProgress, blockers, updatedAt: new Date().toISOString() };
}

// ── Persistance : Supabase si configuré, sinon overlay localStorage ──────────

const STATS_KEY = (slug: string) => `prasmesti-stats-${slug}`;
const ANSWERS_KEY = (slug: string) => `prasmesti-answers-${slug}`;

const readLocal = <T,>(key: string): T | null => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
};

const writeLocal = (key: string, value: unknown) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

/** Récupère l'override de stats pour un pays (Supabase > localStorage > null). */
export async function getCountryStatsOverride(slug: string): Promise<CountryStatsOverride | null> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('country_stats')
      .select('completion, domain_progress, blockers, updated_at')
      .eq('country_slug', slug)
      .maybeSingle();
    if (!error && data) {
      return {
        completion: data.completion ?? undefined,
        domainProgress: (data.domain_progress as DomainProgress[]) ?? undefined,
        blockers: (data.blockers as BlockerSlice[]) ?? undefined,
        updatedAt: data.updated_at ?? undefined,
      };
    }
  }
  return readLocal<CountryStatsOverride>(STATS_KEY(slug));
}

export async function saveCountryStats(slug: string, stats: CountryStatsOverride): Promise<void> {
  const payload = { ...stats, updatedAt: new Date().toISOString() };
  if (isSupabaseConfigured && supabase) {
    await supabase.from('country_stats').upsert({
      country_slug: slug,
      completion: payload.completion,
      domain_progress: payload.domainProgress,
      blockers: payload.blockers,
      updated_at: payload.updatedAt,
    });
  }
  writeLocal(STATS_KEY(slug), payload);
}

export async function getQuestionnaire(slug: string): Promise<QuestionnaireAnswers | null> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('questionnaire_submissions')
      .select('answers')
      .eq('country_slug', slug)
      .maybeSingle();
    if (!error && data) return (data.answers as QuestionnaireAnswers) ?? null;
  }
  return readLocal<QuestionnaireAnswers>(ANSWERS_KEY(slug));
}

/** Enregistre les réponses ET recalcule + enregistre les stats dérivées. */
export async function saveQuestionnaire(slug: string, answers: QuestionnaireAnswers): Promise<CountryStatsOverride> {
  const derived = deriveStatsFromAnswers(answers);
  if (isSupabaseConfigured && supabase) {
    await supabase.from('questionnaire_submissions').upsert({
      country_slug: slug,
      answers,
      submitted_at: new Date().toISOString(),
    });
  }
  writeLocal(ANSWERS_KEY(slug), answers);
  await saveCountryStats(slug, derived);
  return derived;
}
