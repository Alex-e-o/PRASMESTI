<style>
    /* --- RENDRE LA BANNIÈRE PLEIN ÉCRAN --- */
    #hero,
    #hero .swiper,
    #hero .swiper-wrapper,
    #hero .swiper-slide,
    #hero .hero-inner {
        height: 100vh !important; /* Force la hauteur à 100% de l'écran */
    }

    /* Optionnel : si l'image de fond ne se centre pas bien, ajoutez ceci */
    #hero .hero-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
        background-position: center;
    }

    /* --- RENDRE LE TEXTE FIXE SUR LE SLIDER --- */
    #hero {
        position: relative;
    }

    .hero-static-overlay {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10; /* Place le texte au-dessus des images qui défilent */
        width: 100%;
        pointer-events: none; /* Empêche le conteneur de bloquer la souris... */
    }

    .hero-static-overlay .btn-wrap {
        pointer-events: auto; /* ...mais on réactive la souris pour pouvoir cliquer sur les boutons ! */
    }

    .th-btn.style3 {
        background: #f44336;
        color: var(--white-color);
        box-shadow: inset 0 0 0 0 var(--theme-color);
    }

    .header-logo {
        padding-top: 0;
        padding-bottom: 0;
    }

    /* --- AGRANDIR LE TEXTE ORANGE DU CAROUSEL --- */
    #hero .sub-title {
        font-size: 50px; /* Ajustez cette valeur selon vos besoins */
    }

    /* --- ENCADREMENT : LA CEEAC EN BREF --- */
    .ceeac-bref-box {
        background-color: #ffffff;
        border: 1px solid #e5e5e5;
        border-top: 4px solid #f44336; /* Liseré aux couleurs de votre thème */
        border-radius: 10px;
        padding: 50px;
        box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.06); /* Belle ombre douce */
        margin-top: 20px;
    }

    .ceeac-bref-box .sec-title {
        text-transform: none;
    }

    /* Ajustement de l'encadrement pour les téléphones */
    @media (max-width: 768px) {
        .ceeac-bref-box {
            padding: 30px 20px;
        }
    }

    /* --- CORRECTION SUPERPOSITION TÉMOIGNAGES --- */
    .testi-box-img {
        background-color: #ffffff; /* Cache visuellement les images empilées en dessous */
        position: relative;
        z-index: 2;
    }

    .checklist.style2.list-two-column ul {
        display: grid;
        /* On donne plus d'espace à gauche (ex: 1.5) et moins à droite (1.1) */
        grid-template-columns: 1.5fr 1.1fr;
        gap: 20px 22px;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .checklist.style2.list-two-column ul li {
        display: flex;
        align-items: flex-start; /* Aligne l'icône avec le début de la première ligne de texte */
        margin: 0; /* Annule les marges par défaut si nécessaire */
    }
    .about-wrap1 .btn-wrap.mt-40 {
        display: flex;
        justify-content: center; /* Centre le bouton horizontalement */
        width: 100%; /* S'assure qu'il se centre par rapport à toute la largeur de la section */
    }

    /* --- AJUSTEMENTS MOT DU PRÉSIDENT (Ligne orange et centrage) --- */
    .president-title-area {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centre tout le contenu de la zone */
    }

    .president-title-area .sub-title {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;
    }

    /* Force la ligne orange du thème à se centrer et s'allonger */
    .president-title-area .sub-title::before,
    .president-title-area .sub-title::after {
        position: relative !important;
        left: auto !important;
        right: auto !important;
        transform: none !important;
        margin: 0 auto 15px auto !important; /* Marge en bas pour espacer du texte */
        width: 100% !important; /* La ligne s'étire sur la largeur disponible */
        max-width: 450px !important; /* Limite la largeur maximale pour l'esthétique */
        display: block !important;
    }
</style>

<div class="th-hero-wrapper hero-1" id="hero">
    <div class="swiper th-slider hero-slider1" id="heroSlide1" data-slider-options='{"effect":"fade", "autoHeight": "true"}'>
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="hero-inner" data-bg-src="assets/img/banner/Image_1.jpg" data-overlay="black4" data-opacity="5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-12">
                                <div class="hero-style1 text-center">
                                    <span class="sub-title justify-content-center" data-ani="slideinup" data-ani-delay="0.2s">Éducation et Formation : Les piliers de l’intégration régionale.</span>
                                    <h1 class="hero-title text-white">
                                        <span class="title1" data-ani="slideinup" data-ani-delay="0.4s">
                                            Accélérons l’intégration régionale par l'éducation et la formation.
                                        </span>
                                    </h1>
                                    <div class="btn-wrap justify-content-center" data-ani="slideinup" data-ani-delay="0.7s">
                                        <a href="presentation" class="th-btn style4">Présentation <i class="fas fa-arrow-up-right ms-2"></i></a>
                                        <a href="#footer-section" class="th-btn style3 d-lg-block d-none"><i class="fas fa-phone me-2"></i>Contactez-nous</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="hero-inner" data-bg-src="assets/img/banner/Image_2.jpg" data-overlay="black4" data-opacity="5">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-12">
                                <div class="hero-style1 text-center">
                                    <span class="sub-title justify-content-center" data-ani="slideinup" data-ani-delay="0.2s">Sciences et Technologies : Innover pour un futur durable.</span>
                                    <h1 class="hero-title text-white">
                                        <span class="title1" data-ani="slideinup" data-ani-delay="0.4s">
                                            Unissons nos talents pour bâtir l'avenir de l'Afrique centrale.
                                        </span>
                                    </h1>
                                    <div class="btn-wrap justify-content-center" data-ani="slideinup" data-ani-delay="0.7s">
                                        <a href="news" class="th-btn style4">Nos actualités <i class="fas fa-arrow-up-right ms-2"></i></a>
                                        <a href="contact" class="th-btn style3 d-lg-block d-none">Découvrir nos objectifs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="overflow-hidden space" id="about-sec">
    <div class="shape-mockup about-bg-shape1-1 jump-reverse" data-top="10%" data-right="5%">
        <img src="assets/img/shape/heart-shape1.png" alt="shape">
    </div>
    <div class="container">
        <div class="row gy-4 align-items-center">
            <div class="col-xl-7">
                <div class="img-box1">
                    <div class="img1" data-mask-src="assets/img/normal/about_1_1-mask.png">
                        <img src="assets/img/normal/about_1_1.jpg" alt="About">
                    </div>
                    <div class="about-shape1-1 jump">
                        <img src="assets/img/shape/about_shape1_1.png" alt="img">
                    </div>
                </div>
            </div>
            <div class="col-xl-5">
                <div class="about-wrap1">
                    <div class="title-area mb-30 president-title-area">
                        <span class="sub-title">Mot du président champion régional <br>Chef d'état de la RDC</span>

                        <p class="professional-text" style="text-align: justify; font-size: 1.15em; line-height: 1.8; color: black; margin-bottom: 0;">La Communauté Économique des États de l’Afrique Centrale poursuit sa marche, portée par
                            une ambition à la fois simple et immense : élever durablement le bien-être des populations, en
                            tissant entre ses peuples les liens solides d’une solidarité active, d’un développement partagé et
                            d’une espérance vivante.
                            Au cœur de cette dynamique, une conviction profonde s’impose comme une boussole : sans
                            savoir, il n’est point de développement ; sans partage du savoir, il n’est point
                            d’intégration. Là où les frontières se rencontrent et où les peuples se répondent, une évidence
                            s’élève, claire et lumineuse : le savoir constitue le socle de toute intégration véritable.
                            Ainsi se dessine un espace vivant, où les idées dialoguent, où les expériences se fécondent, où les
                            savoirs circulent et se transforment. De cet espace naît un souffle, discret mais puissant, porteur
                            d’avenir et de promesses.
                            En Afrique centrale, ce souffle prend désormais corps. Il a un nom : PRASMESTI !</p>

                        <p class="signature-president" style="margin-top: 5px; margin-left: 30px; color: var(--title-color, #1a1a1a); text-align: left; width: 100%;">
                            <strong>Félix Antoine TSHISEKEDI TSHILOMBO</strong><br>
                            <span style="font-style: italic; font-size: 0.95em;">Président champion régional éducation, santé et culture</span>
                        </p>
                    </div>
                    <div class="checklist style2 list-two-column">
                        <ul>
                            <li>Solidarité pour <br> l'éducation</li>
                            <li data-theme-color="var(--theme-color2)">Promotion de l'innovation</li>
                            <li data-theme-color="#FF5528">Accélération du développement technologique</li>
                            <li data-theme-color="#122F2A">Soutien à la recherche scientifique</li>
                        </ul>
                    </div>
                    <div class="btn-wrap mt-40">
                        <a href="index.php?p=presentation/presentation" class="th-btn">En savoir plus<i class="fas fa-arrow-up-right ms-2"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="space" id="ceeac-bref-sec">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="ceeac-bref-box">
                    <div class="title-area text-center mb-40">
                        <span class="sub-title">À propos de</span>
                        <h2 class="sec-title">La CEEAC</h2>
                    </div>
                    <div class="ceeac-content">
                        <p class="professional-text" style="text-align: justify; font-size: 1.1em; line-height: 1.8;">
                            Au cœur du continent, l’Afrique centrale s’affirme comme un espace stratégique mondial, riche en ressources naturelles, énergétiques et agricoles, et jouant un rôle clé dans le climat, la biodiversité, la sécurité alimentaire et les échanges internationaux. Toutefois, cette position s’accompagne de fortes pressions, notamment le changement climatique, la dépendance économique, les mutations technologiques et les tensions géopolitiques. Face à ces défis, la région doit capitaliser sur ses atouts et renforcer son intégration.
                        </p>
                        <p class="professional-text" style="text-align: justify; font-size: 1.1em; line-height: 1.8; margin-top: 15px;">
                            Dans cette dynamique, la Communauté Économique des États de l’Afrique Centrale (CEEAC) — composée de l’Angola, du Burundi, du Cameroun, de la République centrafricaine, de la République du Congo, de la République démocratique du Congo, du Gabon, de la Guinée équatoriale, du Rwanda, de Sao Tomé-et-Principe et du Tchad — s’affirme comme le moteur d’une transformation durable, inclusive et résiliente, capable de structurer un développement régional fondé sur la coopération, l’innovation et la valorisation de ses ressources.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="testi-area-1 space" id="testi-sec">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="title-area text-center">
                    <span class="sub-title">Témoignages</span>
                    <h2 class="sec-title" style="text-transform: none;">Ce qu'en disent les Commissaires</h2>
                </div>
            </div>
        </div>
        <div class="row gx-0 justify-content-end">
            <div class="col-lg-5">
                <div class="swiper th-slider testi-thumb-slider1" data-slider-options='{"loop":true, "speed": 3500}'>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="testi-box-img">
                                <img class="testi-img" src="assets/img/nelly(1).jpg" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-box-img">
                                <img class="testi-img" src="assets/img/testimonial/Yves-Marcel-Mapangou-Moussadji-.jpg" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-box-img">
                                <img class="testi-img" src="assets/img/G-2tvbdXAAAJ-_e(1).jpg" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-box-img">
                                <img class="testi-img" src="assets/img/testimonial/KMC_0019-scaled-e1712526081427.webp" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-box-img">
                                <img class="testi-img" src="assets/img/testimonial/aaamax1(1).jpg" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-7">
                <div class="testi-slider1">
                    <div class="swiper th-slider testimonial-slider1" id="testiSlide1" data-slider-options='{"loop":true,"paginationType":"progressbar","effect":"fade", "autoHeight": true, "speed": 1500, "autoplay": {"delay": 8000, "disableOnInteraction": false}, "thumbs":{"swiper":".testi-thumb-slider1"}}'>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text" style="text-align: justify;">“Le PRASMESTI, vitrine des systèmes éducatifs afrocentraux et baromètre des sciences, de la technologie et de l’innovation en Afrique centrale, s’impose comme une réponse concrète à l’urgence éducative de notre région. Il valorise les savoirs, stimule la recherche, encourage l’innovation et place le développement du capital humain au cœur de notre transformation. En occupant une place centrale dans la construction, la transmission et le partage des connaissances, il renforce les capacités de nos communautés et favorise l’émergence d’une intelligence collective régionale. Le PRASMESTI met en lumière les progrès accomplis tout en révélant les défis à relever, invitant chaque acteur à s’engager pour bâtir un avenir inclusif, durable et pleinement intégré.”</p>
                                    <h3 class="box-title">SE Mme Nelly BANAKEN ELEL</h3>
                                    <p class="box-desig">Commissaire du département en charge de la Promotion du genre, Développement humain et social</p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text" style="text-align: justify;">“Le Portail Régional d’Aide au Suivi en matière d’Éducation, Sciences, Technologie et Innovation (PRASMESTI) constitue un outil stratégique au service de la paix et de la sécurité en Afrique centrale. En renforçant la disponibilité et l’analyse des données fiables, il permet d’éclairer les décisions publiques, d’anticiper les vulnérabilités et de promouvoir des politiques éducatives inclusives et résilientes. En effet, une gouvernance fondée sur des données probantes dans les secteurs de l’éducation et de l’innovation contribue directement à la prévention des conflits, à la consolidation de la paix et à la stabilité durable de notre région. Le PRASMESTI s’inscrit ainsi pleinement dans la vision de la CEEAC de bâtir un espace régional pacifique, sécurisé et prospère”</p>
                                    <h3 class="box-title">SEM Général Yves Marcel MAPANGOU MOUSSADJI</h3>
                                    <p class="box-desig">Commissaire du département en charge des Affaires politiques, Paix et Sécurité</p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text" style="text-align: justify;">“En mettant en lumière l’évolution de l’éducation, des sciences, de la technologie et de l’innovation au sein de notre Communauté, le PRASMESTI s’impose comme un levier structurant pour consolider notre marché commun et renforcer notre intégration monétaire et financière. Il permet d’identifier les besoins en formation d’un capital humain qualifié, capable de soutenir la compétitivité de nos économies. Car un marché commun performant repose sur des compétences solides, des systèmes d’innovation dynamiques et une circulation efficace du savoir. Ainsi, le PRASMESTI rend compte des conditions d’une croissance inclusive, stimule les échanges économiques et contribue à la stabilité financière de notre espace régional. Il incarne pleinement le lien essentiel entre le savoir, la création de valeur et une intégration économique durable.”</p>
                                    <h3 class="box-title">SEM Olouimo Diai TAVIRA DA SILVA</h3>
                                    <p class="box-desig">Commissaire du département en charge du Marché Commun, Affaires monétaires et financières</p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text" style="text-align: justify;">“Le PRASMESTI constitue un outil stratégique pour renforcer la planification et le développement des infrastructures en Afrique centrale. En mettant à disposition des données fiables et harmonisées sur l’éducation, la science et l’innovation, il permet d’orienter plus efficacement les investissements et l’aménagement du territoire en fonction des besoins réels des populations. En favorisant une meilleure articulation entre développement des infrastructures et capital humain, le PRASMESTI contribue à une croissance équilibrée, à la connectivité régionale et à une intégration territoriale durable.”</p>
                                    <h3 class="box-title">SEM Maurice NIATY-MOUAMBA</h3>
                                    <p class="box-desig">Commissaire du département en charge de l’Aménagement du territoire et aux Infrastructures</p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text" style="text-align: justify;">“Avec le PRASMESTI, nous faisons plus que gérer nos ressources: nous les transformons en opportunités. Ce programme renforce le savoir-faire de nos communautés, stimule l’innovation et ouvre la voie à un avenir prospère, durable et plein de possibilités pour tous.”</p>
                                    <h3 class="box-title">SEM Maxime NZITA NGANGA DI MAVAMBU</h3>
                                    <p class="box-desig">Commissaire du département en charge de l’Environnement, Ressources naturelles, Agriculture et Développement rural</p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-pagination"></div>
                        <div class="slider-pagination2"></div>
                    </div>
                    <div class="icon-box">
                        <button data-slider-prev="#testiSlide1" class="slider-arrow default style-border slider-prev"><i class="far fa-arrow-left"></i></button>
                        <button data-slider-next="#testiSlide1" class="slider-arrow default style-border slider-next"><i class="far fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>