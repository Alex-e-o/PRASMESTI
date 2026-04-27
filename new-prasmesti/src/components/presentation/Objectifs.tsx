import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { Eye, Globe2, GraduationCap } from 'lucide-react';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage } from '../../languageContext';

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

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
              <div className="pres-image-placeholder">
                <Eye size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Objectifs</span>
              </div>
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
              <div className="pres-image-placeholder">
                <Eye size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Interne</span>
              </div>
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
              <div className="pres-image-placeholder">
                <Globe2 size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Externe</span>
              </div>
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
              <div className="pres-image-placeholder">
                <GraduationCap size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Former</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Objectifs;
