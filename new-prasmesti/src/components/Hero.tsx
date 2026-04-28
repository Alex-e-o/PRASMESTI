import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../languageContext';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const SLIDE_DURATION = 6000;

function TextAnimate({ text, slideKey }: { text: string; slideKey: string }) {
  const words = text.split(' ');
  return (
    <span aria-label={text} style={{ display: 'inline' }}>
      {words.map((word, i) => (
        <motion.span
          key={`${slideKey}-${i}`}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ x: 28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.45, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

function Hero() {
  const { language, translate } = useLanguage();
  const [slide, setSlide] = useState(0);
  const [showPillars, setShowPillars] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides = [
    {
      eyebrow: translate('heroEyebrow') as string,
      title: translate('heroTitle') as string,
      image: `${import.meta.env.BASE_URL}assets/prasmesti/home/hero/hero-1.jpg`,
    },
    {
      eyebrow: translate('heroSubtitle2') as string,
      title: translate('heroBody') as string,
      image: `${import.meta.env.BASE_URL}assets/prasmesti/home/hero/hero-2.jpg`,
    },
  ];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [language]);

  const current = slides[slide];
  const slideKey = `${slide}-${language}`;
  const helperPillars = language === 'fr'
    ? ['Eclairer', 'Orienter', 'Informer', 'Transformer']
    : ['Illuminate', 'Orient', 'Inform', 'Transform'];

  return (
    <section id="hero" className="site-glow-section hero-section">
      {/* Rotating background image */}
      <div className="hero-bg-wrap">
        <AnimatePresence mode="wait">
          <motion.img
            key={slideKey + '-bg'}
            src={current.image}
            alt=""
            aria-hidden="true"
            className="hero-bg-image"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {/* Dark scrim over the image */}
      <div className="hero-backdrop" />

      {/* Content */}
      <div className="site-container hero-content">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-copy"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={slideKey + '-copy'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <div className="hero-eyebrow">
                <Sparkles size={14} />
                <TextAnimate text={current.eyebrow} slideKey={slideKey + '-eyebrow'} />
              </div>
              <h1 className="hero-title">
                <TextAnimate text={current.title} slideKey={slideKey + '-title'} />
              </h1>
            </motion.div>
          </AnimatePresence>

          <div className="hero-actions">
            <button
              type="button"
              onClick={() => scrollToSection('president')}
              className="hero-button hero-button-primary theme-action"
            >
              {translate('heroPrimary')}
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('news')}
              className="hero-button hero-button-secondary"
            >
              {translate('heroSecondary')}
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-card">
              <p className="hero-stat-value">11</p>
              <p className="hero-stat-label">{translate('heroStatOneLabel')}</p>
            </div>
            <button
              type="button"
              onClick={() => setShowPillars(!showPillars)}
              className={`hero-stat-card hero-stat-card-interactive ${showPillars ? 'active' : ''}`}
            >
              <p className="hero-stat-value">04</p>
              <p className="hero-stat-label">{translate('heroStatTwoLabel')}</p>
            </button>
            <div className="hero-stat-card">
              <p className="hero-stat-value">{translate('heroStatThreeValue')}</p>
              <p className="hero-stat-label">{translate('heroStatThreeLabel')}</p>
            </div>
          </div>

          <AnimatePresence>
            {showPillars && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 22 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="hero-pillars-helper"
                style={{ overflow: 'hidden' }}
              >
                <p className="hero-pillars-helper-title">
                  {language === 'fr' ? 'Les 4 piliers du PRASMESTI' : 'The 4 PRASMESTI pillars'}
                </p>
                <div className="hero-pillars-helper-chips">
                  {helperPillars.map((pillar) => (
                    <span key={pillar} className="hero-pillars-helper-chip">{pillar}</span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="hero-slide-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                className={`hero-slide-dot${i === slide ? ' hero-slide-dot-active' : ''}`}
                onClick={() => {
                  setSlide(i);
                  if (timerRef.current) clearInterval(timerRef.current);
                  timerRef.current = setInterval(() => {
                    setSlide((s) => (s + 1) % slides.length);
                  }, SLIDE_DURATION);
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
