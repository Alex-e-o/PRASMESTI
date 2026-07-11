import { Link, useNavigate } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../languageContext';

function Footer() {
  const { language, translate } = useLanguage();
  const navigate = useNavigate();

  const goToNews = () => {
    navigate('/');
    // La home est chargée en lazy : on attend l'apparition de #news (polling).
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById('news');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      else if (attempts++ < 20) setTimeout(tryScroll, 100);
    };
    setTimeout(tryScroll, 100);
  };

  const footerKicker = {
    fr: 'Éclairer pour Orienter',
    en: 'Enlighten to Orient',
    es: 'Iluminar para Orientar',
    pt: 'Iluminar para Orientar',
  }[language];
  const footerBody = {
    fr: "Le PRASMESTI (Portail Régional d'Aide au Suivi en matière d'Éducation, Sciences, Technologie et Innovation) est au service des États membres de la CEEAC.",
    en: 'PRASMESTI (Regional Portal for Monitoring Assistance in Education, Sciences, Technology and Innovation) serves the ECCAS Member States.',
    es: 'El PRASMESTI (Portal Regional de Apoyo al Seguimiento en materia de Educación, Ciencias, Tecnología e Innovación) está al servicio de los Estados miembros de la CEEAC.',
    pt: 'O PRASMESTI (Portal Regional de Apoio ao Acompanhamento em matéria de Educação, Ciências, Tecnologia e Inovação) está ao serviço dos Estados-membros da CEEAC.',
  }[language];
  const footerContactTitle = {
    fr: 'Contactez-nous', en: 'Contact us', es: 'Contáctenos', pt: 'Contacte-nos',
  }[language];
  const footerMoreTitle = {
    fr: 'En savoir plus', en: 'Learn more', es: 'Saber más', pt: 'Saber mais',
  }[language];
  const newsLabel = { fr: 'Actualités', en: 'News', es: 'Actualidad', pt: 'Notícias' }[language];
  const projectsLabel = { fr: 'Projets', en: 'Projects', es: 'Proyectos', pt: 'Projetos' }[language];
  const moreLinks = [
    { label: newsLabel, onClick: goToNews },
    { label: 'FAQ' },
    { label: projectsLabel },
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
                item.onClick ? (
                  <button key={item.label} type="button" onClick={item.onClick} className="footer-link-pill">
                    {item.label}
                  </button>
                ) : item.to ? (
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
