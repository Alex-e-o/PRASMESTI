import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from '../theme-context';
import { useLanguage } from '../languageContext';

const AnimatedThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { translate } = useLanguage();
  const isLight = theme === 'light';
  const label = translate(isLight ? 'ariaThemeDark' : 'ariaThemeLight') as string;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={label}
      title={label}
    >
      <motion.div
        className="theme-toggle-thumb"
        animate={{ x: isLight ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ scale: 0.65, rotate: -80, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.65, rotate: 80, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="theme-toggle-icon"
          >
            {isLight ? <SunMedium size={15} /> : <Moon size={15} />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </button>
  );
};

export default AnimatedThemeToggle;
