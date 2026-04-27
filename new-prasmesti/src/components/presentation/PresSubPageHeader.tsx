import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../languageContext';

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

interface Props {
  currentLabel: string;
  title: string;
  subtitle?: string;
}

function PresSubPageHeader({ currentLabel, title, subtitle }: Props) {
  const { translate } = useLanguage();

  return (
    <div className="pres-page-header site-glow-section">
      <div className="hero-backdrop" />
      <div className="site-container pres-header-inner">
        <motion.nav className="pres-page-eyebrow" aria-label="Breadcrumb" {...fadeUp}>
          <Link to="/" className="pres-page-eyebrow-link">
            {translate('navHome') as string}
          </Link>
          <ChevronRight className="pres-page-eyebrow-separator" size={26} strokeWidth={2.2} aria-hidden="true" />
          <Link to="/presentation" className="pres-page-eyebrow-link">
            {translate('navPresentation') as string}
          </Link>
          <ChevronRight className="pres-page-eyebrow-separator" size={26} strokeWidth={2.2} aria-hidden="true" />
          <span className="pres-page-eyebrow-current">{currentLabel}</span>
        </motion.nav>
        <motion.h1
          className="pres-sub-page-title"
          {...fadeUp}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="pres-sub-page-subtitle"
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export default PresSubPageHeader;
