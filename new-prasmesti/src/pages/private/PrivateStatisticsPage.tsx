const sectorRows = [
  ['Réhabilitation', '76%'],
  ['Formation', '52%'],
  ['Innovation', '68%'],
  ['Recherche', '61%'],
];

function PrivateStatisticsPage() {
  return (
    <div className="private-page-stack">
      <section className="private-stats-visual-grid">
        <article className="private-surface-card">
          <div className="private-surface-head">
            <h2 className="private-surface-title">Évolution des projets</h2>
          </div>
          <div
            className="private-mini-chart private-line-chart"
            role="img"
            aria-label="Évolution des projets : progression de 36 % à 86 % (36, 55, 48, 72, 86)."
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
            <h2 className="private-surface-title">Budget par secteur</h2>
          </div>
          <div className="private-progress-stack">
            {sectorRows.map(([label, value]) => (
              <div key={label} className="private-progress-row">
                <div className="private-progress-copy">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
                <div className="private-progress-bar"><span style={{ width: value }} /></div>
              </div>
            ))}
          </div>
        </article>

        <article className="private-surface-card">
          <div className="private-surface-head">
            <h2 className="private-surface-title">Répartition géographique</h2>
          </div>
          <div className="private-donut-wrap">
            <div
              className="private-donut-chart"
              role="img"
              aria-label="Répartition géographique : Gabon, Cameroun, RDC."
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
