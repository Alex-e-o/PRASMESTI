import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../languageContext';

function Footer() {
  const { language, translate } = useLanguage();

  const footerKicker = language === 'fr' ? 'Informer pour orienter' : 'Inform to orient';
  const footerBody = language === 'fr'
    ? "Le PRASMESTI (Portail Regional d'Aide au Suivi en matiere d'Education, Sciences, Technologie et Innovation) est au service des Etats membres de la CEEAC."
    : 'PRASMESTI (Regional Portal for Monitoring Assistance in Education, Sciences, Technology and Innovation) serves the ECCAS Member States.';
  const footerContactTitle = language === 'fr' ? 'Contactez-nous' : 'Contact us';
  const footerMoreTitle = language === 'fr' ? 'En savoir plus' : 'Learn more';
  const moreLinks = [
    { label: language === 'fr' ? 'Actualites' : 'News', to: '/' },
    { label: 'FAQ' },
    { label: language === 'fr' ? 'Projets' : 'Projects' },
    { label: 'ORESTI' },
    { label: 'PRASMESTI' },
    { label: 'FACESTI' },
    { label: 'CHARMESTI' },
    { label: 'FINESTI' },
    { label: 'AGRESTI' },
    { label: footerContactTitle, href: 'mailto:prasmesti@ceeac-eccas.org' },
  ];

  return (
    <footer className="site-footer">
      <div className="site-container footer-shell">
        <div className="footer-grid">
          <div>
            <p className="section-kicker">{footerKicker}</p>
            <h2 className="footer-title">PRASMESTI</h2>
            <p className="footer-body">{footerBody}</p>
          </div>

          <div className="footer-links-grid">
            <h3 className="footer-contact-title">{footerMoreTitle}</h3>
            <div className="footer-pill-list">
              {moreLinks.map((item) => (
                item.to ? (
                  <Link key={item.label} to={item.to} className="footer-link-pill">
                    {item.label}
                  </Link>
                ) : item.href ? (
                  <a key={item.label} href={item.href} className="footer-link-pill">
                    {item.label}
                  </a>
                ) : (
                  <span key={item.label} className="footer-link-pill footer-link-pill-disabled">
                    {item.label}
                  </span>
                )
              ))}
            </div>
          </div>

          <div className="footer-contact-grid">
            <h3 className="footer-contact-title">{footerContactTitle}</h3>
            <div className="footer-contact-card">
              <MapPin size={18} className="footer-contact-icon" />
              <p className="footer-contact-text">Bd Triomphal, Libreville, Gabon</p>
            </div>
            <div className="footer-contact-card">
              <Phone size={18} className="footer-contact-icon" />
              <p className="footer-contact-text">+241 77 05 66 49</p>
            </div>
            <div className="footer-contact-card">
              <Mail size={18} className="footer-contact-icon" />
              <p className="footer-contact-text">prasmesti@ceeac-eccas.org</p>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          Copyright © PRASMESTI 2026. {translate('footerRights')}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
