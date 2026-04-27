import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { eccasFlags } from '../data/eccasFlags';
import { useLanguage } from '../languageContext';

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function HomeFlagStrip() {
  const { language, translate } = useLanguage();
  const setRef = useRef<HTMLDivElement | null>(null);
  const baseX = useMotionValue(0);
  const [loopWidth, setLoopWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!setRef.current) return;

    const updateLoopWidth = () => {
      setLoopWidth(setRef.current?.offsetWidth ?? 0);
    };

    updateLoopWidth();

    const observer = new ResizeObserver(updateLoopWidth);
    observer.observe(setRef.current);
    window.addEventListener('resize', updateLoopWidth);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateLoopWidth);
    };
  }, []);

  useAnimationFrame((_, delta) => {
    if (!loopWidth || isPaused) return;
    baseX.set(baseX.get() - 54 * (delta / 1000));
  });

  const x = useTransform(baseX, (v) => {
    if (!loopWidth) return '0px';
    return `${wrap(-loopWidth, 0, v)}px`;
  });

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!loopWidth) return;

    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (!delta) return;

    event.preventDefault();
    baseX.set(baseX.get() - delta);
  };

  const cards = eccasFlags.map((flag) => (
    <article key={flag.image} className="home-flag-card">
      <img
        src={flag.image}
        alt={language === 'fr' ? flag.nameFr : flag.nameEn}
        className="home-flag-image"
      />
      <p className="home-flag-name">{language === 'fr' ? flag.nameFr : flag.nameEn}</p>
    </article>
  ));

  return (
    <section className="home-flag-strip-section">
      <div className="site-container">
        <div className="home-flag-strip-shell">
          <h2 className="home-flag-strip-title">
            {language === 'fr' ? 'Etats membres de la CEEAC' : 'ECCAS Member States'}
          </h2>

          <div
            className="home-flag-marquee"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onWheel={handleWheel}
          >
            <motion.div className="home-flag-track" style={{ x }}>
              <div ref={setRef} className="home-flag-set">
                {cards}
              </div>
              <div className="home-flag-set" aria-hidden="true">
                {cards}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeFlagStrip;
