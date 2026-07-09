import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import { eccasFlags } from '../data/eccasFlags';
import { useLanguage, pick } from '../languageContext';

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

function HomeFlagStrip() {
  const { language, translate } = useLanguage();
  const setRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const baseX = useMotionValue(0);
  const [loopWidth, setLoopWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [inView, setInView] = useState(true);
  const prefersReduced = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

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
    if (!loopWidth || isPaused || !inView || prefersReduced.current) return;
    baseX.set(baseX.get() - 54 * (delta / 1000));
  });

  // Suspend la boucle quand le bandeau est hors écran (perf).
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Listener wheel non-passif : preventDefault fonctionne (contrairement à onWheel React passif).
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const onWheel = (event: WheelEvent) => {
      if (!loopWidth) return;
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      if (!delta) return;
      event.preventDefault();
      baseX.set(baseX.get() - delta);
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [loopWidth]);

  const x = useTransform(baseX, (v) => {
    if (!loopWidth) return '0px';
    return `${wrap(-loopWidth, 0, v)}px`;
  });

  const cards = eccasFlags.map((flag) => (
    <article key={flag.image} className="home-flag-card">
      <img
        src={flag.image}
        alt={pick(flag, 'name', language)}
        className="home-flag-image"
      />
      <p className="home-flag-name">{pick(flag, 'name', language)}</p>
    </article>
  ));

  return (
    <section className="home-flag-strip-section">
      <div className="site-container">
        <div className="home-flag-strip-shell">
          <h2 className="home-flag-strip-title">
            {translate('implCountriesTitle') as string}
          </h2>

          <div
            ref={marqueeRef}
            className="home-flag-marquee"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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
