import { motion, type MotionProps } from 'framer-motion';
import { BookOpen, Target, Zap, TrendingUp, Lock, Eye } from 'lucide-react';
import { useLanguage } from '../languageContext';

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

function ImagePlaceholder({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="pres-image-placeholder">
      <Icon size={52} strokeWidth={1.2} className="pres-placeholder-icon" />
      <span className="pres-placeholder-label">{label}</span>
    </div>
  );
}

function Presentation() {
  const { translate } = useLanguage();
  const t = (key: string) => translate(key) as string;

  const titleLine2 = t('presPageTitleLine2');

  return (
    <section id="presentation" className="pres-page">

      {/* ── Page header ── */}
      <div className="pres-page-header site-glow-section">
        <div className="hero-backdrop" />
        <div className="site-container pres-header-inner">
          <motion.span className="pres-page-eyebrow" {...fadeUp}>
            {t('presEyebrow')}
          </motion.span>
          <motion.div
            className="pres-pyramid-title"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="pres-pyramid-line-1">{t('presPageTitleLine1')}</span>
            {titleLine2 && <span className="pres-pyramid-line-2">{titleLine2}</span>}
            <span className="pres-pyramid-line-3">PRASMESTI ?</span>
          </motion.div>
        </div>
      </div>

      {/* ── Cards ── */}
      <div className="pres-cards-wrap">
        <div className="site-container pres-cards-inner">

          {/* 0 — Introduction */}
          <motion.section id="pres-intro" className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <p className="pres-lead-text">
                <strong className="pres-highlight">{t('presPlatformHighlight')}</strong>{' '}
                {t('presPlatformRest')}
              </p>
              <p className="pres-why-q">
                <strong>{t('presWhyQ')}</strong>
              </p>
              <ul className="pres-check-list">
                <li>{t('presWhyItem1')} ;</li>
                <li>{t('presWhyItem2')} ;</li>
                <li>{t('presWhyItem3')}.</li>
              </ul>
            </div>
            <div className="pres-card-media">
              <ImagePlaceholder icon={BookOpen} label="Introduction" />
            </div>
          </motion.section>

          {/* 1 — Missions */}
          <motion.section id="pres-missions" className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('presMissionsTitle')}</h2>
              <p className="pres-body-text">{t('presMissionsIntro')}</p>
              <ul className="pres-list">
                <li><strong>{t('presMissionsItem1')}</strong></li>
                <li><strong>{t('presMissionsItem2')}</strong></li>
                <li><strong>{t('presMissionsItem3')}</strong></li>
                <li><strong>{t('presMissionsItem4')}</strong></li>
              </ul>
            </div>
            <div className="pres-card-media">
              <ImagePlaceholder icon={Target} label="Missions" />
            </div>
          </motion.section>

          {/* 2 — Functions */}
          <motion.section id="pres-functions" className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('presFunctionsTitle')}</h2>
              <p className="pres-body-text">{t('presFunctionsIntro')}</p>
              <h3 className="pres-sub-block-title">{t('presFunctionsSub1')}</h3>
              <ul className="pres-list">
                <li>{t('presFunctionsItem1')}</li>
                <li>{t('presFunctionsItem2')}</li>
              </ul>
            </div>
            <div className="pres-card-media">
              <ImagePlaceholder icon={Zap} label="Fonctions" />
            </div>
          </motion.section>

          {/* 3 — Objectives */}
          <motion.section id="pres-objectives" className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('presObjectivesTitle')}</h2>
              <p className="pres-body-text">{t('presObjectivesIntro')}</p>
              <ol className="pres-ol">
                <li><strong>{t('presObjectivesItem1')}</strong></li>
                <li><strong>{t('presObjectivesItem2')}</strong></li>
              </ol>
            </div>
            <div className="pres-card-media">
              <ImagePlaceholder icon={TrendingUp} label="Objectifs" />
            </div>
          </motion.section>

          {/* 4 — Results */}
          <motion.section id="pres-results" className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('presResultsTitle')}</h2>
              <ul className="pres-list">
                <li><strong>{t('presResultsItem1')}</strong></li>
                <li><strong>{t('presResultsItem2')}</strong></li>
              </ul>
            </div>
            <div className="pres-card-media">
              <ImagePlaceholder icon={TrendingUp} label="Résultats" />
            </div>
          </motion.section>

          {/* 5 — Access */}
          <motion.section id="pres-access" className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('presAccessTitle')}</h2>
              <p className="pres-body-text">{t('presAccessIntro')}</p>
              <ul className="pres-list">
                <li><strong>{t('presAccessIntranet')}</strong></li>
                <li><strong>{t('presAccessExtranet')}</strong></li>
                <li><strong>{t('presAccessInternet')}</strong></li>
              </ul>
            </div>
            <div className="pres-card-media">
              <ImagePlaceholder icon={Lock} label="Accès" />
            </div>
          </motion.section>

          {/* 6 — Vision */}
          <motion.section id="pres-vision" className="pres-card pres-card-vision" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('presVisionTitle')}</h2>
              <p className="pres-body-text">
                {t('presVisionText1Pre')}{' '}
                <strong className="pres-highlight">{t('presVisionText1Bold')}</strong>.
              </p>
              <p className="pres-vision-quote">
                <strong>{t('presVisionText2')}</strong>
              </p>
            </div>
            <div className="pres-card-media">
              <ImagePlaceholder icon={Eye} label="Vision" />
            </div>
          </motion.section>

        </div>
      </div>
    </section>
  );
}

export default Presentation;
