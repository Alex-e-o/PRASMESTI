import React from 'react';
import { Globe, ChevronDown, LogIn, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import AnimatedThemeToggle from './AnimatedThemeToggle';
import { useLanguage, LANGUAGES, pick } from '../languageContext';
import { eccasFlags } from '../data/eccasFlags';

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

interface DropdownItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

function NavDropdown({ label, items, onLabelClick }: { label: string; items: DropdownItem[]; onLabelClick?: () => void }) {
  return (
    <div className="site-nav-dropdown-wrap">
      <button type="button" onClick={onLabelClick} className="site-nav-link site-nav-dropdown-trigger">
        {label}
        <ChevronDown size={13} className="site-nav-chevron" />
      </button>
      <div className="site-nav-dropdown">
        {items.map((item) =>
          item.onClick ? (
            <button
              key={item.label}
              type="button"
              onClick={item.onClick}
              className="site-nav-dropdown-item"
            >
              {item.label}
            </button>
          ) : (
            <a key={item.label} href={item.href ?? '#'} className="site-nav-dropdown-item">
              {item.label}
            </a>
          )
        )}
      </div>
    </div>
  );
}

function Navbar() {
  const { language, setLanguage, translate } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile à chaque changement de route.
  React.useEffect(() => setMenuOpen(false), [location.pathname]);

  const t = (key: string) => translate(key) as string;
  // Exécute l'action puis ferme le menu mobile.
  const closeAnd = (fn?: () => void) => () => {
    fn?.();
    setMenuOpen(false);
  };
  const goToNews = () => {
    if (location.pathname === '/') {
      scrollToSection('news');
      return;
    }
    navigate('/');
    // La home est chargée en lazy : on attend l'apparition de #news (polling).
    let attempts = 0;
    const tryScroll = () => {
      if (document.getElementById('news')) scrollToSection('news');
      else if (attempts++ < 20) setTimeout(tryScroll, 100);
    };
    setTimeout(tryScroll, 100);
  };

  const goToPresSection = (sectionId: string) => {
    if (location.pathname === '/presentation') {
      scrollToSection(sectionId);
    } else {
      navigate('/presentation');
      setTimeout(() => scrollToSection(sectionId), 350);
    }
  };

  const presentationItems: DropdownItem[] = [
    { label: t('navPresentationWhat'), onClick: () => navigate('/presentation/what') },
    { label: t('navPresentationWhy'), onClick: () => navigate('/presentation/why') },
    { label: t('navPresentationObjectives'), onClick: () => navigate('/presentation/objectives') },
    { label: t('navPresentationExpectations'), onClick: () => navigate('/presentation/expectations') },
    { label: t('navPresentationIssues'), onClick: () => navigate('/presentation/issues') },
    { label: t('navPresentationDesign'), onClick: () => navigate('/presentation/design') },
    { label: t('navPresentationLeads'), onClick: () => navigate('/presentation/leads') },
  ];

  const normativeItems: DropdownItem[] = [
    { label: t('navContinentalTexts') },
    { label: t('navSectoralPolicy') },
    { label: t('navSectoralStrategy') },
    { label: t('navSectoralProjects') },
    { label: t('navFrameworkStrategies') },
  ];

  // Slug de route indexé par le nom FR canonique d'eccasFlags (clé stable, non traduite).
  const countrySlugByFr: Record<string, string> = {
    Angola: 'angola',
    Burundi: 'burundi',
    Cameroun: 'cameroon',
    Centrafrique: 'central-african-republic',
    Congo: 'congo',
    Gabon: 'gabon',
    'Guinée équatoriale': 'equatorial-guinea',
    RDC: 'drc',
    Rwanda: 'rwanda',
    'Sao Tomé-et-Principe': 'sao-tome',
    Tchad: 'chad',
  };

  const countryItems: DropdownItem[] = eccasFlags.map((flag) => {
    const slug = countrySlugByFr[flag.nameFr];
    const label = pick(flag, 'name', language);
    return slug
      ? { label, onClick: () => navigate(`/presentation/implementation/${slug}`) }
      : { label, onClick: () => navigate('/presentation/implementation') };
  });

  const goToImplementation = () => navigate('/presentation/implementation');

  const goHome = () => {
    if (location.pathname === '/') {
      scrollToSection('hero');
    } else {
      navigate('/');
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header-shell">
        <button type="button" onClick={goHome} className="site-brand">
          <img src={`${import.meta.env.BASE_URL}assets/prasmesti/shared/logo.png`} alt="PRASMESTI" className="site-brand-mark" />
          <div className="site-brand-copy">
            <p className="site-brand-kicker">CEEAC</p>
            <p className="site-brand-name">PRASMESTI</p>
          </div>
        </button>

        <nav className="site-nav">
          <button type="button" onClick={goHome} className="site-nav-link">
            {t('navHome')}
          </button>

          <NavDropdown label={t('navPresentation')} items={presentationItems} onLabelClick={() => navigate('/presentation')} />
          <NavDropdown label={t('navNormativeTexts')} items={normativeItems} />
          <NavDropdown label={t('navImplementation')} items={countryItems} onLabelClick={goToImplementation} />

          <button type="button" className="site-nav-link is-disabled" disabled title="Bientôt disponible">{t('navIntellectualProperty')}</button>
          <button type="button" className="site-nav-link is-disabled" disabled title="Bientôt disponible">{t('navInnovations')}</button>

          <button type="button" onClick={goToNews} className="site-nav-link">
            {t('navNews')}
          </button>
        </nav>

        <div className="site-header-actions">
          <button
            type="button"
            onClick={() => navigate('/private/login')}
            className="site-login-button"
          >
            <LogIn size={16} />
            {t('navLogin')}
          </button>
          <AnimatedThemeToggle />
          <div className="site-lang-select-wrap">
            <button
              type="button"
              className="site-language-toggle"
              aria-haspopup="listbox"
              aria-label={t('ariaChooseLanguage')}
            >
              <Globe size={16} />
              {language.toUpperCase()}
              <ChevronDown size={12} className="site-nav-chevron" />
            </button>
            <div className="site-lang-menu" role="listbox">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={lang.code === language}
                  onClick={() => setLanguage(lang.code)}
                  className={`site-lang-option${lang.code === language ? ' is-active' : ''}`}
                >
                  <span className="site-lang-code">{lang.label}</span>
                  <span className="site-lang-name">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="site-mobile-toggle"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="site-mobile-nav" aria-label="Navigation mobile">
          <button type="button" className="site-mobile-link" onClick={closeAnd(goHome)}>
            {t('navHome')}
          </button>

          <p className="site-mobile-group">{t('navPresentation')}</p>
          <button type="button" className="site-mobile-link is-sub" onClick={closeAnd(() => navigate('/presentation'))}>
            {t('navPresentation')}
          </button>
          {presentationItems.map((item) => (
            <button key={item.label} type="button" className="site-mobile-link is-sub" onClick={closeAnd(item.onClick)}>
              {item.label}
            </button>
          ))}

          <p className="site-mobile-group">{t('navNormativeTexts')}</p>
          {normativeItems.map((item) => (
            <span key={item.label} className="site-mobile-link is-sub is-disabled">
              {item.label}
            </span>
          ))}

          <p className="site-mobile-group">{t('navImplementation')}</p>
          <button type="button" className="site-mobile-link is-sub" onClick={closeAnd(goToImplementation)}>
            {t('navImplementation')}
          </button>
          {countryItems.map((item) => (
            <button key={item.label} type="button" className="site-mobile-link is-sub" onClick={closeAnd(item.onClick)}>
              {item.label}
            </button>
          ))}

          <span className="site-mobile-link is-disabled">{t('navIntellectualProperty')}</span>
          <span className="site-mobile-link is-disabled">{t('navInnovations')}</span>
          <button type="button" className="site-mobile-link" onClick={closeAnd(goToNews)}>
            {t('navNews')}
          </button>

          <button type="button" className="site-mobile-link is-login" onClick={closeAnd(() => navigate('/private/login'))}>
            {t('navLogin')}
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
