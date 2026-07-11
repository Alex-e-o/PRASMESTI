import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { commissionerVoices } from '../data/siteContent';
import { useLanguage, pick, type Language } from '../languageContext';

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

// Marqueurs par langue pour isoler l'intitulé du poste sur une 2e ligne.
const ROLE_MARKERS = ['en charge de', 'in charge of', 'encargado d', 'encarregado d'];

function formatRole(role: string) {
  const lower = role.toLowerCase();
  let index = -1;
  for (const marker of ROLE_MARKERS) {
    const found = lower.indexOf(marker);
    if (found !== -1 && (index === -1 || found < index)) index = found;
  }
  if (index === -1) return role;
  return (
    <>
      {role.slice(0, index).trimEnd()}
      <br />
      {role.slice(index)}
    </>
  );
}

function VoiceCard({ voice, language }: { voice: VoiceEntry; language: Language }) {
  const record = voice as unknown as Record<string, unknown>;
  return (
    <div className="voice-marquee-card">
      <img src={voice.image} alt={`${voice.nameFirst} ${voice.nameLast}`} className="voice-marquee-photo" />
      <div className="voice-marquee-body">
        <p className="voice-marquee-quote">
          {pick(record, 'quote', language)}
        </p>
        <div className="voice-marquee-footer">
          <p className="voice-marquee-name-first">{voice.nameFirst}</p>
          <p className="voice-marquee-name-last">{voice.nameLast}</p>
          <p className="voice-marquee-role">
            {formatRole(pick(record, 'role', language))}
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
            aria-label={translate('ariaPrevTestimonial')}
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
            aria-label={translate('ariaNextTestimonial')}
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
              aria-label={`${translate('ariaTestimonial')} ${i + 1}`}
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
