const historyRows = [
  ['18 nov. 2026', 'Questionnaire Gabon', 'Validation', 'Marie T. MFOULA', 'Terminé'],
  ['17 nov. 2026', 'Rapport Éducation', 'Mise à jour', 'David B. OSSENE', 'Terminé'],
  ['15 nov. 2026', 'Projet régional ESTI', 'Création', 'Equipe PRASMESTI', 'En revue'],
  ['14 nov. 2026', 'Statistiques ETFP', 'Correction', 'Point focal Cameroun', 'Terminé'],
];

function PrivateHistoryPage() {
  return (
    <div className="private-page-stack">
      <section className="private-surface-card">
        <div className="private-surface-head">
          <div>
            <p className="private-section-kicker">Traçabilité</p>
            <h2 className="private-surface-title">Historique des actions</h2>
          </div>
          <div className="private-filter-row">
            <input className="private-filter-input" defaultValue="01/11/2026 - 30/11/2026" aria-label="Plage de dates" />
            <input className="private-filter-input" type="search" placeholder="Rechercher une action" aria-label="Rechercher une action" />
          </div>
        </div>

        <div className="private-table-wrap">
          <table className="private-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Élément</th>
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
