export type CityPoint = {
  name: string;
  x: number;
  y: number;
  status: 'high' | 'medium' | 'low';
};

export type DomainProgress = { label: string; value: number };
export type BlockerSlice = { label: string; value: number; color: string };

export type CountryAction = {
  labelEn: string;
  labelFr: string;
  ownerEn: string;
  ownerFr: string;
  status: 'progress' | 'risk' | 'planned';
  due: string;
};

export type CountryKpis = {
  completion: number;
  inProgress: number;
  growth: number;
  blockers: number;
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
  kpis: CountryKpis;
  monthlyCompletion: number[];
  domainProgress: DomainProgress[];
  blockers: BlockerSlice[];
  actions: CountryAction[];
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
      { name: 'Luanda', x: 96, y: 142, status: 'high' },
      { name: 'Huambo', x: 168, y: 196, status: 'medium' },
      { name: 'Lobito', x: 110, y: 184, status: 'medium' },
      { name: 'Lubango', x: 148, y: 234, status: 'low' },
      { name: 'Benguela', x: 102, y: 200, status: 'high' },
    ],
    kpis: { completion: 58, inProgress: 18, growth: 7, blockers: 5 },
    monthlyCompletion: [28, 33, 38, 44, 49, 53, 58],
    domainProgress: [
      { label: 'Policy alignment', value: 71 },
      { label: 'Data reporting', value: 62 },
      { label: 'Teacher training', value: 54 },
      { label: 'Digital tools', value: 46 },
      { label: 'STI innovation', value: 38 },
    ],
    blockers: [
      { label: 'Financial', value: 38, color: '#d4641a' },
      { label: 'Administrative', value: 30, color: '#1e5299' },
      { label: 'Policy', value: 20, color: '#5a8ec8' },
      { label: 'Infrastructure', value: 12, color: '#9ad1ff' },
    ],
    actions: [
      {
        labelEn: 'Provincial STEM lab equipment rollout',
        labelFr: 'Déploiement des laboratoires STEM provinciaux',
        ownerEn: 'MED',
        ownerFr: 'MED',
        status: 'progress',
        due: 'Oct 2026',
      },
      {
        labelEn: 'National SDG4 indicator harmonization',
        labelFr: 'Harmonisation nationale des indicateurs ODD4',
        ownerEn: 'Statistics Unit',
        ownerFr: 'Unité statistique',
        status: 'risk',
        due: 'Dec 2026',
      },
      {
        labelEn: 'Bilingual teacher training portal',
        labelFr: 'Portail bilingue de formation des enseignants',
        ownerEn: 'PRASMESTI focal point',
        ownerFr: 'Point focal PRASMESTI',
        status: 'planned',
        due: 'Feb 2027',
      },
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
      { name: 'Bujumbura', x: 116, y: 168, status: 'high' },
      { name: 'Gitega', x: 168, y: 142, status: 'high' },
      { name: 'Ngozi', x: 156, y: 92, status: 'medium' },
      { name: 'Rumonge', x: 122, y: 210, status: 'low' },
      { name: 'Muyinga', x: 210, y: 110, status: 'medium' },
    ],
    kpis: { completion: 52, inProgress: 14, growth: 6, blockers: 6 },
    monthlyCompletion: [22, 27, 33, 38, 43, 48, 52],
    domainProgress: [
      { label: 'Policy alignment', value: 64 },
      { label: 'Data reporting', value: 58 },
      { label: 'Teacher training', value: 47 },
      { label: 'Digital tools', value: 39 },
      { label: 'STI innovation', value: 32 },
    ],
    blockers: [
      { label: 'Financial', value: 42, color: '#d4641a' },
      { label: 'Administrative', value: 26, color: '#1e5299' },
      { label: 'Policy', value: 18, color: '#5a8ec8' },
      { label: 'Infrastructure', value: 14, color: '#9ad1ff' },
    ],
    actions: [
      {
        labelEn: 'Rural primary classroom digitisation',
        labelFr: 'Numérisation des salles de classe primaires rurales',
        ownerEn: 'MENRS',
        ownerFr: 'MENRS',
        status: 'progress',
        due: 'Nov 2026',
      },
      {
        labelEn: 'Kirundi STEM curriculum review',
        labelFr: 'Révision du curriculum STEM en Kirundi',
        ownerEn: 'Curriculum Office',
        ownerFr: 'Bureau des programmes',
        status: 'risk',
        due: 'Jan 2027',
      },
      {
        labelEn: 'Provincial focal-point network',
        labelFr: 'Réseau de points focaux provinciaux',
        ownerEn: 'PRASMESTI focal point',
        ownerFr: 'Point focal PRASMESTI',
        status: 'planned',
        due: 'Mar 2027',
      },
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
      { name: 'Yaounde', x: 178, y: 220, status: 'high' },
      { name: 'Douala', x: 122, y: 232, status: 'high' },
      { name: 'Garoua', x: 196, y: 86, status: 'medium' },
      { name: 'Bamenda', x: 142, y: 196, status: 'medium' },
      { name: 'Bafoussam', x: 156, y: 210, status: 'low' },
    ],
    kpis: { completion: 64, inProgress: 24, growth: 8, blockers: 5 },
    monthlyCompletion: [32, 38, 44, 49, 54, 59, 64],
    domainProgress: [
      { label: 'Policy alignment', value: 76 },
      { label: 'Data reporting', value: 68 },
      { label: 'Teacher training', value: 60 },
      { label: 'Digital tools', value: 52 },
      { label: 'STI innovation', value: 44 },
    ],
    blockers: [
      { label: 'Financial', value: 32, color: '#d4641a' },
      { label: 'Administrative', value: 28, color: '#1e5299' },
      { label: 'Policy', value: 24, color: '#5a8ec8' },
      { label: 'Infrastructure', value: 16, color: '#9ad1ff' },
    ],
    actions: [
      {
        labelEn: 'Bilingual STEM textbook printing wave',
        labelFr: 'Impression bilingue des manuels STEM',
        ownerEn: 'MINEDUB',
        ownerFr: 'MINEDUB',
        status: 'progress',
        due: 'Sep 2026',
      },
      {
        labelEn: 'Northern regions teacher CPD plan',
        labelFr: 'Plan de formation continue des enseignants - régions nord',
        ownerEn: 'Statistics Unit',
        ownerFr: 'Unité statistique',
        status: 'risk',
        due: 'Dec 2026',
      },
      {
        labelEn: 'University - innovation hub bridge',
        labelFr: 'Pont université - centre d\'innovation',
        ownerEn: 'PRASMESTI focal point',
        ownerFr: 'Point focal PRASMESTI',
        status: 'planned',
        due: 'Mar 2027',
      },
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
      { name: 'Bangui', x: 168, y: 192, status: 'high' },
      { name: 'Berberati', x: 96, y: 168, status: 'low' },
      { name: 'Bouar', x: 124, y: 142, status: 'medium' },
      { name: 'Bambari', x: 196, y: 158, status: 'medium' },
      { name: 'Kaga-Bandoro', x: 184, y: 116, status: 'low' },
    ],
    kpis: { completion: 41, inProgress: 11, growth: 4, blockers: 7 },
    monthlyCompletion: [18, 22, 26, 30, 34, 38, 41],
    domainProgress: [
      { label: 'Policy alignment', value: 56 },
      { label: 'Data reporting', value: 48 },
      { label: 'Teacher training', value: 39 },
      { label: 'Digital tools', value: 28 },
      { label: 'STI innovation', value: 22 },
    ],
    blockers: [
      { label: 'Financial', value: 36, color: '#d4641a' },
      { label: 'Administrative', value: 24, color: '#1e5299' },
      { label: 'Policy', value: 18, color: '#5a8ec8' },
      { label: 'Infrastructure', value: 22, color: '#9ad1ff' },
    ],
    actions: [
      {
        labelEn: 'Prefecture-level data collection system',
        labelFr: 'Système de collecte de données au niveau préfectoral',
        ownerEn: 'MEN',
        ownerFr: 'MEN',
        status: 'progress',
        due: 'Oct 2026',
      },
      {
        labelEn: 'Teacher housing for rural posts',
        labelFr: 'Logement des enseignants pour postes ruraux',
        ownerEn: 'Statistics Unit',
        ownerFr: 'Unité statistique',
        status: 'risk',
        due: 'Jan 2027',
      },
      {
        labelEn: 'Bangui STEM teaching lab',
        labelFr: 'Laboratoire d\'enseignement STEM de Bangui',
        ownerEn: 'PRASMESTI focal point',
        ownerFr: 'Point focal PRASMESTI',
        status: 'planned',
        due: 'Apr 2027',
      },
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
      { name: 'Brazzaville', x: 222, y: 252, status: 'high' },
      { name: 'Pointe-Noire', x: 142, y: 256, status: 'high' },
      { name: 'Dolisie', x: 168, y: 232, status: 'medium' },
      { name: 'Owando', x: 168, y: 138, status: 'low' },
      { name: 'Ouesso', x: 178, y: 76, status: 'medium' },
    ],
    kpis: { completion: 60, inProgress: 19, growth: 7, blockers: 5 },
    monthlyCompletion: [28, 34, 40, 46, 51, 56, 60],
    domainProgress: [
      { label: 'Policy alignment', value: 72 },
      { label: 'Data reporting', value: 64 },
      { label: 'Teacher training', value: 56 },
      { label: 'Digital tools', value: 48 },
      { label: 'STI innovation', value: 40 },
    ],
    blockers: [
      { label: 'Financial', value: 34, color: '#d4641a' },
      { label: 'Administrative', value: 28, color: '#1e5299' },
      { label: 'Policy', value: 22, color: '#5a8ec8' },
      { label: 'Infrastructure', value: 16, color: '#9ad1ff' },
    ],
    actions: [
      {
        labelEn: 'Riverine schools connectivity programme',
        labelFr: 'Programme de connectivité des écoles riveraines',
        ownerEn: 'MEPSA',
        ownerFr: 'MEPSA',
        status: 'progress',
        due: 'Sep 2026',
      },
      {
        labelEn: 'STI scholarship pathway for women',
        labelFr: 'Bourses STI pour les femmes',
        ownerEn: 'Statistics Unit',
        ownerFr: 'Unité statistique',
        status: 'risk',
        due: 'Nov 2026',
      },
      {
        labelEn: 'Vocational STEM partnership with industry',
        labelFr: 'Partenariat STEM professionnel avec l\'industrie',
        ownerEn: 'PRASMESTI focal point',
        ownerFr: 'Point focal PRASMESTI',
        status: 'planned',
        due: 'Feb 2027',
      },
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
      { name: 'Malabo', x: 96, y: 122, status: 'high' },
      { name: 'Bata', x: 168, y: 168, status: 'high' },
      { name: 'Mongomo', x: 232, y: 168, status: 'medium' },
      { name: 'Ebebiyin', x: 240, y: 142, status: 'low' },
      { name: 'Luba', x: 78, y: 152, status: 'medium' },
    ],
    kpis: { completion: 56, inProgress: 12, growth: 5, blockers: 4 },
    monthlyCompletion: [26, 31, 36, 42, 47, 52, 56],
    domainProgress: [
      { label: 'Policy alignment', value: 68 },
      { label: 'Data reporting', value: 60 },
      { label: 'Teacher training', value: 52 },
      { label: 'Digital tools', value: 44 },
      { label: 'STI innovation', value: 36 },
    ],
    blockers: [
      { label: 'Financial', value: 30, color: '#d4641a' },
      { label: 'Administrative', value: 30, color: '#1e5299' },
      { label: 'Policy', value: 24, color: '#5a8ec8' },
      { label: 'Infrastructure', value: 16, color: '#9ad1ff' },
    ],
    actions: [
      {
        labelEn: 'Trilingual school assessment kit (es/fr/pt)',
        labelFr: 'Kit d\'évaluation scolaire trilingue (es/fr/pt)',
        ownerEn: 'MINEDU',
        ownerFr: 'MINEDU',
        status: 'progress',
        due: 'Oct 2026',
      },
      {
        labelEn: 'Mainland-Island data harmonisation',
        labelFr: 'Harmonisation des données continent - îles',
        ownerEn: 'Statistics Unit',
        ownerFr: 'Unité statistique',
        status: 'risk',
        due: 'Dec 2026',
      },
      {
        labelEn: 'Bata STI incubator',
        labelFr: 'Incubateur STI de Bata',
        ownerEn: 'PRASMESTI focal point',
        ownerFr: 'Point focal PRASMESTI',
        status: 'planned',
        due: 'Mar 2027',
      },
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
      { name: 'Kinshasa', x: 70, y: 198, status: 'high' },
      { name: 'Lubumbashi', x: 254, y: 234, status: 'high' },
      { name: 'Mbuji-Mayi', x: 196, y: 196, status: 'medium' },
      { name: 'Kisangani', x: 196, y: 122, status: 'medium' },
      { name: 'Bukavu', x: 246, y: 170, status: 'low' },
    ],
    kpis: { completion: 49, inProgress: 28, growth: 5, blockers: 8 },
    monthlyCompletion: [22, 28, 33, 38, 42, 46, 49],
    domainProgress: [
      { label: 'Policy alignment', value: 60 },
      { label: 'Data reporting', value: 54 },
      { label: 'Teacher training', value: 46 },
      { label: 'Digital tools', value: 36 },
      { label: 'STI innovation', value: 28 },
    ],
    blockers: [
      { label: 'Financial', value: 36, color: '#d4641a' },
      { label: 'Administrative', value: 26, color: '#1e5299' },
      { label: 'Policy', value: 16, color: '#5a8ec8' },
      { label: 'Infrastructure', value: 22, color: '#9ad1ff' },
    ],
    actions: [
      {
        labelEn: 'Provincial education data warehouse',
        labelFr: 'Entrepôt de données éducatives provincial',
        ownerEn: 'MINEPST',
        ownerFr: 'MINEPST',
        status: 'progress',
        due: 'Nov 2026',
      },
      {
        labelEn: 'Conflict-zone teacher continuity plan',
        labelFr: 'Plan de continuité des enseignants en zone de conflit',
        ownerEn: 'Statistics Unit',
        ownerFr: 'Unité statistique',
        status: 'risk',
        due: 'Feb 2027',
      },
      {
        labelEn: 'STI mobile labs for remote provinces',
        labelFr: 'Laboratoires STI mobiles pour provinces éloignées',
        ownerEn: 'PRASMESTI focal point',
        ownerFr: 'Point focal PRASMESTI',
        status: 'planned',
        due: 'May 2027',
      },
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
      { name: 'Kigali', x: 178, y: 152, status: 'high' },
      { name: 'Butare', x: 138, y: 210, status: 'medium' },
      { name: 'Gisenyi', x: 96, y: 116, status: 'high' },
      { name: 'Ruhengeri', x: 142, y: 96, status: 'medium' },
      { name: 'Cyangugu', x: 102, y: 200, status: 'low' },
    ],
    kpis: { completion: 78, inProgress: 26, growth: 11, blockers: 3 },
    monthlyCompletion: [42, 50, 56, 62, 68, 73, 78],
    domainProgress: [
      { label: 'Policy alignment', value: 88 },
      { label: 'Data reporting', value: 82 },
      { label: 'Teacher training', value: 74 },
      { label: 'Digital tools', value: 70 },
      { label: 'STI innovation', value: 60 },
    ],
    blockers: [
      { label: 'Financial', value: 28, color: '#d4641a' },
      { label: 'Administrative', value: 22, color: '#1e5299' },
      { label: 'Policy', value: 26, color: '#5a8ec8' },
      { label: 'Infrastructure', value: 24, color: '#9ad1ff' },
    ],
    actions: [
      {
        labelEn: 'Smart Classrooms phase 3 expansion',
        labelFr: 'Extension des Smart Classrooms - phase 3',
        ownerEn: 'MINEDUC',
        ownerFr: 'MINEDUC',
        status: 'progress',
        due: 'Aug 2026',
      },
      {
        labelEn: 'STEM olympiad national rollout',
        labelFr: 'Déploiement national des olympiades STEM',
        ownerEn: 'Statistics Unit',
        ownerFr: 'Unité statistique',
        status: 'planned',
        due: 'Oct 2026',
      },
      {
        labelEn: 'Cross-border CESA reporting alignment',
        labelFr: 'Alignement transfrontalier des rapports CESA',
        ownerEn: 'PRASMESTI focal point',
        ownerFr: 'Point focal PRASMESTI',
        status: 'progress',
        due: 'Nov 2026',
      },
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
      { name: 'Sao Tome', x: 174, y: 168, status: 'high' },
      { name: 'Trindade', x: 152, y: 182, status: 'medium' },
      { name: 'Santana', x: 200, y: 188, status: 'medium' },
      { name: 'Neves', x: 122, y: 156, status: 'low' },
      { name: 'Guadalupe', x: 158, y: 138, status: 'low' },
    ],
    kpis: { completion: 66, inProgress: 9, growth: 6, blockers: 3 },
    monthlyCompletion: [34, 40, 46, 52, 56, 61, 66],
    domainProgress: [
      { label: 'Policy alignment', value: 80 },
      { label: 'Data reporting', value: 70 },
      { label: 'Teacher training', value: 64 },
      { label: 'Digital tools', value: 56 },
      { label: 'STI innovation', value: 42 },
    ],
    blockers: [
      { label: 'Financial', value: 34, color: '#d4641a' },
      { label: 'Administrative', value: 24, color: '#1e5299' },
      { label: 'Policy', value: 24, color: '#5a8ec8' },
      { label: 'Infrastructure', value: 18, color: '#9ad1ff' },
    ],
    actions: [
      {
        labelEn: 'Island-wide school census refresh',
        labelFr: 'Mise à jour du recensement scolaire des îles',
        ownerEn: 'MECC',
        ownerFr: 'MECC',
        status: 'progress',
        due: 'Sep 2026',
      },
      {
        labelEn: 'Lusophone STEM teacher exchange',
        labelFr: 'Échange d\'enseignants STEM lusophones',
        ownerEn: 'Statistics Unit',
        ownerFr: 'Unité statistique',
        status: 'risk',
        due: 'Dec 2026',
      },
      {
        labelEn: 'Coastal climate-science programme',
        labelFr: 'Programme de sciences du climat côtier',
        ownerEn: 'PRASMESTI focal point',
        ownerFr: 'Point focal PRASMESTI',
        status: 'planned',
        due: 'Feb 2027',
      },
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
      { name: 'N\'Djamena', x: 108, y: 168, status: 'high' },
      { name: 'Moundou', x: 132, y: 232, status: 'medium' },
      { name: 'Sarh', x: 172, y: 236, status: 'medium' },
      { name: 'Abeche', x: 224, y: 132, status: 'low' },
      { name: 'Doba', x: 148, y: 246, status: 'low' },
    ],
    kpis: { completion: 44, inProgress: 13, growth: 5, blockers: 7 },
    monthlyCompletion: [19, 23, 28, 33, 37, 41, 44],
    domainProgress: [
      { label: 'Policy alignment', value: 58 },
      { label: 'Data reporting', value: 50 },
      { label: 'Teacher training', value: 42 },
      { label: 'Digital tools', value: 31 },
      { label: 'STI innovation', value: 24 },
    ],
    blockers: [
      { label: 'Financial', value: 40, color: '#d4641a' },
      { label: 'Administrative', value: 26, color: '#1e5299' },
      { label: 'Policy', value: 18, color: '#5a8ec8' },
      { label: 'Infrastructure', value: 16, color: '#9ad1ff' },
    ],
    actions: [
      {
        labelEn: 'Sahel rural school data collection drive',
        labelFr: 'Campagne de collecte de données des écoles rurales du Sahel',
        ownerEn: 'MENPC',
        ownerFr: 'MENPC',
        status: 'progress',
        due: 'Nov 2026',
      },
      {
        labelEn: 'Bilingual (Arabic/French) STEM curriculum review',
        labelFr: 'Révision du curriculum STEM bilingue (arabe/français)',
        ownerEn: 'Statistics Unit',
        ownerFr: 'Unité statistique',
        status: 'risk',
        due: 'Jan 2027',
      },
      {
        labelEn: 'N\'Djamena STI training hub',
        labelFr: 'Centre de formation STI de N\'Djamena',
        ownerEn: 'PRASMESTI focal point',
        ownerFr: 'Point focal PRASMESTI',
        status: 'planned',
        due: 'Apr 2027',
      },
    ],
  },
];

export const getCountryBySlug = (slug: string): CountryConfig | undefined =>
  implementationCountries.find((c) => c.slug === slug);

// Libellés des graphiques (data en anglais) traduits côté affichage.
type Lang = 'en' | 'fr' | 'es' | 'pt';

const domainProgressLabels: Record<string, Record<Lang, string>> = {
  'Policy alignment': { en: 'Policy alignment', fr: 'Alignement des politiques', es: 'Alineación de políticas', pt: 'Alinhamento de políticas' },
  'Data reporting': { en: 'Data reporting', fr: 'Remontée des données', es: 'Reporte de datos', pt: 'Comunicação de dados' },
  'Teacher training': { en: 'Teacher training', fr: 'Formation des enseignants', es: 'Formación docente', pt: 'Formação de docentes' },
  'Digital tools': { en: 'Digital tools', fr: 'Outils numériques', es: 'Herramientas digitales', pt: 'Ferramentas digitais' },
  'STI innovation': { en: 'STI innovation', fr: 'Innovation STI', es: 'Innovación CTI', pt: 'Inovação CTI' },
};

const blockerLabels: Record<string, Record<Lang, string>> = {
  Financial: { en: 'Financial', fr: 'Financier', es: 'Financiero', pt: 'Financeiro' },
  Administrative: { en: 'Administrative', fr: 'Administratif', es: 'Administrativo', pt: 'Administrativo' },
  Policy: { en: 'Policy', fr: 'Politique', es: 'Político', pt: 'Político' },
  Infrastructure: { en: 'Infrastructure', fr: 'Infrastructure', es: 'Infraestructura', pt: 'Infraestrutura' },
};

export const localizeDomainLabel = (label: string, language: Lang): string =>
  domainProgressLabels[label]?.[language] ?? label;

export const localizeBlockerLabel = (label: string, language: Lang): string =>
  blockerLabels[label]?.[language] ?? label;
