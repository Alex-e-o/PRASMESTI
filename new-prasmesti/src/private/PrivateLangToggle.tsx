import { Globe } from 'lucide-react';
import { LANGUAGES, useLanguage, type Language } from '../languageContext';

// Sélecteur de langue de l'espace privé (réutilise le même state que le site public).
export default function PrivateLangToggle() {
  const { language, setLanguage } = useLanguage();
  return (
    <label className="private-lang-toggle">
      <Globe size={16} />
      <span className="sr-only">Choisir la langue</span>
      <select value={language} onChange={(event) => setLanguage(event.target.value as Language)}>
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </label>
  );
}
