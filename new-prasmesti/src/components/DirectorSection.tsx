import { motion } from 'framer-motion';
import { useLanguage } from '../languageContext';

function DirectorSection() {
  const { translate } = useLanguage();

  return (
    <section id="director" className="site-glow-section section-shell section-with-divider">
      <div className="site-container section-grid">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="section-copy-card"
        >
          <p className="section-kicker section-kicker-indigo">{translate('directorEyebrow')}</p>
          <h2 className="section-title">{translate('directorTitle')}</h2>
          <p className="section-body">{translate('directorBody')}</p>
          <div className="director-signature">
            <div className="director-signature-dot" />
            <div>
              <p className="director-signature-name">{translate('directorName')}</p>
              <p className="director-signature-role">{translate('directorRole')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="section-media-card section-media-card-padded"
        >
          <div className="director-image-glow" />
          <img
            src="/assets/prasmesti/home/director/director.jpg"
            alt="Director portrait"
            className="director-image"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default DirectorSection;
