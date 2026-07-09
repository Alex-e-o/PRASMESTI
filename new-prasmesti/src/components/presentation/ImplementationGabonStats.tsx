import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CircleCheck, Clock3, TrendingUp, TriangleAlert } from 'lucide-react';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage } from '../../languageContext';
import { localizeDomainLabel, localizeBlockerLabel } from '../../data/implementationCountries';
import { getCountryStatsOverride, type CountryStatsOverride } from '../../lib/countryStore';

// Valeurs de démonstration utilisées en repli tant que le questionnaire du pays
// n'a pas été renseigné (cf. getCountryStatsOverride('gabon')).
const monthlyCompletion = [38, 44, 49, 55, 61, 66, 70];
const domainProgress = [
  { label: 'Policy alignment', value: 82 },
  { label: 'Data reporting', value: 74 },
  { label: 'Teacher training', value: 63 },
  { label: 'Digital tools', value: 58 },
  { label: 'STI innovation', value: 47 },
];
const blockers = [
  { label: 'Financial', value: 34, color: '#d4641a' },
  { label: 'Administrative', value: 28, color: '#1e5299' },
  { label: 'Policy', value: 22, color: '#5a8ec8' },
  { label: 'Infrastructure', value: 16, color: '#9ad1ff' },
];

type WikiSummary = {
  title: string;
  extract: string;
  content_urls?: { desktop?: { page?: string } };
  thumbnail?: { source?: string };
};
const gabonPoints = [
  { name: 'Libreville', province: 'Estuaire', x: 102, y: 108, status: 'high', labelAnchor: 'start' as const },
  { name: 'Port-Gentil', province: 'Ogooué-Maritime', x: 78, y: 132, status: 'medium', labelAnchor: 'start' as const },
  { name: 'Lambaréné', province: 'Moyen-Ogooué', x: 132, y: 145, status: 'medium', labelAnchor: 'start' as const },
  { name: 'Oyem', province: 'Woleu-Ntem', x: 172, y: 54, status: 'high', labelAnchor: 'start' as const },
  { name: 'Mouila', province: 'Ngounié', x: 150, y: 188, status: 'low', labelAnchor: 'start' as const },
  { name: 'Tchibanga', province: 'Nyanga', x: 124, y: 232, status: 'low', labelAnchor: 'start' as const },
  { name: 'Makokou', province: 'Ogooué-Ivindo', x: 226, y: 96, status: 'high', labelAnchor: 'end' as const },
  { name: 'Koulamoutou', province: 'Ogooué-Lolo', x: 214, y: 162, status: 'medium', labelAnchor: 'end' as const },
  { name: 'Franceville', province: 'Haut-Ogooué', x: 252, y: 218, status: 'medium', labelAnchor: 'end' as const },
];

function ImplementationGabonStats() {
  const { translate, language } = useLanguage();
  const [isWikiOpen, setIsWikiOpen] = React.useState(false);
  const [wikiLoading, setWikiLoading] = React.useState(false);
  const [wikiError, setWikiError] = React.useState('');
  const [wikiSummary, setWikiSummary] = React.useState<WikiSummary | null>(null);

  // Indicateurs pilotés par le questionnaire privé du Gabon (repli sur le mock).
  const [override, setOverride] = React.useState<CountryStatsOverride | null>(null);
  React.useEffect(() => {
    let active = true;
    getCountryStatsOverride('gabon').then((data) => {
      if (active) setOverride(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const effDomain = override?.domainProgress?.length ? override.domainProgress : domainProgress;
  const effBlockers = override?.blockers?.length ? override.blockers : blockers;
  const completionValue = override?.completion ?? monthlyCompletion[monthlyCompletion.length - 1];
  const blockerCount = override ? effBlockers.filter((item) => item.value > 0).length : 4;
  // La courbe garde l'historique de démo et se termine sur la valeur du questionnaire.
  const trend = override ? [...monthlyCompletion.slice(0, -1), completionValue] : monthlyCompletion;

  // Dégradé du donut reconstruit à partir des proportions réelles des blocages.
  const donutGradient = (() => {
    let acc = 0;
    const stops = effBlockers.map((item, index) => {
      const start = acc;
      acc += item.value;
      const end = index === effBlockers.length - 1 ? 100 : acc;
      return `${item.color} ${start}% ${end}%`;
    });
    return `conic-gradient(${stops.join(', ')})`;
  })();

  const maxDomain = Math.max(...effDomain.map((item) => item.value), 1);
  const linePoints = trend
    .map((value, idx) => `${idx * 90},${280 - value * 2.1}`)
    .join(' ');
  const isFr = language === 'fr';
  const L = (o: { fr: string; en: string; es: string; pt: string }) => o[language];
  const copy = {
    title: L({ fr: 'Gabon - Statistiques de mise en œuvre', en: 'Gabon - Implementation Statistics', es: 'Gabón - Estadísticas de implementación', pt: 'Gabão - Estatísticas de implementação' }),
    subtitle: L({ fr: 'Aperçu basé sur le questionnaire pour le suivi CESA 26-35 et ODD4.', en: 'Questionnaire-driven snapshot for CESA 26-35 and SDG4 follow-up.', es: 'Resumen basado en el cuestionario para el seguimiento CESA 26-35 y ODS4.', pt: 'Resumo baseado no questionário para o acompanhamento CESA 26-35 e ODS4.' }),
    back: L({ fr: 'Retour à tous les États membres', en: 'Back to all member states', es: 'Volver a todos los Estados miembros', pt: 'Voltar a todos os Estados-membros' }),
    mapTitle: L({ fr: 'Carte structurelle de mise en œuvre du Gabon', en: 'Gabon implementation structure map', es: 'Mapa estructural de implementación de Gabón', pt: 'Mapa estrutural de implementação do Gabão' }),
    mapSub: L({ fr: 'Points focaux indicatifs issus de la couverture du questionnaire et des rapports terrain.', en: 'Indicative focal points from questionnaire coverage and field reporting.', es: 'Puntos focales indicativos derivados de la cobertura del cuestionario y de los informes de terreno.', pt: 'Pontos focais indicativos resultantes da cobertura do questionário e dos relatórios de terreno.' }),
    kpiCompletion: L({ fr: 'Taux global de mise en œuvre', en: 'Overall completion', es: 'Tasa global de implementación', pt: 'Taxa global de implementação' }),
    kpiProgress: L({ fr: 'Actions en cours', en: 'Actions in progress', es: 'Acciones en curso', pt: 'Ações em curso' }),
    kpiGrowth: L({ fr: 'Progression trimestrielle', en: 'Quarterly growth', es: 'Progresión trimestral', pt: 'Progressão trimestral' }),
    kpiBlockers: L({ fr: 'Blocages critiques', en: 'Critical blockers', es: 'Bloqueos críticos', pt: 'Bloqueios críticos' }),
    trend: L({ fr: 'Tendance de mise en œuvre (2026)', en: 'Implementation trend (2026)', es: 'Tendencia de implementación (2026)', pt: 'Tendência de implementação (2026)' }),
    domains: L({ fr: 'Progrès par domaine', en: 'Progress by domain', es: 'Progreso por ámbito', pt: 'Progresso por domínio' }),
    blockers: L({ fr: 'Répartition des blocages', en: 'Blocker distribution', es: 'Distribución de los bloqueos', pt: 'Distribuição dos bloqueios' }),
    actions: L({ fr: 'Actions prioritaires issues du questionnaire', en: 'Priority actions from questionnaire', es: 'Acciones prioritarias del cuestionario', pt: 'Ações prioritárias do questionário' }),
    owner: L({ fr: 'Responsable', en: 'Owner', es: 'Responsable', pt: 'Responsável' }),
    status: L({ fr: 'Statut', en: 'Status', es: 'Estado', pt: 'Estado' }),
    due: L({ fr: 'Échéance', en: 'Due', es: 'Plazo', pt: 'Prazo' }),
    openWiki: L({ fr: 'Ouvrir la page Wikipedia complete', en: 'Open full Wikipedia page', es: 'Abrir la página completa de Wikipedia', pt: 'Abrir a página completa da Wikipédia' }),
    modalTitle: L({ fr: 'Wikipedia : Gabon', en: 'Wikipedia: Gabon', es: 'Wikipedia: Gabón', pt: 'Wikipédia: Gabão' }),
    close: L({ fr: 'Fermer', en: 'Close', es: 'Cerrar', pt: 'Fechar' }),
    loading: L({ fr: "Chargement de l'aperçu...", en: 'Loading preview...', es: 'Cargando la vista previa...', pt: 'A carregar a pré-visualização...' }),
    loadError: L({ fr: "Impossible de charger l'aperçu Wikipedia pour le moment.", en: 'Unable to load Wikipedia preview right now.', es: 'No se puede cargar la vista previa de Wikipedia en este momento.', pt: 'Não é possível carregar a pré-visualização da Wikipédia neste momento.' }),
    statusInProgress: L({ fr: 'En cours', en: 'In progress', es: 'En curso', pt: 'Em curso' }),
    statusAtRisk: L({ fr: 'À risque', en: 'At risk', es: 'En riesgo', pt: 'Em risco' }),
    statusPlanned: L({ fr: 'Planifié', en: 'Planned', es: 'Planificado', pt: 'Planeado' }),
    action1: L({ fr: 'Déploiement de la formation continue des enseignants en zones rurales', en: 'Teacher CPD rollout in rural zones', es: 'Despliegue de la formación continua de docentes en zonas rurales', pt: 'Implantação da formação contínua de docentes em zonas rurais' }),
    action2: L({ fr: 'Harmonisation nationale des indicateurs ODD4', en: 'National SDG4 indicator harmonization', es: 'Armonización nacional de los indicadores ODS4', pt: 'Harmonização nacional dos indicadores ODS4' }),
    action3: L({ fr: 'Boîte à outils de reporting numérique des écoles', en: 'School digital reporting toolkit', es: 'Kit de herramientas de reporte digital escolar', pt: 'Conjunto de ferramentas de comunicação digital das escolas' }),
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
                    <circle className={`impl-gabon-point ${point.status}`} r="6">
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

        <div className="impl-gabon-kpi-grid">
          <article className="impl-gabon-kpi-card">
            <CircleCheck size={20} />
            <p>{copy.kpiCompletion}</p>
            <strong>{completionValue}%</strong>
          </article>
          <article className="impl-gabon-kpi-card">
            <Clock3 size={20} />
            <p>{copy.kpiProgress}</p>
            <strong>22</strong>
          </article>
          <article className="impl-gabon-kpi-card">
            <TrendingUp size={20} />
            <p>{copy.kpiGrowth}</p>
            <strong>+9 pts</strong>
          </article>
          <article className="impl-gabon-kpi-card">
            <TriangleAlert size={20} />
            <p>{copy.kpiBlockers}</p>
            <strong>{blockerCount}</strong>
          </article>
        </div>

        <div className="impl-gabon-main-grid">
          <motion.article className="impl-gabon-panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
            <h2>{copy.trend}</h2>
            <svg viewBox="0 0 540 300" className="impl-gabon-line-chart" role="img" aria-label="Implementation trend line">
              <line x1="0" y1="280" x2="540" y2="280" />
              <line x1="0" y1="220" x2="540" y2="220" />
              <line x1="0" y1="160" x2="540" y2="160" />
              <line x1="0" y1="100" x2="540" y2="100" />
              <polyline points={linePoints} />
              {trend.map((value, idx) => (
                <circle key={`${value}-${idx}`} cx={idx * 90} cy={280 - value * 2.1} r="5" />
              ))}
            </svg>
            <div className="impl-gabon-axis-labels">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
            </div>
          </motion.article>

          <motion.article className="impl-gabon-panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            <h2>{copy.domains}</h2>
            <div className="impl-gabon-bars">
              {effDomain.map((item) => (
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

          <motion.article className="impl-gabon-panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }}>
            <h2>{copy.blockers}</h2>
            <div className="impl-gabon-donut-wrap">
              <div className="impl-gabon-donut" style={override ? { background: donutGradient } : undefined} />
              <div className="impl-gabon-donut-legend">
                {effBlockers.map((item) => (
                  <span key={item.label}>
                    <i style={{ background: item.color }} />
                    {localizeBlockerLabel(item.label, language)} ({item.value}%)
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article className="impl-gabon-panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h2>{copy.actions}</h2>
            <table className="impl-gabon-table">
              <thead>
                <tr>
                  <th>{isFr ? 'Action' : 'Action'}</th>
                  <th>{copy.owner}</th>
                  <th>{copy.status}</th>
                  <th>{copy.due}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{copy.action1}</td>
                  <td>MENIC</td>
                  <td><span className="impl-tag is-progress">{copy.statusInProgress}</span></td>
                  <td>Sep 2026</td>
                </tr>
                <tr>
                  <td>{copy.action2}</td>
                  <td>{isFr ? 'Unite statistique' : 'Statistics Unit'}</td>
                  <td><span className="impl-tag is-risk">{copy.statusAtRisk}</span></td>
                  <td>Nov 2026</td>
                </tr>
                <tr>
                  <td>{copy.action3}</td>
                  <td>{isFr ? 'Point focal PRASMESTI' : 'PRASMESTI focal point'}</td>
                  <td><span className="impl-tag is-planned">{copy.statusPlanned}</span></td>
                  <td>Dec 2026</td>
                </tr>
              </tbody>
            </table>
          </motion.article>
        </div>
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
