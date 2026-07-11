import { usePrivateI18n } from '../../private/privateI18n';

function PrivateHistoryPage() {
  const { t } = usePrivateI18n();

  const historyRows: { date: string; element: string; action: string; author: string; status: string }[] = [
    { date: '18 nov. 2026', element: t('histQGabon'), action: t('actValidation'), author: 'Marie T. MFOULA', status: t('statusDone') },
    { date: '17 nov. 2026', element: t('histReport'), action: t('actUpdate'), author: 'David B. OSSENE', status: t('statusDone') },
    { date: '15 nov. 2026', element: t('histProject'), action: t('actCreation'), author: t('authorTeam'), status: t('statusInReview') },
    { date: '14 nov. 2026', element: t('histStats'), action: t('actCorrection'), author: t('authorFocalCmr'), status: t('statusDone') },
  ];

  return (
    <div className="private-page-stack">
      <section className="private-surface-card">
        <div className="private-surface-head">
          <div>
            <p className="private-section-kicker">{t('traceability')}</p>
            <h2 className="private-surface-title">{t('historyTitle')}</h2>
          </div>
          <div className="private-filter-row">
            <input className="private-filter-input" defaultValue="01/11/2026 - 30/11/2026" aria-label={t('dateRange')} />
            <input className="private-filter-input" type="search" placeholder={t('searchAction')} aria-label={t('searchAction')} />
          </div>
        </div>

        <div className="private-table-wrap">
          <table className="private-table">
            <thead>
              <tr>
                <th scope="col">{t('colDate')}</th>
                <th scope="col">{t('colElement')}</th>
                <th scope="col">{t('colAction')}</th>
                <th scope="col">{t('colAuthor')}</th>
                <th scope="col">{t('colStatus')}</th>
              </tr>
            </thead>
            <tbody>
              {historyRows.map((row) => (
                <tr key={row.date}>
                  <td>{row.date}</td>
                  <td>{row.element}</td>
                  <td>{row.action}</td>
                  <td>{row.author}</td>
                  <td><span className="private-table-badge">{row.status}</span></td>
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
