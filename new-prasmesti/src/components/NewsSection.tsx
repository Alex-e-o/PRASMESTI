import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsItems } from '../data/siteContent';
import { useLanguage, pick } from '../languageContext';

function NewsSection() {
  const { language, translate } = useLanguage();

  return (
    <section id="news" className="site-glow-section section-shell section-with-divider">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="section-intro section-intro-centered"
        >
          <p className="section-kicker section-kicker-indigo section-kicker-centered">{translate('newsEyebrow')}</p>
          <h2 className="section-title">{translate('newsTitle')}</h2>
        </motion.div>

        <div className="news-grid">
          {newsItems.map((item, index) => {
            // Seules les actualités dotées d'un slug ont une page dédiée : les
            // autres restent des cartes purement informatives.
            const slug = 'slug' in item ? item.slug : undefined;
            const copy = (
              <div className="news-card-copy">
                <p className="news-card-date">{pick(item, 'date', language)}</p>
                <h3 className="news-card-title">{pick(item, 'title', language)}</h3>
                <p className="news-card-body">{pick(item, 'body', language)}</p>
                {slug && (
                  <span className="news-card-link">
                    {translate('newsCardRead')}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                )}
              </div>
            );

            return (
              <motion.article
                key={item.titleEn}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`news-card${slug ? ' is-clickable' : ''}`}
              >
                {slug ? (
                  <Link to={`/news/${slug}`} className="news-card-anchor">
                    <img src={item.image} alt="" className="news-card-image" loading="lazy" decoding="async" />
                    {copy}
                  </Link>
                ) : (
                  <>
                    <img src={item.image} alt="" className="news-card-image" loading="lazy" decoding="async" />
                    {copy}
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
