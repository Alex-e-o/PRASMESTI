import { useEffect, useMemo, useState } from 'react';
import { eccasFlags } from '../../data/eccasFlags';
import {
  listCountryStats,
  localizeBlockerLabel,
  localizeDomainLabel,
  type CountryStats,
} from '../../lib/countryStore';
import { usePrivateI18n } from '../../private/privateI18n';

/**
 * Agrégats régionaux. Ils ne portent que sur les États ayant effectivement
 * transmis leur questionnaire : aucune valeur n'est estimée pour les autres,
 * et le nombre d'États couverts est affiché avec le résultat.
 */
function PrivateStatisticsPage() {
  const { t, language } = usePrivateI18n();
  const [stats, setStats] = useState<Record<string, CountryStats>>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    void listCountryStats().then((data) => {
      if (!active) return;
      setStats(data);
      setLoaded(true);
    });
    return () => {
      active = false;
    };
  }, []);

  const entries = useMemo(() => Object.values(stats), [stats]);

  const domains = useMemo(() => {
    const totals = new Map<string, { sum: number; count: number }>();
    entries.forEach((country) => {
      country.domainProgress.forEach(({ label, value }) => {
        const current = totals.get(label) ?? { sum: 0, count: 0 };
        totals.set(label, { sum: current.sum + value, count: current.count + 1 });
      });
    });
    return [...totals.entries()]
      .map(([label, { sum, count }]) => ({ label, value: Math.round(sum / count) }))
      .sort((a, b) => b.value - a.value);
  }, [entries]);

  const blockers = useMemo(() => {
    const totals = new Map<string, { sum: number; count: number; color: string }>();
    entries.forEach((country) => {
      country.blockers.forEach(({ label, value, color }) => {
        const current = totals.get(label) ?? { sum: 0, count: 0, color };
        totals.set(label, { sum: current.sum + value, count: current.count + 1, color });
      });
    });
    return [...totals.entries()]
      .map(([label, { sum, count, color }]) => ({ label, color, value: Math.round(sum / count) }))
      .filter((item) => item.value > 0)
      .sort((a, b) => b.value - a.value);
  }, [entries]);

  const submitted = entries.length;
  const pending = eccasFlags.length - submitted;

  if (loaded && submitted === 0) {
    return (
      <div className="private-page-stack">
        <section className="private-surface-card">
          <div className="private-empty-state">
            <p className="private-empty-state-title">{t('statsEmptyTitle')}</p>
            <p className="private-empty-state-body">{t('statsEmptyBody')}</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="private-page-stack">
      <section className="private-surface-card">
        <div className="private-surface-head">
          <h2 className="private-surface-title">{t('statsCollectionTitle')}</h2>
        </div>
        <div className="private-progress-stack">
          <div className="private-progress-row">
            <div className="private-progress-copy">
              <span>{t('statusSubmitted')}</span>
              <strong>{submitted} / {eccasFlags.length}</strong>
            </div>
            <div className="private-progress-bar">
              <span style={{ width: `${Math.round((submitted / eccasFlags.length) * 100)}%` }} />
            </div>
          </div>
          <div className="private-progress-row">
            <div className="private-progress-copy">
              <span>{t('statusNotSubmitted')}</span>
              <strong>{pending} / {eccasFlags.length}</strong>
            </div>
            <div className="private-progress-bar">
              <span style={{ width: `${Math.round((pending / eccasFlags.length) * 100)}%`, background: '#94a3b8' }} />
            </div>
          </div>
        </div>
        <p className="private-stat-detail">
          {t('statsBasisA')} {submitted} {t('statsBasisB')}
        </p>
      </section>

      {domains.length ? (
        <section className="private-surface-card">
          <div className="private-surface-head">
            <h2 className="private-surface-title">{t('statsRegionalTitle')}</h2>
          </div>
          <div className="private-progress-stack">
            {domains.map((domain) => (
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

      {blockers.length ? (
        <section className="private-surface-card">
          <div className="private-surface-head">
            <h2 className="private-surface-title">{t('statsBlockersTitle')}</h2>
          </div>
          <div className="private-progress-stack">
            {blockers.map((blocker) => (
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
    </div>
  );
}

export default PrivateStatisticsPage;
