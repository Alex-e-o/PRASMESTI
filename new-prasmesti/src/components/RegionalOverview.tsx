import { motion } from 'framer-motion';
import { useLanguage } from '../languageContext';

const cards = [
  ['communityCardOneTitle', 'communityCardOneBody'],
  ['communityCardTwoTitle', 'communityCardTwoBody'],
  ['communityCardThreeTitle', 'communityCardThreeBody'],
] as const;

function RegionalOverview() {
  const { translate } = useLanguage();

  return (
    <section id="community" className="site-glow-section section-shell">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="community-intro-grid"
        >
          <div className="community-text">
            <p className="section-kicker section-kicker-indigo community-kicker">
              {translate('communityEyebrow')}
            </p>
            <h2 className="section-title">{translate('communityTitle')}</h2>
            <p className="section-body">{translate('communityBodyOne')}</p>
            <p className="section-body section-body-tight">{translate('communityBodyTwo')}</p>
          </div>

          <div className="community-logo-wrap">
            <img
              src={`${import.meta.env.BASE_URL}assets/prasmesti/shared/ceeac-logo.png`}
              alt="CEEAC logo"
              className="community-ceeac-logo"
            />
          </div>
        </motion.div>

        <div className="feature-grid">
          {cards.map(([titleKey, bodyKey], index) => (
            <motion.article
              key={titleKey}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="feature-card"
            >
              <div className="feature-card-icon" />
              <h3 className="feature-card-title">{translate(titleKey)}</h3>
              <p className="feature-card-body">{translate(bodyKey)}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RegionalOverview;
