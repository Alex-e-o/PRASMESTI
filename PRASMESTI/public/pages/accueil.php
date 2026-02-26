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
                                        <a href="index.php?p=presentation/presentation" class="th-btn style4">Présentation <i class="fas fa-arrow-up-right ms-2"></i></a>
                                        <a href="index.php?p=contact" class="th-btn style3 d-lg-block d-none"><i class="fas fa-phone me-2"></i>Contactez-nous</a>
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
                                        <a href="index.php?p=actualites" class="th-btn style4">Nos actualités <i class="fas fa-arrow-up-right ms-2"></i></a>
                                        <a href="index.php?p=presentation/objectifs" class="th-btn style3 d-lg-block d-none">Découvrir nos objectifs</a>
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