import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion';
import { commissionerVoices } from '../data/siteContent';
import { useLanguage } from '../languageContext';

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

interface VoiceEntry {
  nameFirst: string;
  nameLast: string;
  roleEn: string;
  roleFr: string;
  quoteEn: string;
  quoteFr: string;
  image: string;
}

function VoiceCard({ voice, language }: { voice: VoiceEntry; language: 'en' | 'fr' }) {
  return (
    <div className="voice-marquee-card">
      <img src={voice.image} alt={voice.nameFirst} className="voice-marquee-photo" />
      <div className="voice-marquee-body">
        <p className="voice-marquee-quote">
          {language === 'fr' ? voice.quoteFr : voice.quoteEn}
        </p>
        <div className="voice-marquee-footer">
          <p className="voice-marquee-name-first">{voice.nameFirst}</p>
          <p className="voice-marquee-name-last">{voice.nameLast}</p>
          <p className="voice-marquee-role">
            {language === 'fr' ? voice.roleFr : voice.roleEn}
          </p>
        </div>
      </div>
    </div>
  );
}

function VelocityRow({
  voices,
  baseVelocity,
  language,
}: {
  voices: VoiceEntry[];
  baseVelocity: number;
  language: 'en' | 'fr';
}) {
  const setRef = useRef<HTMLDivElement | null>(null);
  const baseX = useMotionValue(0);
  const [loopWidth, setLoopWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const directionFactor = useRef<number>(1);

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

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => {
    if (!loopWidth) return '0px';
    return `${wrap(-loopWidth, 0, v)}px`;
  });

  const cards = voices.map((voice, i) => (
    <VoiceCard key={i} voice={voice} language={language} />
  ));

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (!loopWidth) return;

    const horizontalDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ? event.deltaX
      : event.deltaY;

    if (horizontalDelta === 0) return;

    event.preventDefault();
    baseX.set(baseX.get() - horizontalDelta);
  };

  return (
    <div
      className="voices-marquee-row"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onWheel={handleWheel}
    >
      <motion.div className="voices-marquee-track" style={{ x }}>
        <div ref={setRef} className="voices-marquee-set">
          {cards}
        </div>
        <div className="voices-marquee-set" aria-hidden="true">
          {cards}
        </div>
      </motion.div>
    </div>
  );
}

function CommissionerVoices() {
  const { language, translate } = useLanguage();

  return (
    <section id="voices" className="site-glow-section section-shell section-with-divider voices-marquee-section">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="section-intro"
        >
          <p className="section-kicker">{translate('voicesEyebrow')}</p>
          <h2 className="section-title">{translate('voicesTitle')}</h2>
          <p className="section-body">{translate('voicesIntro')}</p>
        </motion.div>
      </div>

      <div className="voices-marquee-wrap">
        <VelocityRow voices={commissionerVoices} baseVelocity={72} language={language} />
      </div>

      <div className="voices-marquee-fade voices-marquee-fade-left" />
      <div className="voices-marquee-fade voices-marquee-fade-right" />
    </section>
  );
}

export default CommissionerVoices;
