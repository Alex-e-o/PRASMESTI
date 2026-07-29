import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlagCloud } from '../FlagCloud';
import { eccasFlags } from '../../data/eccasFlags';
import { listCountryStats, type CountryStats } from '../../lib/countryStore';
import { useLanguage, pick } from '../../languageContext';

function ImplementationStatus() {
  const { language, translate } = useLanguage();
  const linkHint = {
    fr: 'Voir les statistiques', en: 'View statistics', es: 'Ver las estadísticas', pt: 'Ver as estatísticas',
  }[language];

  // Le badge reflète l'état réel de la collecte plutôt qu'un « Actif » uniforme.
  const [stats, setStats] = useState<Record<string, CountryStats>>({});
  useEffect(() => {
    let active = true;
    void listCountryStats().then((data) => {
      if (active) setStats(data);
    });
    return () => {
      active = false;
    };
  }, []);

  const badge = {
    submitted: { fr: 'Données transmises', en: 'Data submitted', es: 'Datos transmitidos', pt: 'Dados transmitidos' }[language],
    pending: { fr: 'En attente de transmission', en: 'Awaiting submission', es: 'A la espera de transmisión', pt: 'A aguardar transmissão' }[language],
  };

  return (
    <>
      {/* Hero / cloud section */}
      <section className="site-glow-section impl-hero-section">
        <div className="impl-hero-backdrop" />
        <div className="site-container impl-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="impl-hero-intro"
          >
            <p className="section-kicker">{translate('implEyebrow') as string}</p>
            <h1 className="impl-hero-title">{translate('implTitle') as string}</h1>
            <p className="impl-hero-subtitle">{translate('implSubtitle') as string}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="impl-cloud-wrap"
        >
          <FlagCloud />
        </motion.div>
      </section>

      {/* Country grid */}
      <section className="site-glow-section section-shell impl-countries-section">
        <div className="site-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            className="section-intro"
          >
            <p className="section-kicker">{translate('implCountriesEyebrow') as string}</p>
            <h2 className="section-title">{translate('implCountriesTitle') as string}</h2>
          </motion.div>

          <div className="impl-countries-grid">
            {eccasFlags.map((flag, i) => {
              const { slug } = flag;
              const card = (
                <motion.div
                  key={flag.nameEn}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="impl-country-card"
                >
                  <img
                    src={flag.image}
                    alt=""
                    className="impl-country-flag"
                  />
                  <div className="impl-country-info">
                    <p className="impl-country-name">
                      {pick(flag, 'name', language)}
                    </p>
                    <span
                      className={`impl-status-badge ${stats[slug] ? 'impl-status-active' : 'impl-status-pending'}`}
                    >
                      {stats[slug] ? badge.submitted : badge.pending}
                    </span>
                    {slug && <span className="impl-country-link-hint">{linkHint}</span>}
                  </div>
                </motion.div>
              );

              if (!slug) return card;

              return (
                <Link
                  key={flag.nameEn}
                  to={`/presentation/implementation/${slug}`}
                  className="impl-country-link"
                >
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ImplementationStatus;
