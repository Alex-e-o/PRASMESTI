import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { Database, Users, Star } from 'lucide-react';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage } from '../../languageContext';

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const cards = [
  {
    icon: Database,
    titleKey: 'communityCardOneTitle' as const,
    bodyKey: 'communityCardOneBody' as const,
  },
  {
    icon: Users,
    titleKey: 'communityCardTwoTitle' as const,
    bodyKey: 'communityCardTwoBody' as const,
  },
  {
    icon: Star,
    titleKey: 'communityCardThreeTitle' as const,
    bodyKey: 'communityCardThreeBody' as const,
  },
];

function WhyPrasmesti() {
  const { translate } = useLanguage();
  const t = (key: string) => translate(key) as string;

  return (
    <section id="why-prasmesti" className="pres-page">
      <PresSubPageHeader
        currentLabel={t('navPresentationWhy')}
        title={t('whyPageTitle')}
      />

      <div className="pres-cards-wrap">
        <div className="site-container">
          <div className="pres-why-grid">
            {cards.map(({ icon: Icon, titleKey, bodyKey }, i) => (
              <motion.div
                key={titleKey}
                className="pres-why-card"
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="pres-why-card-icon">
                  <Icon size={32} strokeWidth={1.4} />
                </div>
                <h2 className="pres-why-card-title">{t(titleKey)}</h2>
                <p className="pres-why-card-body">{t(bodyKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyPrasmesti;
