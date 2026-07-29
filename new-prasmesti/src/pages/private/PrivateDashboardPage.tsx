import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ClipboardList, FileClock, Gauge } from 'lucide-react';
import { countryNameBySlug, eccasFlags } from '../../data/eccasFlags';
import {
  listCountryStats,
  listReportSummaries,
  type CountryStats,
  type ReportSummary,
} from '../../lib/countryStore';
import { usePrivateAuth } from '../../private/PrivateAuthContext';
import { usePrivateI18n, type PVKey } from '../../private/privateI18n';

type Row = {
  slug: string;
  name: string;
  flag: string;
  statusKey: PVKey;
  completion: number | null;
  coverage: number | null;
  updatedAt?: string;
};

function PrivateDashboardPage() {
  const { t, language } = usePrivateI18n();
  const { user, isAdmin } = usePrivateAuth();
  const [stats, setStats] = useState<Record<string, CountryStats>>({});
  const [reports, setReports] = useState<ReportSummary[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    void Promise.all([listCountryStats(), listReportSummaries()]).then(([nextStats, nextReports]) => {
      if (!active) return;
      setStats(nextStats);
      setReports(nextReports);
      setLoaded(true);
    });
    return () => {
      active = false;
    };
  }, []);

  const formatDate = (value?: string) =>
    value ? new Date(value).toLocaleDateString(language, { day: '2-digit', month: 'short', year: 'numeric' }) : t('none');

  const rows = useMemo<Row[]>(() => {
    const byCountry = new Map(reports.map((report) => [report.countrySlug, report]));

    return eccasFlags.map(({ slug, image }) => {
      const published = stats[slug];
      const report = byCountry.get(slug);

      // Le statut « brouillon » relève du travail interne d'un État : il n'est
      // montré qu'à cet État et à l'administration.
      const maySeeDraft = isAdmin || user?.countrySlug === slug;
      const statusKey: PVKey = published
        ? 'statusSubmitted'
        : report && maySeeDraft && report.status === 'draft'
        ? 'statusDraft'
        : 'statusNotSubmitted';

      return {
        slug,
        name: countryNameBySlug(slug, language),
        flag: image,
        statusKey,
        completion: published?.completion ?? null,
        coverage: published?.coverage ?? null,
        updatedAt: published?.updatedAt ?? (maySeeDraft ? report?.updatedAt : undefined),
      };
    });
  }, [stats, reports, isAdmin, user, language]);

  const reported = rows.filter((row) => row.completion !== null);
  const drafts = reports.filter((report) => report.status === 'draft').length;
  const averageCompletion = reported.length
    ? Math.round(reported.reduce((acc, row) => acc + (row.completion ?? 0), 0) / reported.length)
    : null;
  const lastActivity = reported
    .map((row) => row.updatedAt)
    .filter(Boolean)
    .sort()
    .pop();

  const summary = [
    { key: 'reported', icon: CheckCircle2, label: t('dashReported'), value: `${reported.length} / ${eccasFlags.length}` },
    { key: 'drafts', icon: FileClock, label: t('dashDrafts'), value: String(drafts) },
    {
      key: 'completion',
      icon: Gauge,
      label: t('dashAvgCompletion'),
      value: averageCompletion === null ? t('notAvailable') : `${averageCompletion}%`,
      hint: averageCompletion === null ? undefined : t('dashAvgHint'),
    },
    { key: 'last', icon: ClipboardList, label: t('dashLastActivity'), value: formatDate(lastActivity) },
  ];

  return (
    <div className="private-page-stack">
      <section className="private-hero-card">
        <div>
          <p className="private-section-kicker">{t('overview')}</p>
          <h2 className="private-section-title">{t('dashboardTitle')}</h2>
          <p className="private-section-body">{t('dashboardBody')}</p>
        </div>
        <div className="private-hero-badge">{new Date().getFullYear()}</div>
      </section>

      <section className="private-stats-grid">
        {summary.map(({ key, icon: Icon, label, value, hint }) => (
          <article key={key} className="private-stat-card">
            <div className="private-stat-head">
              <div className="private-stat-icon">
                <Icon size={18} />
              </div>
            </div>
            <p className="private-stat-label">{label}</p>
            <h3 className="private-stat-value">{value}</h3>
            {hint ? <p className="private-stat-detail">{hint}</p> : null}
          </article>
        ))}
      </section>

      <section className="private-surface-card">
        <div className="private-surface-head">
          <h3 className="private-surface-title">{t('dashTableTitle')}</h3>
        </div>

        {loaded && reported.length === 0 ? (
          <div className="private-empty-state">
            <p className="private-empty-state-title">{t('dashEmptyTitle')}</p>
            <p className="private-empty-state-body">{t('dashEmptyBody')}</p>
          </div>
        ) : null}

        <div className="private-table-wrap">
          <table className="private-table">
            <thead>
              <tr>
                <th scope="col">{t('colMemberState')}</th>
                <th scope="col">{t('colStatus')}</th>
                <th scope="col">{t('colCompletion')}</th>
                <th scope="col">{t('colCoverage')}</th>
                <th scope="col">{t('colUpdated')}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.slug}>
                  <th scope="row">
                    <Link to={`/private/pays/${row.slug}`} className="private-country-cell">
                      <img src={row.flag} alt="" className="private-country-flag" />
                      <span>{row.name}</span>
                    </Link>
                  </th>
                  <td>
                    <span className={`private-table-badge is-${row.statusKey}`}>{t(row.statusKey)}</span>
                  </td>
                  <td>{row.completion === null ? t('notAvailable') : `${row.completion}%`}</td>
                  <td>{row.coverage === null ? t('notAvailable') : `${row.coverage}%`}</td>
                  <td>{formatDate(row.updatedAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default PrivateDashboardPage;
