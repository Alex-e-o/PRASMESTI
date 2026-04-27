import { motion } from 'framer-motion';
import { useLanguage } from '../languageContext';

const pillars = ['pillarOne', 'pillarTwo', 'pillarThree', 'pillarFour'] as const;

function PresidentialMessage() {
  const { translate } = useLanguage();

  return (
    <section id="president" className="site-glow-section section-shell section-with-divider">
      <div className="site-container section-grid section-grid-media">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7 }}
          className="section-media-card"
        >
          <img
            src="/assets/prasmesti/home/president/president.jpg"
            alt="PRASMESTI presidential portrait"
            className="section-media-image"
          />
          <div className="section-media-overlay" />
          <div className="section-media-caption">
            <h3 className="section-media-title">{translate('presidentName')}</h3>
            <p className="section-media-subtitle">{translate('presidentRole')}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-copy-card"
        >
          <h2 className="section-title">{translate('presidentTitle')}</h2>
          <p className="section-body">{translate('presidentBody')}</p>
          <div className="pillars-grid">
            {pillars.map((pillar) => (
              <div key={pillar} className="pillar-chip">
                {translate(pillar)}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default PresidentialMessage;
