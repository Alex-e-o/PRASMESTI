import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CircleCheck, Clock3, TrendingUp, TriangleAlert } from 'lucide-react';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage, pick } from '../../languageContext';
import type { CountryConfig } from '../../data/implementationCountries';
import { localizeDomainLabel, localizeBlockerLabel } from '../../data/implementationCountries';

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

  const isFr = language === 'fr';
  const L = (o: { fr: string; en: string; es: string; pt: string }) => o[language];
  const countryName = pick(country as unknown as Record<string, unknown>, 'name', language);
  const wikiTitle = isFr ? country.wikiTitleFr : country.wikiTitleEn;
  const wikiDomain = isFr ? 'fr.wikipedia.org' : 'en.wikipedia.org';
  const wikiUrl = wikiSummary?.content_urls?.desktop?.page
    ?? `https://${wikiDomain}/wiki/${encodeURIComponent(wikiTitle.replace(/\s+/g, '_'))}`;

  const maxDomain = Math.max(...country.domainProgress.map((item) => item.value));
  const linePoints = country.monthlyCompletion
    .map((value, idx) => `${idx * 90},${280 - value * 2.1}`)
    .join(' ');

  const copy = {
    title: L({
      fr: `${countryName} - Statistiques de mise en oeuvre`,
      en: `${countryName} - Implementation Statistics`,
      es: `${countryName} - Estadísticas de implementación`,
      pt: `${countryName} - Estatísticas de implementação`,
    }),
    subtitle: L({
      fr: 'Apercu base sur le questionnaire pour le suivi CESA 26-35 et ODD4.',
      en: 'Questionnaire-driven snapshot for CESA 26-35 and SDG4 follow-up.',
      es: 'Resumen basado en el cuestionario para el seguimiento CESA 26-35 y ODS4.',
      pt: 'Resumo baseado no questionário para o acompanhamento CESA 26-35 e ODS4.',
    }),
    back: L({ fr: 'Retour a tous les Etats membres', en: 'Back to all member states', es: 'Volver a todos los Estados miembros', pt: 'Voltar a todos os Estados-membros' }),
    mapTitle: L({
      fr: `Carte structurelle de mise en oeuvre - ${countryName}`,
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
    kpiCompletion: L({ fr: 'Taux global de mise en oeuvre', en: 'Overall completion', es: 'Tasa global de implementación', pt: 'Taxa global de implementação' }),
    kpiProgress: L({ fr: 'Actions en cours', en: 'Actions in progress', es: 'Acciones en curso', pt: 'Ações em curso' }),
    kpiGrowth: L({ fr: 'Progression trimestrielle', en: 'Quarterly growth', es: 'Progresión trimestral', pt: 'Progressão trimestral' }),
    kpiBlockers: L({ fr: 'Blocages critiques', en: 'Critical blockers', es: 'Bloqueos críticos', pt: 'Bloqueios críticos' }),
    trend: L({ fr: 'Tendance de mise en oeuvre (2026)', en: 'Implementation trend (2026)', es: 'Tendencia de implementación (2026)', pt: 'Tendência de implementação (2026)' }),
    domains: L({ fr: 'Progres par domaine', en: 'Progress by domain', es: 'Progreso por ámbito', pt: 'Progresso por domínio' }),
    blockersTitle: L({ fr: 'Repartition des blocages', en: 'Blocker distribution', es: 'Distribución de los bloqueos', pt: 'Distribuição dos bloqueios' }),
    actions: L({ fr: 'Actions prioritaires issues du questionnaire', en: 'Priority actions from questionnaire', es: 'Acciones prioritarias del cuestionario', pt: 'Ações prioritárias do questionário' }),
    actionCol: L({ fr: 'Action', en: 'Action', es: 'Acción', pt: 'Ação' }),
    owner: L({ fr: 'Responsable', en: 'Owner', es: 'Responsable', pt: 'Responsável' }),
    status: L({ fr: 'Statut', en: 'Status', es: 'Estado', pt: 'Estado' }),
    due: L({ fr: 'Echeance', en: 'Due', es: 'Plazo', pt: 'Prazo' }),
    openWiki: L({ fr: 'Ouvrir la page Wikipedia complete', en: 'Open full Wikipedia page', es: 'Abrir la página completa de Wikipedia', pt: 'Abrir a página completa da Wikipédia' }),
    modalTitle: L({ fr: `Wikipedia : ${countryName}`, en: `Wikipedia: ${countryName}`, es: `Wikipedia: ${countryName}`, pt: `Wikipédia: ${countryName}` }),
    close: L({ fr: 'Fermer', en: 'Close', es: 'Cerrar', pt: 'Fechar' }),
    loading: L({ fr: "Chargement de l'apercu...", en: 'Loading preview...', es: 'Cargando la vista previa...', pt: 'A carregar a pré-visualização...' }),
    loadError: L({
      fr: "Impossible de charger l'apercu Wikipedia pour le moment.",
      en: 'Unable to load Wikipedia preview right now.',
      es: 'No se puede cargar la vista previa de Wikipedia en este momento.',
      pt: 'Não é possível carregar a pré-visualização da Wikipédia neste momento.',
    }),
    statusInProgress: L({ fr: 'En cours', en: 'In progress', es: 'En curso', pt: 'Em curso' }),
    statusAtRisk: L({ fr: 'A risque', en: 'At risk', es: 'En riesgo', pt: 'Em risco' }),
    statusPlanned: L({ fr: 'Planifie', en: 'Planned', es: 'Planificado', pt: 'Planeado' }),
  };

  const statusLabel = (status: 'progress' | 'risk' | 'planned') =>
    status === 'progress'
      ? copy.statusInProgress
      : status === 'risk'
      ? copy.statusAtRisk
      : copy.statusPlanned;

  const statusClass = (status: 'progress' | 'risk' | 'planned') =>
    status === 'progress' ? 'is-progress' : status === 'risk' ? 'is-risk' : 'is-planned';

  const gradientId = `countryMapFill-${country.slug}`;

  const blockerSum = country.blockers.reduce((acc, b) => acc + b.value, 0) || 1;
  const donutGradient = (() => {
    let start = 0;
    const stops: string[] = [];
    country.blockers.forEach((b) => {
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
    fetch(`https://${wikiDomain}/api/rest_v1/page/summary/${encodeURIComponent(wikiTitle.replace(/\s+/g, '_'))}`)
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
            <strong>{country.kpis.completion}%</strong>
          </article>
          <article className="impl-gabon-kpi-card">
            <Clock3 size={20} />
            <p>{copy.kpiProgress}</p>
            <strong>{country.kpis.inProgress}</strong>
          </article>
          <article className="impl-gabon-kpi-card">
            <TrendingUp size={20} />
            <p>{copy.kpiGrowth}</p>
            <strong>+{country.kpis.growth} pts</strong>
          </article>
          <article className="impl-gabon-kpi-card">
            <TriangleAlert size={20} />
            <p>{copy.kpiBlockers}</p>
            <strong>{country.kpis.blockers}</strong>
          </article>
        </div>

        <div className="impl-gabon-main-grid">
          <motion.article
            className="impl-gabon-panel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2>{copy.trend}</h2>
            <svg
              viewBox="0 0 540 300"
              className="impl-gabon-line-chart"
              role="img"
              aria-label="Implementation trend line"
            >
              <line x1="0" y1="280" x2="540" y2="280" />
              <line x1="0" y1="220" x2="540" y2="220" />
              <line x1="0" y1="160" x2="540" y2="160" />
              <line x1="0" y1="100" x2="540" y2="100" />
              <polyline points={linePoints} />
              {country.monthlyCompletion.map((value, idx) => (
                <circle key={`${value}-${idx}`} cx={idx * 90} cy={280 - value * 2.1} r="5" />
              ))}
            </svg>
            <div className="impl-gabon-axis-labels">
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
            </div>
          </motion.article>

          <motion.article
            className="impl-gabon-panel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            <h2>{copy.domains}</h2>
            <div className="impl-gabon-bars">
              {country.domainProgress.map((item) => (
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

          <motion.article
            className="impl-gabon-panel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14 }}
          >
            <h2>{copy.blockersTitle}</h2>
            <div className="impl-gabon-donut-wrap">
              <div className="impl-gabon-donut" style={{ background: donutGradient }} />
              <div className="impl-gabon-donut-legend">
                {country.blockers.map((item) => (
                  <span key={item.label}>
                    <i style={{ background: item.color }} />
                    {localizeBlockerLabel(item.label, language)} ({item.value}%)
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            className="impl-gabon-panel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2>{copy.actions}</h2>
            <table className="impl-gabon-table">
              <thead>
                <tr>
                  <th>{copy.actionCol}</th>
                  <th>{copy.owner}</th>
                  <th>{copy.status}</th>
                  <th>{copy.due}</th>
                </tr>
              </thead>
              <tbody>
                {country.actions.map((action, idx) => (
                  <tr key={`${action.labelEn}-${idx}`}>
                    <td>{isFr ? action.labelFr : action.labelEn}</td>
                    <td>{isFr ? action.ownerFr : action.ownerEn}</td>
                    <td>
                      <span className={`impl-tag ${statusClass(action.status)}`}>
                        {statusLabel(action.status)}
                      </span>
                    </td>
                    <td>{action.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.article>
        </div>
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
