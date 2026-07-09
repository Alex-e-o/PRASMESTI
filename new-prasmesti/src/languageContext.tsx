import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'fr' | 'es' | 'pt';

type TranslationValue = string | string[];

type LangRecord = {
  en: TranslationValue;
  fr: TranslationValue;
  es: TranslationValue;
  pt: TranslationValue;
};

type Dictionary = Record<string, LangRecord>;

export const LANGUAGES: { code: Language; label: string; name: string }[] = [
  { code: 'fr', label: 'FR', name: 'Français' },
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'pt', label: 'PT', name: 'Português' },
];

const STORAGE_KEY = 'prasmesti-lang';

/** Suffixe utilisé par les champs de données (ex: roleFr, roleEs). */
export const langSuffix = (l: Language): 'En' | 'Fr' | 'Es' | 'Pt' =>
  l === 'fr' ? 'Fr' : l === 'es' ? 'Es' : l === 'pt' ? 'Pt' : 'En';

/** Récupère un champ localisé d'un objet de données (fallback FR puis EN). */
export function pick(obj: Record<string, unknown>, base: string, language: Language): string {
  const value =
    obj[base + langSuffix(language)] ?? obj[base + 'Fr'] ?? obj[base + 'En'];
  return typeof value === 'string' ? value : '';
}

/** Idem pour les champs tableaux (ex: itemsFr / itemsEs). */
export function pickArray(obj: Record<string, unknown>, base: string, language: Language): string[] {
  const value = obj[base + langSuffix(language)] ?? obj[base + 'Fr'] ?? obj[base + 'En'];
  return Array.isArray(value) ? (value as string[]) : [];
}

/**
 * Typographie française : remplace l'espace normale précédant une ponctuation
 * haute (? ! ; :) — et autour des guillemets « » — par une espace insécable,
 * pour que le point d'interrogation reste collé à sa phrase (pas de retour à la
 * ligne isolé). Sans effet sur EN/ES/PT, qui n'ont pas cette espace.
 */
const applyFrTypography = (value: string): string =>
  value
    .replace(/ ([?!;:»])/g, ' $1')
    .replace(/(«) /g, '$1 ');

const translations: Dictionary = {
  navHome: { en: 'Home', fr: 'Accueil', es: 'Inicio', pt: 'Início' },
  navPresentation: { en: 'Presentation', fr: 'Présentation', es: 'Presentación', pt: 'Apresentação' },
  navPresentationWhat: { en: 'What is PRASMESTI?', fr: "Qu'est-ce que le PRASMESTI ?", es: '¿Qué es el PRASMESTI?', pt: 'O que é o PRASMESTI?' },
  navPresentationWhy: { en: 'Why PRASMESTI?', fr: "Pourquoi le PRASMESTI ?", es: '¿Por qué el PRASMESTI?', pt: 'Porquê o PRASMESTI?' },
  navPresentationObjectives: { en: 'Objectives', fr: 'Objectifs', es: 'Objetivos', pt: 'Objetivos' },
  navPresentationExpectations: { en: 'Expectations', fr: 'Attentes', es: 'Expectativas', pt: 'Expectativas' },
  navPresentationIssues: { en: 'Issues', fr: 'Enjeux', es: 'Desafíos', pt: 'Desafios' },
  navPresentationDesign: { en: 'Design & Operations', fr: 'Conception', es: 'Concepción', pt: 'Conceção' },
  navPresentationLeads: { en: 'Project Leads', fr: 'Responsables', es: 'Responsables', pt: 'Responsáveis' },
  navNormativeTexts: { en: 'Normative Texts', fr: 'Textes normatifs', es: 'Textos normativos', pt: 'Textos normativos' },
  navContinentalTexts: { en: 'Continental texts', fr: 'Textes continentaux', es: 'Textos continentales', pt: 'Textos continentais' },
  navSectoralPolicy: { en: 'Sectoral policy', fr: 'Politique sectorielle', es: 'Política sectorial', pt: 'Política setorial' },
  navSectoralStrategy: { en: 'Sectoral strategy', fr: 'Stratégie sectorielle', es: 'Estrategia sectorial', pt: 'Estratégia setorial' },
  navSectoralProjects: { en: 'Sectoral projects', fr: 'Projets sectoriels', es: 'Proyectos sectoriales', pt: 'Projetos setoriais' },
  navFrameworkStrategies: { en: 'Framework strategies', fr: 'Stratégies-cadres', es: 'Estrategias marco', pt: 'Estratégias-quadro' },
  navImplementation: { en: 'Implementation Status', fr: 'État de mise en oeuvre', es: 'Estado de implementación', pt: 'Estado de implementação' },
  implEyebrow: { en: 'Monitoring', fr: 'Suivi', es: 'Seguimiento', pt: 'Acompanhamento' },
  implTitle: { en: 'Implementation Status', fr: 'État de mise en œuvre', es: 'Estado de implementación', pt: 'Estado de implementação' },
  implSubtitle: {
    en: 'Track the deployment of PRASMESTI across the member states of the ECCAS.',
    fr: 'Suivez le déploiement du PRASMESTI dans les États membres de la CEEAC.',
    es: 'Siga el despliegue del PRASMESTI en los Estados miembros de la CEEAC.',
    pt: 'Acompanhe a implantação do PRASMESTI nos Estados-membros da CEEAC.',
  },
  implCountriesEyebrow: { en: 'Member States', fr: 'États membres', es: 'Estados miembros', pt: 'Estados-membros' },
  implCountriesTitle: { en: 'ECCAS member states', fr: 'États membres de la CEEAC', es: 'Estados miembros de la CEEAC', pt: 'Estados-membros da CEEAC' },
  implStatusActive: { en: 'Active', fr: 'En cours', es: 'En curso', pt: 'Em curso' },
  navIntellectualProperty: { en: 'Intellectual Property', fr: 'Propriété intellectuelle', es: 'Propiedad intelectual', pt: 'Propriedade intelectual' },
  navInnovations: { en: 'Innovations', fr: 'Innovations', es: 'Innovaciones', pt: 'Inovações' },
  navNews: { en: 'News', fr: 'Actualités', es: 'Actualidad', pt: 'Notícias' },
  heroEyebrow: {
    en: 'Education and Training: The pillars of regional integration.',
    fr: "Éducation et Formation : Les piliers de l'intégration régionale.",
    es: 'Educación y Formación: Los pilares de la integración regional.',
    pt: 'Educação e Formação: Os pilares da integração regional.',
  },
  heroSubtitle2: {
    en: 'Sciences and Technologies: Innovating for a sustainable future.',
    fr: 'Sciences et Technologies : Innover pour un futur durable.',
    es: 'Ciencias y Tecnologías: Innovar para un futuro sostenible.',
    pt: 'Ciências e Tecnologias: Inovar para um futuro sustentável.',
  },
  heroTitle: {
    en: 'Accelerating regional integration through education and training.',
    fr: "Accélérons l'intégration régionale par l'éducation et la formation.",
    es: 'Aceleremos la integración regional mediante la educación y la formación.',
    pt: 'Aceleremos a integração regional através da educação e da formação.',
  },
  heroBody: {
    en: 'Uniting our talents to build the future of Central Africa.',
    fr: "Unissons nos talents pour bâtir l'avenir de l'Afrique centrale.",
    es: 'Unamos nuestros talentos para construir el futuro de África Central.',
    pt: 'Unamos os nossos talentos para construir o futuro da África Central.',
  },
  heroPrimary: { en: 'Presentation', fr: 'Présentation', es: 'Presentación', pt: 'Apresentação' },
  heroSecondary: { en: 'Our News', fr: 'Nos actualités', es: 'Nuestra actualidad', pt: 'As nossas notícias' },
  heroStatOneLabel: { en: 'Member States', fr: 'États membres', es: 'Estados miembros', pt: 'Estados-membros' },
  heroStatTwoLabel: { en: 'Strategic pillars', fr: 'Piliers stratégiques', es: 'Pilares estratégicos', pt: 'Pilares estratégicos' },
  heroStatThreeLabel: {
    en: 'years to change the face of education',
    fr: 'ans pour changer la face de l\'éducation',
    es: 'años para cambiar el rostro de la educación',
    pt: 'anos para mudar a face da educação',
  },
  heroStatThreeValue: { en: '05', fr: '05', es: '05', pt: '05' },
  presidentEyebrow: {
    en: 'Word from the regional champion president — Head of State of the DRC',
    fr: "Mot du président champion régional — Chef d'État de la RDC",
    es: 'Palabras del presidente campeón regional — Jefe de Estado de la RDC',
    pt: 'Palavra do presidente campeão regional — Chefe de Estado da RDC',
  },
  presidentTitle: {
    en: 'Without knowledge, there is no development; without sharing knowledge, there is no integration.',
    fr: "Sans savoir, il n'est point de développement ; sans partage du savoir, il n'est point d'intégration.",
    es: 'Sin saber, no hay desarrollo; sin compartir el saber, no hay integración.',
    pt: 'Sem saber, não há desenvolvimento; sem partilha do saber, não há integração.',
  },
  presidentBody: {
    en: 'The Economic Community of Central African States continues its progress, driven by an ambition that is both simple and immense: to sustainably raise the well-being of populations, by weaving between its peoples the solid links of active solidarity, shared development and living hope. At the heart of this dynamic, a deep conviction stands as a compass: without knowledge, there is no development; without sharing knowledge, there is no integration. Where borders meet and peoples respond to each other, an evidence arises, clear and luminous: knowledge constitutes the foundation of any true integration. Thus a living space is designed, where ideas dialogue, where experiences fertilize each other, where knowledge circulates and is transformed. From this space a breath is born, discreet but powerful, carrier of future and promises. In Central Africa, this breath is now taking shape. It has a name: PRASMESTI!',
    fr: "La Communauté Économique des États de l'Afrique Centrale poursuit sa marche, portée par une ambition à la fois simple et immense : élever durablement le bien-être des populations, en tissant entre ses peuples les liens solides d'une solidarité active, d'un développement partagé et d'une espérance vivante. Au cœur de cette dynamique, une conviction profonde s'impose comme une boussole : sans savoir, il n'est point de développement ; sans partage du savoir, il n'est point d'intégration. Là où les frontières se rencontrent et où les peuples se répondent, une évidence s'élève, claire et lumineuse : le savoir constitue le socle de toute intégration véritable. Ainsi se dessine un espace vivant, où les idées dialoguent, où les expériences se fécondent, où les savoirs circulent et se transforment. De cet espace naît un souffle, discret mais puissant, porteur d'avenir et de promesses. En Afrique centrale, ce souffle prend désormais corps. Il a un nom : PRASMESTI !",
    es: 'La Comunidad Económica de los Estados de África Central prosigue su marcha, impulsada por una ambición a la vez sencilla e inmensa: elevar de forma duradera el bienestar de las poblaciones, tejiendo entre sus pueblos los sólidos vínculos de una solidaridad activa, de un desarrollo compartido y de una esperanza viva. En el corazón de esta dinámica, una convicción profunda se impone como una brújula: sin saber, no hay desarrollo; sin compartir el saber, no hay integración. Allí donde las fronteras se encuentran y los pueblos se responden, surge una evidencia, clara y luminosa: el saber constituye el cimiento de toda integración verdadera. Así se diseña un espacio vivo, donde las ideas dialogan, donde las experiencias se fecundan, donde los saberes circulan y se transforman. De este espacio nace un soplo, discreto pero poderoso, portador de futuro y de promesas. En África Central, este soplo toma cuerpo desde ahora. Tiene un nombre: ¡PRASMESTI!',
    pt: 'A Comunidade Económica dos Estados da África Central prossegue a sua marcha, movida por uma ambição simultaneamente simples e imensa: elevar de forma duradoura o bem-estar das populações, tecendo entre os seus povos os sólidos laços de uma solidariedade ativa, de um desenvolvimento partilhado e de uma esperança viva. No coração desta dinâmica, uma convicção profunda impõe-se como uma bússola: sem saber, não há desenvolvimento; sem partilha do saber, não há integração. Onde as fronteiras se encontram e os povos se respondem, ergue-se uma evidência, clara e luminosa: o saber constitui o alicerce de toda a integração verdadeira. Assim se desenha um espaço vivo, onde as ideias dialogam, onde as experiências se fecundam, onde os saberes circulam e se transformam. Deste espaço nasce um sopro, discreto mas poderoso, portador de futuro e de promessas. Na África Central, este sopro ganha agora corpo. Tem um nome: PRASMESTI!',
  },
  presidentName: {
    en: 'Félix Antoine TSHISEKEDI TSHILOMBO',
    fr: 'Félix Antoine TSHISEKEDI TSHILOMBO',
    es: 'Félix Antoine TSHISEKEDI TSHILOMBO',
    pt: 'Félix Antoine TSHISEKEDI TSHILOMBO',
  },
  presidentRole: {
    en: 'President, Regional champion for education, health, culture',
    fr: 'Président, Champion régional éducation, santé, culture',
    es: 'Presidente, Campeón regional de educación, salud, cultura',
    pt: 'Presidente, Campeão regional de educação, saúde, cultura',
  },
  pillarOne: { en: 'Solidarity for education', fr: "Solidarité pour l'éducation", es: 'Solidaridad por la educación', pt: 'Solidariedade pela educação' },
  pillarTwo: { en: 'Promotion of innovation', fr: "Promotion de l'innovation", es: 'Promoción de la innovación', pt: 'Promoção da inovação' },
  pillarThree: { en: 'Acceleration of technological development', fr: 'Accélération du développement technologique', es: 'Aceleración del desarrollo tecnológico', pt: 'Aceleração do desenvolvimento tecnológico' },
  pillarFour: { en: 'Scientific research support', fr: 'Soutien à la recherche scientifique', es: 'Apoyo a la investigación científica', pt: 'Apoio à investigação científica' },
  communityEyebrow: { en: 'About', fr: 'À propos de', es: 'Acerca de', pt: 'Acerca de' },
  communityTitle: {
    en: 'ECCAS',
    fr: 'La CEEAC',
    es: 'La CEEAC',
    pt: 'A CEEAC',
  },
  communityBodyOne: {
    en: "In the heart of the continent, Central Africa asserts itself as a global strategic space, rich in natural, energy and agricultural resources, and playing a key role in climate, biodiversity, food security and international trade. However, this position is accompanied by strong pressures, notably climate change, economic dependence, technological changes and geopolitical tensions. Faced with these challenges, the region must capitalize on its strengths and strengthen its integration.",
    fr: "Au cœur du continent, l'Afrique centrale s'affirme comme un espace stratégique mondial, riche en ressources naturelles, énergétiques et agricoles, et jouant un rôle clé dans le climat, la biodiversité, la sécurité alimentaire et les échanges internationaux. Toutefois, cette position s'accompagne de fortes pressions, notamment le changement climatique, la dépendance économique, les mutations technologiques et les tensions géopolitiques. Face à ces défis, la région doit capitaliser sur ses atouts et renforcer son intégration.",
    es: 'En el corazón del continente, África Central se afirma como un espacio estratégico mundial, rico en recursos naturales, energéticos y agrícolas, y que desempeña un papel clave en el clima, la biodiversidad, la seguridad alimentaria y los intercambios internacionales. No obstante, esta posición va acompañada de fuertes presiones, en particular el cambio climático, la dependencia económica, las mutaciones tecnológicas y las tensiones geopolíticas. Ante estos desafíos, la región debe capitalizar sus fortalezas y reforzar su integración.',
    pt: 'No coração do continente, a África Central afirma-se como um espaço estratégico mundial, rico em recursos naturais, energéticos e agrícolas, e desempenhando um papel fundamental no clima, na biodiversidade, na segurança alimentar e nas trocas internacionais. Contudo, esta posição é acompanhada por fortes pressões, nomeadamente as alterações climáticas, a dependência económica, as mutações tecnológicas e as tensões geopolíticas. Perante estes desafios, a região deve capitalizar os seus trunfos e reforçar a sua integração.',
  },
  communityBodyTwo: {
    en: "In this dynamic, the Economic Community of Central African States (ECCAS) — composed of Angola, Burundi, Cameroon, Central African Republic, Republic of the Congo, Democratic Republic of the Congo, Gabon, Equatorial Guinea, Rwanda, Sao Tome and Principe and Chad — asserts itself as the driver of a sustainable, inclusive and resilient transformation, capable of structuring regional development based on cooperation, innovation and the valuation of its resources.",
    fr: "Dans cette dynamique, la Communauté Économique des États de l'Afrique Centrale (CEEAC) — composée de l'Angola, du Burundi, du Cameroun, de la République centrafricaine, de la République du Congo, de la République démocratique du Congo, du Gabon, de la Guinée équatoriale, du Rwanda, de Sao Tomé-et-Principe et du Tchad — s'affirme comme le moteur d'une transformation durable, inclusive et résiliente, capable de structurer un développement régional fondé sur la coopération, l'innovation et la valorisation de ses ressources.",
    es: 'En esta dinámica, la Comunidad Económica de los Estados de África Central (CEEAC) — compuesta por Angola, Burundi, Camerún, la República Centroafricana, la República del Congo, la República Democrática del Congo, Gabón, Guinea Ecuatorial, Ruanda, Santo Tomé y Príncipe y Chad — se afirma como el motor de una transformación sostenible, inclusiva y resiliente, capaz de estructurar un desarrollo regional basado en la cooperación, la innovación y la valorización de sus recursos.',
    pt: 'Nesta dinâmica, a Comunidade Económica dos Estados da África Central (CEEAC) — composta por Angola, Burundi, Camarões, República Centro-Africana, República do Congo, República Democrática do Congo, Gabão, Guiné Equatorial, Ruanda, São Tomé e Príncipe e Chade — afirma-se como o motor de uma transformação sustentável, inclusiva e resiliente, capaz de estruturar um desenvolvimento regional baseado na cooperação, na inovação e na valorização dos seus recursos.',
  },
  communityCardOneTitle: { en: 'Data centralisation', fr: 'Centralisation des données', es: 'Centralización de los datos', pt: 'Centralização dos dados' },
  communityCardOneBody: {
    en: 'Bring all relevant education, science, technology and innovation data together in one place accessible to all regional actors.',
    fr: "Rassembler toutes les informations pertinentes sur l'éducation, la formation, les sciences, la technologie et l'innovation en un seul endroit, accessible à tous les acteurs de la région.",
    es: 'Reunir toda la información pertinente sobre educación, formación, ciencias, tecnología e innovación en un único lugar, accesible a todos los actores de la región.',
    pt: 'Reunir toda a informação pertinente sobre educação, formação, ciências, tecnologia e inovação num único lugar, acessível a todos os atores da região.',
  },
  communityCardTwoTitle: { en: 'Regional collaboration', fr: 'Collaboration régionale', es: 'Colaboración regional', pt: 'Colaboração regional' },
  communityCardTwoBody: {
    en: 'Encourage exchanges between institutions, researchers, teachers and decision-makers to create synergies in educational, scientific and technological projects.',
    fr: "Encourager les échanges entre institutions, chercheurs, enseignants et décideurs pour créer des synergies dans les projets éducatifs, scientifiques et technologiques grâce à la mise en valeur de la pluralité culturelle.",
    es: 'Fomentar los intercambios entre instituciones, investigadores, docentes y responsables de la toma de decisiones para crear sinergias en los proyectos educativos, científicos y tecnológicos mediante la valorización de la pluralidad cultural.',
    pt: 'Incentivar as trocas entre instituições, investigadores, docentes e decisores para criar sinergias nos projetos educativos, científicos e tecnológicos através da valorização da pluralidade cultural.',
  },
  communityCardThreeTitle: { en: 'Talent and innovation', fr: 'Valorisation des talents et innovations', es: 'Valorización de talentos e innovaciones', pt: 'Valorização de talentos e inovações' },
  communityCardThreeBody: {
    en: 'Highlight achievements and competencies of individuals and institutions to stimulate innovation and strengthen regional belonging.',
    fr: "Mettre en lumière les réussites, les compétences des individus et des institutions pour stimuler l'innovation et renforcer le sentiment d'appartenance régionale.",
    es: 'Poner de relieve los logros y las competencias de las personas y las instituciones para estimular la innovación y reforzar el sentimiento de pertenencia regional.',
    pt: 'Destacar os êxitos e as competências dos indivíduos e das instituições para estimular a inovação e reforçar o sentimento de pertença regional.',
  },
  directorEyebrow: { en: "The Director's view", fr: 'Le regard du Directeur', es: 'La mirada del Director', pt: 'O olhar do Diretor' },
  directorTitle: {
    en: 'Building the future through collective action',
    fr: "Bâtir l'avenir par l'action collective",
    es: 'Construir el futuro mediante la acción colectiva',
    pt: 'Construir o futuro através da ação coletiva',
  },
  directorBody: {
    en: 'The Regional Portal for Monitoring Assistance in Education, Sciences, Technology and Innovation (PRASMESTI) is intended to become a privileged tool for sectoral communication. Each Member State is thus called upon to appropriate its use, according to its priorities, its objectives and its achievements. Its ambition is twofold: to inform and to train, through a dynamic of interaction between the Member States, the Commission, the organs of the Community, as well as national, regional and international partners. The aim is, in the long term, to make reliable and structured information available, at the service of a holistic development based on education, training, sciences, technology and innovation in the community space. A true window on current dynamics, this platform allows both to share future perspectives and to better understand internal and external developments in the region. It bears witness, unequivocally, to a reality in the making: the Central Africa of knowledge is on the move!',
    fr: "Le Portail Régional d'Aide au Suivi en matière d'Éducation, Sciences, Technologie et Innovation (PRASMESTI) a vocation à devenir un outil privilégié de communication sectorielle. Chaque État membre est ainsi appelé à s'en approprier l'usage, en fonction de ses priorités, de ses objectifs et de ses réalisations. Son ambition est double : informer et former, à travers une dynamique d'interaction entre les États membres, la Commission, les organes de la Communauté, ainsi que les partenaires nationaux, régionaux et internationaux. Il s'agit, à terme, de mettre à disposition une information fiable et structurée, au service d'un développement holistique fondé sur l'éducation, la formation, les sciences, la technologie et l'innovation dans l'espace communautaire. Véritable fenêtre ouverte sur les dynamiques en cours, cette plateforme permet à la fois de partager les perspectives d'avenir et de mieux appréhender les évolutions internes et externes à la région. Elle témoigne, sans équivoque, d'une réalité en construction : l'Afrique centrale du savoir est en marche !",
    es: 'El Portal Regional de Apoyo al Seguimiento en materia de Educación, Ciencias, Tecnología e Innovación (PRASMESTI) tiene la vocación de convertirse en una herramienta privilegiada de comunicación sectorial. Cada Estado miembro está así llamado a apropiarse de su uso, en función de sus prioridades, sus objetivos y sus logros. Su ambición es doble: informar y formar, a través de una dinámica de interacción entre los Estados miembros, la Comisión, los órganos de la Comunidad, así como los socios nacionales, regionales e internacionales. Se trata, a largo plazo, de poner a disposición una información fiable y estructurada, al servicio de un desarrollo holístico basado en la educación, la formación, las ciencias, la tecnología y la innovación en el espacio comunitario. Verdadera ventana abierta a las dinámicas en curso, esta plataforma permite a la vez compartir las perspectivas de futuro y comprender mejor la evolución interna y externa de la región. Da testimonio, sin equívocos, de una realidad en construcción: ¡el África Central del saber está en marcha!',
    pt: 'O Portal Regional de Apoio ao Acompanhamento em matéria de Educação, Ciências, Tecnologia e Inovação (PRASMESTI) tem a vocação de se tornar uma ferramenta privilegiada de comunicação setorial. Cada Estado-membro é assim chamado a apropriar-se da sua utilização, em função das suas prioridades, dos seus objetivos e das suas realizações. A sua ambição é dupla: informar e formar, através de uma dinâmica de interação entre os Estados-membros, a Comissão, os órgãos da Comunidade, bem como os parceiros nacionais, regionais e internacionais. Trata-se, a prazo, de disponibilizar uma informação fiável e estruturada, ao serviço de um desenvolvimento holístico baseado na educação, na formação, nas ciências, na tecnologia e na inovação no espaço comunitário. Verdadeira janela aberta sobre as dinâmicas em curso, esta plataforma permite simultaneamente partilhar as perspetivas de futuro e compreender melhor a evolução interna e externa da região. Testemunha, sem equívoco, uma realidade em construção: a África Central do saber está em marcha!',
  },
  directorName: { en: 'David Blaise Ossene', fr: 'David Blaise Ossene', es: 'David Blaise Ossene', pt: 'David Blaise Ossene' },
  directorRole: { en: 'Director of the PRASMESTI programme', fr: 'Directeur du programme PRASMESTI', es: 'Director del programa PRASMESTI', pt: 'Diretor do programa PRASMESTI' },
  voicesEyebrow: { en: 'Testimonials', fr: 'Témoignages', es: 'Testimonios', pt: 'Testemunhos' },
  voicesTitle: {
    en: 'What the Commissioners say',
    fr: "Ce qu'en disent les Commissaires",
    es: 'Lo que dicen los Comisarios',
    pt: 'O que dizem os Comissários',
  },
  voicesIntro: {
    en: 'PRASMESTI is a collective commitment. Here is how the Commissioners of the ECCAS see its role in building a more integrated, more knowledgeable and more prosperous Central Africa.',
    fr: "PRASMESTI est un engagement collectif. Voici comment les Commissaires de la CEEAC perçoivent son rôle dans la construction d'une Afrique centrale plus intégrée, plus savante et plus prospère.",
    es: 'PRASMESTI es un compromiso colectivo. Así perciben los Comisarios de la CEEAC su papel en la construcción de un África Central más integrada, más sabia y más próspera.',
    pt: 'O PRASMESTI é um compromisso coletivo. Eis como os Comissários da CEEAC percebem o seu papel na construção de uma África Central mais integrada, mais sábia e mais próspera.',
  },
  newsEyebrow: { en: 'News', fr: 'Actualités', es: 'Actualidad', pt: 'Notícias' },
  newsTitle: {
    en: 'Latest news',
    fr: 'Aux dernières nouvelles',
    es: 'Últimas noticias',
    pt: 'Últimas notícias',
  },
  footerTitle: { en: 'ECCAS member states', fr: 'États membres de la CEEAC', es: 'Estados miembros de la CEEAC', pt: 'Estados-membros da CEEAC' },
  footerBody: {
    en: 'PRASMESTI is designed to inform, orient, and connect initiatives across the regional education, science, technology, and innovation ecosystem.',
    fr: "PRASMESTI est conçu pour informer, orienter et relier les initiatives à travers l'écosystème régional de l'éducation, des sciences, de la technologie et de l'innovation.",
    es: 'PRASMESTI está concebido para informar, orientar y conectar las iniciativas en todo el ecosistema regional de la educación, las ciencias, la tecnología y la innovación.',
    pt: 'O PRASMESTI foi concebido para informar, orientar e ligar as iniciativas em todo o ecossistema regional da educação, das ciências, da tecnologia e da inovação.',
  },
  footerContact: { en: 'Contact', fr: 'Contact', es: 'Contacto', pt: 'Contacto' },
  footerRights: { en: 'All rights reserved.', fr: 'Tous droits réservés.', es: 'Todos los derechos reservados.', pt: 'Todos os direitos reservados.' },

  // Presentation page
  presEyebrow: { en: '« Presentation » Page', fr: 'Page « Présentation »', es: 'Página « Presentación »', pt: 'Página « Apresentação »' },
  presPageTitleLine1: { en: 'What is', fr: "Qu'est-ce que", es: '¿Qué es', pt: 'O que é' },
  presPageTitleLine2: { en: '', fr: 'le', es: 'el', pt: 'o' },
  presPlatformHighlight: {
    en: 'The Regional Portal for Monitoring Assistance in Education, Sciences, Technology and Innovation (PRASMESTI)',
    fr: "Le Portail Régional d'Aide au Suivi en matière d'Éducation, Sciences, Technologie et Innovation (PRASMESTI)",
    es: 'El Portal Regional de Apoyo al Seguimiento en materia de Educación, Ciencias, Tecnología e Innovación (PRASMESTI)',
    pt: 'O Portal Regional de Apoio ao Acompanhamento em matéria de Educação, Ciências, Tecnologia e Inovação (PRASMESTI)',
  },
  presPlatformRest: {
    en: 'is a strategic platform set up to support regional integration in Central Africa through the circulation of knowledge.',
    fr: "est une plateforme stratégique mise en place pour soutenir l'intégration régionale en Afrique centrale par la circulation des savoirs.",
    es: 'es una plataforma estratégica creada para apoyar la integración regional en África Central mediante la circulación de los saberes.',
    pt: 'é uma plataforma estratégica criada para apoiar a integração regional na África Central através da circulação dos saberes.',
  },
  presWhyQ: { en: 'PRASMESTI: Why?', fr: 'Le PRASMESTI : Pourquoi ?', es: 'El PRASMESTI: ¿Por qué?', pt: 'O PRASMESTI: Porquê?' },
  presWhyItem1: { en: 'facilitate intra-community exchanges', fr: 'faciliter les échanges intra-communautaires', es: 'facilitar los intercambios intracomunitarios', pt: 'facilitar as trocas intracomunitárias' },
  presWhyItem2: {
    en: 'enhance the diversity of educational and scientific systems',
    fr: 'valoriser la diversité des systèmes éducatifs et scientifiques',
    es: 'valorizar la diversidad de los sistemas educativos y científicos',
    pt: 'valorizar a diversidade dos sistemas educativos e científicos',
  },
  presWhyItem3: {
    en: 'establish a structured, readable and coherent dialogue between actors',
    fr: 'instaurer un dialogue structuré, lisible et cohérent entre les acteurs',
    es: 'instaurar un diálogo estructurado, legible y coherente entre los actores',
    pt: 'instaurar um diálogo estruturado, legível e coerente entre os atores',
  },
  presMissionsTitle: { en: '1. Its main missions', fr: '1. Ses missions principales', es: '1. Sus principales misiones', pt: '1. As suas principais missões' },
  presMissionsIntro: { en: 'PRASMESTI is intended to:', fr: 'Le PRASMESTI a pour vocation de :', es: 'El PRASMESTI tiene como vocación:', pt: 'O PRASMESTI tem por vocação:' },
  presMissionsItem1: {
    en: 'Share information on dynamics in education, training, sciences, technology and innovation;',
    fr: "Partager l'information sur les dynamiques en éducation, formation, sciences, technologie et innovation ;",
    es: 'Compartir la información sobre las dinámicas en educación, formación, ciencias, tecnología e innovación;',
    pt: 'Partilhar a informação sobre as dinâmicas em educação, formação, ciências, tecnologia e inovação;',
  },
  presMissionsItem2: {
    en: 'Make available regional norms and standards;',
    fr: 'Mettre à disposition les normes et standards régionaux ;',
    es: 'Poner a disposición las normas y estándares regionales;',
    pt: 'Disponibilizar as normas e os padrões regionais;',
  },
  presMissionsItem3: { en: 'Promote innovations;', fr: 'Valoriser les innovations ;', es: 'Valorizar las innovaciones;', pt: 'Valorizar as inovações;' },
  presMissionsItem4: {
    en: 'Strengthen the sense of regional belonging.',
    fr: "Renforcer le sentiment d'appartenance régionale.",
    es: 'Reforzar el sentimiento de pertenencia regional.',
    pt: 'Reforçar o sentimento de pertença regional.',
  },
  presFunctionsTitle: { en: '2. Its key functions', fr: '2. Ses fonctions clés', es: '2. Sus funciones clave', pt: '2. As suas funções-chave' },
  presFunctionsIntro: {
    en: 'The portal offers several structuring features:',
    fr: 'Le portail offre plusieurs fonctionnalités structurantes :',
    es: 'El portal ofrece varias funcionalidades estructurantes:',
    pt: 'O portal oferece várias funcionalidades estruturantes:',
  },
  presFunctionsSub1: { en: '1. Communication & 2. Coordination', fr: '1. Communication & 2. Coordination', es: '1. Comunicación y 2. Coordinación', pt: '1. Comunicação e 2. Coordenação' },
  presFunctionsItem1: { en: 'News, information feed, RSS feeds', fr: "Actualités, fil d'information, flux RSS", es: 'Actualidad, hilo de información, fuentes RSS', pt: 'Notícias, fio de informação, feeds RSS' },
  presFunctionsItem2: { en: 'Monitoring activities and projects', fr: 'Suivi des activités et des projets', es: 'Seguimiento de las actividades y los proyectos', pt: 'Acompanhamento das atividades e dos projetos' },
  presObjectivesTitle: { en: '3. Its strategic objectives', fr: '3. Ses objectifs stratégiques', es: '3. Sus objetivos estratégicos', pt: '3. Os seus objetivos estratégicos' },
  presObjectivesIntro: {
    en: 'PRASMESTI pursues a double objective:',
    fr: 'Le PRASMESTI poursuit un double objectif :',
    es: 'El PRASMESTI persigue un doble objetivo:',
    pt: 'O PRASMESTI prossegue um duplo objetivo:',
  },
  presObjectivesItem1: {
    en: 'Accelerate regional integration through better information circulation;',
    fr: "Accélérer l'intégration régionale par une meilleure circulation de l'information ;",
    es: 'Acelerar la integración regional mediante una mejor circulación de la información;',
    pt: 'Acelerar a integração regional através de uma melhor circulação da informação;',
  },
  presObjectivesItem2: {
    en: 'Modernize communication and monitoring practices.',
    fr: 'Moderniser les pratiques de communication et de suivi.',
    es: 'Modernizar las prácticas de comunicación y de seguimiento.',
    pt: 'Modernizar as práticas de comunicação e de acompanhamento.',
  },
  presResultsTitle: { en: '4. Expected results', fr: '4. Les résultats attendus', es: '4. Los resultados esperados', pt: '4. Os resultados esperados' },
  presResultsItem1: {
    en: 'Strengthening collaboration between States, institutions and partners;',
    fr: 'Renforcement de la collaboration entre États, institutions et partenaires ;',
    es: 'Refuerzo de la colaboración entre Estados, instituciones y socios;',
    pt: 'Reforço da colaboração entre Estados, instituições e parceiros;',
  },
  presResultsItem2: {
    en: 'Improving the monitoring of public policies and programs.',
    fr: 'Amélioration du suivi des politiques publiques et des programmes.',
    es: 'Mejora del seguimiento de las políticas públicas y los programas.',
    pt: 'Melhoria do acompanhamento das políticas públicas e dos programas.',
  },
  presAccessTitle: { en: '5. Access modalities', fr: "5. Modalités d'accès", es: '5. Modalidades de acceso', pt: '5. Modalidades de acesso' },
  presAccessIntro: {
    en: 'PRASMESTI offers several levels of access:',
    fr: "Le PRASMESTI propose plusieurs niveaux d'accès :",
    es: 'El PRASMESTI ofrece varios niveles de acceso:',
    pt: 'O PRASMESTI propõe vários níveis de acesso:',
  },
  presAccessIntranet: {
    en: 'Intranet: reserved for ECCAS institutions;',
    fr: 'Intranet : réservé aux institutions de la CEEAC ;',
    es: 'Intranet: reservado a las instituciones de la CEEAC;',
    pt: 'Intranet: reservado às instituições da CEEAC;',
  },
  presAccessExtranet: {
    en: 'Extranet: accessible to approved establishments and actors;',
    fr: 'Extranet : accessible aux établissements et acteurs agréés ;',
    es: 'Extranet: accesible a los establecimientos y actores autorizados;',
    pt: 'Extranet: acessível aos estabelecimentos e atores autorizados;',
  },
  presAccessInternet: { en: 'Internet: public access.', fr: 'Internet : accès public.', es: 'Internet: acceso público.', pt: 'Internet: acesso público.' },
  presVisionTitle: {
    en: '6. A platform at the service of image and the future',
    fr: "6. Une plateforme au service de l'image et de l'avenir",
    es: '6. Una plataforma al servicio de la imagen y del futuro',
    pt: '6. Uma plataforma ao serviço da imagem e do futuro',
  },
  presVisionText1Pre: {
    en: 'A true regional showcase, PRASMESTI contributes to',
    fr: 'Véritable vitrine régionale, le PRASMESTI contribue à',
    es: 'Verdadero escaparate regional, el PRASMESTI contribuye a',
    pt: 'Verdadeira montra regional, o PRASMESTI contribui para',
  },
  presVisionText1Bold: {
    en: 'valuing the image of education, science and innovation in Central Africa',
    fr: "valoriser l'image de l'éducation, des sciences et de l'innovation en Afrique centrale",
    es: 'valorizar la imagen de la educación, las ciencias y la innovación en África Central',
    pt: 'valorizar a imagem da educação, das ciências e da inovação na África Central',
  },
  presVisionText2: {
    en: 'Shared knowledge is the engine of successful integration and sustainable development.',
    fr: "Le savoir partagé est le moteur d'une intégration réussie et d'un développement durable.",
    es: 'El saber compartido es el motor de una integración exitosa y de un desarrollo sostenible.',
    pt: 'O saber partilhado é o motor de uma integração bem-sucedida e de um desenvolvimento sustentável.',
  },

  // ── Why PRASMESTI page ──
  whyPageEyebrow: { en: '« Why PRASMESTI? » Page', fr: 'Page « Pourquoi le PRASMESTI ? »', es: 'Página « ¿Por qué el PRASMESTI? »', pt: 'Página « Porquê o PRASMESTI? »' },
  whyPageTitle: { en: 'Improving the brand image of Education', fr: "Améliorer l'image de marque de l'Éducation", es: 'Mejorar la imagen de marca de la Educación', pt: 'Melhorar a imagem de marca da Educação' },
  whyPageSeeMore: { en: 'See more', fr: 'Voir plus', es: 'Ver más', pt: 'Ver mais' },

  // ── Objectives page ──
  objsEyebrow: { en: '« Objectives » Page', fr: 'Page « objectifs »', es: 'Página « objetivos »', pt: 'Página « objetivos »' },
  objsTitle: {
    en: 'PRASMESTI: strategic lever to accelerate regional integration',
    fr: "PRASMESTI : levier stratégique pour accélérer l'intégration régionale",
    es: 'PRASMESTI: palanca estratégica para acelerar la integración regional',
    pt: 'PRASMESTI: alavanca estratégica para acelerar a integração regional',
  },
  objsLeadPre: {
    en: 'PRASMESTI is a structuring tool at the service of school, academic, scientific and technological integration in Central Africa. Through its information, training and networking functions, it responds to a major imperative:',
    fr: "Le PRASMESTI s'inscrit comme un outil structurant au service de l'intégration scolaire, académique, scientifique et technologique en Afrique centrale. À travers ses fonctions d'information, de formation et de mise en réseau, il répond à un impératif majeur :",
    es: 'El PRASMESTI se inscribe como una herramienta estructurante al servicio de la integración escolar, académica, científica y tecnológica en África Central. A través de sus funciones de información, formación y puesta en red, responde a un imperativo mayor:',
    pt: 'O PRASMESTI inscreve-se como uma ferramenta estruturante ao serviço da integração escolar, académica, científica e tecnológica na África Central. Através das suas funções de informação, formação e ligação em rede, responde a um imperativo maior:',
  },
  objsLeadBold: {
    en: 'better connect systems, actors and knowledge to transform regional potential into concrete results.',
    fr: 'mieux connecter les systèmes, les acteurs et les savoirs pour transformer le potentiel régional en résultats concrets.',
    es: 'conectar mejor los sistemas, los actores y los saberes para transformar el potencial regional en resultados concretos.',
    pt: 'ligar melhor os sistemas, os atores e os saberes para transformar o potencial regional em resultados concretos.',
  },
  objsContextText: {
    en: 'In a context marked by information fragmentation, low knowledge circulation and insufficient coordination of initiatives, PRASMESTI offers an adapted, modern and federating response.',
    fr: "Dans un contexte marqué par la fragmentation des informations, la faible circulation des connaissances et l'insuffisante coordination des initiatives, le PRASMESTI offre une réponse adaptée, moderne et fédératrice.",
    es: 'En un contexto marcado por la fragmentación de la información, la escasa circulación de los conocimientos y la insuficiente coordinación de las iniciativas, el PRASMESTI ofrece una respuesta adaptada, moderna y federadora.',
    pt: 'Num contexto marcado pela fragmentação da informação, pela fraca circulação dos conhecimentos e pela insuficiente coordenação das iniciativas, o PRASMESTI oferece uma resposta adaptada, moderna e federadora.',
  },
  objsH1Title: { en: '1. Inform internally: strengthen regional coherence and visibility', fr: '1. Informer sur l\'interne : renforcer la cohérence et la visibilité régionale', es: '1. Informar internamente: reforzar la coherencia y la visibilidad regional', pt: '1. Informar internamente: reforçar a coerência e a visibilidade regional' },
  objsH1Intro: { en: 'PRASMESTI allows to:', fr: 'Le PRASMESTI permet de :', es: 'El PRASMESTI permite:', pt: 'O PRASMESTI permite:' },
  objsH1Li1: { en: '<strong>Value Member States\' initiatives</strong>, by making visible ongoing projects, reforms and innovations;', fr: '<strong>Valoriser les initiatives des États membres</strong>, en rendant visibles les projets, réformes et innovations en cours ;', es: '<strong>Valorizar las iniciativas de los Estados miembros</strong>, haciendo visibles los proyectos, reformas e innovaciones en curso;', pt: '<strong>Valorizar as iniciativas dos Estados-membros</strong>, tornando visíveis os projetos, reformas e inovações em curso;' },
  objsH1Li2: { en: '<strong>Ensure continuous monitoring of regional policies and programs</strong>, thus facilitating their evaluation and appropriation;', fr: '<strong>Assurer un suivi continu des politiques et programmes régionaux</strong>, facilitant ainsi leur évaluation et leur appropriation ;', es: '<strong>Garantizar un seguimiento continuo de las políticas y programas regionales</strong>, facilitando así su evaluación y apropiación;', pt: '<strong>Assegurar um acompanhamento contínuo das políticas e programas regionais</strong>, facilitando assim a sua avaliação e apropriação;' },
  objsH1Li3: { en: '<strong>Create a living institutional memory</strong>, through the capitalization of experiences, good practices and sectoral dynamics;', fr: '<strong>Créer une mémoire institutionnelle vivante</strong>, à travers la capitalisation des expériences, des bonnes pratiques et des dynamiques sectorielles ;', es: '<strong>Crear una memoria institucional viva</strong>, mediante la capitalización de las experiencias, las buenas prácticas y las dinámicas sectoriales;', pt: '<strong>Criar uma memória institucional viva</strong>, através da capitalização das experiências, das boas práticas e das dinâmicas setoriais;' },
  objsH1Li4: { en: '<strong>Strengthen the sense of community belonging</strong>, by showing a Central Africa on the move, united and committed.', fr: "<strong>Renforcer le sentiment d'appartenance communautaire</strong>, en donnant à voir une Afrique centrale en mouvement, solidaire et engagée.", es: '<strong>Reforzar el sentimiento de pertenencia comunitaria</strong>, mostrando un África Central en movimiento, solidaria y comprometida.', pt: '<strong>Reforçar o sentimento de pertença comunitária</strong>, dando a ver uma África Central em movimento, solidária e empenhada.' },
  objsH1Highlight: { en: '👉 <strong>Opportunity for Member States:</strong> better position themselves, share their progress, learn from each other and avoid duplication of efforts.', fr: '👉 <strong>Opportunité pour les États membres :</strong> mieux se positionner, partager leurs avancées, apprendre les uns des autres et éviter la duplication des efforts.', es: '👉 <strong>Oportunidad para los Estados miembros:</strong> posicionarse mejor, compartir sus avances, aprender unos de otros y evitar la duplicación de esfuerzos.', pt: '👉 <strong>Oportunidade para os Estados-membros:</strong> posicionar-se melhor, partilhar os seus avanços, aprender uns com os outros e evitar a duplicação de esforços.' },
  objsH2Title: { en: '2. Inform externally: open the region and stimulate innovation', fr: "2. Informer sur l'externe : ouvrir la région et stimuler l'innovation", es: '2. Informar externamente: abrir la región y estimular la innovación', pt: '2. Informar externamente: abrir a região e estimular a inovação' },
  objsH2Intro: { en: 'PRASMESTI constitutes a strategic window on the world, allowing to:', fr: 'Le PRASMESTI constitue une fenêtre stratégique sur le monde, en permettant de :', es: 'El PRASMESTI constituye una ventana estratégica al mundo, permitiendo:', pt: 'O PRASMESTI constitui uma janela estratégica para o mundo, permitindo:' },
  objsH2Li1: { en: '<strong>Follow international trends</strong> in education, research, technology and innovation;', fr: '<strong>Suivre les tendances internationales</strong> en matière d\'éducation, de recherche, de technologie et d\'innovation ;', es: '<strong>Seguir las tendencias internacionales</strong> en materia de educación, investigación, tecnología e innovación;', pt: '<strong>Acompanhar as tendências internacionais</strong> em matéria de educação, investigação, tecnologia e inovação;' },
  objsH2Li2: { en: '<strong>Access normative frameworks</strong>, opportunities and good practices from other regions;', fr: '<strong>Accéder aux cadres normatifs</strong>, aux opportunités et aux bonnes pratiques d\'autres régions ;', es: '<strong>Acceder a los marcos normativos</strong>, las oportunidades y las buenas prácticas de otras regiones;', pt: '<strong>Aceder aos quadros normativos</strong>, às oportunidades e às boas práticas de outras regiões;' },
  objsH2Li3: { en: '<strong>Identify technical and financial partnerships</strong> with international actors;', fr: '<strong>Identifier des partenariats techniques et financiers</strong> avec des acteurs internationaux ;', es: '<strong>Identificar asociaciones técnicas y financieras</strong> con actores internacionales;', pt: '<strong>Identificar parcerias técnicas e financeiras</strong> com atores internacionais;' },
  objsH2Li4: { en: '<strong>Align national policies</strong> with regional and international standards.', fr: '<strong>Aligner les politiques nationales</strong> sur les standards régionaux et internationaux.', es: '<strong>Alinear las políticas nacionales</strong> con los estándares regionales e internacionales.', pt: '<strong>Alinhar as políticas nacionais</strong> pelos padrões regionais e internacionais.' },
  objsH2Highlight: { en: '👉 <strong>Opportunity for Member States:</strong> get inspired by the best global experiences.', fr: "👉 <strong>Opportunité pour les États membres :</strong> s'inspirer des meilleures expériences mondiales.", es: '👉 <strong>Oportunidad para los Estados miembros:</strong> inspirarse en las mejores experiencias mundiales.', pt: '👉 <strong>Oportunidade para os Estados-membros:</strong> inspirar-se nas melhores experiências mundiais.' },
  objsH3Title: { en: '3. Train: build human capital adapted to contemporary challenges', fr: '3. Former : construire un capital humain adapté aux défis contemporains', es: '3. Formar: construir un capital humano adaptado a los desafíos contemporáneos', pt: '3. Formar: construir um capital humano adaptado aos desafios contemporâneos' },
  objsH3Intro: { en: 'PRASMESTI plays an essential role in capacity building.', fr: 'Le PRASMESTI joue un rôle essentiel dans le renforcement des capacités.', es: 'El PRASMESTI desempeña un papel esencial en el refuerzo de las capacidades.', pt: 'O PRASMESTI desempenha um papel essencial no reforço das capacidades.' },
  objsH3Li1: { en: '<strong>Make reliable data available</strong>', fr: '<strong>Mettre à disposition des données fiables</strong>', es: '<strong>Poner a disposición datos fiables</strong>', pt: '<strong>Disponibilizar dados fiáveis</strong>' },
  objsH3Li2: { en: '<strong>Identify skill needs</strong>', fr: '<strong>Identifier les besoins en compétences</strong>', es: '<strong>Identificar las necesidades de competencias</strong>', pt: '<strong>Identificar as necessidades de competências</strong>' },
  objsH3Li3: { en: '<strong>Disseminate educational content</strong>', fr: '<strong>Diffuser des contenus pédagogiques</strong>', es: '<strong>Difundir contenidos pedagógicos</strong>', pt: '<strong>Difundir conteúdos pedagógicos</strong>' },
  objsH3Li4: { en: '<strong>Support training-employment matching</strong>', fr: "<strong>Soutenir l'adéquation formation-emploi</strong>", es: '<strong>Apoyar la adecuación formación-empleo</strong>', pt: '<strong>Apoiar a adequação formação-emprego</strong>' },

  // ── Expectations page ──
  attEyebrow: { en: '« Expectations » Page', fr: 'Page « les attentes »', es: 'Página « las expectativas »', pt: 'Página « as expectativas »' },
  attQ: { en: 'PRASMESTI: what expectations?', fr: 'Le PRASMESTI : quelles attentes ?', es: 'El PRASMESTI: ¿qué expectativas?', pt: 'O PRASMESTI: que expectativas?' },
  attLeadPre: { en: "PRASMESTI's expectations reflect a strong ambition: to make the portal a real", fr: 'Les attentes du PRASMESTI traduisent une ambition forte : faire du portail un véritable', es: 'Las expectativas del PRASMESTI traducen una fuerte ambición: hacer del portal un verdadero', pt: 'As expectativas do PRASMESTI traduzem uma forte ambição: fazer do portal um verdadeiro' },
  attLeadBold: { en: 'engine of integration, collective performance and structural transformation', fr: "moteur d'intégration, de performance collective et de transformation structurelle", es: 'motor de integración, de rendimiento colectivo y de transformación estructural', pt: 'motor de integração, de desempenho coletivo e de transformação estrutural' },
  attLeadPost: {
    en: 'of Education, Training, Sciences, Technology and Innovation (ETSTI) systems in Central Africa.',
    fr: "des systèmes de l'Éducation, de la Formation, des Sciences, de la Technologie et de l'Innovation (EFSTI) en Afrique centrale.",
    es: 'de los sistemas de Educación, Formación, Ciencias, Tecnología e Innovación (EFCTI) en África Central.',
    pt: 'dos sistemas de Educação, Formação, Ciências, Tecnologia e Inovação (EFCTI) na África Central.',
  },
  attDynTitle: { en: 'Energize, value and impulse', fr: 'Dynamiser, valoriser et impulser', es: 'Dinamizar, valorizar e impulsar', pt: 'Dinamizar, valorizar e impulsionar' },
  attH1Title: { en: '1. Strengthen a dynamic collaboration ecosystem', fr: '1. Renforcer un écosystème de collaboration dynamique', es: '1. Reforzar un ecosistema de colaboración dinámico', pt: '1. Reforçar um ecossistema de colaboração dinâmico' },
  attH1Text: { en: 'PRASMESTI aims to intensify exchanges and synergies between ECCAS Member States, development partners and economic operators, in order to build an integrated, fluid and sustainable cooperation framework.', fr: 'Le PRASMESTI vise à intensifier les échanges et les synergies entre les États membres de la CEEAC, les partenaires au développement et les opérateurs économiques, afin de bâtir un cadre de coopération intégré, fluide et durable.', es: 'El PRASMESTI pretende intensificar los intercambios y las sinergias entre los Estados miembros de la CEEAC, los socios para el desarrollo y los operadores económicos, con el fin de construir un marco de cooperación integrado, fluido y sostenible.', pt: 'O PRASMESTI visa intensificar as trocas e as sinergias entre os Estados-membros da CEEAC, os parceiros de desenvolvimento e os operadores económicos, a fim de construir um quadro de cooperação integrado, fluido e sustentável.' },
  attH2Title: { en: '2. Increase the attractiveness of the ETSTI sector', fr: '2. Accroître l\'attractivité du secteur EFSTI', es: '2. Aumentar el atractivo del sector EFCTI', pt: '2. Aumentar a atratividade do setor EFCTI' },
  attH2Text: { en: 'By structuring and valuing the regional offer, the portal contributes to strengthening the visibility and competitiveness of the sector, notably through the development of innovative services with high added value.', fr: 'En structurant et en valorisant l\'offre régionale, le portail contribue à renforcer la visibilité et la compétitivité du secteur, notamment à travers le développement de services innovants à forte valeur ajoutée.', es: 'Al estructurar y valorizar la oferta regional, el portal contribuye a reforzar la visibilidad y la competitividad del sector, en particular mediante el desarrollo de servicios innovadores de alto valor añadido.', pt: 'Ao estruturar e valorizar a oferta regional, o portal contribui para reforçar a visibilidade e a competitividade do setor, nomeadamente através do desenvolvimento de serviços inovadores de elevado valor acrescentado.' },
  attH3Title: { en: '3. Impulse structuring and innovative projects', fr: '3. Impulser des chantiers structurants et innovants', es: '3. Impulsar proyectos estructurantes e innovadores', pt: '3. Impulsionar projetos estruturantes e inovadores' },
  attH3Text: { en: 'PRASMESTI is expected as a strategic pulse tool, capable of supporting the design and management of ambitious regional projects, in line with contemporary scientific, technological and economic challenges.', fr: 'Le PRASMESTI est attendu comme un outil d\'impulsion stratégique, capable de soutenir la conception et le pilotage de projets régionaux ambitieux, en phase avec les défis scientifiques, technologiques et économiques contemporains.', es: 'Se espera que el PRASMESTI sea una herramienta de impulso estratégico, capaz de apoyar el diseño y la gestión de proyectos regionales ambiciosos, en sintonía con los desafíos científicos, tecnológicos y económicos contemporáneos.', pt: 'Espera-se que o PRASMESTI seja uma ferramenta de impulso estratégico, capaz de apoiar a conceção e a gestão de projetos regionais ambiciosos, em sintonia com os desafios científicos, tecnológicos e económicos contemporâneos.' },
  attGovTitle: { en: 'Governance, modernization and transmission', fr: 'Gouvernance, modernisation et transmission', es: 'Gobernanza, modernización y transmisión', pt: 'Governança, modernização e transmissão' },
  attH4Title: { en: '4. Drive public policies by data (monitoring)', fr: '4. Piloter les politiques publiques par la donnée (monitoring)', es: '4. Dirigir las políticas públicas mediante los datos (monitoreo)', pt: '4. Conduzir as políticas públicas pelos dados (monitorização)' },
  attH4Text: { en: 'One of the major challenges is to set up real-time monitoring of actions and programs, thanks to reliable indicators, allowing:', fr: "L'un des enjeux majeurs est de mettre en place un suivi en temps réel des actions et des programmes, grâce à des indicateurs fiables, permettant :", es: 'Uno de los principales desafíos es establecer un seguimiento en tiempo real de las acciones y los programas, gracias a indicadores fiables, que permita:', pt: 'Um dos principais desafios é implementar um acompanhamento em tempo real das ações e dos programas, graças a indicadores fiáveis, permitindo:' },
  attH4Li1: { en: 'to quickly identify blockages,', fr: 'de localiser rapidement les blocages,', es: 'localizar rápidamente los bloqueos,', pt: 'localizar rapidamente os bloqueios,' },
  attH4Li2: { en: 'to optimize decision-making,', fr: "d'optimiser la prise de décision,", es: 'optimizar la toma de decisiones,', pt: 'otimizar a tomada de decisão,' },
  attH4Li3: { en: 'and to accelerate interventions on the ground.', fr: "et d'accélérer les interventions sur le terrain.", es: 'y acelerar las intervenciones sobre el terreno.', pt: 'e acelerar as intervenções no terreno.' },
  attH5Title: { en: '5. Structure and modernize the institutional back-office', fr: '5. Structurer et moderniser le back-office institutionnel', es: '5. Estructurar y modernizar el back-office institucional', pt: '5. Estruturar e modernizar o back-office institucional' },
  attH5Text: { en: 'The portal must allow the harmonization and digitalization of administrative practices, including: digital archiving, monitoring of programs and projects, traceability of actions, thus guaranteeing transparency, continuity and efficiency.', fr: "Le portail doit permettre l'harmonisation et la digitalisation des pratiques administratives, notamment : l'archivage numérique, le suivi des programmes et projets, la traçabilité des actions, garantissant ainsi transparence, continuité et efficacité.", es: 'El portal debe permitir la armonización y la digitalización de las prácticas administrativas, en particular: el archivo digital, el seguimiento de los programas y proyectos, la trazabilidad de las acciones, garantizando así transparencia, continuidad y eficacia.', pt: 'O portal deve permitir a harmonização e a digitalização das práticas administrativas, nomeadamente: o arquivo digital, o acompanhamento dos programas e projetos, a rastreabilidade das ações, garantindo assim transparência, continuidade e eficácia.' },
  attH6Title: { en: '6. Fluidify the transmission of knowledge', fr: '6. Fluidifier la transmission des savoirs', es: '6. Fluidificar la transmisión de los saberes', pt: '6. Fluidificar a transmissão dos saberes' },
  attH6Text: { en: 'PRASMESTI aims to transform information sharing into a lever for collective performance, by promoting a rapid, reliable and accessible circulation of knowledge.', fr: 'Le PRASMESTI ambitionne de transformer le partage d\'informations en levier de performance collective, en favorisant une circulation rapide, fiable et accessible des connaissances.', es: 'El PRASMESTI aspira a transformar el intercambio de información en una palanca de rendimiento colectivo, favoreciendo una circulación rápida, fiable y accesible de los conocimientos.', pt: 'O PRASMESTI ambiciona transformar a partilha de informação numa alavanca de desempenho coletivo, favorecendo uma circulação rápida, fiável e acessível dos conhecimentos.' },
  attEServicesTitle: { en: 'Digital services and interoperability', fr: 'Services numériques et interopérabilité', es: 'Servicios digitales e interoperabilidad', pt: 'Serviços digitais e interoperabilidade' },
  attH7Title: { en: '7. Deploy an integrated regional e-service', fr: '7. Déployer un e-service régional intégré', es: '7. Desplegar un e-servicio regional integrado', pt: '7. Implantar um e-serviço regional integrado' },
  attH7Text: { en: 'It is about setting up a central digital platform, dedicated to ETSTI, facilitating:', fr: "Il s'agit de mettre en place une plateforme numérique centrale, dédiée à l'EFSTI, facilitant :", es: 'Se trata de establecer una plataforma digital central, dedicada a la EFCTI, que facilite:', pt: 'Trata-se de implementar uma plataforma digital central, dedicada à EFCTI, facilitando:' },
  attH7Li1: { en: 'experience sharing;', fr: "le partage d'expériences ;", es: 'el intercambio de experiencias;', pt: 'a partilha de experiências;' },
  attH7Li2: { en: 'professional networking;', fr: 'le réseautage professionnel ;', es: 'la creación de redes profesionales;', pt: 'a criação de redes profissionais;' },
  attH7Li3: { en: 'and continuous capacity building.', fr: 'et le renforcement continu des capacités.', es: 'y el refuerzo continuo de las capacidades.', pt: 'e o reforço contínuo das capacidades.' },
  attH8Title: { en: '8. Promote interoperability of systems and professions', fr: '8. Favoriser l\'interopérabilité des systèmes et des métiers', es: '8. Favorecer la interoperabilidad de los sistemas y las profesiones', pt: '8. Favorecer a interoperabilidade dos sistemas e das profissões' },
  attH8Text: { en: 'The portal must create digital bridges between the different institutions and professions, in order to:', fr: 'Le portail doit créer des passerelles numériques entre les différentes institutions et métiers, afin de :', es: 'El portal debe crear pasarelas digitales entre las diferentes instituciones y profesiones, con el fin de:', pt: 'O portal deve criar pontes digitais entre as diferentes instituições e profissões, a fim de:' },
  attH8Li1: { en: 'simplify workflows,', fr: 'simplifier les flux de travail,', es: 'simplificar los flujos de trabajo,', pt: 'simplificar os fluxos de trabalho,' },
  attH8Li2: { en: 'improve coordination,', fr: 'améliorer la coordination,', es: 'mejorar la coordinación,', pt: 'melhorar a coordenação,' },
  attH8Li3: { en: 'strengthen the capitalization of knowledge.', fr: 'renforcer la capitalisation des connaissances.', es: 'reforzar la capitalización de los conocimientos.', pt: 'reforçar a capitalização dos conhecimentos.' },
  attImageLevierTitle: { en: 'PRASMESTI: an image and transformation lever', fr: "Le PRASMESTI : un levier d'image et de transformation", es: 'El PRASMESTI: una palanca de imagen y de transformación', pt: 'O PRASMESTI: uma alavanca de imagem e de transformação' },
  attImageLevierIntro: { en: 'Beyond its technical functions, PRASMESTI embodies a strong political and symbolic ambition:', fr: 'Au-delà de ses fonctions techniques, le PRASMESTI incarne une ambition politique et symbolique forte :', es: 'Más allá de sus funciones técnicas, el PRASMESTI encarna una fuerte ambición política y simbólica:', pt: 'Para além das suas funções técnicas, o PRASMESTI encarna uma forte ambição política e simbólica:' },
  attImageLevierHighlight: { en: '👉 position Central Africa as a space of knowledge, innovation and human capital development.', fr: "👉 positionner l'Afrique centrale comme un espace de savoir, d'innovation et de développement du capital humain.", es: '👉 posicionar a África Central como un espacio de saber, de innovación y de desarrollo del capital humano.', pt: '👉 posicionar a África Central como um espaço de saber, de inovação e de desenvolvimento do capital humano.' },
  attImageLi1: { en: '<strong>An identity full of meaning:</strong> the choice of green reflects a commitment to sustainability and alignment with the Sustainable Development Goals (SDGs).', fr: "<strong>Une identité porteuse de sens :</strong> le choix du vert reflète un engagement en faveur de la durabilité et de l'alignement avec les Objectifs de Développement Durable (ODD).", es: '<strong>Una identidad cargada de sentido:</strong> la elección del verde refleja un compromiso con la sostenibilidad y la alineación con los Objetivos de Desarrollo Sostenible (ODS).', pt: '<strong>Uma identidade carregada de sentido:</strong> a escolha do verde reflete um compromisso com a sustentabilidade e o alinhamento com os Objetivos de Desenvolvimento Sustentável (ODS).' },
  attImageLi2: { en: '<strong>An asserted institutional consistency:</strong> its design and ergonomics respect the ECCAS graphic charter, in harmony with the orientations of Agenda 2063 and Agenda 2030.', fr: "<strong>Une cohérence institutionnelle affirmée :</strong> son design et son ergonomie respectent la charte graphique de la CEEAC, en harmonie avec les orientations de l'Agenda 2063 et de l'Agenda 2030.", es: '<strong>Una coherencia institucional afirmada:</strong> su diseño y su ergonomía respetan la carta gráfica de la CEEAC, en armonía con las orientaciones de la Agenda 2063 y la Agenda 2030.', pt: '<strong>Uma coerência institucional afirmada:</strong> o seu design e a sua ergonomia respeitam a carta gráfica da CEEAC, em harmonia com as orientações da Agenda 2063 e da Agenda 2030.' },
  attImageLi3: { en: '<strong>A facilitated appropriation:</strong> thanks to a consistent and intuitive visual universe, users more easily appropriate the regional objectives and the tools offered.', fr: "<strong>Une appropriation facilitée :</strong> grâce à un univers visuel cohérent et intuitif, les usagers s'approprient plus facilement les objectifs régionaux et les outils proposés.", es: '<strong>Una apropiación facilitada:</strong> gracias a un universo visual coherente e intuitivo, los usuarios se apropian más fácilmente de los objetivos regionales y de las herramientas propuestas.', pt: '<strong>Uma apropriação facilitada:</strong> graças a um universo visual coerente e intuitivo, os utilizadores apropriam-se mais facilmente dos objetivos regionais e das ferramentas propostas.' },
  attAccessAndActorsTitle: { en: 'Access modalities & A tool at the service of all', fr: "Modalités d'accès & Un outil au service de tous", es: 'Modalidades de acceso y Una herramienta al servicio de todos', pt: 'Modalidades de acesso e Uma ferramenta ao serviço de todos' },
  attAccessQ: { en: 'What access modalities?', fr: "Quelles modalités d'accès ?", es: '¿Qué modalidades de acceso?', pt: 'Que modalidades de acesso?' },
  attAccessText: { en: 'The portal offers differentiated access, adapted to user profiles:', fr: 'Le portail propose un accès différencié, adapté aux profils des utilisateurs :', es: 'El portal ofrece un acceso diferenciado, adaptado a los perfiles de los usuarios:', pt: 'O portal propõe um acesso diferenciado, adaptado aos perfis dos utilizadores:' },
  attAccessIntranet: { en: '<strong>Intranet:</strong> secure access for ECCAS employees and focal points, dedicated to internal management and coordination;', fr: '<strong>Intranet :</strong> accès sécurisé pour les collaborateurs de la CEEAC et les points focaux, dédié à la gestion interne et à la coordination ;', es: '<strong>Intranet:</strong> acceso seguro para los colaboradores de la CEEAC y los puntos focales, dedicado a la gestión interna y la coordinación;', pt: '<strong>Intranet:</strong> acesso seguro para os colaboradores da CEEAC e os pontos focais, dedicado à gestão interna e à coordenação;' },
  attAccessExtranet: { en: '<strong>Extranet:</strong> access reserved for ETSTI institutions and establishments of Member States duly registered;', fr: "<strong>Extranet :</strong> accès réservé aux institutions et établissements EFSTI des États membres dûment enregistrés ;", es: '<strong>Extranet:</strong> acceso reservado a las instituciones y establecimientos EFCTI de los Estados miembros debidamente registrados;', pt: '<strong>Extranet:</strong> acesso reservado às instituições e estabelecimentos EFCTI dos Estados-membros devidamente registados;' },
  attAccessInternet: { en: '<strong>Internet:</strong> public access to certain data, general information and statistics.', fr: '<strong>Internet :</strong> accès public à certaines données, informations générales et statistiques.', es: '<strong>Internet:</strong> acceso público a ciertos datos, información general y estadísticas.', pt: '<strong>Internet:</strong> acesso público a certos dados, informações gerais e estatísticas.' },
  attToolForAllTitle: { en: 'A tool at the service of all actors', fr: 'Un outil au service de tous les acteurs', es: 'Una herramienta al servicio de todos los actores', pt: 'Uma ferramenta ao serviço de todos os atores' },
  attToolForAllText: { en: 'PRASMESTI offers concrete opportunities to each category of actors:', fr: "Le PRASMESTI offre des opportunités concrètes à chaque catégorie d'acteurs :", es: 'El PRASMESTI ofrece oportunidades concretas a cada categoría de actores:', pt: 'O PRASMESTI oferece oportunidades concretas a cada categoria de atores:' },
  attToolForAllLi1: { en: '<strong>Member States:</strong> value their performance, attract partnerships and strengthen the driving of public policies;', fr: '<strong>États membres :</strong> valoriser leurs performances, attirer des partenariats et renforcer le pilotage des politiques publiques ;', es: '<strong>Estados miembros:</strong> valorizar sus resultados, atraer asociaciones y reforzar la dirección de las políticas públicas;', pt: '<strong>Estados-membros:</strong> valorizar os seus resultados, atrair parcerias e reforçar a condução das políticas públicas;' },
  attToolForAllLi2: { en: '<strong>Digital solution publishers:</strong> promote their expertise (audit, training, innovative solutions);', fr: '<strong>Éditeurs de solutions numériques :</strong> promouvoir leurs expertises (audit, formation, solutions innovantes) ;', es: '<strong>Editores de soluciones digitales:</strong> promover sus competencias (auditoría, formación, soluciones innovadoras);', pt: '<strong>Editores de soluções digitais:</strong> promover as suas competências (auditoria, formação, soluções inovadoras);' },
  attToolForAllLi3: { en: '<strong>Consulting firms and technical partners:</strong> present their service offers, from strategic analysis to operational implementation.', fr: "<strong>Bureaux d'études et partenaires techniques :</strong> présenter leurs offres de services, de l'analyse stratégique à la mise en œuvre opérationnelle.", es: '<strong>Oficinas de estudios y socios técnicos:</strong> presentar sus ofertas de servicios, desde el análisis estratégico hasta la implementación operativa.', pt: '<strong>Gabinetes de estudos e parceiros técnicos:</strong> apresentar as suas ofertas de serviços, da análise estratégica à implementação operacional.' },
  attInSynthesisTitle: { en: 'In synthesis', fr: 'En synthèse', es: 'En síntesis', pt: 'Em síntese' },
  attInSynthesisIntro: { en: "PRASMESTI's expectations converge towards a clear finality:", fr: 'Les attentes du PRASMESTI convergent vers une finalité claire :', es: 'Las expectativas del PRASMESTI convergen hacia una finalidad clara:', pt: 'As expectativas do PRASMESTI convergem para uma finalidade clara:' },
  attInSynthesisHighlight: { en: '👉 make digital a lever for integration, governance and sustainable transformation.', fr: '👉 faire du numérique un levier d\'intégration, de gouvernance et de transformation durable.', es: '👉 hacer de lo digital una palanca de integración, de gobernanza y de transformación sostenible.', pt: '👉 fazer do digital uma alavanca de integração, de governança e de transformação sustentável.' },
  attInSynthesisConclusion: { en: 'PRASMESTI thus becomes a federating tool, at the service of a more connected, more efficient Central Africa resolutely turned towards the future.', fr: "Le PRASMESTI devient ainsi un outil fédérateur, au service d'une Afrique centrale plus connectée, plus performante et résolument tournée vers l'avenir.", es: 'El PRASMESTI se convierte así en una herramienta federadora, al servicio de un África Central más conectada, más eficiente y resueltamente orientada hacia el futuro.', pt: 'O PRASMESTI torna-se assim uma ferramenta federadora, ao serviço de uma África Central mais conectada, mais eficiente e resolutamente voltada para o futuro.' },

  // ── Issues (Enjeux) page ──
  enjEyebrow: { en: '« Issues » Page', fr: 'Page « les enjeux »', es: 'Página « los desafíos »', pt: 'Página « os desafios »' },
  enjQ: { en: 'PRASMESTI: what issues?', fr: 'Le PRASMESTI : les enjeux ?', es: 'El PRASMESTI: ¿qué desafíos?', pt: 'O PRASMESTI: que desafios?' },
  enjIntroH4: { en: 'The challenge for the Community is to address targeted communication by offering relevant content to the user.', fr: "L'enjeu pour la Communauté est d'adresser une communication ciblée en proposant un contenu pertinent à l'utilisateur.", es: 'El desafío para la Comunidad es dirigir una comunicación específica ofreciendo un contenido pertinente al usuario.', pt: 'O desafio para a Comunidade é dirigir uma comunicação orientada oferecendo um conteúdo pertinente ao utilizador.' },
  enjForCommunity: { en: 'For the community', fr: 'Pour la communauté', es: 'Para la comunidad', pt: 'Para a comunidade' },
  enjForMemberState: { en: 'For each member state', fr: 'Pour chaque état membre', es: 'Para cada estado miembro', pt: 'Para cada estado-membro' },
  enjForOperator: { en: 'For a technical partner or an economic operator', fr: 'Pour un partenaire économique ou un opérateur technique', es: 'Para un socio económico o un operador técnico', pt: 'Para um parceiro económico ou um operador técnico' },
  enjCommunityText: {
    en: 'Present progress made in the implementation of regional, continental, and international normative texts in education, science, technology and innovation.',
    fr: "Présenter les progrès effectués dans la mise en œuvre des textes normatifs régionaux, continentaux et internationaux en matière d'éducation, sciences, technologie et innovation.",
    es: 'Presentar los progresos realizados en la implementación de los textos normativos regionales, continentales e internacionales en materia de educación, ciencias, tecnología e innovación.',
    pt: 'Apresentar os progressos realizados na implementação dos textos normativos regionais, continentais e internacionais em matéria de educação, ciências, tecnologia e inovação.',
  },
  enjMemberStateText: {
    en: "Highlight its audit and training offers, new modules, and innovation ecosystems. Contribute to the Community's sectoral monitoring and decision-making tools.",
    fr: "Mettre en avant ses offres d'audit, de formation ainsi que les nouveaux modules produits. Contribuer aux outils de suivi sectoriel et de prise de décision de la Communauté.",
    es: 'Destacar sus ofertas de auditoría y formación, así como los nuevos módulos producidos. Contribuir a las herramientas de seguimiento sectorial y de toma de decisiones de la Comunidad.',
    pt: 'Destacar as suas ofertas de auditoria e formação, bem como os novos módulos produzidos. Contribuir para as ferramentas de acompanhamento setorial e de tomada de decisão da Comunidade.',
  },
  enjOperatorText: {
    en: "Highlight all panels of services: from strategic studies to training and operational project management. Build partnerships across the regional space.",
    fr: "Mettre en avant tous leurs panels de prestations : de l'étude stratégique à la formation en passant par la maîtrise d'œuvre opérationnelle. Tisser des partenariats dans l'espace régional.",
    es: 'Destacar toda su gama de prestaciones: del estudio estratégico a la formación, pasando por la dirección de obra operativa. Tejer asociaciones en el espacio regional.',
    pt: 'Destacar toda a sua gama de prestações: do estudo estratégico à formação, passando pela gestão operacional de projetos. Tecer parcerias no espaço regional.',
  },

  // ── Design & Operations (Conception) page ──
  conEyebrow: { en: '« Design & Operations » Page', fr: 'Page « Conception et opérationnalisation »', es: 'Página « Concepción y operacionalización »', pt: 'Página « Conceção e operacionalização »' },
  conProjectPresentation: { en: 'Project Presentation', fr: 'Présentation du Projet', es: 'Presentación del Proyecto', pt: 'Apresentação do Projeto' },
  conTitleH1: { en: 'Design and operationalization of PRASMESTI', fr: 'Conception et opérationnalisation du PRASMESTI', es: 'Concepción y operacionalización del PRASMESTI', pt: 'Conceção e operacionalização do PRASMESTI' },
  conMainObjective: { en: 'Main objective:', fr: 'Objectif principal :', es: 'Objetivo principal:', pt: 'Objetivo principal:' },
  conMainObj: { en: 'Set up a regional ESTI (Education, Sciences, Technology and Innovation) information, monitoring and decision-support system.', fr: 'Mettre en place un système régional d\'information, de suivi et d\'aide à la décision ESTI (Éducation, Sciences, Technologie et Innovation).', es: 'Establecer un sistema regional de información, seguimiento y apoyo a la decisión ECTI (Educación, Ciencias, Tecnología e Innovación).', pt: 'Implementar um sistema regional de informação, acompanhamento e apoio à decisão ECTI (Educação, Ciências, Tecnologia e Inovação).' },

  // ── Presentation Detail ("What is PRASMESTI?") page ──
  pdetTitle: { en: 'What is PRASMESTI?', fr: "Qu'est-ce que le PRASMESTI ?", es: '¿Qué es el PRASMESTI?', pt: 'O que é o PRASMESTI?' },
  pdetIntro: {
    en: "Built around common normative objectives, PRASMESTI is the portal set up to achieve successful regional integration. It is naturally based first on the development of intra-community exchanges and ensures that the diversity of each and every one in terms of education, training, science, technology and innovation is expressed in a formalized dialogue and in clear language. It is never a question of uniformizing structures, practices and projects. It is a question of harmonizing the diversity of practices, of exploiting national program results at the regional level to establish conditions for clear and coherent dialogues!",
    fr: "Construit autour d'objectifs normatifs communs, le PRASMESTI est le portail mis en place pour parvenir à une intégration régionale réussie. Il repose d'abord naturellement sur le développement d'échanges intracommunautaires et veille à ce que la diversité de tous et de chacun en matière d'éducation, formation, sciences, technologie et innovation s'exprime en florilège dans un dialogue formalisé et dans un langage clair. Il ne s'agit jamais d'uniformiser les structures, les pratiques et les projets. Il s'agit d'harmoniser la diversité des pratiques, d'exploiter au niveau régional les résultats des programmes nationaux pour établir des conditions de dialogues clairs et cohérents !",
    es: 'Construido en torno a objetivos normativos comunes, el PRASMESTI es el portal creado para lograr una integración regional exitosa. Se basa, ante todo y de forma natural, en el desarrollo de los intercambios intracomunitarios y vela por que la diversidad de todos y cada uno en materia de educación, formación, ciencias, tecnología e innovación se exprese plenamente en un diálogo formalizado y en un lenguaje claro. Nunca se trata de uniformizar las estructuras, las prácticas y los proyectos. ¡Se trata de armonizar la diversidad de las prácticas, de aprovechar a nivel regional los resultados de los programas nacionales para establecer condiciones de diálogos claros y coherentes!',
    pt: 'Construído em torno de objetivos normativos comuns, o PRASMESTI é o portal criado para alcançar uma integração regional bem-sucedida. Assenta, antes de mais e naturalmente, no desenvolvimento das trocas intracomunitárias e zela por que a diversidade de todos e de cada um em matéria de educação, formação, ciências, tecnologia e inovação se exprima plenamente num diálogo formalizado e numa linguagem clara. Nunca se trata de uniformizar as estruturas, as práticas e os projetos. Trata-se de harmonizar a diversidade das práticas, de explorar a nível regional os resultados dos programas nacionais para estabelecer condições de diálogos claros e coerentes!',
  },
  pdetMissionTitle: {
    en: 'In terms of practices, the mission of PRASMESTI is to:',
    fr: 'En termes de pratiques, le PRASMESTI a pour mission de :',
    es: 'En términos de prácticas, el PRASMESTI tiene como misión:',
    pt: 'Em termos de práticas, o PRASMESTI tem por missão:',
  },
  pdetMissionItem1: {
    en: 'share information on the life of the world of education, training, science, technology and innovation within our regional economic space to meet the challenges facing us and identify new horizons, etc.;',
    fr: "partager les informations sur la vie du monde de l'éducation, de la formation, des sciences, de la technologie et de l'innovation au sein de notre espace économique régional pour répondre aux défis qui s'imposent à nous et identifier de nouveaux horizons, etc. ;",
    es: 'compartir la información sobre la vida del mundo de la educación, la formación, las ciencias, la tecnología y la innovación dentro de nuestro espacio económico regional para responder a los desafíos que se nos plantean e identificar nuevos horizontes, etc.;',
    pt: 'partilhar a informação sobre a vida do mundo da educação, da formação, das ciências, da tecnologia e da inovação no seio do nosso espaço económico regional para responder aos desafios que se nos impõem e identificar novos horizontes, etc.;',
  },
  pdetMissionItem2: {
    en: 'make available quality norms and standards for education, training, science, technology and innovation within our Regional Economic Community;',
    fr: "rendre disponibles les normes et standards de qualité de l'éducation, de la formation, des sciences, de la technologie et de l'innovation au sein de notre Communauté Économique Régionale ;",
    es: 'poner a disposición las normas y estándares de calidad de la educación, la formación, las ciencias, la tecnología y la innovación dentro de nuestra Comunidad Económica Regional;',
    pt: 'disponibilizar as normas e os padrões de qualidade da educação, da formação, das ciências, da tecnologia e da inovação no seio da nossa Comunidade Económica Regional;',
  },
  pdetMissionItem3: {
    en: 'give meaning to innovations by making them accessible and strategically orienting the efforts and missions of each and every one in terms of education, training, science, technology and innovation;',
    fr: "donner du sens aux innovations en le rendant accessibles et orienter de manière stratégique les efforts et les missions de tous et de chacun en matière d'éducation, de formation, de sciences, de technologie et d'innovation ;",
    es: 'dar sentido a las innovaciones haciéndolas accesibles y orientar de manera estratégica los esfuerzos y las misiones de todos y cada uno en materia de educación, formación, ciencias, tecnología e innovación;',
    pt: 'dar sentido às inovações tornando-as acessíveis e orientar de forma estratégica os esforços e as missões de todos e de cada um em matéria de educação, formação, ciências, tecnologia e inovação;',
  },
  pdetMissionItem4: {
    en: 'promote the culture of education-training, science, technology and innovation in Central Africa by strengthening, according to the orientations of Agenda 2063, our sense of belonging to a single entity rich in its cultural and educational plurality;',
    fr: "valoriser la culture d'éducation-formation, sciences, technologie et innovation en Afrique centrale par le renforcement, selon les orientations de l'Agenda 2063, de notre sentiment d'appartenance à une seule et même entité riche de sa pluralité culturelle et éducative ;",
    es: 'valorizar la cultura de educación-formación, ciencias, tecnología e innovación en África Central reforzando, según las orientaciones de la Agenda 2063, nuestro sentimiento de pertenencia a una sola y misma entidad rica en su pluralidad cultural y educativa;',
    pt: 'valorizar a cultura de educação-formação, ciências, tecnologia e inovação na África Central reforçando, segundo as orientações da Agenda 2063, o nosso sentimento de pertença a uma só e mesma entidade rica na sua pluralidade cultural e educativa;',
  },
  pdetMissionItem5: {
    en: 'enhance and develop the potentials and talents of our education, training, science, technology and innovation systems;',
    fr: 'valoriser et développer les potentiels et talents de nos systèmes d\'éducation, de formation, des sciences, de la technologie et de l\'innovation ;',
    es: 'valorizar y desarrollar los potenciales y talentos de nuestros sistemas de educación, formación, ciencias, tecnología e innovación;',
    pt: 'valorizar e desenvolver os potenciais e talentos dos nossos sistemas de educação, formação, ciências, tecnologia e inovação;',
  },
  pdetMissionItem6: {
    en: 'allow each Member State to share its successes, or simply its challenges in terms of education and training: initial training, early childhood development, work-study training, continuous training, lifelong learning, innovation, science, technology, innovation, etc.',
    fr: "permettre à chaque État membre de partager ses réussites, ou tout simplement ses challenges en matière d'éducation et de formation : formation initiale, développement de la petite enfance, formation en alternance, formation continue, formation tout au long de la vie, innovation, sciences, technologie, innovation, etc.",
    es: 'permitir a cada Estado miembro compartir sus éxitos, o simplemente sus retos en materia de educación y formación: formación inicial, desarrollo de la primera infancia, formación en alternancia, formación continua, formación a lo largo de la vida, innovación, ciencias, tecnología, innovación, etc.',
    pt: 'permitir a cada Estado-membro partilhar os seus êxitos, ou simplesmente os seus desafios em matéria de educação e formação: formação inicial, desenvolvimento da primeira infância, formação em alternância, formação contínua, formação ao longo da vida, inovação, ciências, tecnologia, inovação, etc.',
  },
  pdetSuccessCondition: {
    en: 'The establishment of monitoring assistance for the implementation of normative texts in education is a process whose success depends on how it is integrated into the life of the Community as well as the information shared: content, interactions and, why not, an editorial line, etc.',
    fr: "Mise en place d'aide au suivi de la mise en œuvre des textes normatifs en éducation est une démarche dont la réussite dépend de la façon dont il sera inséré dans la vie de la Communauté ainsi que des informations partagées : contenu, les interactions et, pourquoi pas, une ligne éditoriale, etc.",
    es: 'El establecimiento de un apoyo al seguimiento de la implementación de los textos normativos en educación es un proceso cuyo éxito depende de la forma en que se integre en la vida de la Comunidad, así como de la información compartida: contenido, interacciones y, por qué no, una línea editorial, etc.',
    pt: 'A implementação de um apoio ao acompanhamento da aplicação dos textos normativos em educação é um processo cujo sucesso depende da forma como for inserido na vida da Comunidade, bem como das informações partilhadas: conteúdo, interações e, porque não, uma linha editorial, etc.',
  },
  pdetDescriptionLabel: { en: 'Description:', fr: 'Description :', es: 'Descripción:', pt: 'Descrição:' },
  pdetDescriptionText: {
    en: 'Thus PRASMESTI, which is intended to be the intra-community link in Central Africa, meets a double objective: (1) to accelerate regional integration through education, training, science, technology and innovation by optimizing access to information and reliable data; and (2) to adapt to modern reading habits and communication uses through digital assistance provided to each Member State of the Community and the ECCAS Commission to take stock of regional progress in academic integration, science, technology and innovation.',
    fr: "Ainsi le PRASMESTI, qui se destine à être le trait d'union intra-communautaire en Afrique Centrale, répond à un double objectif : (1) accélérer l'intégration régionale par l'éducation, la formation, les sciences, la technologie et l'innovation en optimisant l'accès à l'information et aux données fiables ; et (2) s'adapter aux habitudes de lecture et aux usages de communication modernes par une assistance numérique apportée à chaque État membre de la Communauté et de la Commission de la CEEAC à faire le point des avancées régionales en matière d'intégration académique, de sciences, de technologie et d'innovation.",
    es: 'Así, el PRASMESTI, que aspira a ser el nexo intracomunitario en África Central, responde a un doble objetivo: (1) acelerar la integración regional mediante la educación, la formación, las ciencias, la tecnología y la innovación, optimizando el acceso a la información y a los datos fiables; y (2) adaptarse a los hábitos de lectura y a los usos de comunicación modernos mediante una asistencia digital proporcionada a cada Estado miembro de la Comunidad y a la Comisión de la CEEAC para hacer balance de los avances regionales en materia de integración académica, ciencias, tecnología e innovación.',
    pt: 'Assim, o PRASMESTI, que se destina a ser o elo intracomunitário na África Central, responde a um duplo objetivo: (1) acelerar a integração regional através da educação, da formação, das ciências, da tecnologia e da inovação, otimizando o acesso à informação e aos dados fiáveis; e (2) adaptar-se aos hábitos de leitura e aos usos de comunicação modernos através de uma assistência digital prestada a cada Estado-membro da Comunidade e à Comissão da CEEAC para fazer o ponto dos avanços regionais em matéria de integração académica, ciências, tecnologia e inovação.',
  },
  pdetWhyQ: { en: 'PRASMESTI: Why?', fr: 'Le PRASMESTI : Pourquoi ?', es: 'El PRASMESTI: ¿Por qué?', pt: 'O PRASMESTI: Porquê?' },
  pdetWhyItem1: {
    en: 'capitalize on information and know-how in education, training, science, technology and innovation in the ECCAS space;',
    fr: "capitaliser les informations et les savoir-faire en éducation, formation, sciences, technologie et innovation dans l'espace CEEAC ;",
    es: 'capitalizar la información y los conocimientos prácticos en educación, formación, ciencias, tecnología e innovación en el espacio CEEAC;',
    pt: 'capitalizar a informação e o saber-fazer em educação, formação, ciências, tecnologia e inovação no espaço CEEAC;',
  },
  pdetWhyItem2: {
    en: 'simplify the search for sectoral information in the Central African region;',
    fr: 'simplifier la recherche d\'informations sectorielles dans la région Afrique centrale ;',
    es: 'simplificar la búsqueda de información sectorial en la región de África Central;',
    pt: 'simplificar a procura de informação setorial na região da África Central;',
  },
  pdetWhyItem3: {
    en: 'centralize all data in education, science, technology and innovation in a single access point;',
    fr: "centraliser l'ensemble des données en éducation, sciences, technologie et innovation en un seul accès ;",
    es: 'centralizar el conjunto de los datos en educación, ciencias, tecnología e innovación en un único punto de acceso;',
    pt: 'centralizar o conjunto dos dados em educação, ciências, tecnologia e inovação num único ponto de acesso;',
  },
  pdetWhyItem4: {
    en: 'unite around the implementation of normative texts and the execution of regional programs.',
    fr: "se fédérer autour de la mise en œuvre des textes normatifs et l'exécution des programmes régionaux.",
    es: 'federarse en torno a la implementación de los textos normativos y la ejecución de los programas regionales.',
    pt: 'federar-se em torno da aplicação dos textos normativos e da execução dos programas regionais.',
  },
  pdetFunctionsTitle: { en: 'PRASMESTI: Main functions?', fr: 'Le PRASMESTI : Les principales fonctions ?', es: 'El PRASMESTI: ¿Las principales funciones?', pt: 'O PRASMESTI: As principais funções?' },
  pdetFuncComm: {
    en: 'Communication: Discussion threads, News, RSS feeds, Profile management...',
    fr: 'Communication : Fil de discussion, Actualités, Flux RSS, Gestion de profils...',
    es: 'Comunicación: Hilos de discusión, Actualidad, Fuentes RSS, Gestión de perfiles...',
    pt: 'Comunicação: Tópicos de discussão, Notícias, Feeds RSS, Gestão de perfis...',
  },
  pdetFuncCoord: {
    en: 'Coordination: Traceability of file exchanges, Planning, Graphical dashboards and management indicators...',
    fr: 'Coordination : Traçabilité des échanges de fichiers, Planning, Tableaux de bord graphiques et indicateurs de pilotage...',
    es: 'Coordinación: Trazabilidad de los intercambios de archivos, Planificación, Cuadros de mando gráficos e indicadores de gestión...',
    pt: 'Coordenação: Rastreabilidade das trocas de ficheiros, Planeamento, Painéis gráficos e indicadores de gestão...',
  },
  pdetFuncContent: {
    en: 'Provision of sectoral content and documents: normative texts, articles, photos, videos, plans, diagrams, studies, nomenclatures, summary pages, data aggregation...',
    fr: "Mise à disposition de contenus et documents sectoriels : textes normatifs, articles, photos, vidéos, plans, schémas, études, nomenclatures, pages de synthèse, agrégation de données...",
    es: 'Provisión de contenidos y documentos sectoriales: textos normativos, artículos, fotos, vídeos, planos, esquemas, estudios, nomenclaturas, páginas de síntesis, agregación de datos...',
    pt: 'Disponibilização de conteúdos e documentos setoriais: textos normativos, artigos, fotos, vídeos, planos, esquemas, estudos, nomenclaturas, páginas de síntese, agregação de dados...',
  },
  pdetFuncKb: {
    en: 'Knowledge management: user forums, frequently asked questions, knowledge base...',
    fr: 'Gestion des connaissances : forums utilisateurs, foire aux questions, base de connaissances...',
    es: 'Gestión del conocimiento: foros de usuarios, preguntas frecuentes, base de conocimientos...',
    pt: 'Gestão do conhecimento: fóruns de utilizadores, perguntas frequentes, base de conhecimentos...',
  },
  pdetExpTitle: { en: 'PRASMESTI: Expectations?', fr: 'Le PRASMESTI : Les attentes ?', es: 'El PRASMESTI: ¿Las expectativas?', pt: 'O PRASMESTI: As expectativas?' },
  pdetExpItem1: {
    en: 'Boost collaboration between ECCAS Member States, development partners, economic operators and all other internal and external interlocutors.',
    fr: "Dynamiser la collaboration entre États membres de la CEEAC, les partenaires au développement, les opérateurs économiques et tous les autres interlocuteurs internes et externes.",
    es: 'Dinamizar la colaboración entre los Estados miembros de la CEEAC, los socios para el desarrollo, los operadores económicos y todos los demás interlocutores internos y externos.',
    pt: 'Dinamizar a colaboração entre os Estados-membros da CEEAC, os parceiros de desenvolvimento, os operadores económicos e todos os outros interlocutores internos e externos.',
  },
  pdetExpItem2: {
    en: 'Allow the transmission of knowledge and information for a more productive and efficient organization.',
    fr: "Permettre la transmission des connaissances et d'informations pour une organisation plus productive et performante.",
    es: 'Permitir la transmisión de conocimientos e información para una organización más productiva y eficiente.',
    pt: 'Permitir a transmissão de conhecimentos e de informação para uma organização mais produtiva e eficiente.',
  },
  pdetExpItem3: {
    en: "Support new regional projects in the Education, Training, Science, Technology and Innovation sector:",
    fr: "Accompagner de nouveaux chantiers régionaux du secteur de l'Éducation, Formation, Sciences, Technologie et Innovation :",
    es: 'Acompañar nuevos proyectos regionales del sector de la Educación, Formación, Ciencias, Tecnología e Innovación:',
    pt: 'Acompanhar novos projetos regionais do setor da Educação, Formação, Ciências, Tecnologia e Inovação:',
  },
  pdetExpSub1: {
    en: 'Facilitate information sharing at the regional level and create more synergies between the different entities and professions of Education, Training, Science, Technology and Innovation.',
    fr: "Faciliter le partage d'informations au niveau régional et créer plus de synergies entre les différentes entités et métiers de l'Éducation, Formation, Sciences, Technologie et Innovation.",
    es: 'Facilitar el intercambio de información a nivel regional y crear más sinergias entre las diferentes entidades y profesiones de la Educación, Formación, Ciencias, Tecnología e Innovación.',
    pt: 'Facilitar a partilha de informação a nível regional e criar mais sinergias entre as diferentes entidades e profissões da Educação, Formação, Ciências, Tecnologia e Inovação.',
  },
  pdetExpSub2: {
    en: "Improve the monitoring of implementation by development partners and technical consultants: follow developments within each Member State in real time to have indicators and statistics to detect recurring problems and accelerate their resolution directly from the field",
    fr: "Améliorer le suivi de la mise en œuvre des partenaires au développement, les consultants techniques : suivre en temps réel les développements au sein de chaque États membres afin de disposer d'indicateurs et de statistiques pour détecter les problèmes récurrents et d'accélérer leur prise en charge directement depuis le terrain",
    es: 'Mejorar el seguimiento de la implementación por parte de los socios para el desarrollo y los consultores técnicos: seguir en tiempo real la evolución dentro de cada Estado miembro para disponer de indicadores y estadísticas que permitan detectar los problemas recurrentes y acelerar su resolución directamente desde el terreno',
    pt: 'Melhorar o acompanhamento da implementação pelos parceiros de desenvolvimento e pelos consultores técnicos: acompanhar em tempo real a evolução dentro de cada Estado-membro a fim de dispor de indicadores e estatísticas para detetar os problemas recorrentes e acelerar a sua resolução diretamente a partir do terreno',
  },
  pdetExpSub3: {
    en: "Launch a regional e-service for Education, Training, Science, Technology and Innovation: experience sharing, capacity building...",
    fr: "Lancer un e-service régional pour l'Éducation, la Formation, les Sciences, la Technologie et l'Innovation : partage d'expérience, renforcement de capacités...",
    es: 'Lanzar un e-servicio regional para la Educación, la Formación, las Ciencias, la Tecnología y la Innovación: intercambio de experiencias, refuerzo de capacidades...',
    pt: 'Lançar um e-serviço regional para a Educação, a Formação, as Ciências, a Tecnologia e a Inovação: partilha de experiências, reforço de capacidades...',
  },
  pdetExpItem4: {
    en: 'Strengthen the capacities of the regional Education, Training, Science, Technology and Innovation offer, increase regional attractiveness with new sectoral services.',
    fr: "Renforcer les capacités de l'offre régionale d'Éducation, Formation, Sciences, Technologie et Innovation, augmenter l'attractivité régionale avec de nouveaux services sectoriels.",
    es: 'Reforzar las capacidades de la oferta regional de Educación, Formación, Ciencias, Tecnología e Innovación, aumentar el atractivo regional con nuevos servicios sectoriales.',
    pt: 'Reforçar as capacidades da oferta regional de Educação, Formação, Ciências, Tecnologia e Inovação, aumentar a atratividade regional com novos serviços setoriais.',
  },
  pdetExpItem5: {
    en: 'Harmonize and optimize certain back-office tasks: access to data and history (archiving), progress of programs and projects, etc.',
    fr: "Harmoniser et optimiser certaines tâches back-office : accès aux données et à l'historique (archivage), avancement de programmes et projets, etc.",
    es: 'Armonizar y optimizar ciertas tareas de back-office: acceso a los datos y al historial (archivo), avance de programas y proyectos, etc.',
    pt: 'Harmonizar e otimizar certas tarefas de back-office: acesso aos dados e ao histórico (arquivo), progresso de programas e projetos, etc.',
  },
  pdetBrandTitle: {
    en: 'PRASMESTI: improving the brand image of Education, Training, Science, Technology and Innovation in Central Africa',
    fr: "Le PRASMESTI : améliorer l'image de marque de l'Éducation, Formation, Sciences, Technologie et Innovation en Afrique centrale",
    es: 'El PRASMESTI: mejorar la imagen de marca de la Educación, Formación, Ciencias, Tecnología e Innovación en África Central',
    pt: 'O PRASMESTI: melhorar a imagem de marca da Educação, Formação, Ciências, Tecnologia e Inovação na África Central',
  },
  pdetBrandText1: {
    en: "PRASMESTI is a collaborative portal for Education, Training, Science, Technology and Innovation of the Community. Its design, its Homepage, its structures, its functionalities... must respect an ECCAS graphic charter and be consistent with the brand image conveyed by Agenda 2063 and Agenda 2030.",
    fr: "Le PRASMESTI est un portail collaboratif de l'Éducation, Formation, Sciences, Technologie et Innovation de la Communauté. Son design, sa page d'Accueil, ses arborescences, ses fonctionnalités... doivent respecter une charte graphique de la CEEAC et en cohérence avec l'image de marque renvoyer par l'Agenda 2063 et l'Agenda 2030.",
    es: 'El PRASMESTI es un portal colaborativo de la Educación, Formación, Ciencias, Tecnología e Innovación de la Comunidad. Su diseño, su página de Inicio, sus estructuras, sus funcionalidades... deben respetar una carta gráfica de la CEEAC y ser coherentes con la imagen de marca transmitida por la Agenda 2063 y la Agenda 2030.',
    pt: 'O PRASMESTI é um portal colaborativo da Educação, Formação, Ciências, Tecnologia e Inovação da Comunidade. O seu design, a sua página de Início, as suas estruturas, as suas funcionalidades... devem respeitar uma carta gráfica da CEEAC e ser coerentes com a imagem de marca transmitida pela Agenda 2063 e pela Agenda 2030.',
  },
  pdetBrandText2: {
    en: "Users, entering more and more into the universe of PRASMESTI, will more easily assimilate the regional collaborative platform and the objectives assigned by the two major Agendas that frame and orient the development of regional human capital.",
    fr: "Les usagers, entrant de plus en plus dans l'univers du PRASMESTI, assimileront plus facilement la plateforme collaborative régionale et les objectifs assignés par les deux grands Agendas qui encadrent et orientent le développement du capital humain régional.",
    es: 'Los usuarios, adentrándose cada vez más en el universo del PRASMESTI, asimilarán más fácilmente la plataforma colaborativa regional y los objetivos asignados por las dos grandes Agendas que enmarcan y orientan el desarrollo del capital humano regional.',
    pt: 'Os utilizadores, entrando cada vez mais no universo do PRASMESTI, assimilarão mais facilmente a plataforma colaborativa regional e os objetivos atribuídos pelas duas grandes Agendas que enquadram e orientam o desenvolvimento do capital humano regional.',
  },
  pdetAccessTitle: { en: 'PRASMESTI: Access possibilities?', fr: 'Le PRASMESTI : Les possibilités d\'accès ?', es: 'El PRASMESTI: ¿Las posibilidades de acceso?', pt: 'O PRASMESTI: As possibilidades de acesso?' },
  pdetAccessIntro: {
    en: "The Community execution organ (Commission) chooses, according to the profile of each user, to make information or applications from its system available to such or such user. Below are the main types of access:",
    fr: "L'organe d'exécution de la Communauté au lieu de la Communauté (Commission) choisit, selon le profil de chaque utilisateur, de mettre à la disposition de tel ou telle usager les informations ou les applications de son système. Ci-dessous les principaux types d'accès :",
    es: 'El órgano de ejecución de la Comunidad (Comisión) elige, según el perfil de cada usuario, poner a disposición de tal o cual usuario la información o las aplicaciones de su sistema. A continuación, los principales tipos de acceso:',
    pt: 'O órgão de execução da Comunidade (Comissão) escolhe, consoante o perfil de cada utilizador, disponibilizar a este ou àquele utilizador as informações ou as aplicações do seu sistema. Abaixo, os principais tipos de acesso:',
  },
  pdetIntranet: {
    en: 'Intranet: accessible by employees only from the headquarters of the Commission of the Economic Community of Central African States and some focal points of Member States.',
    fr: "Intranet : accessible par les collaborateurs uniquement depuis le siège de la Commission de la Communauté Économique des États de l'Afrique Centrale et quelques points focaux des États membres.",
    es: 'Intranet: accesible por los colaboradores únicamente desde la sede de la Comisión de la Comunidad Económica de los Estados de África Central y algunos puntos focales de los Estados miembros.',
    pt: 'Intranet: acessível pelos colaboradores apenas a partir da sede da Comissão da Comunidade Económica dos Estados da África Central e alguns pontos focais dos Estados-membros.',
  },
  pdetExtranet: {
    en: 'Extranet: accessible by all education, training, science, technology and innovation establishments duly registered within the various Member States.',
    fr: "Extranet : accessible par tous les établissements d'éducation, de formation, de sciences, de technologie et d'innovation dûment enregistrés au sein des différents États membres.",
    es: 'Extranet: accesible por todos los establecimientos de educación, formación, ciencias, tecnología e innovación debidamente registrados dentro de los diferentes Estados miembros.',
    pt: 'Extranet: acessível por todos os estabelecimentos de educação, formação, ciências, tecnologia e inovação devidamente registados nos diferentes Estados-membros.',
  },
  pdetInternet: {
    en: 'Internet: which is access to certain data without needing to identify oneself.',
    fr: "Internet : qui est un accès à certaines données sans avoir besoin de s'identifier.",
    es: 'Internet: que es un acceso a ciertos datos sin necesidad de identificarse.',
    pt: 'Internet: que é um acesso a certos dados sem necessidade de identificação.',
  },
  pdetAccessChallenge: {
    en: "The challenge for the Community is to address targeted communication by offering relevant content to the user. For example, highlighting its entire range and complementary offers allows for informing actors in education, science, technological development and innovation and triggering new sectoral services:",
    fr: "L'enjeu pour la Communauté est d'adresser une communication ciblée en proposant un contenu pertinent à l'utilisateur. Par exemple, mettre en avant toute sa palette et offres complémentaires permet d'informer les acteurs de l'éducation, des sciences, du développement technologique et de l'innovation et de déclencher de nouveaux services sectoriels :",
    es: 'El desafío para la Comunidad es dirigir una comunicación específica ofreciendo un contenido pertinente al usuario. Por ejemplo, destacar toda su gama y ofertas complementarias permite informar a los actores de la educación, las ciencias, el desarrollo tecnológico y la innovación y activar nuevos servicios sectoriales:',
    pt: 'O desafio para a Comunidade é dirigir uma comunicação orientada oferecendo um conteúdo pertinente ao utilizador. Por exemplo, destacar toda a sua gama e ofertas complementares permite informar os atores da educação, das ciências, do desenvolvimento tecnológico e da inovação e desencadear novos serviços setoriais:',
  },
  pdetAccessMemberState: {
    en: 'For a Member State, it is a question of presenting the progress made in the implementation of regional, continental, and international texts',
    fr: "Pour un État membre, il s'agit de présenter les progrès effectués dans la mise en oeuvre des textes régionaux, continentaux, et internationaux",
    es: 'Para un Estado miembro, se trata de presentar los progresos realizados en la implementación de los textos regionales, continentales e internacionales',
    pt: 'Para um Estado-membro, trata-se de apresentar os progressos realizados na aplicação dos textos regionais, continentais e internacionais',
  },
  pdetAccessSoftwareEditor: {
    en: "For a software publisher, it would be a matter of highlighting its audit and training offers as well as new modules produced...",
    fr: "Pour un éditeur de logiciel, il s'agirait de mettre en avant ses offres d'audit, de formation ainsi que les nouveaux modules produits...",
    es: 'Para un editor de software, se trataría de destacar sus ofertas de auditoría y formación, así como los nuevos módulos producidos...',
    pt: 'Para um editor de software, tratar-se-ia de destacar as suas ofertas de auditoria e formação, bem como os novos módulos produzidos...',
  },
  pdetAccessStudyOffice: {
    en: 'For a consulting firm, it is a question of highlighting all their panels of services: from studies to training, including project management.',
    fr: "Pour un bureau d'études, il s'agit de mettre en avant tous leurs panels de prestations : de l'étude à la formation en passant par la maitrise d'œuvre.",
    es: 'Para una oficina de estudios, se trata de destacar toda su gama de prestaciones: del estudio a la formación, pasando por la dirección de obra.',
    pt: 'Para um gabinete de estudos, trata-se de destacar toda a sua gama de prestações: do estudo à formação, passando pela gestão de projetos.',
  },
  pdetSumTitle: { en: 'In summary, the objectives:', fr: 'En résumé, les objectifs :', es: 'En resumen, los objetivos:', pt: 'Em resumo, os objetivos:' },
  pdetSumObj1: {
    en: "inform internally - news, sector of activity of our REC and current events, monitoring of regional initiatives, anecdotes related to the integration sector, sponsorship, patronage, and other activities...",
    fr: "informer sur l'interne - nouvelles, secteur d'activité de notre CER et du moment, suivi des initiatives régionales, anecdotes en rapport avec le secteur d'intégration, sponsoring, mécénat, et autres activités...",
    es: 'informar internamente - noticias, sector de actividad de nuestra CER y de la actualidad, seguimiento de las iniciativas regionales, anécdotas relacionadas con el sector de integración, patrocinio, mecenazgo y otras actividades...',
    pt: 'informar internamente - notícias, setor de atividade da nossa CER e da atualidade, acompanhamento das iniciativas regionais, anedotas relacionadas com o setor de integração, patrocínio, mecenato e outras atividades...',
  },
  pdetSumObj2: {
    en: "inform externally – activities and offers from other geographical areas, news, law articles of interest for integration through education and training;",
    fr: "informer sur l'externe – les activités et les offres des autres zones géographiques, nouvelles, articles de lois ayant un intérêt pour l'intégration par l'éducation et la formation ;",
    es: 'informar externamente – las actividades y las ofertas de otras zonas geográficas, noticias, artículos de leyes de interés para la integración mediante la educación y la formación;',
    pt: 'informar externamente – as atividades e as ofertas de outras zonas geográficas, notícias, artigos de leis de interesse para a integração através da educação e da formação;',
  },
  pdetSumObj3: {
    en: "Train - provide information on figures, activity, environment, training expectations, techniques...",
    fr: "Former - renseigner sur les chiffres, sur l'activité, sur l'environnement, sur les attentes de formation, sur les techniques...",
    es: 'Formar - informar sobre las cifras, la actividad, el entorno, las expectativas de formación, las técnicas...',
    pt: 'Formar - informar sobre os números, a atividade, o ambiente, as expectativas de formação, as técnicas...',
  },

  // ── Project Leads (Responsables) page ──
  respEyebrow: { en: '« Project Leads » Page', fr: 'Page « les responsables »', es: 'Página « los responsables »', pt: 'Página « os responsáveis »' },
  respPortalTitle: { en: 'Regional Portal for Monitoring Assistance in Education, Science, Technology and Innovation (PRASMESTI):', fr: "Portail Régional d'Aide au Suivi en Matière d'Éducation, Science, Technologie et Innovation (PRASMESTI) :", es: 'Portal Regional de Apoyo al Seguimiento en materia de Educación, Ciencia, Tecnología e Innovación (PRASMESTI):', pt: 'Portal Regional de Apoio ao Acompanhamento em matéria de Educação, Ciência, Tecnologia e Inovação (PRASMESTI):' },
  respInformToGovern: { en: 'Inform to govern', fr: 'Informer pour gouverner', es: 'Informar para gobernar', pt: 'Informar para governar' },
  respTitleH2: { en: 'PRASMESTI Leads 2020-2025', fr: 'Responsables PRASMESTI 2020-2025', es: 'Responsables PRASMESTI 2020-2025', pt: 'Responsáveis PRASMESTI 2020-2025' },
  respEccasCommission: { en: 'ECCAS Commission', fr: 'Commission CEEAC', es: 'Comisión CEEAC', pt: 'Comissão CEEAC' },

  // ── Auth / divers ──
  navLogin: { en: 'Login', fr: 'Connexion', es: 'Iniciar sesión', pt: 'Entrar' },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  translate: (key: string) => TranslationValue;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'fr';
    const saved = window.localStorage.getItem(STORAGE_KEY) as Language | null;
    return saved && ['en', 'fr', 'es', 'pt'].includes(saved) ? saved : 'fr';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (lang: Language) => setLanguageState(lang),
      toggleLanguage: () =>
        setLanguageState((current) => {
          const order: Language[] = ['fr', 'en', 'es', 'pt'];
          return order[(order.indexOf(current) + 1) % order.length];
        }),
      translate: (key: string) => {
        const value = translations[key]?.[language] ?? key;
        if (language !== 'fr') return value;
        return Array.isArray(value) ? value.map(applyFrTypography) : applyFrTypography(value);
      },
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
