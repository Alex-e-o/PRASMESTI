import React from 'react';
import { Globe, ChevronDown, LogIn } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import AnimatedThemeToggle from './AnimatedThemeToggle';
import { useLanguage } from '../languageContext';

const COUNTRIES = [
  'Angola', 'Burundi', 'Cameroun', 'Centrafrique',
  'République du Congo', 'Gabon', 'Guinée Équatoriale',
  'République Démocratique du Congo', 'Rwanda',
  'Sao Tomé et Principe', 'Tchad',
];

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
  const { language, toggleLanguage, translate } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = (key: string) => translate(key) as string;

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

  const countryItems: DropdownItem[] = COUNTRIES.map((name) => {
    const normalized = name.toLowerCase();
    if (normalized === 'gabon') {
      return { label: name, onClick: () => navigate('/presentation/implementation/gabon') };
    }
    return { label: name, onClick: () => navigate('/presentation/implementation') };
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

          <button type="button" className="site-nav-link">{t('navIntellectualProperty')}</button>
          <button type="button" className="site-nav-link">{t('navInnovations')}</button>

          <button
            type="button"
            onClick={() => {
              if (location.pathname === '/') {
                scrollToSection('news');
              } else {
                navigate('/');
                setTimeout(() => scrollToSection('news'), 350);
              }
            }}
            className="site-nav-link"
          >
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
            {language === 'fr' ? 'Connexion' : 'Login'}
          </button>
          <AnimatedThemeToggle />
          <button
            type="button"
            onClick={toggleLanguage}
            className="site-language-toggle"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            {language.toUpperCase()}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
