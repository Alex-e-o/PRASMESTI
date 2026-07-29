import { motion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { ArrowLeft, CalendarDays, ChevronRight, Download, MapPin, Mic, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import EventVideo from './EventVideo';
import { newsDetails } from '../../data/siteContent';
import { useLanguage, pick, pickArray } from '../../languageContext';

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

interface Props {
  slug: string;
}

function NewsDetail({ slug }: Props) {
  const { language, translate } = useLanguage();
  const t = (key: string) => translate(key) as string;
  const navigate = useNavigate();
  const detail = newsDetails[slug];

  // Les actualités vivent dans la section #news de l'accueil : on y retourne en
  // attendant que la home (chargée en lazy) ait monté l'ancre.
  const goToNews = () => {
    navigate('/');
    let attempts = 0;
    const tryScroll = () => {
      const target = document.getElementById('news');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else if (attempts++ < 20) setTimeout(tryScroll, 100);
    };
    setTimeout(tryScroll, 100);
  };

  if (!detail) {
    return (
      <section className="pres-page">
        <div className="pres-page-header site-glow-section">
          <div className="hero-backdrop" />
          <div className="site-container pres-header-inner">
            <h1 className="pres-sub-page-title">{t('newsDetailMissing')}</h1>
            <button type="button" className="news-detail-back" onClick={goToNews}>
              <ArrowLeft size={18} /> {t('newsDetailBack')}
            </button>
          </div>
        </div>
      </section>
    );
  }

  const title = pick(detail, 'title', language);
  const meta = [
    { icon: CalendarDays, label: t('newsDetailDate'), value: pick(detail, 'date', language) },
    { icon: MapPin, label: t('newsDetailPlace'), value: pick(detail, 'place', language) },
    { icon: Users, label: t('newsDetailHost'), value: pick(detail, 'host', language) },
  ];

  return (
    <section id="news-detail" className="pres-page">
      <div className="pres-page-header site-glow-section">
        <div className="hero-backdrop" />
        <div className="site-container pres-header-inner">
          <motion.nav className="pres-page-eyebrow" aria-label="Breadcrumb" {...fadeUp}>
            <Link to="/" className="pres-page-eyebrow-link">{t('navHome')}</Link>
            <ChevronRight className="pres-page-eyebrow-separator" size={26} strokeWidth={2.2} aria-hidden="true" />
            <button type="button" className="pres-page-eyebrow-link" onClick={goToNews}>
              {t('navNews')}
            </button>
            <ChevronRight className="pres-page-eyebrow-separator" size={26} strokeWidth={2.2} aria-hidden="true" />
            <span className="pres-page-eyebrow-current">{pick(detail, 'date', language)}</span>
          </motion.nav>

          <motion.p
            className="news-detail-kicker"
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            {pick(detail, 'kicker', language)}
          </motion.p>
          <motion.h1
            className="pres-sub-page-title"
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="pres-sub-page-subtitle"
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {pick(detail, 'subtitle', language)}
          </motion.p>
        </div>
      </div>

      <div className="news-detail-wrap">
        <div className="site-container news-detail-inner">
          <motion.div className="news-detail-video-block" {...fadeUp}>
            <p className="section-kicker section-kicker-indigo">{t('newsDetailVideoTitle')}</p>
            <EventVideo src={detail.video} poster={detail.poster} label={title} />
            <div className="news-detail-video-foot">
              <p className="news-detail-video-hint">{t('newsDetailVideoHint')}</p>
              <a className="news-detail-download" href={detail.video} download>
                <Download size={16} aria-hidden="true" /> {t('newsDetailDownload')}
              </a>
            </div>
          </motion.div>

          <motion.ul className="news-detail-meta" {...fadeUp}>
            {meta.map(({ icon: Icon, label, value }) => (
              <li key={label} className="news-detail-meta-item">
                <Icon size={20} strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <span className="news-detail-meta-label">{label}</span>
                  <span className="news-detail-meta-value">{value}</span>
                </div>
              </li>
            ))}
          </motion.ul>

          <motion.div className="news-detail-body" {...fadeUp}>
            {pickArray(detail, 'body', language).map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="news-detail-paragraph">{paragraph}</p>
            ))}
          </motion.div>

          <motion.div className="news-detail-panel" {...fadeUp}>
            <h2 className="news-detail-panel-title">
              <Mic size={20} strokeWidth={1.7} aria-hidden="true" /> {t('newsDetailHighlights')}
            </h2>
            <ul className="news-detail-list">
              {pickArray(detail, 'highlights', language).map((item) => (
                <li key={item.slice(0, 40)}>{item}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="news-detail-panel" {...fadeUp}>
            <h2 className="news-detail-panel-title">
              <Users size={20} strokeWidth={1.7} aria-hidden="true" /> {t('newsDetailSpeakers')}
            </h2>
            <ul className="news-detail-speakers">
              {detail.speakers.map((speaker) => (
                <li key={speaker.name} className="news-detail-speaker">
                  <span className="news-detail-speaker-name">{speaker.name}</span>
                  <span className="news-detail-speaker-role">{pick(speaker, 'role', language)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="news-detail-back-wrap" {...fadeUp}>
            <button type="button" className="news-detail-back" onClick={goToNews}>
              <ArrowLeft size={18} aria-hidden="true" /> {t('newsDetailBack')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default NewsDetail;
