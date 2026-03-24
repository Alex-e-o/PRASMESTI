<style>
    .th-btn.style3 {
        background: #f44336;
        color: var(--white-color);
        box-shadow: inset 0 0 0 0 var(--theme-color);
    }
    .brand-box img {
        -webkit-filter: none;
    }
    .header-logo {
        padding-top: 0;
        padding-bottom: 0;
    }

    /* --- CORRECTIF DU GROS ESPACE VIDE --- */
    /* Force le conteneur du slider à ne pas s'étirer */
    #brandSlider1 .swiper-wrapper {
        height: auto !important;
        align-items: center !important; /* Centre verticalement */
    }
    #brandSlider1 .swiper-slide {
        height: auto !important; /* Empêche la slide de faire 1000px de haut */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* Réduit la marge interne de la section */
    .brand-area-1 {
        padding-top: 40px !important;
        padding-bottom: 20px !important; /* Un petit espace pour respirer, mais pas 100px */
    }

    /* --- AGRANDIR LE TEXTE ORANGE DU CAROUSEL --- */
    #hero .sub-title {
        font-size: 50px !important; /* Modifiez 24px selon la taille que vous préférez */
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
                                    <span class="sub-title justify-content-center" data-ani="slideinup" data-ani-delay="0.2s">Informer pour innover et transformer</span>
                                    <h1 class="hero-title text-white">
                                        <span class="title1" data-ani="slideinup" data-ani-delay="0.4s">
                                            Portail Régional d’Aide au Suivi en Matière d’Éducation, Sciences, Technologie et Innovation
                                        </span>
                                    </h1>
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
                                    <span class="sub-title justify-content-center" data-ani="slideinup" data-ani-delay="0.2s">Piloter pour améliorer</span>
                                    <h1 class="hero-title text-white">
                                        <span class="title1" data-ani="slideinup" data-ani-delay="0.4s">
                                            PRASMESTI est la plateforme numérique opérationnelle de l’OERESTI
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="overflow-hidden space" id="service-sec" data-bg-src="assets/img/bg/gray-bg1.png" data-overlay="gray" data-opacity="6">
    <div class="shape-mockup service-bg-shape1-2 d-xxl-inline-block d-none" data-top="35%" data-left="0">
        <div class="color-masking">
            <div class="masking-src" data-mask-src="assets/img/shape/hand-shape2.png"></div>
            <img src="assets/img/shape/hand-shape2.png" alt="img">
        </div>
    </div>
    <div class="service-bg-shape1-3 d-xxl-inline-block d-none"></div>
    <div class="service-bg-shape1-4 d-xxl-inline-block d-none"></div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <div class="title-area text-center">
                    <span class="sub-title">Pourquoi le PRASMESTI ?</span>
                    <h2 class="sec-title" style="text-transform: none;">Améliorer l’image de marque de l’Éducation</h2>
                </div>
            </div>
        </div>
        <div class="row gy-30 gx-30 justify-content-center">
            <div class="col-xl-4 col-md-6">
                <div class="service-card">
                    <div class="box-content">
                        <h3 class="box-title"><a href="#">Centralisation des données</a></h3>
                        <p class="box-text">Rassembler toutes les informations pertinentes sur l'éducation, la formation, les sciences, la technologie et
                            l'innovation en un seul endroit, accessible à tous les acteurs de la région.</p>
                        <a href="pages/comingsoon.php" class="th-btn">Voir plus</i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="service-card">
                    <div class="box-content">
                        <h3 class="box-title"><a href="#">Collaboration régionale</a></h3>
                        <p class="box-text">Encourager les échanges entre institutions, chercheurs, enseignants et décideurs pour créer des synergies dans les
                            projets éducatifs, scientifiques et technologiques grâce à la mise en valeur de la pluralité culturelle.</p>
                        <a href="pages/comingsoon.php" class="th-btn">Voir plus</i></a>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-6">
                <div class="service-card">
                    <div class="box-content">
                        <h3 class="box-title"><a href="#">Valorisation des talents et innovations</a></h3>
                        <p class="box-text">Mettre en lumière les réussites, les compétences des individus et des institutions pour stimuler l’innovation et
                            renforcer le sentiment d’appartenance régionale.</p>
                        <a href="pages/comingsoon.php" class="th-btn">Voir plus</i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<div class="overflow-hidden space" id="about-sec">
    <div class="shape-mockup about-bg-shape1-1 jump-reverse" data-top="10%" data-right="5%">
        <img src="assets/img/shape/heart-shape1.png" alt="shape">
    </div>
    <div class="container">
        <div class="row gy-4 align-items-center">
            <div class="col-xl-7">
                <div class="img-box1">
                    <div class="img1">
                        <img src="assets/img/normal/about_1_1.png" alt="About">
                    </div>
                </div>
            </div>
            <div class="col-xl-5">
                <div class="about-wrap1">
                    <div class="title-area mb-30">
                        <span class="sub-title before-none">PRASMESTI</span>
                        <h4 class="sec-title" style="text-transform: none;">Qu'est-ce que le PRASMESTI ?</h4>
                        <p style="text-align: justify;">Construit autour d’objectifs normatifs communs, le PRASMESTI est le portail mis en place pour parvenir à une intégration régionale réussie. <br />
                            Il repose d’abord naturellement sur le développement d’échanges intracommunautaires et veille à ce que la diversité de tous et de chacun en matière d’éducation, formation, sciences, technologie et innovation s’exprime en florilège dans un dialogue formalisé et dans un langage clair.<br />
                            Il ne s’agit jamais d’uniformiser les structures, les pratiques et les projets. Il s’agit d’harmoniser la diversité des pratiques, d’exploiter au niveau régional les résultats des programmes nationaux pour établir des conditions de dialogues claires et cohérents ! En termes de pratiques, le PRASMESTI a pour mission de :
                        </p>
                    </div>
                    <div class="checklist style2">
                        <ul>
                            <li>Information et collaboration régionale;</li>
                            <li>Diffusion des normes et standards de qualité ;</li>
                            <li>Valorisation des innovations stratégiques ;</li>
                            <li>Renforcement de l’identité régionale ;</li>
                            <li>Développement des talents et systèmes éducatifs ;</li>
                            <li>Échange des expériences et défis entre les États membres.</li>
                        </ul>
                    </div>
                    <div class="btn-wrap mt-40">
                        <a href="index.php?p=presentation/presentation" class="th-btn">En savoir plus</i></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="cta-area-1">
    <div class="container z-index-common " data-pos-for="#donation-sec" data-sec-pos="bottom-half">
        <div class="row gy-4">
            <div class="col-lg-6">
                <div class="cta-card" data-bg-src="assets/img/bg/cta-bg1-1.jpg">
                    <div class="shape-mockup cta-card-bg-shape" data-bottom="0" data-right="0" data-mask-src="assets/img/shape/cta_shape1_1.png">
                        <img src="assets/img/shape/cta_shape1_1.png" alt="img">
                    </div>
                    <h3 class="box-title">Projets & Initiatives</h3>
                    <p class="box-text">Le PRASMESTI développe activement l’amélioration de l’éducation, des sciences et de l’innovation dans notre
                        région.</p>
                    <a href="pages/comingsoon.php" class="th-btn style5">Voir plus</i></a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="cta-card style2" data-bg-src="assets/img/bg/cta-bg1-2.jpg">
                    <div class="shape-mockup cta-card-bg-shape" data-bottom="0" data-left="0" data-mask-src="assets/img/shape/cta_shape1_1.png">
                        <img src="assets/img/shape/cta_shape1_1.png" alt="img">
                    </div>
                    <h3 class="box-title">État de mise en œuvre</h3>
                    <p class="box-text">Le PRASMESTI s’appuie sur une stratégie progressive pour garantir une adoption effective de ses objectifs par les États
                        membres de la CEEAC.</p>
                    <a href="pages/comingsoon.php" class="th-btn style5">Voir plus</i></a>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="space bg-gray" data-bg-src="assets/img/bg/donation-bg1-1.png" id="donation-sec">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="title-area text-center">
                    <span class="sub-title">Le PRASMESTI : les enjeux ?</span>
                    <h4 class="sec-title" style="text-transform: none;">L’enjeu pour la Communauté est d’adresser une communication ciblée en proposant un contenu pertinent à
                        l’utilisateur.</h4>
                </div>
            </div>
        </div>
        <div class="slider-area">
            <div class="swiper th-slider has-shadow" id="donationSlider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}, "autoHeight": "true"}'>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="donation-card" data-theme-color="">
                            <div class="donation-card-shape" data-mask-src="assets/img/donation/donation-card-bg-shape1-1.png"></div>
                            <div class="box-thumb">
                                <img src="assets/img/donation/donation1-1.jpg" alt="carte">
                            </div>
                            <div class="box-content">
                                <h3 class="box-title"><a href="#">Pour un État membre, il s’agit de présenter un éditeur de logiciel...</a></h3>
                                <div class="donation-card_progress-wrap">
                                </div>
                                <a href="pages/comingsoon.php" class="th-btn style6">Voir plus</a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="donation-card" data-theme-color="var(--theme-color2)">
                            <div class="donation-card-shape" data-mask-src="assets/img/donation/donation-card-bg-shape1-1.png"></div>
                            <div class="box-thumb">
                                <img src="assets/img/donation/donation1-2.jpg" alt="image">
                            </div>
                            <div class="box-content">
                                <h3 class="box-title"><a href="#">Pour un éditeur de logiciel, il s’agirait de mettre en avant ses offres d’audit.</a></h3>
                                <div class="donation-card_progress-wrap">
                                </div>
                                <a href="pages/comingsoon.php" class="th-btn style6">Voir plus</a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="donation-card" data-theme-color="#FF5528">
                            <div class="donation-card-shape" data-mask-src="assets/img/donation/donation-card-bg-shape1-1.png"></div>
                            <div class="box-thumb">
                                <img src="assets/img/donation/donation1-3.jpg" alt="image">
                            </div>
                            <div class="box-content">
                                <h3 class="box-title"><a href="#">Pour un bureau d’études, il s’agit de mettre en avant tous leurs panels de prestations</a></h3>
                                <div class="donation-card_progress-wrap">
                                </div>
                                <a href="pages/comingsoon.php" class="th-btn style6">Voir plus</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

<section class="space" id="blog-sec">
    <div class="container">
        <div class="title-area text-center">
            <span class="sub-title">Actualités</span>
            <h2 class="sec-title">Nos dernières actualités</h2>
        </div>
        <div class="slider-area">
            <div class="swiper th-slider has-shadow" id="blogSlider1"
                 data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}, "autoHeight": "true"}'>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="blog-card">
                            <div class="blog-img">
                                <a href="#">
                                    <div class="blog-img-shape1"></div>
                                    <img src="assets/img/blog/blog_1_1.jpg" alt="blog image">
                                </a>
                            </div>
                            <div class="blog-content">
                                <div class="blog-card-shape">
                                </div>
                                <div class="blog-meta">
                                    <a href="#"><i class="fas fa-calendar"></i>16 Novembre 2024</a>
                                    <a href="#"><i class="fas fa-tags"></i>Éducation</a>
                                </div>
                                <h3 class="box-title"><a href="#">Lancement de la Plateforme Numérique du PRASMESTI</a></h3>
                                <a href="pages/comingsoon.php" class="th-btn">Lire plus </a>

                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="blog-card">
                            <div class="blog-img">
                                <a href="#">
                                    <div class="blog-img-shape1"></div>
                                    <img src="assets/img/blog/blog_1_2.jpg" alt="blog image">
                                </a>
                            </div>
                            <div class="blog-content">
                                <div class="blog-card-shape">
                                </div>
                                <div class="blog-meta">
                                    <a href="#"><i class="fas fa-calendar"></i>18 novembre 2024</a>
                                    <a href="#"><i class="fas fa-tags"></i>Éducation</a>
                                </div>
                                <h3 class="box-title"><a href="#">Programme de Valorisation des Talents Lancé</a></h3>
                                <a href="pages/comingsoon.php" class="th-btn">Lire plus </a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="blog-card">
                            <div class="blog-img">
                                <a href="#">
                                    <div class="blog-img-shape1"></div>
                                    <img src="assets/img/blog/blog_1_4.jpg" alt="blog image">
                                </a>
                            </div>
                            <div class="blog-content">
                                <div class="blog-card-shape">
                                </div>
                                <div class="blog-meta">
                                    <a href="#"><i class="fas fa-calendar"></i>18 novembre 2024</a>
                                    <a href="#"><i class="fas fa-tags"></i>Éducation</a>
                                </div>
                                <h3 class="box-title"><a href="#">Forum Régional sur l’Intégration scientifique</a></h3>
                                <a href="pages/comingsoon.php" class="th-btn">Lire plus</a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="blog-card">
                            <div class="blog-img">
                                <a href="#">
                                    <div class="blog-img-shape1"></div>
                                    <img src="assets/img/blog/blog_1_3.jpg" alt="blog image">
                                </a>
                            </div>
                            <div class="blog-content">
                                <div class="blog-card-shape">
                                </div>
                                <div class="blog-meta">
                                    <a href="#"><i class="fas fa-calendar"></i>20 novembre 2024</a>
                                    <a href="#"><i class="fas fa-tags"></i>Economie</a>
                                </div>
                                <h3 class="box-title"><a href="#">Partenariat avec le secteur privé pour soutenir l’innovation</a></h3>
                                <a href="pages/comingsoon.php" class="th-btn">Lire plus</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button data-slider-prev="#blogSlider1" class="slider-arrow slider-prev"><i
                    class="far fa-arrow-left"></i></button>
            <button data-slider-next="#blogSlider1" class="slider-arrow slider-next"><i
                    class="far fa-arrow-right"></i></button>
        </div>
    </div>
</section>

<div class="overflow-hidden space" id="story-sec">
    <div class="shape-mockup about-bg-shape2-1 jump-reverse" data-top="10%" data-right="5%">
        <img src="assets/img/shape/heart-shape1.png" alt="shape">
    </div>
    <div class="container">
        <div class="row gx-60 gy-60 align-items-center">
            <div class="col-xl-6 col-lg-10">
                <div class="img-box2">
                    <div class="img1">
                        <img src="assets/img/normal/about_2_1.jpg" alt="About">
                    </div>
                    <div class="img2 jump">
                        <img src="assets/img/normal/Image_1.jpg" alt="About">
                    </div>
                </div>
            </div>
            <div class="col-xl-6">
                <div class="about-wrap2">
                    <div class="title-area mb-35">
                        <span class="sub-title after-none before-none">Le PRASMESTI : quelles sont les principales fonctions ?</span>
                        <h4 class="sec-title" style="text-transform: none;">Le PRASMESTI se destine à être le trait d’union intra-communautaire en Afrique Centrale.</h4>
                        <p class="mt-30" style="text-align:justify;">Le PRASMESTI est conçu pour répondre aux besoins variés de la Communauté Économique Régionale en matière d’intégration académique, scientifique et technologique. Voici les principales fonctions qu’il propose :</p>
                    </div>
                    <div class="about-feature-grid">
                        <div class="media-body">
                            <div class="checklist style2">
                                <ul>
                                    <li>Communication : Fil de discussion, Actualités, Flux RSS, Gestion de profils...</li>
                                    <li>Coordination : Traçabilité des échanges de fichiers, Planning, Tableaux de bord graphiques et indicateurs de pilotage...</li>
                                    <li>Mise à disposition de contenus et documents sectoriels : textes normatifs, articles, photos, vidéos, plans, schémas, études, nomenclatures, pages de synthèse, agrégation de données...</li>
                                    <li>Gestion des connaissances : forums utilisateurs, foire aux questions, base de connaissances...</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
