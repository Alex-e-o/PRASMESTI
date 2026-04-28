import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CircleCheck, Clock3, TrendingUp, TriangleAlert } from 'lucide-react';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage } from '../../languageContext';

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
  { name: 'Libreville', x: 102, y: 108, status: 'high' },
  { name: 'Port-Gentil', x: 78, y: 132, status: 'medium' },
  { name: 'Franceville', x: 258, y: 220, status: 'medium' },
  { name: 'Oyem', x: 172, y: 54, status: 'high' },
  { name: 'Mouila', x: 150, y: 186, status: 'low' },
];

function ImplementationGabonStats() {
  const { translate, language } = useLanguage();
  const [isWikiOpen, setIsWikiOpen] = React.useState(false);
  const [wikiLoading, setWikiLoading] = React.useState(false);
  const [wikiError, setWikiError] = React.useState('');
  const [wikiSummary, setWikiSummary] = React.useState<WikiSummary | null>(null);
  const maxDomain = Math.max(...domainProgress.map((item) => item.value));
  const linePoints = monthlyCompletion
    .map((value, idx) => `${idx * 90},${280 - value * 2.1}`)
    .join(' ');
  const isFr = language === 'fr';
  const copy = {
    title: isFr ? 'Gabon - Maquette des statistiques de mise en oeuvre' : 'Gabon - Implementation Statistics Mockup',
    subtitle: isFr ? "Apercu base sur le questionnaire pour le suivi CESA 16-25 et ODD4." : 'Questionnaire-driven snapshot for CESA 16-25 and SDG4 follow-up.',
    back: isFr ? 'Retour a tous les Etats membres' : 'Back to all member states',
    mapTitle: isFr ? 'Carte structurelle de mise en oeuvre du Gabon' : 'Gabon implementation structure map',
    mapSub: isFr ? 'Points focaux indicatifs issus de la couverture du questionnaire et des rapports terrain.' : 'Indicative focal points from questionnaire coverage and field reporting.',
    kpiCompletion: isFr ? 'Taux global de mise en oeuvre' : 'Overall completion',
    kpiProgress: isFr ? 'Actions en cours' : 'Actions in progress',
    kpiGrowth: isFr ? 'Progression trimestrielle' : 'Quarterly growth',
    kpiBlockers: isFr ? 'Blocages critiques' : 'Critical blockers',
    trend: isFr ? 'Tendance de mise en oeuvre (2026)' : 'Implementation trend (2026)',
    domains: isFr ? 'Progres par domaine' : 'Progress by domain',
    blockers: isFr ? 'Repartition des blocages' : 'Blocker distribution',
    actions: isFr ? 'Actions prioritaires issues du questionnaire' : 'Priority actions from questionnaire',
    owner: isFr ? 'Responsable' : 'Owner',
    status: isFr ? 'Statut' : 'Status',
    due: isFr ? 'Echeance' : 'Due',
    openWiki: isFr ? 'Ouvrir la page Wikipedia complete' : 'Open full Wikipedia page',
    modalTitle: isFr ? 'Wikipedia : Gabon' : 'Wikipedia: Gabon',
    close: isFr ? 'Fermer' : 'Close',
    loading: isFr ? 'Chargement de l\'apercu...' : 'Loading preview...',
    loadError: isFr ? 'Impossible de charger l\'apercu Wikipedia pour le moment.' : 'Unable to load Wikipedia preview right now.',
    statusInProgress: isFr ? 'En cours' : 'In progress',
    statusAtRisk: isFr ? 'A risque' : 'At risk',
    statusPlanned: isFr ? 'Planifie' : 'Planned',
    action1: isFr ? 'Deploiement de la formation continue des enseignants en zones rurales' : 'Teacher CPD rollout in rural zones',
    action2: isFr ? 'Harmonisation nationale des indicateurs ODD4' : 'National SDG4 indicator harmonization',
    action3: isFr ? 'Boite a outils de reporting numerique des ecoles' : 'School digital reporting toolkit',
  };
  const wikiDomain = isFr ? 'fr.wikipedia.org' : 'en.wikipedia.org';
  const wikiUrl = wikiSummary?.content_urls?.desktop?.page ?? `https://${wikiDomain}/wiki/Gabon`;

  const openWikiPopup = () => {
    setIsWikiOpen(true);
    if (wikiSummary || wikiLoading) return;

    setWikiLoading(true);
    setWikiError('');
    fetch(`https://${wikiDomain}/api/rest_v1/page/summary/Gabon`)
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
              {gabonPoints.map((point) => (
                <g key={point.name} transform={`translate(${point.x} ${point.y})`}>
                  <circle className={`impl-gabon-point ${point.status}`} r="6" />
                  <text x="10" y="4">{point.name}</text>
                </g>
              ))}
            </svg>
          </button>
        </article>

        <div className="impl-gabon-kpi-grid">
          <article className="impl-gabon-kpi-card">
            <CircleCheck size={20} />
            <p>{copy.kpiCompletion}</p>
            <strong>70%</strong>
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
            <strong>4</strong>
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
              {monthlyCompletion.map((value, idx) => (
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
              {domainProgress.map((item) => (
                <div key={item.label} className="impl-gabon-bar-row">
                  <div className="impl-gabon-bar-copy">
                    <span>{item.label}</span>
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
              <div className="impl-gabon-donut" />
              <div className="impl-gabon-donut-legend">
                {blockers.map((item) => (
                  <span key={item.label}>
                    <i style={{ background: item.color }} />
                    {item.label} ({item.value}%)
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
