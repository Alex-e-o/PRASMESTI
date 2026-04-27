import React from 'react';
import { motion } from 'framer-motion';
import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from '../theme-context';

const AnimatedThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className="theme-toggle-thumb"
        animate={{ x: isLight ? 28 : 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
      >
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
      </motion.div>
    </button>
  );
};

export default AnimatedThemeToggle;
