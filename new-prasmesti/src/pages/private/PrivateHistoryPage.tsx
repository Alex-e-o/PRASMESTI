import { useEffect, useMemo, useState } from 'react';
import { countryNameBySlug } from '../../data/eccasFlags';
import { listActivity, type ActivityAction, type ActivityEntry } from '../../lib/activityLog';
import { usePrivateI18n, type PVKey } from '../../private/privateI18n';

const ACTION_LABELS: Record<ActivityAction, PVKey> = {
  login: 'actLogin',
  logout: 'actLogout',
  'report.draft_saved': 'actDraftSaved',
  'report.submitted': 'actSubmitted',
  'stats.published': 'actStatsPublished',
  'profile.avatar_updated': 'actAvatarUpdated',
};

const STATUS_LABELS: Record<string, PVKey> = {
  done: 'statusDone',
  pending: 'statusPending',
  failed: 'statusFailed',
};

/** Journal d'activité — route protégée par RequireAdmin, RLS admin côté base. */
function PrivateHistoryPage() {
  const { t, language } = usePrivateI18n();
  const [entries, setEntries] = useState<ActivityEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    let active = true;
    setLoading(true);
    // Le filtre de fin porte sur la journée entière, pas sur minuit pile.
    const filters = {
      from: from ? new Date(`${from}T00:00:00`).toISOString() : undefined,
      to: to ? new Date(`${to}T23:59:59`).toISOString() : undefined,
      search: search.trim() || undefined,
    };
    const timer = window.setTimeout(() => {
      void listActivity(filters).then((data) => {
        if (!active) return;
        setEntries(data);
        setLoading(false);
      });
    }, 250); // laisse le temps de finir de taper avant d'interroger la base

    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, [from, to, search]);

  const formatDateTime = useMemo(
    () => (value: string) =>
      new Date(value).toLocaleString(language, {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    [language],
  );

  return (
    <div className="private-page-stack">
      <section className="private-surface-card">
        <div className="private-surface-head">
          <div>
            <p className="private-section-kicker">{t('traceability')}</p>
            <h2 className="private-surface-title">{t('historyTitle')}</h2>
            <p className="private-section-body">{t('historySubtitle')}</p>
          </div>
          <div className="private-filter-row">
            <label className="private-filter-field">
              <span>{t('dateFrom')}</span>
              <input
                className="private-filter-input"
                type="date"
                value={from}
                onChange={(event) => setFrom(event.target.value)}
              />
            </label>
            <label className="private-filter-field">
              <span>{t('dateTo')}</span>
              <input
                className="private-filter-input"
                type="date"
                value={to}
                onChange={(event) => setTo(event.target.value)}
              />
            </label>
            <input
              className="private-filter-input"
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder={t('searchAction')}
              aria-label={t('searchAction')}
            />
          </div>
        </div>

        {loading ? <p className="private-section-body">{t('histLoading')}</p> : null}

        {!loading && entries.length === 0 ? (
          <div className="private-empty-state">
            <p className="private-empty-state-title">{t('histEmptyTitle')}</p>
            <p className="private-empty-state-body">{t('histEmptyBody')}</p>
          </div>
        ) : null}

        {entries.length ? (
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
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{formatDateTime(entry.createdAt)}</td>
                    <td>
                      {entry.countrySlug
                        ? `${entry.entity ?? ''} (${countryNameBySlug(entry.countrySlug, language)})`.trim()
                        : entry.entity ?? '—'}
                    </td>
                    <td>{t(ACTION_LABELS[entry.action] ?? 'colAction')}</td>
                    <td>{entry.actorName}</td>
                    <td>
                      <span className={`private-table-badge is-${entry.status}`}>
                        {t(STATUS_LABELS[entry.status] ?? 'statusDone')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default PrivateHistoryPage;
