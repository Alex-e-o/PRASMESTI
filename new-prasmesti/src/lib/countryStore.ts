import { isSupabaseConfigured, supabase } from './supabase';
import { logActivityIfOffline } from './activityLog';
import type { Language } from '../languageContext';

// ── Types ──────────────────────────────────────────────────────────────────

export type DomainProgress = { label: string; value: number };
export type BlockerSlice = { label: string; value: number; color: string };

/** Indicateurs publiés d'un pays. L'absence de valeur (null) signifie
 *  « pas encore transmis » — un état distinct d'un score de zéro. */
export type CountryStats = {
  completion: number;
  /** Part des cases d'alignement effectivement renseignées : sans elle, un taux
   *  calculé sur trois réponses paraîtrait aussi solide qu'un questionnaire complet. */
  coverage: number;
  domainProgress: DomainProgress[];
  blockers: BlockerSlice[];
  updatedAt?: string;
};

/** Réponses du questionnaire : nom du champ → valeur. */
export type QuestionnaireAnswers = Record<string, string>;

export type ReportStatus = 'draft' | 'submitted';

export type CountryReport = {
  answers: QuestionnaireAnswers;
  status: ReportStatus;
  version: number;
  updatedAt?: string;
  submittedAt?: string | null;
};

export type Result<T> = { ok: true; data: T } | { ok: false; error: string };

// ── Règle de mapping : questionnaire → indicateurs ───────────────────────────
// Deux familles de champs, qui ne se mélangent pas :
//
//  · Les cases d'ALIGNEMENT (sections I, III, IV, V, VI) : « oui » = un progrès.
//    Elles seules alimentent le taux de complétion et les progrès par domaine.
//  · Les cases d'OBSTACLE (section II : politique / financier / administratif) :
//    « oui » = un obstacle déclaré. Les compter comme un progrès ferait monter le
//    score d'un pays à mesure qu'il signale ses difficultés — elles alimentent
//    donc uniquement la répartition des blocages.
//
// Le texte libre (notes, dispositions, métadonnées) n'entre dans aucun calcul.

const POSITIVE = new Set(['yes', 'oui', 'true', '1', 'done', 'ok', 'on']);
const PARTIAL = new Set(['partial', 'partiel', 'half', 'en-cours']);
const NEGATIVE = new Set(['no', 'non', 'false', '0']);

/** Préfixes réels des champs du questionnaire (cf. PrivateQuestionnairePage). */
const DOMAIN_BUCKETS: { prefix: string; label: string }[] = [
  { prefix: 'general-', label: 'Tools and systems' },
  { prefix: 'principes-sector-', label: 'CESA principles' },
  { prefix: 'piliers-sector-', label: 'CESA pillars' },
  { prefix: 'objectifs-sector-', label: 'Strategic objectives' },
  { prefix: 'cibles-sector-', label: 'SDG 4 targets' },
];

const BLOCKER_BUCKETS: { prefix: string; label: string; color: string }[] = [
  { prefix: 'policy-pol-', label: 'Policy', color: '#5a8ec8' },
  { prefix: 'policy-fin-', label: 'Financial', color: '#d4641a' },
  { prefix: 'policy-admin-', label: 'Administrative', color: '#1e5299' },
];

// Les libellés sont stockés en anglais dans la base et traduits à l'affichage.
const DOMAIN_LABELS: Record<string, Record<Language, string>> = {
  'Tools and systems': {
    fr: 'Outils et dispositifs', en: 'Tools and systems', es: 'Herramientas y dispositivos', pt: 'Ferramentas e dispositivos',
  },
  'CESA principles': {
    fr: 'Principes CESA', en: 'CESA principles', es: 'Principios CESA', pt: 'Princípios CESA',
  },
  'CESA pillars': {
    fr: 'Piliers CESA', en: 'CESA pillars', es: 'Pilares CESA', pt: 'Pilares CESA',
  },
  'Strategic objectives': {
    fr: 'Objectifs stratégiques', en: 'Strategic objectives', es: 'Objetivos estratégicos', pt: 'Objetivos estratégicos',
  },
  'SDG 4 targets': {
    fr: 'Cibles ODD 4', en: 'SDG 4 targets', es: 'Metas ODS 4', pt: 'Metas ODS 4',
  },
};

const BLOCKER_LABELS: Record<string, Record<Language, string>> = {
  Policy: { fr: 'Politique', en: 'Policy', es: 'Político', pt: 'Político' },
  Financial: { fr: 'Financier', en: 'Financial', es: 'Financiero', pt: 'Financeiro' },
  Administrative: { fr: 'Administratif', en: 'Administrative', es: 'Administrativo', pt: 'Administrativo' },
};

export const localizeDomainLabel = (label: string, language: Language): string =>
  DOMAIN_LABELS[label]?.[language] ?? label;

export const localizeBlockerLabel = (label: string, language: Language): string =>
  BLOCKER_LABELS[label]?.[language] ?? label;

const normalize = (value: string): string => value.trim().toLowerCase();

const score = (value: string): number => {
  const v = normalize(value);
  if (POSITIVE.has(v)) return 1;
  if (PARTIAL.has(v)) return 0.5;
  return 0;
};

const isDecision = (value: string): boolean => {
  const v = normalize(value);
  return POSITIVE.has(v) || PARTIAL.has(v) || NEGATIVE.has(v);
};

const isAlignmentField = (name: string): boolean =>
  DOMAIN_BUCKETS.some((bucket) => name.startsWith(bucket.prefix));

/** Nombre total de cases d'alignement du questionnaire, pour mesurer la couverture. */
const countAlignmentFields = (answers: QuestionnaireAnswers): number =>
  Object.keys(answers).filter(isAlignmentField).length;

/**
 * Dérive les indicateurs publics d'un pays à partir de ses réponses.
 * Renvoie null si aucune case de décision n'a été renseignée : mieux vaut
 * afficher « non transmis » qu'un 0 % qui se lirait comme un mauvais résultat.
 */
export function deriveStatsFromAnswers(answers: QuestionnaireAnswers): CountryStats | null {
  const alignment = Object.entries(answers).filter(
    ([name, value]) => isAlignmentField(name) && isDecision(value),
  );
  if (alignment.length === 0) return null;

  const positiveSum = alignment.reduce((acc, [, value]) => acc + score(value), 0);
  const completion = Math.round((positiveSum / alignment.length) * 100);

  const totalFields = countAlignmentFields(answers) || alignment.length;
  const coverage = Math.round((alignment.length / totalFields) * 100);

  // Progrès par domaine : seuls les domaines effectivement renseignés sont publiés.
  const domainProgress = DOMAIN_BUCKETS.map(({ prefix, label }) => {
    const bucket = alignment.filter(([name]) => name.startsWith(prefix));
    if (bucket.length === 0) return null;
    const avg = bucket.reduce((acc, [, value]) => acc + score(value), 0) / bucket.length;
    return { label, value: Math.round(avg * 100) };
  }).filter((item): item is DomainProgress => item !== null);

  // Blocages : un « oui » sur une colonne d'obstacle = obstacle déclaré.
  const counts = BLOCKER_BUCKETS.map(({ prefix, label, color }) => {
    const declared = Object.entries(answers).filter(
      ([name, value]) => name.startsWith(prefix) && score(value) > 0,
    ).length;
    return { label, color, declared };
  });
  const blockerTotal = counts.reduce((acc, item) => acc + item.declared, 0);
  const blockers: BlockerSlice[] = blockerTotal
    ? counts.map(({ label, color, declared }) => ({
        label,
        color,
        value: Math.round((declared / blockerTotal) * 100),
      }))
    : [];

  return { completion, coverage, domainProgress, blockers, updatedAt: new Date().toISOString() };
}

// ── Persistance ──────────────────────────────────────────────────────────────
// Une seule source de vérité à la fois : Supabase s'il est configuré, sinon le
// localStorage (mode démonstration). On n'écrit jamais dans les deux — une copie
// locale survivant à un rejet distant ferait croire à un enregistrement réussi.

const STATS_KEY = (slug: string) => `prasmesti-stats-${slug}`;
const REPORT_KEY = (slug: string) => `prasmesti-report-${slug}`;

const readLocal = <T,>(key: string): T | null => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
};

const writeLocal = (key: string, value: unknown) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota dépassé ou stockage désactivé : sans effet en mode démonstration */
  }
};

const failure = (context: string, error: { message?: string } | null): Result<never> => ({
  ok: false,
  error: error?.message ? `${context} : ${error.message}` : context,
});

type StatsRow = {
  completion: number | null;
  coverage: number | null;
  domain_progress: DomainProgress[] | null;
  blockers: BlockerSlice[] | null;
  updated_at: string | null;
};

const rowToStats = (row: StatsRow): CountryStats | null => {
  if (row.completion === null) return null;
  return {
    completion: row.completion,
    coverage: row.coverage ?? 100,
    domainProgress: row.domain_progress ?? [],
    blockers: row.blockers ?? [],
    updatedAt: row.updated_at ?? undefined,
  };
};

/** Indicateurs publiés d'un pays, ou null s'il n'a encore rien transmis. */
export async function getCountryStats(slug: string): Promise<CountryStats | null> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('country_stats')
      .select('completion, coverage, domain_progress, blockers, updated_at')
      .eq('country_slug', slug)
      .maybeSingle();
    if (error || !data) return null;
    return rowToStats(data as StatsRow);
  }
  return readLocal<CountryStats>(STATS_KEY(slug));
}

/**
 * Indicateurs de tous les pays ayant transmis quelque chose, indexés par slug.
 * Les pays absents du résultat n'ont rien transmis — c'est l'information utile.
 */
export async function listCountryStats(): Promise<Record<string, CountryStats>> {
  const result: Record<string, CountryStats> = {};

  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('country_stats')
      .select('country_slug, completion, coverage, domain_progress, blockers, updated_at');
    if (error || !data) return result;
    data.forEach((row) => {
      const stats = rowToStats(row as StatsRow);
      if (stats) result[row.country_slug as string] = stats;
    });
    return result;
  }

  // Mode démonstration : les indicateurs vivent sous une clé par pays.
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);
    if (!key?.startsWith('prasmesti-stats-')) continue;
    const stats = readLocal<CountryStats>(key);
    if (stats) result[key.replace('prasmesti-stats-', '')] = stats;
  }
  return result;
}

export type ReportSummary = {
  countrySlug: string;
  status: ReportStatus;
  updatedAt?: string;
  submittedAt?: string | null;
};

/**
 * État d'avancement de la collecte. Un compte pays n'y voit que sa propre ligne
 * (la RLS s'en charge) ; l'admin voit l'ensemble.
 */
export async function listReportSummaries(): Promise<ReportSummary[]> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('country_reports')
      .select('country_slug, status, updated_at, submitted_at')
      .order('updated_at', { ascending: false });
    if (error || !data) return [];

    // Une seule ligne par pays : la plus récente fait foi.
    const seen = new Set<string>();
    return data.reduce<ReportSummary[]>((acc, row) => {
      const slug = row.country_slug as string;
      if (seen.has(slug)) return acc;
      seen.add(slug);
      acc.push({
        countrySlug: slug,
        status: row.status as ReportStatus,
        updatedAt: (row.updated_at as string) ?? undefined,
        submittedAt: (row.submitted_at as string) ?? null,
      });
      return acc;
    }, []);
  }

  const summaries: ReportSummary[] = [];
  for (let index = 0; index < window.localStorage.length; index += 1) {
    const key = window.localStorage.key(index);
    if (!key?.startsWith('prasmesti-report-')) continue;
    const report = readLocal<CountryReport>(key);
    if (!report) continue;
    summaries.push({
      countrySlug: key.replace('prasmesti-report-', ''),
      status: report.status,
      updatedAt: report.updatedAt,
      submittedAt: report.submittedAt ?? null,
    });
  }
  return summaries;
}

/** Réveille les pages publiques dès qu'un pays publie de nouveaux indicateurs. */
export function subscribeToCountryStats(slug: string, onChange: () => void): () => void {
  const client = supabase;
  if (!isSupabaseConfigured || !client) return () => {};
  const channel = client
    .channel(`country_stats:${slug}`)
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'country_stats', filter: `country_slug=eq.${slug}` },
      onChange,
    )
    .subscribe();
  return () => {
    void client.removeChannel(channel);
  };
}

/**
 * Rapport de travail d'un pays : le brouillon en cours s'il existe, sinon la
 * dernière version soumise (qui sert alors de point de départ à la suivante).
 */
export async function getCountryReport(slug: string): Promise<CountryReport | null> {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from('country_reports')
      .select('answers, status, version, updated_at, submitted_at')
      .eq('country_slug', slug)
      .order('status', { ascending: true }) // 'draft' avant 'submitted'
      .order('version', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error || !data) return null;
    return {
      answers: (data.answers as QuestionnaireAnswers) ?? {},
      status: data.status as ReportStatus,
      version: data.version as number,
      updatedAt: data.updated_at ?? undefined,
      submittedAt: data.submitted_at ?? null,
    };
  }
  return readLocal<CountryReport>(REPORT_KEY(slug));
}

async function nextVersion(slug: string): Promise<number> {
  if (!supabase) return 1;
  const { data } = await supabase
    .from('country_reports')
    .select('version')
    .eq('country_slug', slug)
    .order('version', { ascending: false })
    .limit(1)
    .maybeSingle();
  return ((data?.version as number | undefined) ?? 0) + 1;
}

async function findDraftId(slug: string): Promise<string | null> {
  if (!supabase) return null;
  const { data } = await supabase
    .from('country_reports')
    .select('id')
    .eq('country_slug', slug)
    .eq('status', 'draft')
    .maybeSingle();
  return (data?.id as string | undefined) ?? null;
}

/** Enregistre en BROUILLON : rien n'est publié, les indicateurs ne bougent pas. */
export async function saveDraft(
  slug: string,
  answers: QuestionnaireAnswers,
): Promise<Result<CountryReport>> {
  if (isSupabaseConfigured && supabase) {
    const draftId = await findDraftId(slug);

    const query = draftId
      ? supabase.from('country_reports').update({ answers }).eq('id', draftId)
      : supabase
          .from('country_reports')
          .insert({ country_slug: slug, answers, status: 'draft', version: await nextVersion(slug) });

    const { data, error } = await query.select('version, updated_at').single();
    if (error) return failure("Le brouillon n'a pas pu être enregistré", error);

    return {
      ok: true,
      data: {
        answers,
        status: 'draft',
        version: data.version as number,
        updatedAt: (data.updated_at as string | null) ?? undefined,
        submittedAt: null,
      },
    };
  }

  const previous = readLocal<CountryReport>(REPORT_KEY(slug));
  const report: CountryReport = {
    answers,
    status: 'draft',
    version: previous?.version ?? 1,
    updatedAt: new Date().toISOString(),
    submittedAt: null,
  };
  writeLocal(REPORT_KEY(slug), report);
  logActivityIfOffline({
    action: 'report.draft_saved',
    countrySlug: slug,
    entity: `Questionnaire ${slug}`,
    status: 'pending',
  });
  return { ok: true, data: report };
}

/**
 * SOUMISSION : fige une version du rapport et publie les indicateurs dérivés
 * sur les pages publiques du pays.
 */
export async function submitReport(
  slug: string,
  answers: QuestionnaireAnswers,
): Promise<Result<CountryStats | null>> {
  const derived = deriveStatsFromAnswers(answers);
  const submittedAt = new Date().toISOString();

  if (isSupabaseConfigured && supabase) {
    const draftId = await findDraftId(slug);
    let reportId = draftId;

    if (draftId) {
      const { error } = await supabase
        .from('country_reports')
        .update({ answers, status: 'submitted', submitted_at: submittedAt })
        .eq('id', draftId);
      if (error) return failure("Le questionnaire n'a pas pu être soumis", error);
    } else {
      const version = await nextVersion(slug);
      const { data, error } = await supabase
        .from('country_reports')
        .insert({
          country_slug: slug,
          answers,
          status: 'submitted',
          version,
          submitted_at: submittedAt,
        })
        .select('id')
        .single();
      if (error) return failure("Le questionnaire n'a pas pu être soumis", error);
      reportId = data.id as string;
    }

    if (!derived) return { ok: true, data: null };

    const { error: statsError } = await supabase.from('country_stats').upsert({
      country_slug: slug,
      completion: derived.completion,
      coverage: derived.coverage,
      domain_progress: derived.domainProgress,
      blockers: derived.blockers,
      source_report_id: reportId,
      updated_at: submittedAt,
    });
    if (statsError) {
      return failure('Le questionnaire est enregistré, mais la publication des indicateurs a échoué', statsError);
    }
    return { ok: true, data: derived };
  }

  const previous = readLocal<CountryReport>(REPORT_KEY(slug));
  writeLocal(REPORT_KEY(slug), {
    answers,
    status: 'submitted',
    version: previous?.version ?? 1,
    updatedAt: submittedAt,
    submittedAt,
  });
  if (derived) writeLocal(STATS_KEY(slug), derived);
  logActivityIfOffline({
    action: 'report.submitted',
    countrySlug: slug,
    entity: `Questionnaire ${slug}`,
    status: 'done',
  });
  if (derived) {
    logActivityIfOffline({
      action: 'stats.published',
      countrySlug: slug,
      entity: `Indicateurs publics ${slug}`,
      status: 'done',
    });
  }
  return { ok: true, data: derived };
}
