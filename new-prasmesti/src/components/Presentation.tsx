import { motion, type MotionProps } from 'framer-motion';
import { useLanguage } from '../languageContext';
import DirectorSection from './DirectorSection';

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const IMG_BASE = `${import.meta.env.BASE_URL}assets/prasmesti/presentation/`;

function PresImage({ file, alt }: { file: string; alt: string }) {
  return (
    <img className="pres-card-image" src={`${IMG_BASE}${file}`} alt={alt} loading="lazy" />
  );
}

function Presentation() {
  const { language, translate } = useLanguage();
  const t = (key: string) => translate(key) as string;
  const presentationTitle = {
    fr: 'Le PRASMESTI en quelques mots',
    en: 'PRASMESTI in a few words',
    es: 'El PRASMESTI en pocas palabras',
    pt: 'O PRASMESTI em poucas palavras',
  }[language];

  return (
    <section id="presentation" className="pres-page">
      <div className="pres-page-header site-glow-section">
        <div className="hero-backdrop" />
        <div className="site-container pres-header-inner">
          <motion.h1
            className="pres-sub-page-title"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {presentationTitle}
          </motion.h1>
        </div>
      </div>

      <DirectorSection />

      <div className="pres-cards-wrap">
        <div className="site-container pres-cards-inner">
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
              <PresImage file="pres-intro.jpg" alt="Élèves collaborant en classe" />
            </div>
          </motion.section>

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
              <PresImage file="pres-missions.jpg" alt="Élèves en train de lire et d'étudier" />
            </div>
          </motion.section>

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
              <PresImage file="pres-functions.jpg" alt="Tableaux de bord et analyse de données" />
            </div>
          </motion.section>

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
              <PresImage file="pres-objectives.jpg" alt="Équipe unissant ses mains autour d'un projet" />
            </div>
          </motion.section>

          <motion.section id="pres-results" className="pres-card" {...fadeUp}>
            <div className="pres-card-content">
              <h2 className="pres-section-title">{t('presResultsTitle')}</h2>
              <ul className="pres-list">
                <li><strong>{t('presResultsItem1')}</strong></li>
                <li><strong>{t('presResultsItem2')}</strong></li>
              </ul>
            </div>
            <div className="pres-card-media">
              <PresImage file="pres-results.jpg" alt="Présentation de résultats et de statistiques sur écran" />
            </div>
          </motion.section>

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
              <PresImage file="pres-access.jpg" alt="Travail sur ordinateur portable et données" />
            </div>
          </motion.section>

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
              <PresImage file="pres-vision.jpg" alt="Étudiants en laboratoire de sciences" />
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}

export default Presentation;
