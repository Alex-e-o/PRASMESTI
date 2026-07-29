import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CircleCheck, ListChecks, TriangleAlert } from 'lucide-react';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage, pick } from '../../languageContext';
import type { CountryConfig } from '../../data/implementationCountries';
import {
  getCountryStats,
  localizeBlockerLabel,
  localizeDomainLabel,
  subscribeToCountryStats,
  type CountryStats,
} from '../../lib/countryStore';

type WikiSummary = {
  title: string;
  extract: string;
  content_urls?: { desktop?: { page?: string } };
  thumbnail?: { source?: string };
};

type Props = { country: CountryConfig };

function ImplementationCountryStats({ country }: Props) {
  const { translate, language } = useLanguage();
  const [isWikiOpen, setIsWikiOpen] = React.useState(false);
  const [wikiLoading, setWikiLoading] = React.useState(false);
  const [wikiError, setWikiError] = React.useState('');
  const [wikiSummary, setWikiSummary] = React.useState<WikiSummary | null>(null);

  // Indicateurs pilotés par le questionnaire que ce pays a lui-même soumis.
  // Tant qu'il n'a rien transmis, la page l'annonce plutôt que d'afficher des
  // valeurs de remplissage : aucun chiffre n'est attribué à un État à sa place.
  const [stats, setStats] = React.useState<CountryStats | null>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    const load = () =>
      getCountryStats(country.slug).then((data) => {
        if (!active) return;
        setStats(data);
        setLoaded(true);
      });
    void load();
    // Une nouvelle soumission met la page à jour sans redéploiement.
    const unsubscribe = subscribeToCountryStats(country.slug, () => void load());
    return () => {
      active = false;
      unsubscribe();
    };
  }, [country.slug]);

  const isFr = language === 'fr';
  const L = (o: { fr: string; en: string; es: string; pt: string }) => o[language];
  const countryName = pick(country as unknown as Record<string, unknown>, 'name', language);
  const wikiTitle = isFr ? country.wikiTitleFr : country.wikiTitleEn;
  const wikiDomain = isFr ? 'fr.wikipedia.org' : 'en.wikipedia.org';
  const wikiUrl = wikiSummary?.content_urls?.desktop?.page
    ?? `https://${wikiDomain}/wiki/${encodeURIComponent(wikiTitle.replace(/\s+/g, '_'))}`;

  const domains = stats?.domainProgress ?? [];
  const declaredBlockers = (stats?.blockers ?? []).filter((item) => item.value > 0);
  const maxDomain = Math.max(...domains.map((item) => item.value), 1);

  const copy = {
    title: L({
      fr: `${countryName} - Statistiques de mise en œuvre`,
      en: `${countryName} - Implementation Statistics`,
      es: `${countryName} - Estadísticas de implementación`,
      pt: `${countryName} - Estatísticas de implementação`,
    }),
    subtitle: L({
      fr: 'Aperçu basé sur le questionnaire pour le suivi CESA 26-35 et ODD4.',
      en: 'Questionnaire-driven snapshot for CESA 26-35 and SDG4 follow-up.',
      es: 'Resumen basado en el cuestionario para el seguimiento CESA 26-35 y ODS4.',
      pt: 'Resumo baseado no questionário para o acompanhamento CESA 26-35 e ODS4.',
    }),
    back: L({ fr: 'Retour à tous les États membres', en: 'Back to all member states', es: 'Volver a todos los Estados miembros', pt: 'Voltar a todos os Estados-membros' }),
    mapTitle: L({
      fr: `Carte structurelle de mise en œuvre - ${countryName}`,
      en: `${countryName} implementation structure map`,
      es: `Mapa estructural de implementación - ${countryName}`,
      pt: `Mapa estrutural de implementação - ${countryName}`,
    }),
    mapSub: L({
      fr: 'Points focaux indicatifs issus de la couverture du questionnaire et des rapports terrain.',
      en: 'Indicative focal points from questionnaire coverage and field reporting.',
      es: 'Puntos focales indicativos derivados de la cobertura del cuestionario y de los informes de terreno.',
      pt: 'Pontos focais indicativos resultantes da cobertura do questionário e dos relatórios de terreno.',
    }),
    kpiCompletion: L({ fr: 'Taux global de mise en œuvre', en: 'Overall completion', es: 'Tasa global de implementación', pt: 'Taxa global de implementação' }),
    kpiCoverage: L({ fr: 'Couverture du questionnaire', en: 'Questionnaire coverage', es: 'Cobertura del cuestionario', pt: 'Cobertura do questionário' }),
    kpiBlockers: L({ fr: 'Types de blocages déclarés', en: 'Reported blocker types', es: 'Tipos de bloqueos declarados', pt: 'Tipos de bloqueios declarados' }),
    domains: L({ fr: 'Progrès par domaine', en: 'Progress by domain', es: 'Progreso por ámbito', pt: 'Progresso por domínio' }),
    blockersTitle: L({ fr: 'Répartition des blocages', en: 'Blocker distribution', es: 'Distribución de los bloqueos', pt: 'Distribuição dos bloqueios' }),
    updatedOn: L({ fr: 'Données transmises le', en: 'Data submitted on', es: 'Datos transmitidos el', pt: 'Dados transmitidos em' }),
    pendingTitle: L({
      fr: 'Données non encore transmises',
      en: 'Data not submitted yet',
      es: 'Datos aún no transmitidos',
      pt: 'Dados ainda não transmitidos',
    }),
    pendingBody: L({
      fr: "Les indicateurs de ce pays seront publiés dès que son point focal aura soumis le questionnaire. Aucune valeur n'est estimée en attendant.",
      en: 'This country’s indicators will be published as soon as its focal point submits the questionnaire. No value is estimated in the meantime.',
      es: 'Los indicadores de este país se publicarán en cuanto su punto focal envíe el cuestionario. Ningún valor se estima mientras tanto.',
      pt: 'Os indicadores deste país serão publicados assim que o seu ponto focal submeter o questionário. Nenhum valor é estimado entretanto.',
    }),
    openWiki: L({ fr: 'Ouvrir la page Wikipedia complete', en: 'Open full Wikipedia page', es: 'Abrir la página completa de Wikipedia', pt: 'Abrir a página completa da Wikipédia' }),
    modalTitle: L({ fr: `Wikipedia : ${countryName}`, en: `Wikipedia: ${countryName}`, es: `Wikipedia: ${countryName}`, pt: `Wikipédia: ${countryName}` }),
    close: L({ fr: 'Fermer', en: 'Close', es: 'Cerrar', pt: 'Fechar' }),
    loading: L({ fr: "Chargement de l'aperçu...", en: 'Loading preview...', es: 'Cargando la vista previa...', pt: 'A carregar a pré-visualização...' }),
    loadError: L({
      fr: "Impossible de charger l'aperçu Wikipedia pour le moment.",
      en: 'Unable to load Wikipedia preview right now.',
      es: 'No se puede cargar la vista previa de Wikipedia en este momento.',
      pt: 'Não é possível carregar a pré-visualização da Wikipédia neste momento.',
    }),
  };

  const gradientId = `countryMapFill-${country.slug}`;

  const blockerSum = declaredBlockers.reduce((acc, b) => acc + b.value, 0) || 1;
  const donutGradient = (() => {
    let start = 0;
    const stops: string[] = [];
    declaredBlockers.forEach((b) => {
      const end = start + (b.value / blockerSum) * 360;
      stops.push(`${b.color} ${start}deg ${end}deg`);
      start = end;
    });
    return `conic-gradient(${stops.join(', ')})`;
  })();

  const openWikiPopup = () => {
    setIsWikiOpen(true);
    if (wikiSummary || wikiLoading) return;

    setWikiLoading(true);
    setWikiError('');
    fetch(`https://${wikiDomain}/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle.replace(/\s+/g, '_'))}`, {
      signal: AbortSignal.timeout(8000),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load Wikipedia summary');
        return response.json();
      })
      .then((data: WikiSummary) => {
        setWikiSummary(data);
      })
      .catch(() => {
        setWikiError(copy.loadError);
      })
      .finally(() => {
        setWikiLoading(false);
      });
  };

  return (
    <section className="pres-page impl-gabon-page">
      <PresSubPageHeader
        currentLabel={translate('navImplementation') as string}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="site-container impl-gabon-shell">
        <Link to="/presentation/implementation" className="impl-gabon-backlink">
          <ArrowLeft size={16} />
          <span>{copy.back}</span>
        </Link>

        <article className="impl-gabon-map-panel">
          <div className="impl-gabon-map-head">
            <h2>{copy.mapTitle}</h2>
            <p>{copy.mapSub}</p>
          </div>
          <button type="button" className="impl-gabon-map-wrap" onClick={openWikiPopup}>
            <svg
              viewBox="0 0 320 300"
              className="impl-gabon-map-svg"
              role="img"
              aria-label={`${countryName} map with implementation points`}
            >
              <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={country.mapGradientFrom} />
                  <stop offset="100%" stopColor={country.mapGradientTo} />
                </linearGradient>
              </defs>
              <path className="impl-gabon-map-shape" d={country.mapPath} fill={`url(#${gradientId})`} />
              {country.cities.map((point) => (
                <g key={point.name} transform={`translate(${point.x} ${point.y})`}>
                  <circle className="impl-gabon-point" r="6" />
                  <text x="10" y="4">{point.name}</text>
                </g>
              ))}
            </svg>
          </button>
        </article>

        {loaded && !stats ? (
          <div className="impl-pending-card">
            <h2>{copy.pendingTitle}</h2>
            <p>{copy.pendingBody}</p>
          </div>
        ) : null}

        {stats ? (
          <>
            <div className="impl-gabon-kpi-grid">
              <article className="impl-gabon-kpi-card">
                <CircleCheck size={20} />
                <p>{copy.kpiCompletion}</p>
                <strong>{stats.completion}%</strong>
              </article>
              <article className="impl-gabon-kpi-card">
                <ListChecks size={20} />
                <p>{copy.kpiCoverage}</p>
                <strong>{stats.coverage}%</strong>
              </article>
              <article className="impl-gabon-kpi-card">
                <TriangleAlert size={20} />
                <p>{copy.kpiBlockers}</p>
                <strong>{declaredBlockers.length}</strong>
              </article>
            </div>

            {stats.updatedAt ? (
              <p className="impl-updated-note">
                {copy.updatedOn} {new Date(stats.updatedAt).toLocaleDateString(language)}
              </p>
            ) : null}

            <div className="impl-gabon-main-grid">
              {domains.length ? (
                <motion.article
                  className="impl-gabon-panel"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h2>{copy.domains}</h2>
                  <div className="impl-gabon-bars">
                    {domains.map((item) => (
                      <div key={item.label} className="impl-gabon-bar-row">
                        <div className="impl-gabon-bar-copy">
                          <span>{localizeDomainLabel(item.label, language)}</span>
                          <strong>{item.value}%</strong>
                        </div>
                        <div className="impl-gabon-bar-track">
                          <span style={{ width: `${(item.value / maxDomain) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.article>
              ) : null}

              {declaredBlockers.length ? (
                <motion.article
                  className="impl-gabon-panel"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                >
                  <h2>{copy.blockersTitle}</h2>
                  <div className="impl-gabon-donut-wrap">
                    <div className="impl-gabon-donut" style={{ background: donutGradient }} />
                    <div className="impl-gabon-donut-legend">
                      {declaredBlockers.map((item) => (
                        <span key={item.label}>
                          <i style={{ background: item.color }} />
                          {localizeBlockerLabel(item.label, language)} ({item.value}%)
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ) : null}
            </div>
          </>
        ) : null}
      </div>

      {isWikiOpen && (
        <div
          className="impl-gabon-modal-backdrop"
          role="presentation"
          onClick={() => setIsWikiOpen(false)}
        >
          <div
            className="impl-gabon-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${countryName} Wikipedia preview`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="impl-gabon-modal-head">
              <h3>{copy.modalTitle}</h3>
              <button
                type="button"
                className="impl-gabon-modal-close"
                onClick={() => setIsWikiOpen(false)}
              >
                {copy.close}
              </button>
            </div>
            <div className="impl-gabon-modal-body">
              {wikiLoading && <p>{copy.loading}</p>}
              {!wikiLoading && wikiError && <p>{wikiError}</p>}
              {!wikiLoading && !wikiError && wikiSummary && (
                <>
                  {wikiSummary.thumbnail?.source && (
                    <img
                      src={wikiSummary.thumbnail.source}
                      alt={wikiSummary.title}
                      className="impl-gabon-modal-image"
                    />
                  )}
                  <p>{wikiSummary.extract}</p>
                </>
              )}
              <a href={wikiUrl} target="_blank" rel="noreferrer" className="impl-gabon-modal-link">
                {copy.openWiki}
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ImplementationCountryStats;
