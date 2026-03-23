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
        font-size: 50px; /* Ajustez cette valeur (ex: 20px, 28px, 1.5rem) selon vos besoins */
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
</style>

<div class="th-hero-wrapper hero-1" id="hero">

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

    <div class="swiper th-slider hero-slider1" id="heroSlide1" data-slider-options='{"effect":"fade", "autoHeight": "true"}'>
        <div class="swiper-wrapper">

            <div class="swiper-slide">
                <div class="hero-inner" data-bg-src="assets/img/banner/Image_1.jpg" data-overlay="black4" data-opacity="5">
                    <div class="container" style="visibility: hidden;">
                        <div class="hero-style1 text-center">
                            <h1 class="hero-title"><span class="title1">Éducation et Formation : Les piliers de l’intégration régionale.</span></h1>
                            <div class="btn-wrap"><a class="th-btn">Bouton</a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="swiper-slide">
                <div class="hero-inner" data-bg-src="assets/img/banner/Image_2.jpg" data-overlay="black4" data-opacity="5">
                    <div class="container" style="visibility: hidden;">
                        <div class="hero-style1 text-center">
                            <h1 class="hero-title"><span class="title1">Éducation et Formation : Les piliers de l’intégration régionale.</span></h1>
                            <div class="btn-wrap"><a class="th-btn">Bouton</a></div>
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
                    <div class="about-wrap1">
                        <div class="title-area mb-30">
                            <span class="sub-title">Mot du président champion régional - Chef d'état de la RDC</span>
                            <h2 class="sec-title" style="text-transform: none;">Mot du président champion régional - Chef d'état de la RDC</h2>

                            <p class="professional-text">La CEEAC (Communauté Économique des États de l'Afrique
                                Centrale) est engagée dans la promotion du bien-être de la population à travers diverses
                                initiatives. Notre mission consiste à promouvoir l'intégration régionale et à soutenir
                                des projets de développement durable. Nous croyons que l'union fait la force et
                                ensemble, nous pouvons créer un avenir meilleur pour les populations de notre région.
                            </p>

                            <p class="signature-president" style="margin-top: 20px; color: var(--title-color, #1a1a1a);">
                                <strong>Félix Antoine TSHISEKEDI TSHILOMBO</strong><br>
                                <span style="font-style: italic; font-size: 0.95em;">Président champion régional éducation, santé et culture</span>
                            </p>

                        </div>
                    </div>
                </div>
                    <div class="checklist style2 list-two-column">
                        <ul>
                            <li>Solidarité pour l'éducation</li>
                            <li data-theme-color="var(--theme-color2)">Aide humanitaire pour l'eau</li>
                            <li data-theme-color="#FF5528">Aide médicale d'urgence</li>
                            <li data-theme-color="#122F2A">Projets de développement durable</li>
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
                        <span class="sub-title">À propos</span>
                        <h2 class="sec-title">La CEEAC en bref</h2>
                    </div>
                    <div class="ceeac-content">
                        <p class="professional-text" style="text-align: justify; font-size: 1.1em; line-height: 1.8;">
                            ---------------------------------------------------------------------------
                        </p>

                        <p class="professional-text" style="text-align: justify; font-size: 1.1em; line-height: 1.8; margin-top: 15px;">
                            ------------------------------------------------------------------------------
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
                    <h2 class="sec-title">Ce que disent les commissaires de notre engagement</h2>
                </div>
            </div>
        </div>
        <div class="row gx-0 justify-content-end">
            <div class="col-lg-5">
                <div class="swiper th-slider testi-thumb-slider1" data-slider-options='{"effect":"fade","loop":false}'>
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="testi-box-img">
                                <img class="testi-img" src="assets/img/testimonial/testi_1_1.jpg" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-box-img">
                                <img class="testi-img" src="assets/img/testimonial/testi_1_2.jpg" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-box-img">
                                <img class="testi-img" src="assets/img/testimonial/testi_2_1.jpg" alt="img">
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testi-box-img">
                                <img class="testi-img" src="assets/img/testimonial/testi_2_2.jpg" alt="img">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="testi-slider1">
                    <div class="swiper th-slider testimonial-slider1" id="testiSlide1"
                         data-slider-options='{"loop":false,"paginationType":"progressbar","effect":"fade", "autoHeight": "true", "thumbs":{"swiper":".testi-thumb-slider1"}}'>
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text">“La CEEAC PRASMESTI s'engage à promouvoir l'éducation et la santé dans la région. Nous appelons toutes les parties prenantes à soutenir ces initiatives pour un avenir meilleur.”</p>
                                    <h3 class="box-title">Commissaire à la Santé</h3>
                                    <p class="box-desig">CEEAC PRASMESTI</p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text">“L'accès à l'eau potable et à l'assainissement est fondamental. Notre engagement est de travailler avec les partenaires pour garantir des solutions durables.”</p>
                                    <h3 class="box-title">Commissaire aux Ressources en Eau</h3>
                                    <p class="box-desig">CEEAC PRASMESTI</p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text">“Face aux défis humanitaires, nous devons unir nos forces pour apporter des solutions concrètes aux populations déplacées et vulnérables.”</p>
                                    <h3 class="box-title">Commissaire aux Affaires Humanitaires</h3>
                                    <p class="box-desig">CEEAC PRASMESTI</p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text">“Le développement économique régional repose sur des échanges renforcés et des investissements stratégiques. Nous devons œuvrer ensemble pour y parvenir.”</p>
                                    <h3 class="box-title">Commissaire au Commerce et Développement</h3>
                                    <p class="box-desig">CEEAC PRASMESTI</p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                        </div>
                        <div class="slider-pagination"></div>
                        <div class="slider-pagination2"></div>
                    </div>
                    <div class="icon-box">
                        <button data-slider-prev="#testiSlide1"
                                class="slider-arrow default style-border slider-prev"><i
                                    class="far fa-arrow-left"></i></button>
                        <button data-slider-next="#testiSlide1"
                                class="slider-arrow default style-border slider-next"><i
                                    class="far fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>