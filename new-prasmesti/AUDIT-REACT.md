# Audit exhaustif — Site React PRASMESTI (`new-prasmesti`)

> Cible : `Clients/PRASMESTI/site/new-prasmesti` — version **React** (React 18 + Vite 5 + TS + Tailwind 3 + framer-motion + react-router-dom HashRouter). Dépôt `Alex-e-o/PRASMESTI`, branche `main`.
> Méthode : analyse statique multi-dimensions (13 dimensions, 136 findings vérifiés adversarialement) + QA live headless Playwright (toutes les routes × 1440/390 px × light/dark × EN + parcours de l'espace privé) + **inspection visuelle œil-par-œil de toutes les images à fort impact**.
> Livrable = liste seulement. Les correctifs seront appliqués ensuite.
> Date : 2026-07-08.

---

## 0. TL;DR — triage prioritaire

> **Périmètre ajusté par le client (points volontairement exclus de cette liste) :** filigranes IA sur les portraits *(gérés par le client)* ; statistiques nationales factices *(volontaires — maquette)* ; policy « pas de femmes/filles » *(levée pour ce site)* ; liens du menu « Textes normatifs » *(seront des fichiers PDF)*.

**À corriger AVANT toute présentation client / mise en ligne :**

1. **[CRITIQUE] Aucune navigation mobile** : tout le menu disparaît sous 1100 px (tablettes + téléphones) sans burger. (§9.1)
2. **[MAJEUR] Accents français absents** dans des blocs entiers (stats d'implémentation, espace privé, données pays) sur un site francophone. (§3.2)
3. **[MAJEUR] Sécurité/positionnement** : mot de passe unique committé + affiché + pré-rempli ; espace « privé » cosmétique en l'absence de backend. (§2)
4. **[MAJEUR] Boutons morts dans la navigation principale** : « Propriété intellectuelle » et « Innovations » (sans handler). (§4)

**Vérité terrain rassurante (QA live) :** 0 erreur console, 0 image cassée (404), 0 débordement horizontal sur les pages publiques à 390 px, login fonctionnel, et la traduction FR/EN/ES/PT du contenu principal est **complète et de qualité** (c'est une force, pas un défaut). Le responsive et le dark mode ont été conçus avec soin — les défauts restants sont localisés.

**Bilan chiffré :** ~130 constats — **1 Critique**, **~31 Majeur**, **~67 Mineur**, **~33 Polish** (détail en §14).

---

## 1. Réputation & images *(constats issus de l'inspection visuelle)*

> Exclus à la demande du client : filigranes IA (gérés par le client) et policy « pas de femmes/filles » (levée pour ce site). Les constats ci-dessous portent donc uniquement sur la pertinence, le recyclage, la qualité et le poids des visuels.

### 1.1 — [MINEUR] Photos « présentation » = stock occidental générique, hors contexte Afrique centrale
- **Fichiers :** `public/assets/prasmesti/presentation/pres-functions.jpg` (bureau occidental), `pres-results.jpg` (tableau de bord avec **carte de France** et UI en **lorem ipsum** « Tempor/Magna/Eiusmod »), `pres-access.jpg`, `pres-vision.jpg` (labo de physique occidental) — utilisées via `src/components/Presentation.tsx:67…`.
- **Problème :** ces images sont contextuellement inadaptées à un programme CEEAC/Afrique centrale (décor non africain, carte de France, faux dashboard en faux-texte). Elles trahissent le remplissage stock.
- **Correctif :** privilégier des visuels contextualisés Afrique centrale (les `obj-intro.jpg`/`pdet-description.jpg` = vue aérienne de Yaoundé et `att-synthesis.jpg` = savane sont de bons exemples déjà présents), ou des visuels neutres non-humains.

### 1.2 — [MINEUR] Images d'actualités recyclées (5 items, 3 images)
- **Fichier :** `src/data/siteContent.ts:108,153,123,168` — `news-2.jpg` sert aux items 1 et 4 ; `news-3.jpg` aux items 2 et 5.
- **Problème :** deux paires d'actualités distinctes affichent la même vignette côte à côte → impression de contenu bouche-trou.
- **Correctif :** fournir `news-4.jpg`/`news-5.jpg` dédiées, ou réduire à 3 actualités réellement illustrées.

### 1.3 — [MINEUR] Héros = captures vidéo avec logos de diffusion incrustés
- **Fichiers :** `public/assets/prasmesti/home/hero/hero-1.jpg`, `hero-2.jpg` (`src/components/Hero.tsx:40,78`) — logos FACESTI/CEEAC-ECCAS/Gouvernement RDC incrustés en haut à droite (grabs d'une captation vidéo, définition/qualité limitée pour un fond plein écran).
- **Correctif :** utiliser des photos haute résolution sans surimpression, ou recadrer/nettoyer.

### 1.4 — [MINEUR] Images à fort poids servies en PNG (photos) — voir §12 (Performance)
- `commissioner-olouimo.jpg` 2,8 Mo, `commissioner-nelly.png` 1,5 Mo, `commissioner-maxime.jpg` 1,3 Mo, `president-champion.png` 984 Ko, `ceeac-emblem.png` 700 Ko, `hero-1/2.jpg` ~850 Ko. Détail et correctifs en §12.

### 1.5 — [MINEUR/POLISH] Assets image morts
- `public/assets/prasmesti/home/president/president.jpg` (jamais référencé — seul `president-champion.png` est utilisé). → supprimer.
- `public/assets/prasmesti/shared/prasmesti-logo.png` (octet-pour-octet identique à `logo.png`, jamais référencé). → supprimer.
- `src/assets/hero-banner-visual.svg` (jamais importé). → supprimer.

### 1.6 — [POLISH] Deux pages « présentation » jumelles doublent la surface photo
- `Presentation.tsx` (`pres-*`) et `PresentationDetail.tsx` (`pdet-*`) couvrent le même sujet → 14 fichiers stock au lieu de 7. Mutualiser les visuels entre page sommaire et sous-page.

---

## 2. Sécurité & authentification

### 2.1 — [MAJEUR] Mot de passe unique committé, affiché et pré-rempli
- **Fichier :** `src/data/countryProfiles.ts:23` (`DEMO_PASSWORD = 'Prasmesti@2026'`)
- **Problème :** ce mot de passe unique est réutilisé pour les 12 comptes (dont `admin`), (a) affiché en clair sur `PrivateLoginPage.tsx:51`, (b) pré-rempli dans le champ (`PrivateLoginPage.tsx:8`), (c) documenté dans `supabase/SETUP.md:30` comme LE mot de passe commun à créer pour les vrais comptes Supabase. Si le site est déployé avec Supabase en suivant SETUP.md, tous les comptes partagent un mot de passe public présent dans Git → compromission triviale.
- **Correctif :** acceptable UNIQUEMENT comme mot de passe jetable de démo. Pour la prod : mot de passe fort/unique par compte (hors dépôt), changement forcé au 1er login, retrait de l'affichage/pré-remplissage, correction de `SETUP.md`.

### 2.2 — [MAJEUR] Bundle en mode fallback = espace « privé » sans backend
- **Fichier :** `src/private/auth.ts:21`, `src/private/RequirePrivateAuth.tsx:7`
- **Problème :** l'app tourne sans `.env` (`isSupabaseConfigured=false`), donc le seul rempart est `localStorage.getItem('prasmesti-private-auth')==='true'`. `localStorage.setItem('prasmesti-private-auth','true')` en console suffit à accéder à tout `/private/*`. Les données saisies ne vivent que dans le localStorage du navigateur courant (aucune persistance/confidentialité).
- **Correctif :** rendre Supabase obligatoire en prod (faire échouer le build si `VITE_SUPABASE_URL`/`ANON_KEY` manquent) ; la vraie autorisation repose sur les policies RLS. Ne pas présenter `/private` comme « portail sécurisé » tant que le backend n'est pas branché.

### 2.3 — [MAJEUR] Policies RLS à risque de récursion infinie
- **Fichier :** `supabase/schema.sql:29`
- **Problème :** `current_role()`/`current_country()` lisent `public.profiles` sans `SECURITY DEFINER` → s'exécutent sous les RLS de l'appelant ; combinées à `profiles_self_read` (auto-référentielle), risque de récursion à chaque lecture (déploiement Supabase réel).
- **Correctif :** déclarer les helpers en `SECURITY DEFINER` (avec `search_path`) et éliminer l'auto-référence de `profiles_self_read`. À valider en conditions réelles.

### 2.4 — [MINEUR] Formulaire de login pré-rempli en admin
- `src/pages/private/PrivateLoginPage.tsx:7` — `useState('admin')` + `useState('Prasmesti@2026')` : un visiteur est à un clic d'être admin. Vider les champs, retirer l'encart « comptes de démonstration » avant prod.

### 2.5 — [MINEUR] Objet utilisateur (rôle/pays) lu depuis localStorage sans intégrité
- `src/private/auth.ts:25` — `getPrivateUser()` fait confiance à `role`/`countrySlug` d'un objet localStorage éditable (élévation de privilège en mode fallback). La séparation par pays est correctement gérée côté serveur par les RLS — ne jamais dériver une autorisation de cet objet côté client.

### 2.6 — [MINEUR] Garde d'accès purement client-side
- `src/private/RequirePrivateAuth.tsx:7` — normal pour une SPA, mais à traiter comme confort de navigation, jamais comme barrière (la barrière = RLS serveur).

---

## 3. Contenu & données

> *(§3.1 « statistiques nationales factices » retiré à la demande du client — volontaire, à but de maquette.)*

### 3.2 — [MAJEUR] Accents français absents dans des blocs entiers
- **Fichiers :** `src/data/implementationCountries.ts:64` (`Ministere de l'Education`, `Deploiement`, `Numerisation`, `Republique…`), `src/components/presentation/ImplementationGabonStats.tsx:90` (`mise en oeuvre`, `Apercu base`, `Retour a tous les Etats`, `Progres`, `Repartition`, `Echeance`, `Planifie`…), `src/components/presentation/ImplementationCountryStats.tsx:41` (mêmes chaînes), `src/data/eccasFlags.ts:10`.
- **Problème :** ces chaînes FR sont rendues telles quelles → accents et ligature œ manquants sur un site institutionnel francophone (contraste avec `siteContent.ts`/`languageContext.tsx` bien accentués).
- **Correctif :** réaccentuer l'ensemble (é/è/à/ê/ç/ù + majuscules accentuées États/Éducation + ligature œ « mise en œuvre »). Idéalement centraliser ces libellés dans le dictionnaire i18n.

### 3.3 — [MAJEUR] Noms de pays non canoniques et incohérents entre fichiers
- **Fichier :** `src/data/eccasFlags.ts:10` — « Guinee equatoriale »/« Sao Tome et Principe » (sans accent) vs `siteContent.ts:534` « Guinée Équatoriale » vs `countryProfiles.ts:49` « Guinée Équatoriale »/« Sao Tomé-et-Principe ». Le même pays s'écrit de 2-3 façons.
- **Correctif :** une forme canonique unique par pays appliquée partout (eccasFlags, implementationCountries, siteContent, countryProfiles).

### 3.4 — [MINEUR] Actualité future présentée comme actualité + ordre non chronologique
- `src/data/siteContent.ts:96` — item « École d'été 2026 » daté **27 Juillet 2026** (futur ; aujourd'hui 08/07/2026) placé en tête ; deux items « 18 Novembre 2024 » placés après le « 16 Novembre 2024 ».
- **Correctif :** réordonner les items 2024 en décroissant strict ; laisser l'item futur mais éventuellement le baliser « À venir ». (La date partagée du 18 nov. = 2 événements réels distincts, ne pas « corriger ».)

### 3.5 — [POLISH] Citations de commissaires raccourcies vs source officielle
- `src/data/siteContent.ts:30` — la citation FR de Yves MAPANGOU omet la dernière phrase présente dans `ancienne-version-php/.../fr.php` (idem Nelly et Olouimo). Maurice est intégral.
- **Correctif :** confirmer avec le client si ce raccourcissement éditorial est volontaire ; sinon restaurer uniformément les phrases finales des 3 citations (fr/en/es/pt). *(Contenu légitime — ne pas traiter comme placeholder.)*

### 3.6 — [POLISH] Honorifique « SEMme » vs « SE Mme » incohérent
- `src/data/siteContent.ts:5` (« SE Mme Nelly ») vs `siteContent.ts:519,521` (« SEMme … »). Aligner sur « SEMme » (convention majoritaire).

### 3.7 — [POLISH] Citation du président dupliquée dans deux clés
- `src/languageContext.tsx:125` (`presidentTitle`) et `:137` (`presidentQuote`) contiennent la même phrase ; `presidentQuote` est morte. Supprimer la clé morte (4 langues) ; `presidentTitle` porte une citation, pas un titre (renommer optionnellement).

### 3.8 — [POLISH] KPI Gabon codés en dur et incohérents avec le tableau
- `src/components/presentation/ImplementationGabonStats.tsx:200` — « 22 actions en cours » figé alors que le tableau n'en liste que 3 ; « +9 pts » statique. Le Gabon vit dans un composant sur-mesure au lieu de la config partagée (dette d'architecture). Voir aussi §5.2.

---

## 4. Navigation & liens

> *(§4.1 « menu Textes normatifs : 5 entrées `href="#"` » retiré — ces entrées pointeront vers des fichiers PDF. Penser tout de même à leur donner une vraie destination `href` plutôt que `#`, et un `target`/`rel` adaptés aux PDF.)*

### 4.2 — [MAJEUR] « Propriété intellectuelle » et « Innovations » : boutons sans handler
- `src/components/Navbar.tsx:146` — `<button className="site-nav-link">` stylés comme des liens mais **aucun `onClick`** → clic sans effet.
- **Correctif :** câbler la navigation, ou retirer/marquer « bientôt disponible ».

### 4.3 — [MINEUR] Footer « En savoir plus » : 8 pastilles inertes déguisées en liens
- `src/components/Footer.tsx:28` — FAQ, Projets, ORESTI, PRASMESTI, FACESTI, CHARMESTI, FINESTI, AGRESTI rendues en `<span footer-link-pill-disabled>` (8/10 inertes) sous un titre invitant au clic.
- **Correctif :** câbler les vraies destinations, ou réduire la liste / différencier nettement le style désactivé.

### 4.4 — [MINEUR] Lien footer « Actualités » pointe vers `/` au lieu de `#news`
- `src/components/Footer.tsx:29` (`to: '/'`) — n'atteint jamais la section actualités. Reproduire le comportement du bouton Navbar (`/` puis scroll `#news`).

### 4.5 — [MINEUR] Libellé « Textes normatifs » non cliquable alors que les autres le sont
- `src/components/Navbar.tsx:143` — pas de `onLabelClick` (incohérent avec « Présentation »/« Mise en œuvre »). Uniformiser.

### 4.6 — [MINEUR] `Contact.tsx` (code mort) contient des coordonnées d'une AUTRE marque
- `src/components/Contact.tsx:192` — `mailto:info@ethosoverflow.com`, `tel:+1-555-123-4567`, « 123 Agency Drive, Montréal ». Non monté aujourd'hui mais présent dans le repo. → Supprimer (voir §13).

### 4.7 — [POLISH] `InfiniteMenu` (mort) : bouton noop + liens placeholder externes
- `src/components/InfiniteMenu.tsx:1087` — route interne = `console.log`, externe = `window.open` sans `noopener`, `defaultItems` → picsum.photos / google.com. → Supprimer (voir §13).

### 4.8 — [POLISH] `goToPresSection` définie mais jamais appelée
- `src/components/Navbar.tsx:67` — code mort (pattern d'ancres abandonné). Supprimer.

---

## 5. Bugs & correction

### 5.1 — [MAJEUR] Le questionnaire privé ne met à jour les stats publiques QUE pour le Gabon
- `src/components/presentation/ImplementationCountryStats.tsx:19` — seul `ImplementationGabonStats` appelle `getCountryStatsOverride('gabon')`. Les 10 autres pays affichent les données statiques : la saisie d'un point focal (sauf Gabon) **n'a aucun effet public**, alors que le message de confirmation affirme le contraire (`PrivateQuestionnairePage.tsx:405`).
- **Correctif :** faire lire l'override par le composant générique (`getCountryStatsOverride(country.slug)`, fallbacks comme le Gabon), idéalement factoriser ; sinon corriger le message.

### 5.2 — [MAJEUR] Thème clair non restauré au rechargement *(confirmé en QA live)*
- `src/theme-context.tsx:13` — `useState('dark')` en dur, la préférence localStorage n'est lue que dans un `useEffect` après le 1er rendu.
- **Observé en live :** après avoir choisi le thème clair puis rechargé, la page **revient au sombre et réécrit `localStorage` en `dark`** (aggravé par `React.StrictMode` en dev qui double-invoque les effets ; en prod = flash sombre→clair à chaque chargement / FOUC de thème). `LanguageProvider` fait pourtant correctement l'init paresseux (`useState(() => …)`).
- **Correctif :** initialiser l'état paresseusement depuis localStorage (`useState(() => …)`), **et** poser `data-theme` via un petit script inline dans `index.html` avant l'hydratation (voir §10.5).

### 5.3 — [MINEUR] « Enregistrer en brouillon » et « Soumettre » font exactement la même chose
- `src/pages/private/PrivateQuestionnairePage.tsx:389` — les deux appellent `save()` (mêmes écriture, statut, message). Aucune notion de brouillon vs soumission finale/verrou.
- **Correctif :** distinguer les flux (brouillon = réponses seules sans recalcul/publication ; soumission = recalcul + publication + statut `submitted`), ou fusionner en un seul bouton.

### 5.4 — [MINEUR] Avatar codé en dur (`blaise-ossene.jpg`) pour TOUS les utilisateurs
- `src/private/PrivateLayout.tsx:117` — quel que soit le compte, la topbar affiche la photo de Blaise OSSENE accolée au nom de l'utilisateur (ex. point focal Cameroun avec la photo d'un autre).
- **Correctif :** champ avatar par profil, ou avatar à initiales généré depuis `user.name`.

### 5.5 — [MINEUR] `event.preventDefault()` dans `onWheel` (listener passif) — sans effet + warning
- `src/components/HomeFlagStrip.tsx:53` — React attache `wheel` en passif → `preventDefault()` ignoré + warning console ; la page défile quand même.
- **Correctif :** poser le listener via `addEventListener('wheel', h, {passive:false})`, ou retirer `preventDefault()`.

### 5.6 — [MINEUR] Fuite RAF/WebGL dans `InfiniteMenu` (si un jour monté)
- `src/components/InfiniteMenu.tsx:686` — boucle `requestAnimationFrame` sans annulation, cleanup ne retire que `resize` (pas de `cancelAnimationFrame`, pas de libération WebGL/listeners pointer). Composant mort → le supprimer résout le risque (§13).

### 5.7 — [POLISH] Pas de garde anti-division par zéro sur `maxDomain`
- `src/components/presentation/ImplementationCountryStats.tsx:34` — `Math.max(...values)` sans borne min → `-Infinity`/NaN si `domainProgress` vide ou tout à zéro (le Gabon utilise déjà `Math.max(...,1)`). Aligner : `Math.max(..., 1)`.

### 5.8 — [POLISH] Fetch Wikipédia sans timeout ni annulation
- `src/components/presentation/ImplementationCountryStats.tsx:122` (idem Gabon) — `setState` post-démontage (no-op silencieux sous React 18, donc pas de crash). Amélioration : borner avec `AbortSignal.timeout(8000)` pour éviter un « Chargement… » infini si Wikipédia ne répond pas.

*(Rappel : l'auth cosmétique / bypass localStorage = §2.2 ; le flash de thème = §5.2.)*

---

## 6. i18n / multilingue

> **Note globale :** le contenu principal est traduit en **4 langues (fr/en/es/pt)** de façon complète et de bonne qualité (`siteContent.ts`, `languageContext.tsx`). QA live EN : aucun résidu FR sur les 6 pages testées. C'est une **force**. Les défauts ci-dessous sont localisés.

### 6.1 — [MAJEUR] Noms de pays du menu « État de mise en œuvre » non traduits
- `src/components/Navbar.tsx:7` — tableau `COUNTRIES` codé en dur en **français** (« Cameroun », « Tchad »…) → en EN/ES/PT le menu affiche des noms français, alors que la donnée localisée existe.
- **Correctif :** itérer sur `eccasFlags` (données localisées) avec un mapping slug par `nameFr`.

### 6.2 — [MAJEUR] Chaînes FR sans accents dans les composants récents *(= §3.2)*
- `ImplementationCountryStats.tsx:41`, `ImplementationGabonStats.tsx:90`, espace privé (voir §6.3). Réaccentuer.

### 6.3 — [MINEUR] Tout l'espace privé est codé en dur en français
- `src/private/PrivateLayout.tsx:18` — `/private` n'utilise jamais `useLanguage()`/`translate()` (nav, topbar, dashboard, questionnaire, stats, historique, login tous en FR figé et **sans accents**).
- **Correctif :** réintégrer un sélecteur de langue dans la topbar privée + traduire via le dictionnaire existant (l'infra i18n est prête).

### 6.4 — [MINEUR] `alt` d'images codés en dur en français (ne suivent pas la langue)
- `src/components/presentation/PresentationDetail.tsx:45` (+ Objectifs, Attentes…) — un lecteur d'écran anglophone entend du français. Fournir les `alt` via le dictionnaire/objets `{fr,en,es,pt}`.

### 6.5 — [MINEUR] `aria-label` codés en dur en anglais (défaut FR) *(= §7.6)*
- `CommissionerVoices.tsx:109`, `Hero.tsx:176`, `Navbar.tsx:180`, `AnimatedThemeToggle.tsx:15`, `FlagCloud.tsx:120`… Localiser.

### 6.6 — [MINEUR] Mauvaise traduction ES du bouton connexion
- `src/languageContext.tsx:785` — `navLogin` es = « Conexión » (= connexion réseau) au lieu de « Iniciar sesión ». Corriger.

### 6.7 — [MINEUR] Chaîne FR mêlant un mot anglais + accents manquants (Hero)
- `src/components/Hero.tsx:158` — « Les 4 piliers **helpers** du PRASMESTI » ; aussi « ans pour renaitre et batir » (`:61`), « Eclairer » (`:67`) sans accents. Corriger (« renaître et bâtir », « Éclairer »).

### 6.8 — [MINEUR] Faute de frappe FR
- `src/languageContext.tsx:574` — `pdetMissionItem6` FR : « format**ie**n en alternance » → « format**io**n en alternance » (es/pt/en corrects).

---

## 7. Accessibilité

### 7.1 — [MAJEUR] Menus déroulants inaccessibles au clavier (hover uniquement)
- `src/index.css:635` — `.site-nav-dropdown` révélé seulement par `:hover`, aucune règle `:focus-within` → sous-menus « Présentation »/« Textes normatifs »/« Mise en œuvre » inaccessibles au clavier.
- **Correctif :** ajouter `:focus-within` (miroir du `:hover`), piloter par état React avec `aria-expanded`/`aria-haspopup`, fermeture Échap/blur.

### 7.2 — [MAJEUR] `outline:none` sur les champs sans focus de remplacement
- `src/index.css:3000` (+ `:2572`, `:3184`) — focus clavier invisible sur login + tout le questionnaire + filtres.
- **Correctif :** `:focus-visible { outline: 2px solid …; outline-offset: 2px; }` sur tous les champs.

### 7.3 — [MAJEUR] Boutons tri-états du questionnaire : `aria-label` cryptique, état non exposé
- `src/pages/private/PrivateQuestionnairePage.tsx:23` — `aria-label` = identifiant technique (« general-0-5 »), pas d'`aria-pressed`/rôle radio.
- **Correctif :** libellé humain `${row} — ${col} : ${valeur}` + `aria-pressed`, idéalement groupe radio `<fieldset>/<legend>`.

### 7.4 — [MAJEUR] Carrousels/marquee auto sans pause ni `prefers-reduced-motion`
- `src/components/Hero.tsx:50` (6 s), CommissionerVoices (7 s), HomeFlagStrip (continu) — échec WCAG 2.2.2/2.3.3. Ajouter pause accessible + respect de `prefers-reduced-motion` (voir §11.1).

### 7.5 — [MINEUR] Tableaux du questionnaire : `textarea` sans label + en-têtes sans `scope`
- `PrivateQuestionnairePage.tsx:151` (textarea sans label), `:252`/`:302`/`:128` (`<th>` multi-niveaux sans `scope`/`headers`). Ajouter `aria-label` contextualisés + `scope="col"/"row"`.

### 7.6 — [MINEUR] `aria-label` en anglais sur un site à défaut FR
- `Navbar.tsx:180` « Choose language », `AnimatedThemeToggle.tsx:15`, `Hero.tsx:176`, `CommissionerVoices.tsx:109/133/146`, `FlagCloud.tsx:120`. Localiser via `translate()`.

### 7.7 — [MINEUR] Modale « aperçu Wikipédia » sans gestion du focus/clavier
- `ImplementationGabonStats.tsx:302` (+ `ImplementationCountryStats.tsx:316`) — `role="dialog"` mais pas de piège de focus, pas de fermeture Échap, pas de restauration du focus. Ajouter la gestion clavier complète.

### 7.8 — [MINEUR] Absence de lien d'évitement (« Aller au contenu »)
- `index.html:12` — ajouter un skip-link visible au focus vers `#main` (donner `id="main"` au `<main>`).

### 7.9 — [MINEUR] Champs de filtre de l'historique sans label
- `src/pages/private/PrivateHistoryPage.tsx:19` — inputs sans label (placeholder ≠ label). Ajouter `aria-label`.

### 7.10 — [MINEUR] Champs de connexion sans `name`/`type`/`autocomplete`
- `src/pages/private/PrivateLoginPage.tsx:70` — ajouter `name`+`autocomplete="username"`/`current-password` (WCAG 1.3.5, gestionnaires de mots de passe).

### 7.11 — [MINEUR] `alt` génériques/anglais/redondants
- `DirectorSection.tsx:39` « Director portrait », `PresidentialMessage.tsx:22` « PRASMESTI presidential portrait », `RegionalOverview.tsx:35` « CEEAC logo » (redondant), `ImplementationStatus.tsx:83` (drapeau redondant avec texte adjacent → `alt=""`). Nommer les personnes, localiser, dédoublonner.

### 7.12 — [MINEUR] Graphiques statistiques sans équivalent textuel
- `PrivateStatisticsPage.tsx:16` (barres en `<span>`) et `:46` (donut CSS) — invisibles aux lecteurs d'écran. Ajouter `role="img"`+`aria-label` ou tableau `sr-only`.

### 7.13 — [MINEUR] `<html lang="en">` alors que le défaut est FR *(= §8.4)*
- `index.html:2`.

### 7.14 — [POLISH] `alt` des commissaires réduit au prénom
- `CommissionerVoices.tsx:43` — `alt={voice.nameFirst}` (« Nelly »). Mettre nom complet ou `alt=""` (décoratif).

### 7.15 — [POLISH] `aria-label` sur `<span>` non sémantique (ineffectif)
- `Hero.tsx:15` — `TextAnimate` risque une lecture mot-à-mot. Masquer les mots animés `aria-hidden` + version `sr-only` complète.

### 7.16 — [POLISH] Curseur custom masque les affordances natives
- `SmoothCursor.tsx:75` — `cursor:none !important` supprime le changement de forme (pointer/texte). Ajouter un état de survol + court-circuiter sous `prefers-reduced-motion`.

---

## 8. SEO & métadonnées

### 8.1 — [MAJEUR] Titre unique et générique « PRASMESTI » pour tout le site
- `index.html:7` — `<title>` statique, aucun `document.title` par page.
- **Correctif :** élargir le titre par défaut (« PRASMESTI — Programme régional CEEAC de suivi des indicateurs, Afrique centrale ») + titre unique par page (react-helmet-async ou `useEffect`).

### 8.2 — [MAJEUR] Aucune meta description
- `index.html:11` — ajouter `<meta name="description">` (150-160 car.), idéalement par page.

### 8.3 — [MAJEUR] Aucune balise Open Graph / Twitter Card
- `index.html:11` — partages (WhatsApp/X/LinkedIn) sans aperçu. Ajouter og:title/description/image (1200×630)/url/type + twitter:card.

### 8.4 — [MINEUR] `lang="en"` alors que le site est FR par défaut
- `index.html:2` → mettre `lang="fr"` (le runtime met déjà `document.documentElement.lang` à jour, `languageContext.tsx:804`).

### 8.5 — [MINEUR] HashRouter : aucune URL profonde indexable
- `src/App.tsx:1` — les ~12 pages publiques vivent derrière `#/…` (non indexées). Migrer vers `BrowserRouter basename="/new-prasmesti"` + fallback SPA 404, puis métadonnées par route.

### 8.6 — [MINEUR] Pas de `robots.txt` ni `sitemap.xml`
- `public/` — ajouter `robots.txt` valide (+ `Sitemap:`), et `sitemap.xml` une fois BrowserRouter en place.

### 8.7 — [MINEUR] Aucune balise canonique
- `index.html:11` — ajouter `<link rel="canonical">` (+ par page).

### 8.8 — [MINEUR] Aucune donnée structurée (JSON-LD)
- `index.html:11` — ajouter `Organization`/`GovernmentOrganization` (name, logo, url, sameAs).

### 8.9 — [POLISH] Favicon minimal (pas d'apple-touch-icon ni manifest)
- `index.html:5` — ajouter jeu d'icônes + `site.webmanifest` + `theme-color`.

### 8.10 — [POLISH] Pas de `hreflang` (site quadrilingue)
- `index.html:11` — dépend de la migration router + URLs par langue.

---

## 9. Responsive / mobile

> **QA live :** 0 débordement horizontal à 390 px sur toutes les pages publiques ✅. Les défauts ci-dessous sont ciblés (dont 2 confirmés en live sur l'espace privé).

### 9.1 — [CRITIQUE] Aucune navigation mobile sous 1100 px
- `src/components/Navbar.tsx:137` + `src/index.css:3578` (`.site-nav { display:none }` dès 1100 px) — **aucun burger** ni menu de remplacement. Sur tablette et téléphone il ne reste que Connexion + thème + langue : le site est **inutilisable en navigation** sur mobile.
- **Correctif :** ajouter un bouton hamburger (≤1100 px) ouvrant un drawer reprenant tous les liens (dropdowns à plat en accordéon), en réutilisant les handlers existants.

### 9.2 — [MAJEUR] Grille CEEAC (texte + logo) ne se replie jamais
- `src/index.css:1007` — `.community-intro-grid` figée `1fr 1fr` sans media query + `.community-ceeac-logo { min-width:280px }` → reste 2 colonnes serrées à 390 px (RegionalOverview, home). Ajouter `grid-template-columns:1fr` en mobile + `min-width:0`.

### 9.3 — [MAJEUR] Règle `.voice-marquee-photo` dupliquée → portrait déformé en bande 90 px
- `src/index.css:3699` — dans `@media (max-width:780px)`, la 2e déclaration `width:90px` écrase `width:100%;height:240px` → portrait des commissaires en sliver 90×240. Supprimer le doublon.

### 9.4 — [MINEUR] Débordement de l'espace privé au desktop *(confirmé en QA live)*
- Questionnaire : **+43 px** de débordement horizontal à 1440 px ; Statistiques : +5 px (tableaux d'indicateurs larges). *(Mobile 390 px : OK.)*
- **Correctif :** envelopper les tableaux larges dans un conteneur `overflow-x:auto`.

### 9.5 — [MINEUR] Sphère de drapeaux surdimensionnée sur mobile
- `src/index.css:4319` — rayon 3D `RADIUS=240` figé (FlagCloud.tsx:7) → sphère ~640 px clippée à 390 px. Appliquer `transform:scale()` responsive.

### 9.6 — [MINEUR] Hauteur de header figée (68 px) alors qu'il passe sur 2 lignes
- `src/index.css:401` — sous 780 px, `flex-wrap:wrap` mais hauteur bloquée → débordement/chevauchement. Passer `height:auto; min-height:68px`.

### 9.7 — [MINEUR] Puces du carrousel hero : cible tactile de 4 px
- `src/index.css:905` — `.hero-slide-dot` height 4 px. Élargir la zone cliquable (padding + `background-clip:content-box`) sans changer l'aspect.

### 9.8 — [MINEUR] Texte justifié global → rivières sur colonnes étroites
- `src/index.css:64` (`p { text-align:justify }`) — dégrade la lisibilité mobile (FR, mots longs). Passer `left` en ≤640 px et/ou `hyphens:auto`.

### 9.9 — [POLISH] Pastilles de liens footer à 42 px (sous 44 px)
- `src/index.css:1444` — `min-height:42px` → `44px` (seuls liens tactiles quand la nav est masquée).

---

## 10. Dark mode / thème

> Le dark mode public est un **système CSS custom soigné** (`[data-theme='light']`, ~138 règles) — pas de classes Tailwind `dark:`. Le sombre est le défaut. Les défauts portent surtout sur l'espace privé et les stats.

### 10.1 — [MAJEUR] Tout l'espace privé figé en clair, ignore le thème
- `src/index.css:2407` — ~231 règles `.private-*` codées en dur en clair, aucune variante `[data-theme]`. Refactorer sur les tokens de thème existants (`--surface-strong`, `--headline`, `--body-muted`…).

### 10.2 — [MAJEUR] Curseur custom quasi invisible en sombre (thème par défaut)
- `src/components/SmoothCursor.tsx:77` — flèche `fill="#050816"` (quasi-noir) sur fond navy → curseur perdu sur home + pages présentation. Rendre le fill dépendant du thème (variable CSS) ou ajouter un contour clair. *(= §11.2)*

### 10.3 — [MAJEUR] Tableaux de bord d'implémentation stylés uniquement pour le sombre
- `src/index.css:4146` — `.impl-gabon-*` sans override `[data-theme='light']` → panneaux navy + texte illisible en clair. Ajouter les overrides light (ou variables de thème).

### 10.4 — [MINEUR] Toggle de thème inerte dans l'espace privé
- `src/private/PrivateLayout.tsx:113` — `<AnimatedThemeToggle />` bascule `data-theme` mais l'UI privée mono-thème ne change pas → interrupteur sans effet (crédibilité). Le retirer de la topbar privée (ou traiter §10.1).

### 10.5 — [MINEUR/MAJEUR] Flash de thème au chargement *(voir §5.2)*
- `index.html:4` — aucun script inline appliquant `data-theme` avant le 1er paint. Ajouter un script synchrone lisant `localStorage['new-prasmesti-theme']` dans `<head>` + init paresseux du state.

### 10.6 — [POLISH] `darkMode` non configuré dans Tailwind
- `tailwind.config.js:1` — aucune classe `dark:` utilisée aujourd'hui (impact nul), mais toute future `dark:` réagirait à l'OS, pas au toggle. Optionnel : `darkMode: ['selector','[data-theme="dark"]']`.

### 10.7 — [POLISH] Logos/portraits PNG sur fonds sombre et clair sans traitement
- `Navbar.tsx:130` (logo), `RegionalOverview.tsx:34` (emblème), `PresidentialMessage.tsx:21` — à inspecter pour halo/liseré de détourage ; fournir une variante par thème si besoin. *(Inspection visuelle : `president-champion.png` OK sur sombre ; vérifier logo mono sur clair.)*

---

## 11. Animations & transitions

### 11.1 — [MAJEUR] Aucun support de `prefers-reduced-motion` sur tout le site
- `src/index.css:40` — aucune media query reduced-motion (CSS ni JS) : entrées framer-motion, `scroll-behavior:smooth`, marquee, sphère 3D infinie, curseur custom s'imposent tous. Ajouter un bloc `@media (prefers-reduced-motion: reduce)` + lecture `matchMedia` côté JS.

### 11.2 — [MAJEUR] Curseur custom quasi invisible en sombre *(= §10.2)*
- `src/components/SmoothCursor.tsx:77`.

### 11.3 — [MINEUR] L'animation `exit` du toggle de thème ne se joue jamais
- `src/components/AnimatedThemeToggle.tsx:27` — `exit` défini mais pas de `<AnimatePresence>` → cross-fade à moitié fonctionnel. Envelopper dans `<AnimatePresence mode="wait">` ou retirer `exit`.

### 11.4 — [MINEUR] Sphère de drapeaux en rotation 3D infinie, jamais suspendue hors écran
- `src/index.css:3795` — pause seulement au `:hover` (inexistant sur tactile) ; consomme GPU même hors viewport. Ajouter `prefers-reduced-motion` + pause hors écran.

### 11.5 — [MINEUR] Boucle rAF du marquee active en permanence *(= §12.10)*
- `src/components/HomeFlagStrip.tsx:37` — tourne même hors écran (dernière section). IntersectionObserver + reduced-motion.

### 11.6 — [POLISH] Changements de page abrupts (pas de transition de route)
- `src/App.tsx:26` — pas d'`AnimatePresence` sur les `<Routes>`. *(Le scroll-to-top est déjà géré par page.)* Optionnel : transition de route via `useLocation` + `AnimatePresence`.

### 11.7 — [POLISH] Contenu en `opacity:0` initial révélé par `whileInView`
- `src/components/presentation/PresentationDetail.tsx:27` — le corps textuel entier dépend de l'IntersectionObserver (invisible si échec/latence JS). Préférer n'animer que le translate (garder `opacity:1`).

### 11.8 — [POLISH] Panneaux stats animés au montage (`animate`) au lieu de `whileInView`
- `src/components/presentation/ImplementationCountryStats.tsx:205` — sous la ligne de flottaison → le stagger se joue hors écran et est déjà figé à l'arrivée. Passer en `whileInView`.

### 11.9 — [POLISH] Effet de lueur curseur recalcule toutes les sections à chaque `pointermove` *(= §12.8)*
- `src/pages/HomePage.tsx:13`.

### 11.10 — [POLISH] `will-change` permanent sur des classes marquee mortes
- `src/index.css:1181` — `.voices-marquee-*` orphelines après migration vers le carrousel. Supprimer le CSS mort.

---

## 12. Performance

### 12.1 — [MAJEUR] Portraits commissaires monstrueux (~5,5 Mo) sur la home
- `src/data/siteContent.ts:54` — `commissioner-olouimo.jpg` 2,8 Mo, `commissioner-nelly.png` 1,5 Mo, `commissioner-maxime.jpg` 1,3 Mo (vs `maurice.webp` 64 Ko). Recompresser en WebP ~500 px, cible 40-120 Ko. Priorité : `nelly.png` (index 0 = 1re image chargée + PNG inadapté). *(À coordonner avec le remplacement des portraits géré par le client.)*

### 12.2 — [MAJEUR] Images hero (LCP) ~850 Ko sans preload/fetchpriority
- `src/components/Hero.tsx:78` — `hero-1/2.jpg` chargées après le bundle JS, sans `<link rel=preload>`/`fetchpriority="high"`. Convertir en WebP (~120-200 Ko) + précharger la 1re slide (même format).

### 12.3 — [MAJEUR] Aucun code-splitting : bundle initial 1,18 Mo
- `src/App.tsx:2` — les 21 pages importées en statique (dont tout l'espace privé). Passer en `React.lazy` + `<Suspense>` (isoler `private/*` et les pages implémentation qui embarquent dotted-map). Gain : bundle initial ÷3-5.

### 12.4 — [MAJEUR] PNG lourds : `president-champion.png` 984 Ko, `ceeac-emblem.png` 700 Ko
- `PresidentialMessage.tsx:21`, `RegionalOverview.tsx:34` — WebP alpha (champion) / pngquant ou SVG (emblème). Cible ~1,5 Mo → ~0,2 Mo.

### 12.5 — [MAJEUR] `dotted-map` calcule 50 pays côté client au runtime
- `src/components/FlagCloud.tsx:49` — `getPoints()` géodésique sur le thread principal à chaque montage + poids de la lib. Précalculer au build (JSON statique) ou charger en dynamic import.

### 12.6 — [MINEUR] Aucune `<img>` avec `width`/`height` → CLS
- `src/components/RegionalOverview.tsx:33` (+ global) — layout shift au chargement. Ajouter `width`/`height` intrinsèques (au moins sur `.community-ceeac-logo`).

### 12.7 — [MINEUR] Images hors écran sans `loading="lazy"`
- `src/components/NewsSection.tsx:32` (+ RegionalOverview, DirectorSection, CommissionerVoices, HomeFlagStrip) — ajouter `loading="lazy"`/`decoding="async"` (pas sur le hero actif).

### 12.8 — [MINEUR] `pointermove` global provoque un reflow forcé à chaque pixel
- `src/pages/HomePage.tsx:12` — `querySelectorAll` + `getBoundingClientRect()` non throttlé à chaque mouvement (jank). Lire la géométrie avant d'écrire, throttler en rAF, cacher la NodeList.

### 12.9 — [MINEUR] 11 drapeaux chargés depuis `flagcdn.com` (dépendance externe redondante)
- `src/components/FlagCloud.tsx:134` — les drapeaux locaux existent déjà dans `public/assets/prasmesti/home/flags/`. Pointer vers les fichiers locaux (supprime 11 requêtes externes).

### 12.10 — [MINEUR] Marquee `useAnimationFrame` tourne en continu, même hors écran
- `src/components/HomeFlagStrip.tsx:37` — IntersectionObserver + reduced-motion. *(= §11.5.)*

### 12.11 — [MINEUR] Google Fonts bloquant (9 graisses, domaine tiers)
- `index.html:9` — réduire aux graisses utilisées (Inter 400/600/700 + Playfair 500/700), idéalement self-host + `font-display:swap` + preload.

### 12.12 — [POLISH] Cache-busting `?v=2` figé dans le code
- `src/components/DirectorSection.tsx:38` (+ president-champion) — importer les images comme modules Vite (hash auto) ou retirer les `?v=N`.

### 12.13 — [POLISH] Image suivante du carrousel non préchargée
- `src/components/CommissionerVoices.tsx:43` — flash vide à chaque « Suivant ». Précharger l'image n+1 (une fois recompressées).

---

## 13. Code mort & dépendances *(vestiges du template « Ethos Overflow »)*

### 13.1 — [MAJEUR] `InfiniteMenu.tsx` (1110 lignes WebGL) + CSS jamais importés
- `src/components/InfiniteMenu.tsx:1042` + `InfiniteMenu.css` — code mort, seul consommateur de `gl-matrix`. Supprimer les deux + retirer `gl-matrix`.

### 13.2 — [MINEUR] 3 composants de template d'agence jamais montés
- `src/components/WhyEthos.tsx`, `BusinessServices.tsx` (« For Businesses: Drive Growth »), `CreatorServices.tsx` (« For Creators: Monetize Smarter ») — contenu marketing hors-sujet. Supprimer.

### 13.3 — [MINEUR] `Contact.tsx` (257 l.) + `SiteJourneyForm.tsx` jamais importés
- `src/components/Contact.tsx:1` — coordonnées `ethosoverflow.com` / `+1 (555) 123-4567` / « 123 Agency Drive, Montréal », formulaire factice (`Math.random`). `SiteJourneyForm.tsx` poste vers un `__FORM_API_URL__` inexistant. Supprimer (recréer un vrai bloc contact PRASMESTI si besoin, avec endpoint validé).

### 13.4 — [MINEUR] Dépendances inutilisées : `react-icon-cloud`, `clsx`, `gl-matrix`
- `package.json` — `react-icon-cloud` (0 usage), `clsx` (0 usage), `gl-matrix` (seulement le mort `InfiniteMenu`). Retirer + régénérer le lockfile. *(Tree-shakées du bundle → impact = hygiène/install.)*

### 13.5 — [MINEUR/POLISH] Assets morts
- `src/assets/hero-banner-visual.svg`, `public/assets/prasmesti/home/president/president.jpg`, `public/assets/prasmesti/shared/prasmesti-logo.png` (doublon exact de `logo.png`). Supprimer. *(= §1.5.)*

---

## 14. Récapitulatif

### Par sévérité *(après retrait des points exclus par le client)*
| Sévérité | Nombre (indicatif) |
|---|---|
| 🔴 **Critique** | **1** — nav mobile absente (§9.1) *(+ mots de passe/backend traités en Majeur)* |
| 🟠 **Majeur** | **~31** |
| 🟡 **Mineur** | **~67** |
| ⚪ **Polish** | **~33** |
| **Total** | **~130 constats** *(136 vérifiés adversarialement − 4 familles exclues + constats visuels/live additionnels)* |

### Par catégorie
| Catégorie | Constats | Points chauds |
|---|---|---|
| 1. Réputation & images | ~6 | Stock générique hors-contexte, recyclage, héros bas de gamme, poids |
| 2. Sécurité & auth | 6 | Mot de passe committé, backend absent, RLS récursif |
| 3. Contenu & données | 7 | Accents FR, noms de pays incohérents, actualités |
| 4. Navigation & liens | 7 | « Propriété intellectuelle »/« Innovations » noop, footer inerte |
| 5. Bugs & correction | 8 | Questionnaire→public (Gabon seul), thème non restauré |
| 6. i18n / multilingue | 8 | Noms de pays FR figés, espace privé non traduit |
| 7. Accessibilité | 16 | Dropdowns clavier, focus invisible, reduced-motion |
| 8. SEO & métadonnées | 10 | Titre unique, pas de meta/OG, HashRouter |
| 9. Responsive / mobile | 9 | **Nav mobile absente (Critique)**, grille CEEAC, débordement privé |
| 10. Dark mode / thème | 7 | Espace privé mono-thème, curseur invisible, flash |
| 11. Animations | 10 | reduced-motion absent, curseur, animations hors écran |
| 12. Performance | 13 | Images (~9 Mo), pas de code-splitting, dotted-map runtime |
| 13. Code mort | 5 | InfiniteMenu, composants + coordonnées Ethos Overflow |

### Exclus à la demande du client (NE PAS traiter)
- **Filigranes IA** sur les portraits (nelly, olouimo, maxime, director) — gérés par le client.
- **Statistiques nationales factices** — volontaires (maquette).
- **Photos de femmes/filles** (héros + 7 images `/presentation`) — policy « no-women » levée pour ce site.
- **Liens du menu « Textes normatifs »** — deviendront des fichiers PDF.

### Rejetés à la vérification adversariale — pour mémoire, NE PAS traiter
- Mois FR en majuscule dans les dates (usage correct).
- `obj-*`/`att-*`/`pdet-*` « sans lien avec le propos » (inspection : propres et pertinents).
- « `document.documentElement.lang` non mis à jour » (déjà géré, `languageContext.tsx:804`).
- « Pages présentation sans `<h1>` » (le `PresSubPageHeader` émet bien un `<h1>`).
- « Grille des 11 pays à 2 colonnes serrées à 390 px » (libellés courts issus d'`eccasFlags`, OK).

---

*Fin de l'audit. Un point de validation client subsiste : statut des citations de commissaires raccourcies par rapport à `fr.php` (§3.5) — confirmer si le raccourcissement éditorial est volontaire.*
