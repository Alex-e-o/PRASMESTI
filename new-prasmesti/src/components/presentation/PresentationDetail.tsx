import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { BookOpen, HelpCircle, Zap, Image, Lock, Target } from 'lucide-react';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage } from '../../languageContext';

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

function PresentationDetail() {
  const { translate } = useLanguage();
  const t = (key: string) => translate(key) as string;

  return (
    <section id="presentation-detail" className="pres-page">
      <PresSubPageHeader currentLabel={t('navPresentationWhat')} title={t('pdetTitle')} />

      <div className="pres-cards-wrap">
        <div className="site-container pres-cards-inner">

          {/* Intro + Mission */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <p className="pres-body-text">{t('pdetIntro')}</p>
              <p className="pres-lead-text" style={{ marginTop: '1.5rem' }}>{t('pdetMissionTitle')}</p>
              <ul className="pres-check-list">
                <li>{t('pdetMissionItem1')}</li>
                <li>{t('pdetMissionItem2')}</li>
                <li>{t('pdetMissionItem3')}</li>
                <li>{t('pdetMissionItem4')}</li>
                <li>{t('pdetMissionItem5')}</li>
                <li>{t('pdetMissionItem6')}</li>
              </ul>
              <p className="pres-body-text" style={{ marginTop: '1.25rem' }}>{t('pdetSuccessCondition')}</p>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <BookOpen size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">PRASMESTI</span>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <HelpCircle size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Description</span>
              </div>
            </div>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('pdetDescriptionLabel')}</h2>
              <p className="pres-body-text">{t('pdetDescriptionText')}</p>
              <h2 className="pres-section-title" style={{ marginTop: '1.75rem' }}>{t('pdetWhyQ')}</h2>
              <ul className="pres-check-list">
                <li>{t('pdetWhyItem1')}</li>
                <li>{t('pdetWhyItem2')}</li>
                <li>{t('pdetWhyItem3')}</li>
                <li>{t('pdetWhyItem4')}</li>
              </ul>
            </div>
          </motion.div>

          {/* Functions */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('pdetFunctionsTitle')}</h2>
              <ul className="pres-check-list">
                <li>{t('pdetFuncComm')}</li>
                <li>{t('pdetFuncCoord')}</li>
                <li>{t('pdetFuncContent')}</li>
                <li>{t('pdetFuncKb')}</li>
              </ul>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Zap size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Fonctions</span>
              </div>
            </div>
          </motion.div>

          {/* Expectations */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Target size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Attentes</span>
              </div>
            </div>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('pdetExpTitle')}</h2>
              <ul className="pres-list">
                <li>{t('pdetExpItem1')}</li>
                <li>{t('pdetExpItem2')}</li>
                <li>
                  {t('pdetExpItem3')}
                  <ul className="pres-sub-list">
                    <li>{t('pdetExpSub1')}</li>
                    <li>{t('pdetExpSub2')}</li>
                    <li>{t('pdetExpSub3')}</li>
                  </ul>
                </li>
                <li>{t('pdetExpItem4')}</li>
                <li>{t('pdetExpItem5')}</li>
              </ul>
            </div>
          </motion.div>

          {/* Brand image */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('pdetBrandTitle')}</h2>
              <p className="pres-body-text">{t('pdetBrandText1')}</p>
              <p className="pres-body-text">{t('pdetBrandText2')}</p>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Image size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Image de marque</span>
              </div>
            </div>
          </motion.div>

          {/* Access modalities */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Lock size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Accès</span>
              </div>
            </div>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('pdetAccessTitle')}</h2>
              <p className="pres-body-text">{t('pdetAccessIntro')}</p>
              <ul className="pres-list">
                <li>{t('pdetIntranet')}</li>
                <li>{t('pdetExtranet')}</li>
                <li>{t('pdetInternet')}</li>
              </ul>
              <p className="pres-body-text">{t('pdetAccessChallenge')}</p>
              <ul className="pres-list">
                <li>{t('pdetAccessMemberState')}</li>
                <li>{t('pdetAccessSoftwareEditor')}</li>
                <li>{t('pdetAccessStudyOffice')}</li>
              </ul>
            </div>
          </motion.div>

          {/* Summary objectives */}
          <motion.div className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('pdetSumTitle')}</h2>
              <ul className="pres-list">
                <li>{t('pdetSumObj1')}</li>
                <li>{t('pdetSumObj2')}</li>
                <li>{t('pdetSumObj3')}</li>
              </ul>
            </div>
            <div className="pres-card-media">
              <div className="pres-image-placeholder">
                <Target size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
                <span className="pres-placeholder-label">Résumé</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default PresentationDetail;
