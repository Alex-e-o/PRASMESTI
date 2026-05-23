import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage, pick, pickArray } from '../../languageContext';
import { conceptionSteps } from '../../data/siteContent';

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

function Conception() {
  const { language, translate } = useLanguage();
  const t = (key: string) => translate(key) as string;

  return (
    <section id="conception" className="pres-page">
      <PresSubPageHeader currentLabel={t('navPresentationDesign')} title={t('conTitleH1')} />

      {/* Objective banner */}
      <div className="site-container">
        <motion.div className="pres-con-objective" {...fadeUp}>
          <strong>{t('conMainObjective')}</strong> {t('conMainObj')}
        </motion.div>
      </div>

      {/* Steps grid */}
      <div className="pres-cards-wrap">
        <div className="site-container">
          <div className="pres-steps-grid">
            {conceptionSteps.map((step, i) => (
              <motion.div
                key={step.step}
                className="pres-step-card"
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="pres-step-number">{String(step.step).padStart(2, '0')}</div>
                <h3 className="pres-step-title">
                  {pick(step, 'title', language)}
                </h3>
                <ul className="pres-step-list">
                  {pickArray(step, 'items', language).map((item, j) => (
                    <li key={j}>
                      <CheckCircle2 size={14} className="pres-step-check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Conception;
