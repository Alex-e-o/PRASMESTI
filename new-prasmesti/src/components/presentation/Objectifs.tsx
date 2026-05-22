import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage } from '../../languageContext';

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const IMG_BASE = `${import.meta.env.BASE_URL}assets/prasmesti/objectifs/`;

function HtmlLi({ html }: { html: string }) {
  return <li dangerouslySetInnerHTML={{ __html: html }} />;
}

function HtmlDiv({ html, className }: { html: string; className?: string }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Objectifs() {
  const { translate } = useLanguage();
  const t = (key: string) => translate(key) as string;

  return (
    <section id="objectifs" className="pres-page">
      <PresSubPageHeader currentLabel={t('navPresentationObjectives')} title={t('objsTitle')} />

      <div className="pres-cards-wrap">
        <div className="site-container pres-cards-inner">

          {/* Intro */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <p className="pres-lead-text">
                {t('objsLeadPre')}{' '}
                <strong className="pres-highlight">{t('objsLeadBold')}</strong>
              </p>
              <p className="pres-body-text">{t('objsContextText')}</p>
            </div>
            <div className="pres-card-media">
              <img
                className="pres-card-image"
                src={`${IMG_BASE}obj-intro.jpg`}
                alt="Vue aérienne d'une capitale d'Afrique centrale"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Section 1 */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('objsH1Title')}</h2>
              <p className="pres-body-text">{t('objsH1Intro')}</p>
              <ul className="pres-list">
                <HtmlLi html={t('objsH1Li1')} />
                <HtmlLi html={t('objsH1Li2')} />
                <HtmlLi html={t('objsH1Li3')} />
                <HtmlLi html={t('objsH1Li4')} />
              </ul>
              <HtmlDiv html={t('objsH1Highlight')} className="pres-highlight-box" />
            </div>
            <div className="pres-card-media">
              <img
                className="pres-card-image"
                src={`${IMG_BASE}obj-internal.jpg`}
                alt="Salle de réunion équipée pour la coordination interne"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('objsH2Title')}</h2>
              <p className="pres-body-text">{t('objsH2Intro')}</p>
              <ul className="pres-list">
                <HtmlLi html={t('objsH2Li1')} />
                <HtmlLi html={t('objsH2Li2')} />
                <HtmlLi html={t('objsH2Li3')} />
                <HtmlLi html={t('objsH2Li4')} />
              </ul>
              <HtmlDiv html={t('objsH2Highlight')} className="pres-highlight-box" />
            </div>
            <div className="pres-card-media">
              <img
                className="pres-card-image"
                src={`${IMG_BASE}obj-external.jpg`}
                alt="Globe terrestre centré sur le continent africain"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('objsH3Title')}</h2>
              <p className="pres-body-text">{t('objsH3Intro')}</p>
              <ul className="pres-list">
                <HtmlLi html={t('objsH3Li1')} />
                <HtmlLi html={t('objsH3Li2')} />
                <HtmlLi html={t('objsH3Li3')} />
                <HtmlLi html={t('objsH3Li4')} />
              </ul>
            </div>
            <div className="pres-card-media">
              <img
                className="pres-card-image"
                src={`${IMG_BASE}obj-training.jpg`}
                alt="Diplôme et ouvrage symbolisant la formation et la qualification"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Objectifs;
