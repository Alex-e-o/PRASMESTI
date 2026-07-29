// Référentiel des États membres pour les pages publiques « État de mise en œuvre ».
//
// Ce fichier ne contient QUE des données factuelles et vérifiables : nom du pays,
// drapeau, ministère de tutelle, tracé de carte, grandes villes. Les indicateurs
// (taux de mise en œuvre, progrès par domaine, blocages, actions prioritaires)
// en ont été retirés : ils étaient inventés et attribués nommément à des États
// membres. Ils proviennent désormais exclusivement du questionnaire soumis par
// chaque pays — voir lib/countryStore.

export type CityPoint = {
  name: string;
  x: number;
  y: number;
};

export type CountryConfig = {
  slug: string;
  nameEn: string;
  nameFr: string;
  nameEs: string;
  namePt: string;
  flagImage: string;
  wikiTitleEn: string;
  wikiTitleFr: string;
  ministryAbbr: string;
  ministryEn: string;
  ministryFr: string;
  mapPath: string;
  mapGradientFrom: string;
  mapGradientTo: string;
  cities: CityPoint[];
};

const flag = (file: string) => `${import.meta.env.BASE_URL}assets/prasmesti/home/flags/${file}`;

export const implementationCountries: CountryConfig[] = [
  {
    slug: 'angola',
    nameEn: 'Angola',
    nameFr: 'Angola',
    nameEs: 'Angola',
    namePt: 'Angola',
    flagImage: flag('Angola.png'),
    wikiTitleEn: 'Angola',
    wikiTitleFr: 'Angola',
    ministryAbbr: 'MED',
    ministryEn: 'Ministry of Education',
    ministryFr: 'Ministère de l\'Éducation',
    mapPath: 'M64 80 L120 60 L188 56 L240 72 L268 110 L260 158 L244 198 L262 232 L226 262 L182 272 L138 268 L98 246 L72 218 L56 178 L48 132 Z',
    mapGradientFrom: '#cc1414',
    mapGradientTo: '#0a0a0a',
    cities: [
      { name: 'Luanda', x: 96, y: 142 },
      { name: 'Huambo', x: 168, y: 196 },
      { name: 'Lobito', x: 110, y: 184 },
      { name: 'Lubango', x: 148, y: 234 },
      { name: 'Benguela', x: 102, y: 200 },
    ],
  },
  {
    slug: 'burundi',
    nameEn: 'Burundi',
    nameFr: 'Burundi',
    nameEs: 'Burundi',
    namePt: 'Burundi',
    flagImage: flag('Burundi.png'),
    wikiTitleEn: 'Burundi',
    wikiTitleFr: 'Burundi',
    ministryAbbr: 'MENRS',
    ministryEn: 'Ministry of Education and Scientific Research',
    ministryFr: 'Ministère de l\'Éducation et de la Recherche Scientifique',
    mapPath: 'M120 70 L184 56 L228 78 L246 116 L240 158 L222 196 L196 230 L156 244 L116 232 L88 200 L74 162 L78 122 L96 92 Z',
    mapGradientFrom: '#1c8b3b',
    mapGradientTo: '#cc1414',
    cities: [
      { name: 'Bujumbura', x: 116, y: 168 },
      { name: 'Gitega', x: 168, y: 142 },
      { name: 'Ngozi', x: 156, y: 92 },
      { name: 'Rumonge', x: 122, y: 210 },
      { name: 'Muyinga', x: 210, y: 110 },
    ],
  },
  {
    slug: 'cameroon',
    nameEn: 'Cameroon',
    nameFr: 'Cameroun',
    nameEs: 'Camerún',
    namePt: 'Camarões',
    flagImage: flag('Cameroun.png'),
    wikiTitleEn: 'Cameroon',
    wikiTitleFr: 'Cameroun',
    ministryAbbr: 'MINEDUB',
    ministryEn: 'Ministry of Basic Education',
    ministryFr: 'Ministère de l\'Éducation de Base',
    mapPath: 'M118 30 L180 22 L226 44 L256 80 L268 124 L256 160 L240 196 L222 232 L196 262 L160 274 L132 252 L120 218 L106 184 L94 152 L86 116 L94 80 L106 52 Z',
    mapGradientFrom: '#077c1f',
    mapGradientTo: '#cc0000',
    cities: [
      { name: 'Yaounde', x: 178, y: 220 },
      { name: 'Douala', x: 122, y: 232 },
      { name: 'Garoua', x: 196, y: 86 },
      { name: 'Bamenda', x: 142, y: 196 },
      { name: 'Bafoussam', x: 156, y: 210 },
    ],
  },
  {
    slug: 'central-african-republic',
    nameEn: 'Central African Republic',
    nameFr: 'Centrafrique',
    nameEs: 'República Centroafricana',
    namePt: 'República Centro-Africana',
    flagImage: flag('Centrafrique.png'),
    wikiTitleEn: 'Central African Republic',
    wikiTitleFr: 'République centrafricaine',
    ministryAbbr: 'MEN',
    ministryEn: 'Ministry of National Education',
    ministryFr: 'Ministère de l\'Éducation Nationale',
    mapPath: 'M50 100 L100 70 L160 56 L220 60 L262 80 L274 116 L268 152 L246 184 L208 208 L168 218 L130 212 L98 196 L72 168 L56 138 Z',
    mapGradientFrom: '#1e5299',
    mapGradientTo: '#cc1414',
    cities: [
      { name: 'Bangui', x: 168, y: 192 },
      { name: 'Berberati', x: 96, y: 168 },
      { name: 'Bouar', x: 124, y: 142 },
      { name: 'Bambari', x: 196, y: 158 },
      { name: 'Kaga-Bandoro', x: 184, y: 116 },
    ],
  },
  {
    slug: 'congo',
    nameEn: 'Republic of the Congo',
    nameFr: 'Congo',
    nameEs: 'República del Congo',
    namePt: 'República do Congo',
    flagImage: flag('Congo.png'),
    wikiTitleEn: 'Republic of the Congo',
    wikiTitleFr: 'République du Congo',
    ministryAbbr: 'MEPSA',
    ministryEn: 'Ministry of Primary and Secondary Education',
    ministryFr: 'Ministère de l\'Enseignement Primaire et Secondaire',
    mapPath: 'M130 28 L184 36 L218 60 L240 96 L246 138 L236 178 L242 220 L220 256 L188 280 L158 268 L138 244 L124 214 L116 178 L106 142 L96 102 L102 68 Z',
    mapGradientFrom: '#079c2a',
    mapGradientTo: '#cc1414',
    cities: [
      { name: 'Brazzaville', x: 222, y: 252 },
      { name: 'Pointe-Noire', x: 142, y: 256 },
      { name: 'Dolisie', x: 168, y: 232 },
      { name: 'Owando', x: 168, y: 138 },
      { name: 'Ouesso', x: 178, y: 76 },
    ],
  },
  {
    slug: 'equatorial-guinea',
    nameEn: 'Equatorial Guinea',
    nameFr: 'Guinée équatoriale',
    nameEs: 'Guinea Ecuatorial',
    namePt: 'Guiné Equatorial',
    flagImage: flag('Guinee-Equatoriale.png'),
    wikiTitleEn: 'Equatorial Guinea',
    wikiTitleFr: 'Guinée équatoriale',
    ministryAbbr: 'MINEDU',
    ministryEn: 'Ministry of Education',
    ministryFr: 'Ministère de l\'Éducation',
    mapPath: 'M60 110 L120 88 L188 84 L240 102 L268 138 L260 178 L228 208 L184 222 L132 218 L80 198 L52 168 L46 138 Z',
    mapGradientFrom: '#1c8b3b',
    mapGradientTo: '#1e5299',
    cities: [
      { name: 'Malabo', x: 96, y: 122 },
      { name: 'Bata', x: 168, y: 168 },
      { name: 'Mongomo', x: 232, y: 168 },
      { name: 'Ebebiyin', x: 240, y: 142 },
      { name: 'Luba', x: 78, y: 152 },
    ],
  },
  {
    slug: 'drc',
    nameEn: 'DR Congo',
    nameFr: 'RDC',
    nameEs: 'RDC',
    namePt: 'RDC',
    flagImage: flag('RDC.png'),
    wikiTitleEn: 'Democratic Republic of the Congo',
    wikiTitleFr: 'République démocratique du Congo',
    ministryAbbr: 'MINEPST',
    ministryEn: 'Ministry of Primary, Secondary and Technical Education',
    ministryFr: 'Ministère de l\'Enseignement Primaire, Secondaire et Technique',
    mapPath: 'M40 90 L102 60 L168 48 L228 56 L264 78 L290 116 L284 154 L268 194 L244 230 L210 256 L168 268 L120 264 L80 244 L54 214 L36 178 L28 140 Z',
    mapGradientFrom: '#1e8ad6',
    mapGradientTo: '#cc1414',
    cities: [
      { name: 'Kinshasa', x: 70, y: 198 },
      { name: 'Lubumbashi', x: 254, y: 234 },
      { name: 'Mbuji-Mayi', x: 196, y: 196 },
      { name: 'Kisangani', x: 196, y: 122 },
      { name: 'Bukavu', x: 246, y: 170 },
    ],
  },
  {
    slug: 'rwanda',
    nameEn: 'Rwanda',
    nameFr: 'Rwanda',
    nameEs: 'Ruanda',
    namePt: 'Ruanda',
    flagImage: flag('Rwanda.png'),
    wikiTitleEn: 'Rwanda',
    wikiTitleFr: 'Rwanda',
    ministryAbbr: 'MINEDUC',
    ministryEn: 'Ministry of Education',
    ministryFr: 'Ministère de l\'Éducation',
    mapPath: 'M80 80 L150 56 L226 60 L268 84 L284 120 L274 158 L246 196 L208 224 L160 240 L116 230 L82 204 L62 168 L60 132 L70 102 Z',
    mapGradientFrom: '#1f8de8',
    mapGradientTo: '#fad24a',
    cities: [
      { name: 'Kigali', x: 178, y: 152 },
      { name: 'Butare', x: 138, y: 210 },
      { name: 'Gisenyi', x: 96, y: 116 },
      { name: 'Ruhengeri', x: 142, y: 96 },
      { name: 'Cyangugu', x: 102, y: 200 },
    ],
  },
  {
    slug: 'sao-tome',
    nameEn: 'Sao Tome and Principe',
    nameFr: 'Sao Tomé-et-Principe',
    nameEs: 'Santo Tomé y Príncipe',
    namePt: 'São Tomé e Príncipe',
    flagImage: flag('Sao-Tome.png'),
    wikiTitleEn: 'Sao Tome and Principe',
    wikiTitleFr: 'Sao Tomé-et-Principe',
    ministryAbbr: 'MECC',
    ministryEn: 'Ministry of Education, Culture and Science',
    ministryFr: 'Ministère de l\'Éducation, de la Culture et des Sciences',
    mapPath: 'M70 130 L120 96 L180 90 L232 110 L260 152 L246 198 L208 226 L156 232 L102 218 L66 188 L52 158 Z',
    mapGradientFrom: '#0aa92b',
    mapGradientTo: '#fad24a',
    cities: [
      { name: 'Sao Tome', x: 174, y: 168 },
      { name: 'Trindade', x: 152, y: 182 },
      { name: 'Santana', x: 200, y: 188 },
      { name: 'Neves', x: 122, y: 156 },
      { name: 'Guadalupe', x: 158, y: 138 },
    ],
  },
  {
    slug: 'chad',
    nameEn: 'Chad',
    nameFr: 'Tchad',
    nameEs: 'Chad',
    namePt: 'Chade',
    flagImage: flag('Tchad.png'),
    wikiTitleEn: 'Chad',
    wikiTitleFr: 'Tchad',
    ministryAbbr: 'MENPC',
    ministryEn: 'Ministry of National Education and Civic Promotion',
    ministryFr: 'Ministère de l\'Éducation Nationale et de la Promotion Civique',
    mapPath: 'M120 36 L196 28 L246 56 L264 100 L252 142 L236 184 L248 224 L214 256 L172 268 L138 250 L122 214 L110 176 L96 138 L86 100 L98 64 Z',
    mapGradientFrom: '#002664',
    mapGradientTo: '#cc1414',
    cities: [
      { name: 'N\'Djamena', x: 108, y: 168 },
      { name: 'Moundou', x: 132, y: 232 },
      { name: 'Sarh', x: 172, y: 236 },
      { name: 'Abeche', x: 224, y: 132 },
      { name: 'Doba', x: 148, y: 246 },
    ],
  },
];

export const getCountryBySlug = (slug: string): CountryConfig | undefined =>
  implementationCountries.find((c) => c.slug === slug);

// Les libellés d'indicateurs sont traduits par lib/countryStore, au plus près
// des valeurs canoniques qu'il produit.
