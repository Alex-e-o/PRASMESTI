import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { commissionerVoices } from '../data/siteContent';
import { useLanguage } from '../languageContext';

const SLIDE_DURATION = 7000;

interface VoiceEntry {
  nameFirst: string;
  nameLast: string;
  roleEn: string;
  roleFr: string;
  quoteEn: string;
  quoteFr: string;
  image: string;
}

function formatRole(role: string) {
  const marker = 'en charge de';
  const index = role.toLowerCase().indexOf(marker);
  if (index === -1) return role;
  const splitIndex = index + marker.length;
  return (
    <>
      {role.slice(0, splitIndex)}
      <br />
      {role.slice(splitIndex).trimStart()}
    </>
  );
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
            {formatRole(language === 'fr' ? voice.roleFr : voice.roleEn)}
          </p>
        </div>
      </div>
    </div>
  );
}

function CommissionerVoices() {
  const { language, translate } = useLanguage();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = commissionerVoices.length;

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  const goTo = (i: number) => setIndex(((i % total) + total) % total);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const current = commissionerVoices[index];

  return (
    <section
      id="voices"
      className="site-glow-section section-shell section-with-divider voices-marquee-section"
    >
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

        <div
          className="voices-single-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            type="button"
            aria-label="Previous testimonial"
            className="voices-single-arrow voices-single-arrow-prev"
            onClick={prev}
          >
            <ChevronLeft size={22} />
          </button>

          <div className="voices-single-stage">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${index}-${language}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="voices-single-slide"
              >
                <VoiceCard voice={current} language={language} />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            aria-label="Next testimonial"
            className="voices-single-arrow voices-single-arrow-next"
            onClick={next}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="voices-single-dots">
          {commissionerVoices.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Testimonial ${i + 1}`}
              className={`voices-single-dot${i === index ? ' voices-single-dot-active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommissionerVoices;
