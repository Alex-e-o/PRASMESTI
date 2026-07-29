import type { Language } from '../languageContext';

const flagUrl = (file: string) => `${import.meta.env.BASE_URL}assets/prasmesti/home/flags/${file}`;

export type EccasCountry = {
  /** Identifiant stable, partagé par les comptes, la base et les URL publiques. */
  slug: string;
  nameEn: string;
  nameFr: string;
  nameEs: string;
  namePt: string;
  image: string;
};

// Référentiel unique des 11 États membres : porte le slug qui relie un compte,
// une ligne de la base et une page publique.
export const eccasFlags: EccasCountry[] = [
  { slug: 'gabon', nameEn: 'Gabon', nameFr: 'Gabon', nameEs: 'Gabón', namePt: 'Gabão', image: flagUrl('Gabon.png') },
  { slug: 'angola', nameEn: 'Angola', nameFr: 'Angola', nameEs: 'Angola', namePt: 'Angola', image: flagUrl('Angola.png') },
  { slug: 'burundi', nameEn: 'Burundi', nameFr: 'Burundi', nameEs: 'Burundi', namePt: 'Burundi', image: flagUrl('Burundi.png') },
  { slug: 'cameroon', nameEn: 'Cameroon', nameFr: 'Cameroun', nameEs: 'Camerún', namePt: 'Camarões', image: flagUrl('Cameroun.png') },
  { slug: 'central-african-republic', nameEn: 'Central African Republic', nameFr: 'Centrafrique', nameEs: 'República Centroafricana', namePt: 'República Centro-Africana', image: flagUrl('Centrafrique.png') },
  { slug: 'congo', nameEn: 'Republic of the Congo', nameFr: 'Congo', nameEs: 'República del Congo', namePt: 'República do Congo', image: flagUrl('Congo.png') },
  { slug: 'equatorial-guinea', nameEn: 'Equatorial Guinea', nameFr: 'Guinée équatoriale', nameEs: 'Guinea Ecuatorial', namePt: 'Guiné Equatorial', image: flagUrl('Guinee-Equatoriale.png') },
  { slug: 'drc', nameEn: 'DR Congo', nameFr: 'RDC', nameEs: 'RDC', namePt: 'RDC', image: flagUrl('RDC.png') },
  { slug: 'rwanda', nameEn: 'Rwanda', nameFr: 'Rwanda', nameEs: 'Ruanda', namePt: 'Ruanda', image: flagUrl('Rwanda.png') },
  { slug: 'sao-tome', nameEn: 'Sao Tome and Principe', nameFr: 'Sao Tomé-et-Principe', nameEs: 'Santo Tomé y Príncipe', namePt: 'São Tomé e Príncipe', image: flagUrl('Sao-Tome.png') },
  { slug: 'chad', nameEn: 'Chad', nameFr: 'Tchad', nameEs: 'Chad', namePt: 'Chade', image: flagUrl('Tchad.png') },
];

export const findEccasCountry = (slug: string): EccasCountry | undefined =>
  eccasFlags.find((country) => country.slug === slug);

const NAME_KEYS: Record<Language, keyof EccasCountry> = {
  fr: 'nameFr',
  en: 'nameEn',
  es: 'nameEs',
  pt: 'namePt',
};

export const countryNameBySlug = (slug: string, language: Language): string => {
  const country = findEccasCountry(slug);
  return country ? (country[NAME_KEYS[language]] as string) : slug;
};
