import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CircleCheck, ListChecks, TriangleAlert } from 'lucide-react';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage } from '../../languageContext';
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

// Chefs-lieux de province : repères géographiques, sans indicateur associé.
const gabonPoints = [
  { name: 'Libreville', province: 'Estuaire', x: 102, y: 108, labelAnchor: 'start' as const },
  { name: 'Port-Gentil', province: 'Ogooué-Maritime', x: 78, y: 132, labelAnchor: 'start' as const },
  { name: 'Lambaréné', province: 'Moyen-Ogooué', x: 132, y: 145, labelAnchor: 'start' as const },
  { name: 'Oyem', province: 'Woleu-Ntem', x: 172, y: 54, labelAnchor: 'start' as const },
  { name: 'Mouila', province: 'Ngounié', x: 150, y: 188, labelAnchor: 'start' as const },
  { name: 'Tchibanga', province: 'Nyanga', x: 124, y: 232, labelAnchor: 'start' as const },
  { name: 'Makokou', province: 'Ogooué-Ivindo', x: 226, y: 96, labelAnchor: 'end' as const },
  { name: 'Koulamoutou', province: 'Ogooué-Lolo', x: 214, y: 162, labelAnchor: 'end' as const },
  { name: 'Franceville', province: 'Haut-Ogooué', x: 252, y: 218, labelAnchor: 'end' as const },
];

function ImplementationGabonStats() {
  const { translate, language } = useLanguage();
  const [isWikiOpen, setIsWikiOpen] = React.useState(false);
  const [wikiLoading, setWikiLoading] = React.useState(false);
  const [wikiError, setWikiError] = React.useState('');
  const [wikiSummary, setWikiSummary] = React.useState<WikiSummary | null>(null);

  // Indicateurs issus du questionnaire soumis par le Gabon lui-même.
  const [stats, setStats] = React.useState<CountryStats | null>(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    const load = () =>
      getCountryStats('gabon').then((data) => {
        if (!active) return;
        setStats(data);
        setLoaded(true);
      });
    void load();
    const unsubscribe = subscribeToCountryStats('gabon', () => void load());
    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  const domains = stats?.domainProgress ?? [];
  const declaredBlockers = (stats?.blockers ?? []).filter((item) => item.value > 0);

  // Dégradé du donut reconstruit à partir des proportions réelles des blocages.
  const donutGradient = (() => {
    let acc = 0;
    const stops = declaredBlockers.map((item, index) => {
      const start = acc;
      acc += item.value;
      const end = index === declaredBlockers.length - 1 ? 100 : acc;
      return `${item.color} ${start}% ${end}%`;
    });
    return `conic-gradient(${stops.join(', ')})`;
  })();

  const maxDomain = Math.max(...domains.map((item) => item.value), 1);
  const isFr = language === 'fr';
  const L = (o: { fr: string; en: string; es: string; pt: string }) => o[language];
  const copy = {
    title: L({ fr: 'Gabon - Statistiques de mise en œuvre', en: 'Gabon - Implementation Statistics', es: 'Gabón - Estadísticas de implementación', pt: 'Gabão - Estatísticas de implementação' }),
    subtitle: L({ fr: 'Aperçu basé sur le questionnaire pour le suivi CESA 26-35 et ODD4.', en: 'Questionnaire-driven snapshot for CESA 26-35 and SDG4 follow-up.', es: 'Resumen basado en el cuestionario para el seguimiento CESA 26-35 y ODS4.', pt: 'Resumo baseado no questionário para o acompanhamento CESA 26-35 e ODS4.' }),
    back: L({ fr: 'Retour à tous les États membres', en: 'Back to all member states', es: 'Volver a todos los Estados miembros', pt: 'Voltar a todos os Estados-membros' }),
    mapTitle: L({ fr: 'Carte structurelle de mise en œuvre du Gabon', en: 'Gabon implementation structure map', es: 'Mapa estructural de implementación de Gabón', pt: 'Mapa estrutural de implementação do Gabão' }),
    mapSub: L({ fr: 'Points focaux indicatifs issus de la couverture du questionnaire et des rapports terrain.', en: 'Indicative focal points from questionnaire coverage and field reporting.', es: 'Puntos focales indicativos derivados de la cobertura del cuestionario y de los informes de terreno.', pt: 'Pontos focais indicativos resultantes da cobertura do questionário e dos relatórios de terreno.' }),
    kpiCompletion: L({ fr: 'Taux global de mise en œuvre', en: 'Overall completion', es: 'Tasa global de implementación', pt: 'Taxa global de implementação' }),
    kpiCoverage: L({ fr: 'Couverture du questionnaire', en: 'Questionnaire coverage', es: 'Cobertura del cuestionario', pt: 'Cobertura do questionário' }),
    kpiBlockers: L({ fr: 'Types de blocages déclarés', en: 'Reported blocker types', es: 'Tipos de bloqueos declarados', pt: 'Tipos de bloqueios declarados' }),
    domains: L({ fr: 'Progrès par domaine', en: 'Progress by domain', es: 'Progreso por ámbito', pt: 'Progresso por domínio' }),
    blockers: L({ fr: 'Répartition des blocages', en: 'Blocker distribution', es: 'Distribución de los bloqueos', pt: 'Distribuição dos bloqueios' }),
    updatedOn: L({ fr: 'Données transmises le', en: 'Data submitted on', es: 'Datos transmitidos el', pt: 'Dados transmitidos em' }),
    pendingTitle: L({ fr: 'Données non encore transmises', en: 'Data not submitted yet', es: 'Datos aún no transmitidos', pt: 'Dados ainda não transmitidos' }),
    pendingBody: L({
      fr: "Les indicateurs seront publiés dès que le point focal aura soumis le questionnaire. Aucune valeur n'est estimée en attendant.",
      en: 'Indicators will be published as soon as the focal point submits the questionnaire. No value is estimated in the meantime.',
      es: 'Los indicadores se publicarán en cuanto el punto focal envíe el cuestionario. Ningún valor se estima mientras tanto.',
      pt: 'Os indicadores serão publicados assim que o ponto focal submeter o questionário. Nenhum valor é estimado entretanto.',
    }),
    openWiki: L({ fr: 'Ouvrir la page Wikipedia complete', en: 'Open full Wikipedia page', es: 'Abrir la página completa de Wikipedia', pt: 'Abrir a página completa da Wikipédia' }),
    modalTitle: L({ fr: 'Wikipedia : Gabon', en: 'Wikipedia: Gabon', es: 'Wikipedia: Gabón', pt: 'Wikipédia: Gabão' }),
    close: L({ fr: 'Fermer', en: 'Close', es: 'Cerrar', pt: 'Fechar' }),
    loading: L({ fr: "Chargement de l'aperçu...", en: 'Loading preview...', es: 'Cargando la vista previa...', pt: 'A carregar a pré-visualização...' }),
    loadError: L({ fr: "Impossible de charger l'aperçu Wikipedia pour le moment.", en: 'Unable to load Wikipedia preview right now.', es: 'No se puede cargar la vista previa de Wikipedia en este momento.', pt: 'Não é possível carregar a pré-visualização da Wikipédia neste momento.' }),
  };
  const wikiDomain = isFr ? 'fr.wikipedia.org' : 'en.wikipedia.org';
  const wikiUrl = wikiSummary?.content_urls?.desktop?.page ?? `https://${wikiDomain}/wiki/Gabon`;

  const openWikiPopup = () => {
    setIsWikiOpen(true);
    if (wikiSummary || wikiLoading) return;

    setWikiLoading(true);
    setWikiError('');
    fetch(`https://${wikiDomain}/api/rest_v1/page/summary/Gabon`, { signal: AbortSignal.timeout(8000) })
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
            <svg viewBox="0 0 320 300" className="impl-gabon-map-svg" role="img" aria-label="Gabon map with implementation points">
              <defs>
                <linearGradient id="gabonMapFill" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e5299" />
                  <stop offset="100%" stopColor="#2b7f5c" />
                </linearGradient>
              </defs>
              <path
                className="impl-gabon-map-shape"
                d="M112 28 L160 24 L204 38 L232 60 L252 94 L274 132 L266 168 L242 198 L252 234 L226 264 L190 278 L152 268 L132 246 L110 252 L88 236 L74 210 L62 172 L58 136 L64 112 L78 88 L92 66 Z"
                fill="url(#gabonMapFill)"
              />
              {gabonPoints.map((point) => {
                const labelX = point.labelAnchor === 'end' ? -10 : 10;
                return (
                  <g key={point.name} transform={`translate(${point.x} ${point.y})`}>
                    <circle className="impl-gabon-point" r="6">
                      <title>{`${point.name} (${point.province})`}</title>
                    </circle>
                    <text x={labelX} y={-4} textAnchor={point.labelAnchor}>{point.name}</text>
                    <text x={labelX} y={10} textAnchor={point.labelAnchor} className="impl-gabon-point-province">{point.province}</text>
                  </g>
                );
              })}
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
                <motion.article className="impl-gabon-panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
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
                <motion.article className="impl-gabon-panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
                  <h2>{copy.blockers}</h2>
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
        <div className="impl-gabon-modal-backdrop" role="presentation" onClick={() => setIsWikiOpen(false)}>
          <div className="impl-gabon-modal" role="dialog" aria-modal="true" aria-label="Gabon Wikipedia preview" onClick={(event) => event.stopPropagation()}>
            <div className="impl-gabon-modal-head">
              <h3>{copy.modalTitle}</h3>
              <button type="button" className="impl-gabon-modal-close" onClick={() => setIsWikiOpen(false)}>{copy.close}</button>
            </div>
            <div className="impl-gabon-modal-body">
              {wikiLoading && <p>{copy.loading}</p>}
              {!wikiLoading && wikiError && <p>{wikiError}</p>}
              {!wikiLoading && !wikiError && wikiSummary && (
                <>
                  {wikiSummary.thumbnail?.source && (
                    <img src={wikiSummary.thumbnail.source} alt={wikiSummary.title} className="impl-gabon-modal-image" />
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

export default ImplementationGabonStats;
