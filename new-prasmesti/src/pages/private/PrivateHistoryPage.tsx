const historyRows = [
  ['18 nov. 2026', 'Questionnaire Gabon', 'Validation', 'Marie T. MFOULA', 'Termine'],
  ['17 nov. 2026', 'Rapport Education', 'Mise a jour', 'David B. OSSENE', 'Termine'],
  ['15 nov. 2026', 'Projet regional ESTI', 'Creation', 'Equipe PRASMESTI', 'En revue'],
  ['14 nov. 2026', 'Statistiques ETFP', 'Correction', 'Point focal Cameroun', 'Termine'],
];

function PrivateHistoryPage() {
  return (
    <div className="private-page-stack">
      <section className="private-surface-card">
        <div className="private-surface-head">
          <div>
            <p className="private-section-kicker">Traçabilite</p>
            <h2 className="private-surface-title">Historique des actions</h2>
          </div>
          <div className="private-filter-row">
            <input className="private-filter-input" defaultValue="01/11/2026 - 30/11/2026" />
            <input className="private-filter-input" placeholder="Rechercher une action" />
          </div>
        </div>

        <div className="private-table-wrap">
          <table className="private-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Element</th>
                <th>Action</th>
                <th>Auteur</th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {historyRows.map((row) => (
                <tr key={row.join('-')}>
                  {row.map((cell, index) => (
                    <td key={index}>
                      {index === 4 ? <span className="private-table-badge">{cell}</span> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default PrivateHistoryPage;
