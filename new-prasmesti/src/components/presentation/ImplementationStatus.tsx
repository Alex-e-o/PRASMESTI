import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlagCloud } from '../FlagCloud';
import { eccasFlags } from '../../data/eccasFlags';
import { useLanguage } from '../../languageContext';

function ImplementationStatus() {
  const { language, translate } = useLanguage();

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
              const isGabon = flag.nameEn.toLowerCase() === 'gabon';
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
                  alt={language === 'fr' ? flag.nameFr : flag.nameEn}
                  className="impl-country-flag"
                />
                <div className="impl-country-info">
                  <p className="impl-country-name">
                    {language === 'fr' ? flag.nameFr : flag.nameEn}
                  </p>
                  <span className="impl-status-badge impl-status-active">
                    {translate('implStatusActive') as string}
                  </span>
                  {isGabon && <span className="impl-country-link-hint">View stats mockup</span>}
                </div>
              </motion.div>
              );

              if (!isGabon) return card;

              return (
                <Link key={flag.nameEn} to="/presentation/implementation/gabon" className="impl-country-link">
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
