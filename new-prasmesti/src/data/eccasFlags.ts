const flagUrl = (file: string) => `${import.meta.env.BASE_URL}assets/prasmesti/home/flags/${file}`;

export const eccasFlags = [
  { nameEn: 'Gabon', nameFr: 'Gabon', nameEs: 'Gabón', namePt: 'Gabão', image: flagUrl('Gabon.png') },
  { nameEn: 'Angola', nameFr: 'Angola', nameEs: 'Angola', namePt: 'Angola', image: flagUrl('Angola.png') },
  { nameEn: 'Burundi', nameFr: 'Burundi', nameEs: 'Burundi', namePt: 'Burundi', image: flagUrl('Burundi.png') },
  { nameEn: 'Cameroon', nameFr: 'Cameroun', nameEs: 'Camerún', namePt: 'Camarões', image: flagUrl('Cameroun.png') },
  { nameEn: 'Central African Republic', nameFr: 'Centrafrique', nameEs: 'República Centroafricana', namePt: 'República Centro-Africana', image: flagUrl('Centrafrique.png') },
  { nameEn: 'Republic of the Congo', nameFr: 'Congo', nameEs: 'República del Congo', namePt: 'República do Congo', image: flagUrl('Congo.png') },
  { nameEn: 'Equatorial Guinea', nameFr: 'Guinee equatoriale', nameEs: 'Guinea Ecuatorial', namePt: 'Guiné Equatorial', image: flagUrl('Guinee-Equatoriale.png') },
  { nameEn: 'DR Congo', nameFr: 'RDC', nameEs: 'RDC', namePt: 'RDC', image: flagUrl('RDC.png') },
  { nameEn: 'Rwanda', nameFr: 'Rwanda', nameEs: 'Ruanda', namePt: 'Ruanda', image: flagUrl('Rwanda.png') },
  { nameEn: 'Sao Tome and Principe', nameFr: 'Sao Tome et Principe', nameEs: 'Santo Tomé y Príncipe', namePt: 'São Tomé e Príncipe', image: flagUrl('Sao-Tome.png') },
  { nameEn: 'Chad', nameFr: 'Tchad', nameEs: 'Chad', namePt: 'Chade', image: flagUrl('Tchad.png') },
];
