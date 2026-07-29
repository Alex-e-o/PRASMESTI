import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Gauge, ListChecks, TriangleAlert } from 'lucide-react';
import { countryNameBySlug, findEccasCountry } from '../../data/eccasFlags';
import {
  getCountryStats,
  localizeBlockerLabel,
  localizeDomainLabel,
  type CountryStats,
} from '../../lib/countryStore';
import { usePrivateI18n } from '../../private/privateI18n';

/**
 * Fiche d'un État membre dans l'espace privé. Tout ce qui s'affiche ici provient
 * du questionnaire soumis par cet État — rien n'est estimé à sa place.
 */
function PrivateCountryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, language } = usePrivateI18n();
  const [stats, setStats] = useState<CountryStats | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let active = true;
    void getCountryStats(slug).then((data) => {
      if (!active) return;
      setStats(data);
      setLoaded(true);
    });
    return () => {
      active = false;
    };
  }, [slug]);

  if (!slug || !findEccasCountry(slug)) {
    return <Navigate to="/private/dashboard" replace />;
  }

  const country = findEccasCountry(slug);
  const name = countryNameBySlug(slug, language);
  const declaredBlockers = stats?.blockers.filter((item) => item.value > 0) ?? [];

  return (
    <div className="private-page-stack">
      <Link to="/private/dashboard" className="private-backlink">
        <ArrowLeft size={16} />
        <span>{t('indBack')}</span>
      </Link>

      <section className="private-hero-card">
        <div>
          <p className="private-section-kicker">{t('countryKicker')}</p>
          <h2 className="private-section-title">{name}</h2>
          <p className="private-section-body">
            {stats ? `${t('qStatusSubmitted')} — ${new Date(stats.updatedAt ?? '').toLocaleDateString(language)}` : t('statusNotSubmitted')}
          </p>
        </div>
        {country ? <img src={country.image} alt="" className="private-hero-flag" /> : null}
      </section>

      {loaded && !stats ? (
        <section className="private-surface-card">
          <div className="private-empty-state">
            <p className="private-empty-state-title">{t('countryEmptyTitle')}</p>
            <p className="private-empty-state-body">{t('countryEmptyBody')}</p>
          </div>
        </section>
      ) : null}

      {stats ? (
        <>
          <section className="private-stats-grid">
            <article className="private-stat-card">
              <div className="private-stat-head">
                <div className="private-stat-icon"><Gauge size={18} /></div>
              </div>
              <p className="private-stat-label">{t('colCompletion')}</p>
              <h3 className="private-stat-value">{stats.completion}%</h3>
            </article>
            <article className="private-stat-card">
              <div className="private-stat-head">
                <div className="private-stat-icon"><ListChecks size={18} /></div>
              </div>
              <p className="private-stat-label">{t('colCoverage')}</p>
              <h3 className="private-stat-value">{stats.coverage}%</h3>
              <p className="private-stat-detail">{t('coverageHint')}</p>
            </article>
            <article className="private-stat-card">
              <div className="private-stat-head">
                <div className="private-stat-icon"><TriangleAlert size={18} /></div>
              </div>
              <p className="private-stat-label">{t('statsBlockersTitle')}</p>
              <h3 className="private-stat-value">{declaredBlockers.length}</h3>
            </article>
          </section>

          {stats.domainProgress.length ? (
            <section className="private-surface-card">
              <div className="private-surface-head">
                <h3 className="private-surface-title">{t('statsRegionalTitle')}</h3>
              </div>
              <div className="private-progress-stack">
                {stats.domainProgress.map((domain) => (
                  <div key={domain.label} className="private-progress-row">
                    <div className="private-progress-copy">
                      <span>{localizeDomainLabel(domain.label, language)}</span>
                      <strong>{domain.value}%</strong>
                    </div>
                    <div className="private-progress-bar">
                      <span style={{ width: `${domain.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {declaredBlockers.length ? (
            <section className="private-surface-card">
              <div className="private-surface-head">
                <h3 className="private-surface-title">{t('statsBlockersTitle')}</h3>
              </div>
              <div className="private-progress-stack">
                {declaredBlockers.map((blocker) => (
                  <div key={blocker.label} className="private-progress-row">
                    <div className="private-progress-copy">
                      <span>{localizeBlockerLabel(blocker.label, language)}</span>
                      <strong>{blocker.value}%</strong>
                    </div>
                    <div className="private-progress-bar">
                      <span style={{ width: `${blocker.value}%`, background: blocker.color }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default PrivateCountryPage;
