import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import PresSubPageHeader from './PresSubPageHeader';
import { useLanguage } from '../../languageContext';
import { prasmestiTeam } from '../../data/siteContent';

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

function Responsables() {
  const { language, translate } = useLanguage();
  const t = (key: string) => translate(key) as string;
  const isFr = language === 'fr';

  return (
    <section id="responsables" className="pres-page">
      <PresSubPageHeader
        currentLabel={t('navPresentationLeads')}
        title={t('respTitleH2')}
        subtitle={t('respEccasCommission')}
      />

      <div className="pres-cards-wrap">
        <div className="site-container">
          <div className="pres-team-grid">
            {prasmestiTeam.map((member, i) => (
              <motion.div
                key={member.name}
                className="pres-team-card"
                {...fadeUp}
                transition={{ duration: 0.5, delay: (i % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="pres-team-avatar">
                  {member.initials}
                </div>
                <h3 className="pres-team-name">{member.name}</h3>
                <p className="pres-team-role">
                  {isFr ? member.roleFr : member.roleEn}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Responsables;
