import React, { createContext, useContext, useMemo, useState } from 'react';

type Language = 'en' | 'fr';

type TranslationValue = string | string[];

type Dictionary = Record<string, { en: TranslationValue; fr: TranslationValue }>;

const translations: Dictionary = {
  navHome: { en: 'Home', fr: 'Accueil' },
  navPresentation: { en: 'Presentation', fr: 'Présentation' },
  navPresentationWhat: { en: 'What is PRASMESTI?', fr: "Qu'est-ce que le PRASMESTI ?" },
  navPresentationWhy: { en: 'Why PRASMESTI?', fr: "Pourquoi le PRASMESTI ?" },
  navPresentationObjectives: { en: 'Objectives', fr: 'Objectifs' },
  navPresentationExpectations: { en: 'Expectations', fr: 'Attentes' },
  navPresentationIssues: { en: 'Issues', fr: 'Enjeux' },
  navPresentationDesign: { en: 'Design & Operations', fr: 'Conception' },
  navPresentationLeads: { en: 'Project Leads', fr: 'Responsables' },
  navNormativeTexts: { en: 'Normative Texts', fr: 'Textes normatifs' },
  navContinentalTexts: { en: 'Continental texts', fr: 'Textes continentaux' },
  navSectoralPolicy: { en: 'Sectoral policy', fr: 'Politique sectorielle' },
  navSectoralStrategy: { en: 'Sectoral strategy', fr: 'Stratégie sectorielle' },
  navSectoralProjects: { en: 'Sectoral projects', fr: 'Projets sectoriels' },
  navFrameworkStrategies: { en: 'Framework strategies', fr: 'Stratégies-cadres' },
  navImplementation: { en: 'Implementation Status', fr: 'État de mise en oeuvre' },
  navIntellectualProperty: { en: 'Intellectual Property', fr: 'Propriété intellectuelle' },
  navInnovations: { en: 'Innovations', fr: 'Innovations' },
  navNews: { en: 'News', fr: 'Actualités' },
  heroEyebrow: {
    en: 'Education and Training: The pillars of regional integration.',
    fr: "Éducation et Formation : Les piliers de l'intégration régionale.",
  },
  heroSubtitle2: {
    en: 'Sciences and Technologies: Innovating for a sustainable future.',
    fr: 'Sciences et Technologies : Innover pour un futur durable.',
  },
  heroTitle: {
    en: 'Accelerating regional integration through education and training.',
    fr: "Accélérons l'intégration régionale par l'éducation et la formation.",
  },
  heroBody: {
    en: 'Uniting our talents to build the future of Central Africa.',
    fr: "Unissons nos talents pour bâtir l'avenir de l'Afrique centrale.",
  },
  heroPrimary: { en: 'Presentation', fr: 'Présentation' },
  heroSecondary: { en: 'Our News', fr: 'Nos actualités' },
  heroStatOneLabel: { en: 'Member States', fr: 'États membres' },
  heroStatTwoLabel: { en: 'Strategic pillars', fr: 'Piliers stratégiques' },
  heroStatThreeLabel: {
    en: 'years to change the face of education',
    fr: 'ans pour changer la face de l\'éducation',
  },
  heroStatThreeValue: { en: '05', fr: '05' },
  presidentEyebrow: {
    en: 'Word from the regional champion president — Head of State of the DRC',
    fr: "Mot du président champion régional — Chef d'État de la RDC",
  },
  presidentTitle: {
    en: 'Without knowledge, there is no development; without sharing knowledge, there is no integration.',
    fr: "Sans savoir, il n'est point de développement ; sans partage du savoir, il n'est point d'intégration.",
  },
  presidentBody: {
    en: 'The Economic Community of Central African States continues its progress, driven by an ambition that is both simple and immense: to sustainably raise the well-being of populations, by weaving between its peoples the solid links of active solidarity, shared development and living hope. At the heart of this dynamic, a deep conviction stands as a compass: without knowledge, there is no development; without sharing knowledge, there is no integration. Where borders meet and peoples respond to each other, an evidence arises, clear and luminous: knowledge constitutes the foundation of any true integration. Thus a living space is designed, where ideas dialogue, where experiences fertilize each other, where knowledge circulates and is transformed. From this space a breath is born, discreet but powerful, carrier of future and promises. In Central Africa, this breath is now taking shape. It has a name: PRASMESTI!',
    fr: "La Communauté Économique des États de l'Afrique Centrale poursuit sa marche, portée par une ambition à la fois simple et immense : élever durablement le bien-être des populations, en tissant entre ses peuples les liens solides d'une solidarité active, d'un développement partagé et d'une espérance vivante. Au cœur de cette dynamique, une conviction profonde s'impose comme une boussole : sans savoir, il n'est point de développement ; sans partage du savoir, il n'est point d'intégration. Là où les frontières se rencontrent et où les peuples se répondent, une évidence s'élève, claire et lumineuse : le savoir constitue le socle de toute intégration véritable. Ainsi se dessine un espace vivant, où les idées dialoguent, où les expériences se fécondent, où les savoirs circulent et se transforment. De cet espace naît un souffle, discret mais puissant, porteur d'avenir et de promesses. En Afrique centrale, ce souffle prend désormais corps. Il a un nom : PRASMESTI !",
  },
  presidentQuote: {
    en: 'Without knowledge, there is no development; without the sharing of knowledge, there is no integration.',
    fr: "Sans savoir, il n'est point de développement ; sans partage du savoir, il n'est point d'intégration.",
  },
  presidentName: {
    en: 'Félix Antoine TSHISEKEDI TSHILOMBO',
    fr: 'Félix Antoine TSHISEKEDI TSHILOMBO',
  },
  presidentRole: {
    en: 'Regional champion president for education, health and culture',
    fr: 'Président champion régional éducation, santé et culture',
  },
  pillarOne: { en: 'Solidarity for education', fr: "Solidarité pour l'éducation" },
  pillarTwo: { en: 'Promotion of innovation', fr: "Promotion de l'innovation" },
  pillarThree: { en: 'Acceleration of technological development', fr: 'Accélération du développement technologique' },
  pillarFour: { en: 'Scientific research support', fr: 'Soutien à la recherche scientifique' },
  communityEyebrow: { en: 'About', fr: 'À propos de' },
  communityTitle: {
    en: 'ECCAS',
    fr: 'La CEEAC',
  },
  communityBodyOne: {
    en: "In the heart of the continent, Central Africa asserts itself as a global strategic space, rich in natural, energy and agricultural resources, and playing a key role in climate, biodiversity, food security and international trade. However, this position is accompanied by strong pressures, notably climate change, economic dependence, technological changes and geopolitical tensions. Faced with these challenges, the region must capitalize on its strengths and strengthen its integration.",
    fr: "Au cœur du continent, l'Afrique centrale s'affirme comme un espace stratégique mondial, riche en ressources naturelles, énergétiques et agricoles, et jouant un rôle clé dans le climat, la biodiversité, la sécurité alimentaire et les échanges internationaux. Toutefois, cette position s'accompagne de fortes pressions, notamment le changement climatique, la dépendance économique, les mutations technologiques et les tensions géopolitiques. Face à ces défis, la région doit capitaliser sur ses atouts et renforcer son intégration.",
  },
  communityBodyTwo: {
    en: "In this dynamic, the Economic Community of Central African States (ECCAS) — composed of Angola, Burundi, Cameroon, Central African Republic, Republic of the Congo, Democratic Republic of the Congo, Gabon, Equatorial Guinea, Rwanda, Sao Tome and Principe and Chad — asserts itself as the driver of a sustainable, inclusive and resilient transformation, capable of structuring regional development based on cooperation, innovation and the valuation of its resources.",
    fr: "Dans cette dynamique, la Communauté Économique des États de l'Afrique Centrale (CEEAC) — composée de l'Angola, du Burundi, du Cameroun, de la République centrafricaine, de la République du Congo, de la République démocratique du Congo, du Gabon, de la Guinée équatoriale, du Rwanda, de Sao Tomé-et-Principe et du Tchad — s'affirme comme le moteur d'une transformation durable, inclusive et résiliente, capable de structurer un développement régional fondé sur la coopération, l'innovation et la valorisation de ses ressources.",
  },
  communityCardOneTitle: { en: 'Data centralisation', fr: 'Centralisation des données' },
  communityCardOneBody: {
    en: 'Bring all relevant education, science, technology and innovation data together in one place accessible to all regional actors.',
    fr: "Rassembler toutes les informations pertinentes sur l'éducation, la formation, les sciences, la technologie et l'innovation en un seul endroit, accessible à tous les acteurs de la région.",
  },
  communityCardTwoTitle: { en: 'Regional collaboration', fr: 'Collaboration régionale' },
  communityCardTwoBody: {
    en: 'Encourage exchanges between institutions, researchers, teachers and decision-makers to create synergies in educational, scientific and technological projects.',
    fr: "Encourager les échanges entre institutions, chercheurs, enseignants et décideurs pour créer des synergies dans les projets éducatifs, scientifiques et technologiques grâce à la mise en valeur de la pluralité culturelle.",
  },
  communityCardThreeTitle: { en: 'Talent and innovation', fr: 'Valorisation des talents et innovations' },
  communityCardThreeBody: {
    en: 'Highlight achievements and competencies of individuals and institutions to stimulate innovation and strengthen regional belonging.',
    fr: "Mettre en lumière les réussites, les compétences des individus et des institutions pour stimuler l'innovation et renforcer le sentiment d'appartenance régionale.",
  },
  directorEyebrow: { en: "The Director's view", fr: 'Le regard du Directeur' },
  directorTitle: {
    en: 'Building the future through collective action',
    fr: "Bâtir l'avenir par l'action collective",
  },
  directorBody: {
    en: 'The Regional Portal for Monitoring Assistance in Education, Sciences, Technology and Innovation (PRASMESTI) is intended to become a privileged tool for sectoral communication. Each Member State is thus called upon to appropriate its use, according to its priorities, its objectives and its achievements. Its ambition is twofold: to inform and to train, through a dynamic of interaction between the Member States, the Commission, the organs of the Community, as well as national, regional and international partners. The aim is, in the long term, to make reliable and structured information available, at the service of a holistic development based on education, training, sciences, technology and innovation in the community space. A true window on current dynamics, this platform allows both to share future perspectives and to better understand internal and external developments in the region. It bears witness, unequivocally, to a reality in the making: the Central Africa of knowledge is on the move!',
    fr: "Le Portail Régional d'Aide au Suivi en matière d'Éducation, Sciences, Technologie et Innovation (PRASMESTI) a vocation à devenir un outil privilégié de communication sectorielle. Chaque État membre est ainsi appelé à s'en approprier l'usage, en fonction de ses priorités, de ses objectifs et de ses réalisations. Son ambition est double : informer et former, à travers une dynamique d'interaction entre les États membres, la Commission, les organes de la Communauté, ainsi que les partenaires nationaux, régionaux et internationaux. Il s'agit, à terme, de mettre à disposition une information fiable et structurée, au service d'un développement holistique fondé sur l'éducation, la formation, les sciences, la technologie et l'innovation dans l'espace communautaire. Véritable fenêtre ouverte sur les dynamiques en cours, cette plateforme permet à la fois de partager les perspectives d'avenir et de mieux appréhender les évolutions internes et externes à la région. Elle témoigne, sans équivoque, d'une réalité en construction : l'Afrique centrale du savoir est en marche !",
  },
  directorName: { en: 'David Blaise Ossene', fr: 'David Blaise Ossene' },
  directorRole: { en: 'Director of the PRASMESTI programme', fr: 'Directeur du programme PRASMESTI' },
  voicesEyebrow: { en: 'Testimonials', fr: 'Témoignages' },
  voicesTitle: {
    en: 'What the Commissioners say',
    fr: "Ce qu'en disent les Commissaires",
  },
  voicesIntro: {
    en: 'PRASMESTI is a collective commitment. Here is how the Commissioners of the ECCAS see its role in building a more integrated, more knowledgeable and more prosperous Central Africa.',
    fr: "PRASMESTI est un engagement collectif. Voici comment les Commissaires de la CEEAC perçoivent son rôle dans la construction d'une Afrique centrale plus intégrée, plus savante et plus prospère.",
  },
  newsEyebrow: { en: 'News', fr: 'Actualités' },
  newsTitle: {
    en: 'Latest news',
    fr: 'Aux dernières nouvelles',
  },
  footerTitle: { en: 'ECCAS member states', fr: 'États membres de la CEEAC' },
  footerBody: {
    en: 'PRASMESTI is designed to inform, orient, and connect initiatives across the regional education, science, technology, and innovation ecosystem.',
    fr: "PRASMESTI est conçu pour informer, orienter et relier les initiatives à travers l'écosystème régional de l'éducation, des sciences, de la technologie et de l'innovation.",
  },
  footerContact: { en: 'Contact', fr: 'Contact' },
  footerRights: { en: 'All rights reserved.', fr: 'Tous droits réservés.' },

  // Presentation page
  presEyebrow: { en: '« Presentation » Page', fr: 'Page « Présentation »' },
  presPageTitleLine1: { en: 'What is', fr: "Qu'est-ce que" },
  presPageTitleLine2: { en: '', fr: 'le' },
  presPlatformHighlight: {
    en: 'The Regional Portal for Monitoring Assistance in Education, Sciences, Technology and Innovation (PRASMESTI)',
    fr: "Le Portail Régional d'Aide au Suivi en matière d'Éducation, Sciences, Technologie et Innovation (PRASMESTI)",
  },
  presPlatformRest: {
    en: 'is a strategic platform set up to support regional integration in Central Africa through the circulation of knowledge.',
    fr: "est une plateforme stratégique mise en place pour soutenir l'intégration régionale en Afrique centrale par la circulation des savoirs.",
  },
  presWhyQ: { en: 'PRASMESTI: Why?', fr: 'Le PRASMESTI : Pourquoi ?' },
  presWhyItem1: { en: 'facilitate intra-community exchanges', fr: 'faciliter les échanges intra-communautaires' },
  presWhyItem2: {
    en: 'enhance the diversity of educational and scientific systems',
    fr: 'valoriser la diversité des systèmes éducatifs et scientifiques',
  },
  presWhyItem3: {
    en: 'establish a structured, readable and coherent dialogue between actors',
    fr: 'instaurer un dialogue structuré, lisible et cohérent entre les acteurs',
  },
  presMissionsTitle: { en: '1. Its main missions', fr: '1. Ses missions principales' },
  presMissionsIntro: { en: 'PRASMESTI is intended to:', fr: 'Le PRASMESTI a pour vocation de :' },
  presMissionsItem1: {
    en: 'Share information on dynamics in education, training, sciences, technology and innovation;',
    fr: "Partager l'information sur les dynamiques en éducation, formation, sciences, technologie et innovation ;",
  },
  presMissionsItem2: {
    en: 'Make available regional norms and standards;',
    fr: 'Mettre à disposition les normes et standards régionaux ;',
  },
  presMissionsItem3: { en: 'Promote innovations;', fr: 'Valoriser les innovations ;' },
  presMissionsItem4: {
    en: 'Strengthen the sense of regional belonging.',
    fr: "Renforcer le sentiment d'appartenance régionale.",
  },
  presFunctionsTitle: { en: '2. Its key functions', fr: '2. Ses fonctions clés' },
  presFunctionsIntro: {
    en: 'The portal offers several structuring features:',
    fr: 'Le portail offre plusieurs fonctionnalités structurantes :',
  },
  presFunctionsSub1: { en: '1. Communication & 2. Coordination', fr: '1. Communication & 2. Coordination' },
  presFunctionsItem1: { en: 'News, information feed, RSS feeds', fr: "Actualités, fil d'information, flux RSS" },
  presFunctionsItem2: { en: 'Monitoring activities and projects', fr: 'Suivi des activités et des projets' },
  presObjectivesTitle: { en: '3. Its strategic objectives', fr: '3. Ses objectifs stratégiques' },
  presObjectivesIntro: {
    en: 'PRASMESTI pursues a double objective:',
    fr: 'Le PRASMESTI poursuit un double objectif :',
  },
  presObjectivesItem1: {
    en: 'Accelerate regional integration through better information circulation;',
    fr: "Accélérer l'intégration régionale par une meilleure circulation de l'information ;",
  },
  presObjectivesItem2: {
    en: 'Modernize communication and monitoring practices.',
    fr: 'Moderniser les pratiques de communication et de suivi.',
  },
  presResultsTitle: { en: '4. Expected results', fr: '4. Les résultats attendus' },
  presResultsItem1: {
    en: 'Strengthening collaboration between States, institutions and partners;',
    fr: 'Renforcement de la collaboration entre États, institutions et partenaires ;',
  },
  presResultsItem2: {
    en: 'Improving the monitoring of public policies and programs.',
    fr: 'Amélioration du suivi des politiques publiques et des programmes.',
  },
  presAccessTitle: { en: '5. Access modalities', fr: "5. Modalités d'accès" },
  presAccessIntro: {
    en: 'PRASMESTI offers several levels of access:',
    fr: "Le PRASMESTI propose plusieurs niveaux d'accès :",
  },
  presAccessIntranet: {
    en: 'Intranet: reserved for ECCAS institutions;',
    fr: 'Intranet : réservé aux institutions de la CEEAC ;',
  },
  presAccessExtranet: {
    en: 'Extranet: accessible to approved establishments and actors;',
    fr: 'Extranet : accessible aux établissements et acteurs agréés ;',
  },
  presAccessInternet: { en: 'Internet: public access.', fr: 'Internet : accès public.' },
  presVisionTitle: {
    en: '6. A platform at the service of image and the future',
    fr: "6. Une plateforme au service de l'image et de l'avenir",
  },
  presVisionText1Pre: {
    en: 'A true regional showcase, PRASMESTI contributes to',
    fr: 'Véritable vitrine régionale, le PRASMESTI contribue à',
  },
  presVisionText1Bold: {
    en: 'valuing the image of education, science and innovation in Central Africa',
    fr: "valoriser l'image de l'éducation, des sciences et de l'innovation en Afrique centrale",
  },
  presVisionText2: {
    en: 'Shared knowledge is the engine of successful integration and sustainable development.',
    fr: "Le savoir partagé est le moteur d'une intégration réussie et d'un développement durable.",
  },

  // ── Why PRASMESTI page ──
  whyPageEyebrow: { en: '« Why PRASMESTI? » Page', fr: 'Page « Pourquoi le PRASMESTI ? »' },
  whyPageTitle: { en: 'Improving the brand image of Education', fr: "Améliorer l'image de marque de l'Éducation" },
  whyPageSeeMore: { en: 'See more', fr: 'Voir plus' },

  // ── Objectives page ──
  objsEyebrow: { en: '« Objectives » Page', fr: 'Page « objectifs »' },
  objsTitle: {
    en: 'PRASMESTI: strategic lever to accelerate regional integration',
    fr: "PRASMESTI : levier stratégique pour accélérer l'intégration régionale",
  },
  objsLeadPre: {
    en: 'PRASMESTI is a structuring tool at the service of school, academic, scientific and technological integration in Central Africa. Through its information, training and networking functions, it responds to a major imperative:',
    fr: "Le PRASMESTI s'inscrit comme un outil structurant au service de l'intégration scolaire, académique, scientifique et technologique en Afrique centrale. À travers ses fonctions d'information, de formation et de mise en réseau, il répond à un impératif majeur :",
  },
  objsLeadBold: {
    en: 'better connect systems, actors and knowledge to transform regional potential into concrete results.',
    fr: 'mieux connecter les systèmes, les acteurs et les savoirs pour transformer le potentiel régional en résultats concrets.',
  },
  objsContextText: {
    en: 'In a context marked by information fragmentation, low knowledge circulation and insufficient coordination of initiatives, PRASMESTI offers an adapted, modern and federating response.',
    fr: "Dans un contexte marqué par la fragmentation des informations, la faible circulation des connaissances et l'insuffisante coordination des initiatives, le PRASMESTI offre une réponse adaptée, moderne et fédératrice.",
  },
  objsH1Title: { en: '1. Inform internally: strengthen regional coherence and visibility', fr: '1. Informer sur l\'interne : renforcer la cohérence et la visibilité régionale' },
  objsH1Intro: { en: 'PRASMESTI allows to:', fr: 'Le PRASMESTI permet de :' },
  objsH1Li1: { en: '<strong>Value Member States\' initiatives</strong>, by making visible ongoing projects, reforms and innovations;', fr: '<strong>Valoriser les initiatives des États membres</strong>, en rendant visibles les projets, réformes et innovations en cours ;' },
  objsH1Li2: { en: '<strong>Ensure continuous monitoring of regional policies and programs</strong>, thus facilitating their evaluation and appropriation;', fr: '<strong>Assurer un suivi continu des politiques et programmes régionaux</strong>, facilitant ainsi leur évaluation et leur appropriation ;' },
  objsH1Li3: { en: '<strong>Create a living institutional memory</strong>, through the capitalization of experiences, good practices and sectoral dynamics;', fr: '<strong>Créer une mémoire institutionnelle vivante</strong>, à travers la capitalisation des expériences, des bonnes pratiques et des dynamiques sectorielles ;' },
  objsH1Li4: { en: '<strong>Strengthen the sense of community belonging</strong>, by showing a Central Africa on the move, united and committed.', fr: "<strong>Renforcer le sentiment d'appartenance communautaire</strong>, en donnant à voir une Afrique centrale en mouvement, solidaire et engagée." },
  objsH1Highlight: { en: '👉 <strong>Opportunity for Member States:</strong> better position themselves, share their progress, learn from each other and avoid duplication of efforts.', fr: '👉 <strong>Opportunité pour les États membres :</strong> mieux se positionner, partager leurs avancées, apprendre les uns des autres et éviter la duplication des efforts.' },
  objsH2Title: { en: '2. Inform externally: open the region and stimulate innovation', fr: "2. Informer sur l'externe : ouvrir la région et stimuler l'innovation" },
  objsH2Intro: { en: 'PRASMESTI constitutes a strategic window on the world, allowing to:', fr: 'Le PRASMESTI constitue une fenêtre stratégique sur le monde, en permettant de :' },
  objsH2Li1: { en: '<strong>Follow international trends</strong> in education, research, technology and innovation;', fr: '<strong>Suivre les tendances internationales</strong> en matière d\'éducation, de recherche, de technologie et d\'innovation ;' },
  objsH2Li2: { en: '<strong>Access normative frameworks</strong>, opportunities and good practices from other regions;', fr: '<strong>Accéder aux cadres normatifs</strong>, aux opportunités et aux bonnes pratiques d\'autres régions ;' },
  objsH2Li3: { en: '<strong>Identify technical and financial partnerships</strong> with international actors;', fr: '<strong>Identifier des partenariats techniques et financiers</strong> avec des acteurs internationaux ;' },
  objsH2Li4: { en: '<strong>Align national policies</strong> with regional and international standards.', fr: '<strong>Aligner les politiques nationales</strong> sur les standards régionaux et internationaux.' },
  objsH2Highlight: { en: '👉 <strong>Opportunity for Member States:</strong> get inspired by the best global experiences.', fr: "👉 <strong>Opportunité pour les États membres :</strong> s'inspirer des meilleures expériences mondiales." },
  objsH3Title: { en: '3. Train: build human capital adapted to contemporary challenges', fr: '3. Former : construire un capital humain adapté aux défis contemporains' },
  objsH3Intro: { en: 'PRASMESTI plays an essential role in capacity building.', fr: 'Le PRASMESTI joue un rôle essentiel dans le renforcement des capacités.' },
  objsH3Li1: { en: '<strong>Make reliable data available</strong>', fr: '<strong>Mettre à disposition des données fiables</strong>' },
  objsH3Li2: { en: '<strong>Identify skill needs</strong>', fr: '<strong>Identifier les besoins en compétences</strong>' },
  objsH3Li3: { en: '<strong>Disseminate educational content</strong>', fr: '<strong>Diffuser des contenus pédagogiques</strong>' },
  objsH3Li4: { en: '<strong>Support training-employment matching</strong>', fr: "<strong>Soutenir l'adéquation formation-emploi</strong>" },

  // ── Expectations page ──
  attEyebrow: { en: '« Expectations » Page', fr: 'Page « les attentes »' },
  attQ: { en: 'PRASMESTI: what expectations?', fr: 'Le PRASMESTI : quelles attentes ?' },
  attLeadPre: { en: "PRASMESTI's expectations reflect a strong ambition: to make the portal a real", fr: 'Les attentes du PRASMESTI traduisent une ambition forte : faire du portail un véritable' },
  attLeadBold: { en: 'engine of integration, collective performance and structural transformation', fr: "moteur d'intégration, de performance collective et de transformation structurelle" },
  attLeadPost: {
    en: 'of Education, Training, Sciences, Technology and Innovation (ETSTI) systems in Central Africa.',
    fr: "des systèmes d'Éducation, Formation, Sciences, Technologie et Innovation (EFSTI) en Afrique centrale.",
  },
  attDynTitle: { en: 'Energize, value and impulse', fr: 'Dynamiser, valoriser et impulser' },
  attH1Title: { en: '1. Strengthen a dynamic collaboration ecosystem', fr: '1. Renforcer un écosystème de collaboration dynamique' },
  attH1Text: { en: 'PRASMESTI aims to intensify exchanges and synergies between ECCAS Member States, development partners and economic operators, in order to build an integrated, fluid and sustainable cooperation framework.', fr: 'Le PRASMESTI vise à intensifier les échanges et les synergies entre les États membres de la CEEAC, les partenaires au développement et les opérateurs économiques, afin de bâtir un cadre de coopération intégré, fluide et durable.' },
  attH2Title: { en: '2. Increase the attractiveness of the ETSTI sector', fr: '2. Accroître l\'attractivité du secteur EFSTI' },
  attH2Text: { en: 'By structuring and valuing the regional offer, the portal contributes to strengthening the visibility and competitiveness of the sector, notably through the development of innovative services with high added value.', fr: 'En structurant et en valorisant l\'offre régionale, le portail contribue à renforcer la visibilité et la compétitivité du secteur, notamment à travers le développement de services innovants à forte valeur ajoutée.' },
  attH3Title: { en: '3. Impulse structuring and innovative projects', fr: '3. Impulser des chantiers structurants et innovants' },
  attH3Text: { en: 'PRASMESTI is expected as a strategic pulse tool, capable of supporting the design and management of ambitious regional projects, in line with contemporary scientific, technological and economic challenges.', fr: 'Le PRASMESTI est attendu comme un outil d\'impulsion stratégique, capable de soutenir la conception et le pilotage de projets régionaux ambitieux, en phase avec les défis scientifiques, technologiques et économiques contemporains.' },
  attGovTitle: { en: 'Governance, modernization and transmission', fr: 'Gouvernance, modernisation et transmission' },
  attH4Title: { en: '4. Drive public policies by data (monitoring)', fr: '4. Piloter les politiques publiques par la donnée (monitoring)' },
  attH4Text: { en: 'One of the major challenges is to set up real-time monitoring of actions and programs, thanks to reliable indicators, allowing:', fr: "L'un des enjeux majeurs est de mettre en place un suivi en temps réel des actions et des programmes, grâce à des indicateurs fiables, permettant :" },
  attH4Li1: { en: 'to quickly identify blockages,', fr: 'de localiser rapidement les blocages,' },
  attH4Li2: { en: 'to optimize decision-making,', fr: "d'optimiser la prise de décision," },
  attH4Li3: { en: 'and to accelerate interventions on the ground.', fr: "et d'accélérer les interventions sur le terrain." },
  attH5Title: { en: '5. Structure and modernize the institutional back-office', fr: '5. Structurer et moderniser le back-office institutionnel' },
  attH5Text: { en: 'The portal must allow the harmonization and digitalization of administrative practices, including: digital archiving, monitoring of programs and projects, traceability of actions, thus guaranteeing transparency, continuity and efficiency.', fr: "Le portail doit permettre l'harmonisation et la digitalisation des pratiques administratives, notamment : l'archivage numérique, le suivi des programmes et projets, la traçabilité des actions, garantissant ainsi transparence, continuité et efficacité." },
  attH6Title: { en: '6. Fluidify the transmission of knowledge', fr: '6. Fluidifier la transmission des savoirs' },
  attH6Text: { en: 'PRASMESTI aims to transform information sharing into a lever for collective performance, by promoting a rapid, reliable and accessible circulation of knowledge.', fr: 'Le PRASMESTI ambitionne de transformer le partage d\'informations en levier de performance collective, en favorisant une circulation rapide, fiable et accessible des connaissances.' },
  attEServicesTitle: { en: 'Digital services and interoperability', fr: 'Services numériques et interopérabilité' },
  attH7Title: { en: '7. Deploy an integrated regional e-service', fr: '7. Déployer un e-service régional intégré' },
  attH7Text: { en: 'It is about setting up a central digital platform, dedicated to ETSTI, facilitating:', fr: "Il s'agit de mettre en place une plateforme numérique centrale, dédiée à l'EFSTI, facilitant :" },
  attH7Li1: { en: 'experience sharing;', fr: "le partage d'expériences ;" },
  attH7Li2: { en: 'professional networking;', fr: 'le réseautage professionnel ;' },
  attH7Li3: { en: 'and continuous capacity building.', fr: 'et le renforcement continu des capacités.' },
  attH8Title: { en: '8. Promote interoperability of systems and professions', fr: '8. Favoriser l\'interopérabilité des systèmes et des métiers' },
  attH8Text: { en: 'The portal must create digital bridges between the different institutions and professions, in order to:', fr: 'Le portail doit créer des passerelles numériques entre les différentes institutions et métiers, afin de :' },
  attH8Li1: { en: 'simplify workflows,', fr: 'simplifier les flux de travail,' },
  attH8Li2: { en: 'improve coordination,', fr: 'améliorer la coordination,' },
  attH8Li3: { en: 'strengthen the capitalization of knowledge.', fr: 'renforcer la capitalisation des connaissances.' },
  attImageLevierTitle: { en: 'PRASMESTI: an image and transformation lever', fr: "Le PRASMESTI : un levier d'image et de transformation" },
  attImageLevierIntro: { en: 'Beyond its technical functions, PRASMESTI embodies a strong political and symbolic ambition:', fr: 'Au-delà de ses fonctions techniques, le PRASMESTI incarne une ambition politique et symbolique forte :' },
  attImageLevierHighlight: { en: '👉 position Central Africa as a space of knowledge, innovation and human capital development.', fr: "👉 positionner l'Afrique centrale comme un espace de savoir, d'innovation et de développement du capital humain." },
  attImageLi1: { en: '<strong>An identity full of meaning:</strong> the choice of green reflects a commitment to sustainability and alignment with the Sustainable Development Goals (SDGs).', fr: "<strong>Une identité porteuse de sens :</strong> le choix du vert reflète un engagement en faveur de la durabilité et de l'alignement avec les Objectifs de Développement Durable (ODD)." },
  attImageLi2: { en: '<strong>An asserted institutional consistency:</strong> its design and ergonomics respect the ECCAS graphic charter, in harmony with the orientations of Agenda 2063 and Agenda 2030.', fr: "<strong>Une cohérence institutionnelle affirmée :</strong> son design et son ergonomie respectent la charte graphique de la CEEAC, en harmonie avec les orientations de l'Agenda 2063 et de l'Agenda 2030." },
  attImageLi3: { en: '<strong>A facilitated appropriation:</strong> thanks to a consistent and intuitive visual universe, users more easily appropriate the regional objectives and the tools offered.', fr: "<strong>Une appropriation facilitée :</strong> grâce à un univers visuel cohérent et intuitif, les usagers s'approprient plus facilement les objectifs régionaux et les outils proposés." },
  attAccessAndActorsTitle: { en: 'Access modalities & A tool at the service of all', fr: "Modalités d'accès & Un outil au service de tous" },
  attAccessQ: { en: 'What access modalities?', fr: "Quelles modalités d'accès ?" },
  attAccessText: { en: 'The portal offers differentiated access, adapted to user profiles:', fr: 'Le portail propose un accès différencié, adapté aux profils des utilisateurs :' },
  attAccessIntranet: { en: '<strong>Intranet:</strong> secure access for ECCAS employees and focal points, dedicated to internal management and coordination;', fr: '<strong>Intranet :</strong> accès sécurisé pour les collaborateurs de la CEEAC et les points focaux, dédié à la gestion interne et à la coordination ;' },
  attAccessExtranet: { en: '<strong>Extranet:</strong> access reserved for ETSTI institutions and establishments of Member States duly registered;', fr: "<strong>Extranet :</strong> accès réservé aux institutions et établissements EFSTI des États membres dûment enregistrés ;" },
  attAccessInternet: { en: '<strong>Internet:</strong> public access to certain data, general information and statistics.', fr: '<strong>Internet :</strong> accès public à certaines données, informations générales et statistiques.' },
  attToolForAllTitle: { en: 'A tool at the service of all actors', fr: 'Un outil au service de tous les acteurs' },
  attToolForAllText: { en: 'PRASMESTI offers concrete opportunities to each category of actors:', fr: "Le PRASMESTI offre des opportunités concrètes à chaque catégorie d'acteurs :" },
  attToolForAllLi1: { en: '<strong>Member States:</strong> value their performance, attract partnerships and strengthen the driving of public policies;', fr: '<strong>États membres :</strong> valoriser leurs performances, attirer des partenariats et renforcer le pilotage des politiques publiques ;' },
  attToolForAllLi2: { en: '<strong>Digital solution publishers:</strong> promote their expertise (audit, training, innovative solutions);', fr: '<strong>Éditeurs de solutions numériques :</strong> promouvoir leurs expertises (audit, formation, solutions innovantes) ;' },
  attToolForAllLi3: { en: '<strong>Consulting firms and technical partners:</strong> present their service offers, from strategic analysis to operational implementation.', fr: "<strong>Bureaux d'études et partenaires techniques :</strong> présenter leurs offres de services, de l'analyse stratégique à la mise en œuvre opérationnelle." },
  attInSynthesisTitle: { en: 'In synthesis', fr: 'En synthèse' },
  attInSynthesisIntro: { en: "PRASMESTI's expectations converge towards a clear finality:", fr: 'Les attentes du PRASMESTI convergent vers une finalité claire :' },
  attInSynthesisHighlight: { en: '👉 make digital a lever for integration, governance and sustainable transformation.', fr: '👉 faire du numérique un levier d\'intégration, de gouvernance et de transformation durable.' },
  attInSynthesisConclusion: { en: 'PRASMESTI thus becomes a federating tool, at the service of a more connected, more efficient Central Africa resolutely turned towards the future.', fr: "Le PRASMESTI devient ainsi un outil fédérateur, au service d'une Afrique centrale plus connectée, plus performante et résolument tournée vers l'avenir." },

  // ── Issues (Enjeux) page ──
  enjEyebrow: { en: '« Issues » Page', fr: 'Page « les enjeux »' },
  enjQ: { en: 'PRASMESTI: what issues?', fr: 'Le PRASMESTI : les enjeux ?' },
  enjIntroH4: { en: 'The challenge for the Community is to address targeted communication by offering relevant content to the user.', fr: "L'enjeu pour la Communauté est d'adresser une communication ciblée en proposant un contenu pertinent à l'utilisateur." },
  enjForCommunity: { en: 'For the community', fr: 'Pour la communauté' },
  enjForMemberState: { en: 'For a member state', fr: 'Pour un état membre' },
  enjForOperator: { en: 'For an economic operator or a technical partner', fr: 'Pour un opérateur économique ou un partenaire technique' },
  enjCommunityText: {
    en: 'Present progress made in the implementation of regional, continental, and international normative texts in education, science, technology and innovation.',
    fr: "Présenter les progrès effectués dans la mise en œuvre des textes normatifs régionaux, continentaux et internationaux en matière d'éducation, sciences, technologie et innovation.",
  },
  enjMemberStateText: {
    en: "Highlight its audit and training offers, new modules, and innovation ecosystems. Contribute to the Community's sectoral monitoring and decision-making tools.",
    fr: "Mettre en avant ses offres d'audit, de formation ainsi que les nouveaux modules produits. Contribuer aux outils de suivi sectoriel et de prise de décision de la Communauté.",
  },
  enjOperatorText: {
    en: "Highlight all panels of services: from strategic studies to training and operational project management. Build partnerships across the regional space.",
    fr: "Mettre en avant tous leurs panels de prestations : de l'étude stratégique à la formation en passant par la maîtrise d'œuvre opérationnelle. Tisser des partenariats dans l'espace régional.",
  },

  // ── Design & Operations (Conception) page ──
  conEyebrow: { en: '« Design & Operations » Page', fr: 'Page « Conception et opérationnalisation »' },
  conProjectPresentation: { en: 'Project Presentation', fr: 'Présentation du Projet' },
  conTitleH1: { en: 'Design and operationalization of PRASMESTI', fr: 'Conception et opérationnalisation du PRASMESTI' },
  conMainObjective: { en: 'Main objective:', fr: 'Objectif principal :' },
  conMainObj: { en: 'Set up a regional ESTI (Education, Sciences, Technology and Innovation) information, monitoring and decision-support system.', fr: 'Mettre en place un système régional d\'information, de suivi et d\'aide à la décision ESTI (Éducation, Sciences, Technologie et Innovation).' },

  // ── Presentation Detail ("What is PRASMESTI?") page ──
  pdetTitle: { en: 'What is PRASMESTI?', fr: "Qu'est-ce que le PRASMESTI ?" },
  pdetIntro: {
    en: "Built around common normative objectives, PRASMESTI is the portal set up to achieve successful regional integration. It is naturally based first on the development of intra-community exchanges and ensures that the diversity of each and every one in terms of education, training, science, technology and innovation is expressed in a formalized dialogue and in clear language. It is never a question of uniformizing structures, practices and projects. It is a question of harmonizing the diversity of practices, of exploiting national program results at the regional level to establish conditions for clear and coherent dialogues!",
    fr: "Construit autour d'objectifs normatifs communs, le PRASMESTI est le portail mis en place pour parvenir à une intégration régionale réussie. Il repose d'abord naturellement sur le développement d'échanges intracommunautaires et veille à ce que la diversité de tous et de chacun en matière d'éducation, formation, sciences, technologie et innovation s'exprime en florilège dans un dialogue formalisé et dans un langage clair. Il ne s'agit jamais d'uniformiser les structures, les pratiques et les projets. Il s'agit d'harmoniser la diversité des pratiques, d'exploiter au niveau régional les résultats des programmes nationaux pour établir des conditions de dialogues clairs et cohérents !",
  },
  pdetMissionTitle: {
    en: 'In terms of practices, the mission of PRASMESTI is to:',
    fr: 'En termes de pratiques, le PRASMESTI a pour mission de :',
  },
  pdetMissionItem1: {
    en: 'share information on the life of the world of education, training, science, technology and innovation within our regional economic space to meet the challenges facing us and identify new horizons, etc.;',
    fr: "partager les informations sur la vie du monde de l'éducation, de la formation, des sciences, de la technologie et de l'innovation au sein de notre espace économique régional pour répondre aux défis qui s'imposent à nous et identifier de nouveaux horizons, etc. ;",
  },
  pdetMissionItem2: {
    en: 'make available quality norms and standards for education, training, science, technology and innovation within our Regional Economic Community;',
    fr: "rendre disponibles les normes et standards de qualité de l'éducation, de la formation, des sciences, de la technologie et de l'innovation au sein de notre Communauté Économique Régionale ;",
  },
  pdetMissionItem3: {
    en: 'give meaning to innovations by making them accessible and strategically orienting the efforts and missions of each and every one in terms of education, training, science, technology and innovation;',
    fr: "donner du sens aux innovations en le rendant accessibles et orienter de manière stratégique les efforts et les missions de tous et de chacun en matière d'éducation, de formation, de sciences, de technologie et d'innovation ;",
  },
  pdetMissionItem4: {
    en: 'promote the culture of education-training, science, technology and innovation in Central Africa by strengthening, according to the orientations of Agenda 2063, our sense of belonging to a single entity rich in its cultural and educational plurality;',
    fr: "valoriser la culture d'éducation-formation, sciences, technologie et innovation en Afrique centrale par le renforcement, selon les orientations de l'Agenda 2063, de notre sentiment d'appartenance à une seule et même entité riche de sa pluralité culturelle et éducative ;",
  },
  pdetMissionItem5: {
    en: 'enhance and develop the potentials and talents of our education, training, science, technology and innovation systems;',
    fr: 'valoriser et développer les potentiels et talents de nos systèmes d\'éducation, de formation, des sciences, de la technologie et de l\'innovation ;',
  },
  pdetMissionItem6: {
    en: 'allow each Member State to share its successes, or simply its challenges in terms of education and training: initial training, early childhood development, work-study training, continuous training, lifelong learning, innovation, science, technology, innovation, etc.',
    fr: "permettre à chaque État membre de partager ses réussites, ou tout simplement ses challenges en matière d'éducation et de formation : formation initiale, développement de la petite enfance, formatien en alternance, formation continue, formation tout au long de la vie, innovation, sciences, technologie, innovation, etc.",
  },
  pdetSuccessCondition: {
    en: 'The establishment of monitoring assistance for the implementation of normative texts in education is a process whose success depends on how it is integrated into the life of the Community as well as the information shared: content, interactions and, why not, an editorial line, etc.',
    fr: "Mise en place d'aide au suivi de la mise en œuvre des textes normatifs en éducation est une démarche dont la réussite dépend de la façon dont il sera inséré dans la vie de la Communauté ainsi que des informations partagées : contenu, les interactions et, pourquoi pas, une ligne éditoriale, etc.",
  },
  pdetDescriptionLabel: { en: 'Description:', fr: 'Description :' },
  pdetDescriptionText: {
    en: 'Thus PRASMESTI, which is intended to be the intra-community link in Central Africa, meets a double objective: (1) to accelerate regional integration through education, training, science, technology and innovation by optimizing access to information and reliable data; and (2) to adapt to modern reading habits and communication uses through digital assistance provided to each Member State of the Community and the ECCAS Commission to take stock of regional progress in academic integration, science, technology and innovation.',
    fr: "Ainsi le PRASMESTI, qui se destine à être le trait d'union intra-communautaire en Afrique Centrale, répond à un double objectif : (1) accélérer l'intégration régionale par l'éducation, la formation, les sciences, la technologie et l'innovation en optimisant l'accès à l'information et aux données fiables ; et (2) s'adapter aux habitudes de lecture et aux usages de communication modernes par une assistance numérique apportée à chaque État membre de la Communauté et de la Commission de la CEEAC à faire le point des avancées régionales en matière d'intégration académique, de sciences, de technologie et d'innovation.",
  },
  pdetWhyQ: { en: 'PRASMESTI: Why?', fr: 'Le PRASMESTI : Pourquoi ?' },
  pdetWhyItem1: {
    en: 'capitalize on information and know-how in education, training, science, technology and innovation in the ECCAS space;',
    fr: "capitaliser les informations et les savoir-faire en éducation, formation, sciences, technologie et innovation dans l'espace CEEAC ;",
  },
  pdetWhyItem2: {
    en: 'simplify the search for sectoral information in the Central African region;',
    fr: 'simplifier la recherche d\'informations sectorielles dans la région Afrique centrale ;',
  },
  pdetWhyItem3: {
    en: 'centralize all data in education, science, technology and innovation in a single access point;',
    fr: "centraliser l'ensemble des données en éducation, sciences, technologie et innovation en un seul accès ;",
  },
  pdetWhyItem4: {
    en: 'unite around the implementation of normative texts and the execution of regional programs.',
    fr: "se fédérer autour de la mise en œuvre des textes normatifs et l'exécution des programmes régionaux.",
  },
  pdetFunctionsTitle: { en: 'PRASMESTI: Main functions?', fr: 'Le PRASMESTI : Les principales fonctions ?' },
  pdetFuncComm: {
    en: 'Communication: Discussion threads, News, RSS feeds, Profile management...',
    fr: 'Communication : Fil de discussion, Actualités, Flux RSS, Gestion de profils...',
  },
  pdetFuncCoord: {
    en: 'Coordination: Traceability of file exchanges, Planning, Graphical dashboards and management indicators...',
    fr: 'Coordination : Traçabilité des échanges de fichiers, Planning, Tableaux de bord graphiques et indicateurs de pilotage...',
  },
  pdetFuncContent: {
    en: 'Provision of sectoral content and documents: normative texts, articles, photos, videos, plans, diagrams, studies, nomenclatures, summary pages, data aggregation...',
    fr: "Mise à disposition de contenus et documents sectoriels : textes normatifs, articles, photos, vidéos, plans, schémas, études, nomenclatures, pages de synthèse, agrégation de données...",
  },
  pdetFuncKb: {
    en: 'Knowledge management: user forums, frequently asked questions, knowledge base...',
    fr: 'Gestion des connaissances : forums utilisateurs, foire aux questions, base de connaissances...',
  },
  pdetExpTitle: { en: 'PRASMESTI: Expectations?', fr: 'Le PRASMESTI : Les attentes ?' },
  pdetExpItem1: {
    en: 'Boost collaboration between ECCAS Member States, development partners, economic operators and all other internal and external interlocutors.',
    fr: "Dynamiser la collaboration entre États membres de la CEEAC, les partenaires au développement, les opérateurs économiques et tous les autres interlocuteurs internes et externes.",
  },
  pdetExpItem2: {
    en: 'Allow the transmission of knowledge and information for a more productive and efficient organization.',
    fr: "Permettre la transmission des connaissances et d'informations pour une organisation plus productive et performante.",
  },
  pdetExpItem3: {
    en: "Support new regional projects in the Education, Training, Science, Technology and Innovation sector:",
    fr: "Accompagner de nouveaux chantiers régionaux du secteur de l'Éducation, Formation, Sciences, Technologie et Innovation :",
  },
  pdetExpSub1: {
    en: 'Facilitate information sharing at the regional level and create more synergies between the different entities and professions of Education, Training, Science, Technology and Innovation.',
    fr: "Faciliter le partage d'informations au niveau régional et créer plus de synergies entre les différentes entités et métiers de l'Éducation, Formation, Sciences, Technologie et Innovation.",
  },
  pdetExpSub2: {
    en: "Improve the monitoring of implementation by development partners and technical consultants: follow developments within each Member State in real time to have indicators and statistics to detect recurring problems and accelerate their resolution directly from the field",
    fr: "Améliorer le suivi de la mise en œuvre des partenaires au développement, les consultants techniques : suivre en temps réel les développements au sein de chaque États membres afin de disposer d'indicateurs et de statistiques pour détecter les problèmes récurrents et d'accélérer leur prise en charge directement depuis le terrain",
  },
  pdetExpSub3: {
    en: "Launch a regional e-service for Education, Training, Science, Technology and Innovation: experience sharing, capacity building...",
    fr: "Lancer un e-service régional pour l'Éducation, la Formation, les Sciences, la Technologie et l'Innovation : partage d'expérience, renforcement de capacités...",
  },
  pdetExpItem4: {
    en: 'Strengthen the capacities of the regional Education, Training, Science, Technology and Innovation offer, increase regional attractiveness with new sectoral services.',
    fr: "Renforcer les capacités de l'offre régionale d'Éducation, Formation, Sciences, Technologie et Innovation, augmenter l'attractivité régionale avec de nouveaux services sectoriels.",
  },
  pdetExpItem5: {
    en: 'Harmonize and optimize certain back-office tasks: access to data and history (archiving), progress of programs and projects, etc.',
    fr: "Harmoniser et optimiser certaines tâches back-office : accès aux données et à l'historique (archivage), avancement de programmes et projets, etc.",
  },
  pdetBrandTitle: {
    en: 'PRASMESTI: improving the brand image of Education, Training, Science, Technology and Innovation in Central Africa',
    fr: "Le PRASMESTI : améliorer l'image de marque de l'Éducation, Formation, Sciences, Technologie et Innovation en Afrique centrale",
  },
  pdetBrandText1: {
    en: "PRASMESTI is a collaborative portal for Education, Training, Science, Technology and Innovation of the Community. Its design, its Homepage, its structures, its functionalities... must respect an ECCAS graphic charter and be consistent with the brand image conveyed by Agenda 2063 and Agenda 2030.",
    fr: "Le PRASMESTI est un portail collaboratif de l'Éducation, Formation, Sciences, Technologie et Innovation de la Communauté. Son design, sa page d'Accueil, ses arborescences, ses fonctionnalités... doivent respecter une charte graphique de la CEEAC et en cohérence avec l'image de marque renvoyer par l'Agenda 2063 et l'Agenda 2030.",
  },
  pdetBrandText2: {
    en: "Users, entering more and more into the universe of PRASMESTI, will more easily assimilate the regional collaborative platform and the objectives assigned by the two major Agendas that frame and orient the development of regional human capital.",
    fr: "Les usagers, entrant de plus en plus dans l'univers du PRASMESTI, assimileront plus facilement la plateforme collaborative régionale et les objectifs assignés par les deux grands Agendas qui encadrent et orientent le développement du capital humain régional.",
  },
  pdetAccessTitle: { en: 'PRASMESTI: Access possibilities?', fr: 'Le PRASMESTI : Les possibilités d\'accès ?' },
  pdetAccessIntro: {
    en: "The Community execution organ (Commission) chooses, according to the profile of each user, to make information or applications from its system available to such or such user. Below are the main types of access:",
    fr: "L'organe d'exécution de la Communauté au lieu de la Communauté (Commission) choisit, selon le profil de chaque utilisateur, de mettre à la disposition de tel ou telle usager les informations ou les applications de son système. Ci-dessous les principaux types d'accès :",
  },
  pdetIntranet: {
    en: 'Intranet: accessible by employees only from the headquarters of the Commission of the Economic Community of Central African States and some focal points of Member States.',
    fr: "Intranet : accessible par les collaborateurs uniquement depuis le siège de la Commission de la Communauté Économique des États de l'Afrique Centrale et quelques points focaux des États membres.",
  },
  pdetExtranet: {
    en: 'Extranet: accessible by all education, training, science, technology and innovation establishments duly registered within the various Member States.',
    fr: "Extranet : accessible par tous les établissements d'éducation, de formation, de sciences, de technologie et d'innovation dûment enregistrés au sein des différents États membres.",
  },
  pdetInternet: {
    en: 'Internet: which is access to certain data without needing to identify oneself.',
    fr: "Internet : qui est un accès à certaines données sans avoir besoin de s'identifier.",
  },
  pdetAccessChallenge: {
    en: "The challenge for the Community is to address targeted communication by offering relevant content to the user. For example, highlighting its entire range and complementary offers allows for informing actors in education, science, technological development and innovation and triggering new sectoral services:",
    fr: "L'enjeu pour la Communauté est d'adresser une communication ciblée en proposant un contenu pertinent à l'utilisateur. Par exemple, mettre en avant toute sa palette et offres complémentaires permet d'informer les acteurs de l'éducation, des sciences, du développement technologique et de l'innovation et de déclencher de nouveaux services sectoriels :",
  },
  pdetAccessMemberState: {
    en: 'For a Member State, it is a question of presenting the progress made in the implementation of regional, continental, and international texts',
    fr: "Pour un État membre, il s'agit de présenter les progrès effectués dans la mise en oeuvre des textes régionaux, continentaux, et internationaux",
  },
  pdetAccessSoftwareEditor: {
    en: "For a software publisher, it would be a matter of highlighting its audit and training offers as well as new modules produced...",
    fr: "Pour un éditeur de logiciel, il s'agirait de mettre en avant ses offres d'audit, de formation ainsi que les nouveaux modules produits...",
  },
  pdetAccessStudyOffice: {
    en: 'For a consulting firm, it is a question of highlighting all their panels of services: from studies to training, including project management.',
    fr: "Pour un bureau d'études, il s'agit de mettre en avant tous leurs panels de prestations : de l'étude à la formation en passant par la maitrise d'œuvre.",
  },
  pdetSumTitle: { en: 'In summary, the objectives:', fr: 'En résumé, les objectifs :' },
  pdetSumObj1: {
    en: "inform internally - news, sector of activity of our REC and current events, monitoring of regional initiatives, anecdotes related to the integration sector, sponsorship, patronage, and other activities...",
    fr: "informer sur l'interne - nouvelles, secteur d'activité de notre CER et du moment, suivi des initiatives régionales, anecdotes en rapport avec le secteur d'intégration, sponsoring, mécénat, et autres activités...",
  },
  pdetSumObj2: {
    en: "inform externally – activities and offers from other geographical areas, news, law articles of interest for integration through education and training;",
    fr: "informer sur l'externe – les activités et les offres des autres zones géographiques, nouvelles, articles de lois ayant un intérêt pour l'intégration par l'éducation et la formation ;",
  },
  pdetSumObj3: {
    en: "Train - provide information on figures, activity, environment, training expectations, techniques...",
    fr: "Former - renseigner sur les chiffres, sur l'activité, sur l'environnement, sur les attentes de formation, sur les techniques...",
  },

  // ── Project Leads (Responsables) page ──
  respEyebrow: { en: '« Project Leads » Page', fr: 'Page « les responsables »' },
  respPortalTitle: { en: 'Regional Portal for Monitoring Assistance in Education, Science, Technology and Innovation (PRASMESTI):', fr: "Portail Régional d'Aide au Suivi en Matière d'Éducation, Science, Technologie et Innovation (PRASMESTI) :" },
  respInformToGovern: { en: 'Inform to govern', fr: 'Informer pour gouverner' },
  respTitleH2: { en: 'PRASMESTI Leads 2020-2025', fr: 'Responsables PRASMESTI 2020-2025' },
  respEccasCommission: { en: 'ECCAS Commission', fr: 'Commission CEEAC' },
};

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  translate: (key: string) => TranslationValue;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const value = useMemo(
    () => ({
      language,
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'fr' : 'en')),
      translate: (key: string) => translations[key]?.[language] ?? key,
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
