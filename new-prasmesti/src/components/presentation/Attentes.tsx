import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { Zap, Settings, Wifi, Image, Lock, Layers } from 'lucide-react';
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

function Attentes() {
  const { language, translate } = useLanguage();
  const t = (key: string) => translate(key) as string;
  const attentesLeadPost = language === 'fr'
    ? "des systemes de l'Education, de la Formation, des Sciences, de la Technologie et de l'Innovation (EFSTI) en Afrique centrale."
    : 'of the Education, Training, Sciences, Technology and Innovation (ETSTI) systems in Central Africa.';

  return (
    <section id="attentes" className="pres-page">
      <PresSubPageHeader currentLabel={t('navPresentationExpectations')} title={t('attQ')} />

      <div className="pres-cards-wrap">
        <div className="site-container pres-cards-inner">

          {/* Intro */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <p className="pres-lead-text">
                {t('attLeadPre')}{' '}
                <strong className="pres-highlight">{t('attLeadBold')}</strong>{' '}
                {attentesLeadPost}
              </p>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Layers size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Attentes</span>
              </div>
            </div>
          </motion.div>

          {/* Group 1: Dynamiser */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('attDynTitle')}</h2>
              <h3 className="pres-sub-block-title">{t('attH1Title')}</h3>
              <p className="pres-body-text">{t('attH1Text')}</p>
              <h3 className="pres-sub-block-title">{t('attH2Title')}</h3>
              <p className="pres-body-text">{t('attH2Text')}</p>
              <h3 className="pres-sub-block-title">{t('attH3Title')}</h3>
              <p className="pres-body-text">{t('attH3Text')}</p>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Zap size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Dynamiser</span>
              </div>
            </div>
          </motion.div>

          {/* Group 2: Gouvernance */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('attGovTitle')}</h2>
              <h3 className="pres-sub-block-title">{t('attH4Title')}</h3>
              <p className="pres-body-text">{t('attH4Text')}</p>
              <ul className="pres-list">
                <li>{t('attH4Li1')}</li>
                <li>{t('attH4Li2')}</li>
                <li>{t('attH4Li3')}</li>
              </ul>
              <h3 className="pres-sub-block-title">{t('attH5Title')}</h3>
              <p className="pres-body-text">{t('attH5Text')}</p>
              <h3 className="pres-sub-block-title">{t('attH6Title')}</h3>
              <p className="pres-body-text">{t('attH6Text')}</p>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Settings size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Gouvernance</span>
              </div>
            </div>
          </motion.div>

          {/* Group 3: e-Services */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('attEServicesTitle')}</h2>
              <h3 className="pres-sub-block-title">{t('attH7Title')}</h3>
              <p className="pres-body-text">{t('attH7Text')}</p>
              <ul className="pres-list">
                <li>{t('attH7Li1')}</li>
                <li>{t('attH7Li2')}</li>
                <li>{t('attH7Li3')}</li>
              </ul>
              <h3 className="pres-sub-block-title">{t('attH8Title')}</h3>
              <p className="pres-body-text">{t('attH8Text')}</p>
              <ul className="pres-list">
                <li>{t('attH8Li1')}</li>
                <li>{t('attH8Li2')}</li>
                <li>{t('attH8Li3')}</li>
              </ul>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Wifi size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">e-Services</span>
              </div>
            </div>
          </motion.div>

          {/* Image lever */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('attImageLevierTitle')}</h2>
              <p className="pres-body-text">{t('attImageLevierIntro')}</p>
              <p className="pres-vision-quote">{t('attImageLevierHighlight')}</p>
              <ul className="pres-list">
                <HtmlLi html={t('attImageLi1')} />
                <HtmlLi html={t('attImageLi2')} />
                <HtmlLi html={t('attImageLi3')} />
              </ul>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Image size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Image</span>
              </div>
            </div>
          </motion.div>

          {/* Access & Actors */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('attAccessAndActorsTitle')}</h2>
              <h3 className="pres-sub-block-title">{t('attAccessQ')}</h3>
              <p className="pres-body-text">{t('attAccessText')}</p>
              <ul className="pres-list">
                <HtmlLi html={t('attAccessIntranet')} />
                <HtmlLi html={t('attAccessExtranet')} />
                <HtmlLi html={t('attAccessInternet')} />
              </ul>
              <h3 className="pres-sub-block-title">{t('attToolForAllTitle')}</h3>
              <p className="pres-body-text">{t('attToolForAllText')}</p>
              <ul className="pres-list">
                <HtmlLi html={t('attToolForAllLi1')} />
                <HtmlLi html={t('attToolForAllLi2')} />
                <HtmlLi html={t('attToolForAllLi3')} />
              </ul>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Lock size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Accès</span>
              </div>
            </div>
          </motion.div>

          {/* Synthesis */}
          <motion.div className="pres-card pres-card-vision" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('attInSynthesisTitle')}</h2>
              <p className="pres-body-text">{t('attInSynthesisIntro')}</p>
              <p className="pres-vision-quote">{t('attInSynthesisHighlight')}</p>
              <p className="pres-body-text" style={{ marginTop: '16px' }}>{t('attInSynthesisConclusion')}</p>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Layers size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Synthèse</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Attentes;
