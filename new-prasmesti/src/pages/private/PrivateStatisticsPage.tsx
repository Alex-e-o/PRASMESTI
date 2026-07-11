import { usePrivateI18n, type PVKey } from '../../private/privateI18n';

const sectorRows: { labelKey: PVKey; value: string }[] = [
  { labelKey: 'sectorRehab', value: '76%' },
  { labelKey: 'sectorFormation', value: '52%' },
  { labelKey: 'sectorInnovation', value: '68%' },
  { labelKey: 'sectorResearch', value: '61%' },
];

function PrivateStatisticsPage() {
  const { t } = usePrivateI18n();
  return (
    <div className="private-page-stack">
      <section className="private-stats-visual-grid">
        <article className="private-surface-card">
          <div className="private-surface-head">
            <h2 className="private-surface-title">{t('statProjectsEvolution')}</h2>
          </div>
          <div
            className="private-mini-chart private-line-chart"
            role="img"
            aria-label={`${t('statProjectsEvolution')} : 36, 55, 48, 72, 86 %.`}
          >
            <span style={{ height: '36%' }} />
            <span style={{ height: '55%' }} />
            <span style={{ height: '48%' }} />
            <span style={{ height: '72%' }} />
            <span style={{ height: '86%' }} />
          </div>
        </article>

        <article className="private-surface-card">
          <div className="private-surface-head">
            <h2 className="private-surface-title">{t('statBudgetSector')}</h2>
          </div>
          <div className="private-progress-stack">
            {sectorRows.map(({ labelKey, value }) => (
              <div key={labelKey} className="private-progress-row">
                <div className="private-progress-copy">
                  <span>{t(labelKey)}</span>
                  <strong>{value}</strong>
                </div>
                <div className="private-progress-bar"><span style={{ width: value }} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="private-surface-card">
          <div className="private-surface-head">
            <h2 className="private-surface-title">{t('statGeoDistribution')}</h2>
          </div>
          <div className="private-donut-wrap">
            <div
              className="private-donut-chart"
              role="img"
              aria-label={`${t('statGeoDistribution')} : Gabon, Cameroun, RDC.`}
            />
            <div className="private-donut-legend">
              <span><i className="is-one" /> Gabon</span>
              <span><i className="is-two" /> Cameroun</span>
              <span><i className="is-three" /> RDC</span>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default PrivateStatisticsPage;
