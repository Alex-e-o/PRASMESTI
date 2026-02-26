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
    .brand-box img {
        -webkit-filter: none;
    }
    .header-logo {
        padding-top: 0;
        padding-bottom: 0;
    }

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

    .brand-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        text-decoration: none;
    }
    .brand-box img {
        display: block;
    }
    .country-name {
        color: #1a1a1a;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
    }
</style>

<div class="th-hero-wrapper hero-1" id="hero">

    <div class="hero-static-overlay">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-12">
                    <div class="hero-style1 text-center">
                        <h1 class="hero-title text-white">
                            <span class="title1">
                                Éducation et Formation : Les piliers de l’intégration régionale.
                            </span>
                        </h1>
                        <div class="btn-wrap justify-content-center">
                            <a href="index.php?p=presentation/presentation" class="th-btn style4">Présentation <i class="fas fa-arrow-up-right ms-2"></i></a>
                            <a href="index.php?p=contact" class="th-btn style3 d-lg-block d-none"><i class="fas fa-phone me-2"></i>Contactez-nous</a>
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
                    <div class="title-area mb-30">
                        <span class="sub-title">Mot du champion régional éducation formation</span>
                        <h2 class="sec-title">Message du Champion Régional Éducation Formation</h2>
                        <p class="professional-text">La CEEAC (Communauté Économique des États de l'Afrique
                            Centrale) est engagée dans la promotion du bien-être de la population à travers diverses
                            initiatives. Notre mission consiste à promouvoir l'intégration régionale et à soutenir
                            des projets de développement durable. Nous croyons que l'union fait la force et
                            ensemble, nous pouvons créer un avenir meilleur pour les populations de notre région.
                        </p>
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

<div class="space-bottom overflow-hidden brand-area-1">
    <div class="container">
        <div class="brand-wrap1 p-0 m-0 text-center">
            <h3 class="brand-wrap-title">Nos participants et Pays membres</h3>
            <div class="swiper th-slider" id="brandSlider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"},"1400":{"slidesPerView":"5", "spaceBetween": "90"}}}'>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href="index.php?p=etat_mise_oeuvre/gabon" class="brand-box">
                            <img src="assets/img/brand/Gabon.png" alt="Gabon">
                            <span class="country-name">Gabon</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="index.php?p=etat_mise_oeuvre/angola" class="brand-box">
                            <img src="assets/img/brand/Angola.png" alt="Angola">
                            <span class="country-name">Angola</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="index.php?p=etat_mise_oeuvre/burundi" class="brand-box">
                            <img src="assets/img/brand/Burundi.png" alt="Burundi">
                            <span class="country-name">Burundi</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="index.php?p=etat_mise_oeuvre/cameroun" class="brand-box">
                            <img src="assets/img/brand/Cameroun.png" alt="Cameroun">
                            <span class="country-name">Cameroun</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="index.php?p=etat_mise_oeuvre/centrafrique" class="brand-box">
                            <img src="assets/img/brand/Centrafrique.png" alt="Centrafrique">
                            <span class="country-name">Centrafrique</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="index.php?p=etat_mise_oeuvre/congo" class="brand-box">
                            <img src="assets/img/brand/Congo.png" alt="Congo">
                            <span class="country-name">Congo</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="index.php?p=etat_mise_oeuvre/guinee_equatoriale" class="brand-box">
                            <img src="assets/img/brand/Guinée-Équatoriale.png" alt="Guinée-Équatoriale">
                            <span class="country-name">Guinée-Équatoriale</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="index.php?p=etat_mise_oeuvre/rdc" class="brand-box">
                            <img src="assets/img/brand/RDC.png" alt="RDC">
                            <span class="country-name">RDC</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="index.php?p=etat_mise_oeuvre/rwanda" class="brand-box">
                            <img src="assets/img/brand/Rwanda.png" alt="Rwanda">
                            <span class="country-name">Rwanda</span>
                        </a>
                    </div>
                    <div class="swiper-slide">
                        <a href="index.php?p=etat_mise_oeuvre/sao_tome" class="brand-box">
                            <img src="assets/img/brand/Sao_Tomé.png" alt="Sao Tomé">
                            <span class="country-name">Sao Tomé et Principe</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>