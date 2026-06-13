<style>
    /* --- RENDRE LA BANNIÈRE PLEIN ÉCRAN --- */
    #hero,
    #hero .swiper,
    #hero .swiper-wrapper,
    #hero .swiper-slide,
    #hero .hero-inner {
        height: 100vh !important; /* Force la hauteur à 100% de l'écran */
    }

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
        z-index: 10;
        width: 100%;
        pointer-events: none;
    }

    .hero-static-overlay .btn-wrap {
        pointer-events: auto;
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
        font-size: 50px;
    }

    /* --- ENCADREMENT : LA CEEAC EN BREF --- */
    .ceeac-bref-box {
        background-color: #ffffff;
        border: 1px solid #e5e5e5;
        border-top: 4px solid #f44336;
        border-radius: 10px;
        padding: 50px;
        box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.06);
        margin-top: 20px;
    }

    .ceeac-bref-box .sec-title {
        text-transform: none;
    }

    @media (max-width: 768px) {
        .ceeac-bref-box {
            padding: 30px 20px;
        }
    }

    /* --- CORRECTION SUPERPOSITION TÉMOIGNAGES --- */
    .testi-box-img {
        background-color: #ffffff;
        position: relative;
        z-index: 2;
    }

    .checklist.style2.list-two-column ul {
        display: grid;
        grid-template-columns: 1.5fr 1.1fr;
        gap: 20px 22px;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .checklist.style2.list-two-column ul li {
        display: flex;
        align-items: flex-start;
        margin: 0;
    }

    .about-wrap1 .btn-wrap.mt-40 {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    /* --- AJUSTEMENTS MOT DU PRÉSIDENT --- */
    .president-title-area {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .president-title-area .sub-title {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 25px;
    }

    .president-title-area .sub-title::before,
    .president-title-area .sub-title::after {
        position: relative !important;
        left: auto !important;
        right: auto !important;
        transform: none !important;
        margin: 0 auto 15px auto !important;
        width: 100% !important;
        max-width: 450px !important;
        display: block !important;
    }

    /* --- SECTION MOT DU DIRECTEUR (ADAPTÉE) --- */
    .director-sec {
        background-color: #ffffff;
        padding-top: 80px;
        padding-bottom: 220px;
    }

    /* Même hauteur pour les 2 colonnes */
    #director-sec .row {
        align-items: stretch !important;
    }

    .director-card-wrapper,
    .director-text-box {
        background-color: #ffffff;
        border: 4px solid #f44336;
        border-radius: 20px;
        box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.08);
        height: 100%;
    }

    /* BLOC IMAGE */
    .director-card-wrapper {
        padding: 20px;
        position: relative;
        z-index: 1;
        display: flex;
        transform: translateY(95px);   /* overlap conservé */
        margin-right: -40px;           /* overlap conservé */
    }

    .director-card-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 10px;
    }

    /* BLOC TEXTE */
    .director-text-box {
        padding: 50px;
        position: relative;
        z-index: 2;
        margin-left: -210px;           /* overlap conservé */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    /* --- MASQUER LES CHIFFRES, GARDER LA BARRE --- */
    .slider-pagination,
    .slider-pagination2 {
        font-size: 0 !important;
        color: transparent !important;
    }

    .slider-pagination > *,
    .slider-pagination2 > * {
        font-size: 0 !important;
        color: transparent !important;
        text-shadow: none !important;
    }

    .slider-pagination .swiper-pagination-progressbar,
    .slider-pagination2 .swiper-pagination-progressbar,
    .slider-pagination .slider-progressbar,
    .slider-pagination2 .slider-progressbar {
        font-size: initial !important;
        color: initial !important;
    }

    .slider-pagination .swiper-pagination-progressbar-fill,
    .slider-pagination2 .swiper-pagination-progressbar-fill {
        font-size: initial !important;
        color: initial !important;
    }

    /* RESPONSIVE */
    @media (max-width: 991px) {
        #director-sec .row {
            align-items: center !important;
        }

        .director-text-box {
            margin-left: 0;
            margin-top: -50px;
            padding: 40px 30px;
            height: auto;
        }

        .director-card-wrapper {
            transform: translateY(0);
            margin-right: 0;
            height: auto;
        }

        .director-card-wrapper img {
            width: 100%;
            max-width: 100%;
            height: auto;
        }

        .director-sec {
            padding-bottom: 100px;
        }
    }

    .director-card-wrapper img {
        object-position: 20% center;
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
                                    <span class="sub-title justify-content-center" data-ani="slideinup" data-ani-delay="0.2s"><?= __('hero_subtitle1') ?></span>
                                    <h1 class="hero-title text-white">
                                        <span class="title1" data-ani="slideinup" data-ani-delay="0.4s">
                                            <?= __('hero_title1') ?>
                                        </span>
                                    </h1>
                                    <div class="btn-wrap justify-content-center" data-ani="slideinup" data-ani-delay="0.7s">
                                        <a href="presentation" class="th-btn style4"><?= __('presentation') ?> <i class="fas fa-arrow-up-right ms-2"></i></a>
                                        <a href="#footer-section" class="th-btn style3 d-lg-block d-none"><i class="fas fa-phone me-2"></i><?= __('contact_us') ?></a>
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
                                    <span class="sub-title justify-content-center" data-ani="slideinup" data-ani-delay="0.2s"><?= __('hero_subtitle2') ?></span>
                                    <h1 class="hero-title text-white">
                                        <span class="title1" data-ani="slideinup" data-ani-delay="0.4s">
                                            <?= __('hero_title2') ?>
                                        </span>
                                    </h1>
                                    <div class="btn-wrap justify-content-center" data-ani="slideinup" data-ani-delay="0.7s">
                                        <a href="news" class="th-btn style4"><?= __('our_news') ?> <i class="fas fa-arrow-up-right ms-2"></i></a>
                                        <a href="contact" class="th-btn style3 d-lg-block d-none"><?= __('discover_objectives') ?></a>
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
                        <span class="sub-title"><?= __('president_word_title') ?></span>

                        <p class="professional-text" style="text-align: justify; font-size: 1.15em; line-height: 1.8; color: black; margin-bottom: 0;"><?= __('president_word_content') ?></p>

                        <p class="signature-president" style="margin-top: 5px; margin-left: 30px; color: var(--title-color, #1a1a1a); text-align: left; width: 100%;">
                            <strong><?= __('president_name') ?></strong><br>
                            <span style="font-style: italic; font-size: 0.95em;"><?= __('president_title') ?></span>
                        </p>
                    </div>
                    <div class="checklist style2 list-two-column">
                        <ul>
                            <li><?= __('solidarity_edu') ?></li>
                            <li data-theme-color="var(--theme-color2)"><?= __('promo_innovation') ?></li>
                            <li data-theme-color="#FF5528"><?= __('tech_dev_accel') ?></li>
                            <li data-theme-color="#122F2A"><?= __('scientific_research_support') ?></li>
                        </ul>
                    </div>
                    <div class="btn-wrap mt-40">
                        <a href="index.php?p=presentation/presentation" class="th-btn"><?= __('learn_more') ?><i class="fas fa-arrow-up-right ms-2"></i></a>
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
                        <span class="sub-title"><?= __('about_ceeac') ?></span>
                        <h2 class="sec-title"><?= __('ceeac_title') ?></h2>
                    </div>
                    <div class="ceeac-content">
                        <p class="professional-text" style="text-align: justify; font-size: 1.1em; line-height: 1.8;">
                            <?= __('ceeac_content1') ?>
                        </p>
                        <p class="professional-text" style="text-align: justify; font-size: 1.1em; line-height: 1.8; margin-top: 15px;">
                            <?= __('ceeac_content2') ?>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="director-sec" id="director-sec">
    <div class="container">
        <div class="row gy-4">

            <div class="col-lg-6">
                <div class="director-card-wrapper">
                    <img src="assets/img/david_en_pleine_nature.jpg" alt="Photo du Directeur de Programme">
                </div>
            </div>

            <div class="col-lg-6">
                <div class="director-text-box">
                    <div class="title-area mb-30 text-center">
                        <span class="sub-title" style="color: #f44336;"><?= __('director_regard') ?></span>
                        <h2 class="sec-title" style="font-size: 32px; text-transform: none;"><?= __('director_title') ?></h2>
                    </div>

                    <div class="director-content">
                        <p class="professional-text" style="text-align: justify; font-size: 1.1em; line-height: 1.8;">
                            <?= __('director_content') ?>
                        </p>
                    </div>

                    <div class="director-signature mt-40 text-center">
                        <h4 style="margin-bottom: 5px; color: var(--title-color, #1a1a1a);"><?= __('director_name') ?></h4>
                        <span style="font-style: italic; font-size: 0.95em; color: #555;"><?= __('director_role') ?></span>
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
                    <span class="sub-title"><?= __('testimonials') ?></span>
                    <h2 class="sec-title" style="text-transform: none;"><?= __('commissioners_say') ?></h2>
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
                                    <p class="box-text" style="text-align: justify;"><?= __('testi_nelly') ?></p>
                                    <h3 class="box-title">SE Mme Nelly <br><strong>BANAKEN ELEL</strong></h3>
                                    <p class="box-desig"><?= __('role_nelly') ?></p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text" style="text-align: justify;"><?= __('testi_yves') ?></p>
                                    <h3 class="box-title">SEM Général Yves Marcel <br><strong>MAPANGOU MOUSSADJI</strong></h3>
                                    <p class="box-desig"><?= __('role_yves') ?></p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text" style="text-align: justify;"><?= __('testi_olouimo') ?></p>
                                    <h3 class="box-title">SEM Olouimo Diai <br><strong>TAVIRA DA SILVA</strong></h3>
                                    <p class="box-desig"><?= __('role_olouimo') ?></p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text" style="text-align: justify;"><?= __('testi_maurice') ?></p>
                                    <h3 class="box-title">SEM Maurice <br><strong>NIATY-MOUAMBA</strong></h3>
                                    <p class="box-desig"><?= __('role_maurice') ?></p>
                                    <div class="quote-icon" data-mask-src="assets/img/icon/quote2.svg"></div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="testi-card">
                                    <p class="box-text" style="text-align: justify;"><?= __('testi_maxime') ?></p>
                                    <h3 class="box-title">SEM Maxime <br><strong>NZITA NGANGA DI MAVAMBU</strong></h3>
                                    <p class="box-desig"><?= __('role_maxime') ?></p>
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

<section class="space" id="blog-sec">
    <div class="container">
        <div class="title-area text-center">
            <span class="sub-title"><?= __('news') ?></span>
            <h2 class="sec-title"><?= __('latest_news') ?></h2>
        </div>

        <div class="slider-area">
            <div class="swiper th-slider has-shadow" id="blogSlider1"
                 data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}},"autoHeight":"true"}'>

                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <div class="blog-card">
                            <div class="blog-img">
                                <a href="index.php?p=actualites/article1">
                                    <div class="blog-img-shape1"></div>
                                    <img src="assets/img/blog/blog_1_1.jpg" alt="">
                                </a>
                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    <span><i class="fas fa-calendar"></i>16 Novembre 2024</span>
                                    <span><i class="fas fa-tags"></i>Education</span>
                                </div>
                                <h3 class="box-title">
                                    <a href="index.php?p=actualites/article1">
                                        <?= __('news_title1') ?>
                                    </a>
                                </h3>
                                <a href="index.php?p=actualites/article1" class="th-btn"><?= __('read_more') ?></a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="blog-card">
                            <div class="blog-img">
                                <a href="index.php?p=actualites/article2">
                                    <div class="blog-img-shape1"></div>
                                    <img src="assets/img/blog/blog_1_2.jpg" alt="">
                                </a>
                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    <span><i class="fas fa-calendar"></i>18 Novembre 2024</span>
                                    <span><i class="fas fa-tags"></i>Education</span>
                                </div>
                                <h3 class="box-title">
                                    <a href="index.php?p=actualites/article2">
                                        <?= __('news_title2') ?>
                                    </a>
                                </h3>
                                <a href="index.php?p=actualites/article2" class="th-btn"><?= __('read_more') ?></a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="blog-card">
                            <div class="blog-img">
                                <a href="index.php?p=actualites/article3">
                                    <div class="blog-img-shape1"></div>
                                    <img src="assets/img/blog/blog_1_4.jpg" alt="">
                                </a>
                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    <span><i class="fas fa-calendar"></i>18 Novembre 2024</span>
                                    <span><i class="fas fa-tags"></i>Education</span>
                                </div>
                                <h3 class="box-title">
                                    <a href="index.php?p=actualites/article3">
                                        <?= __('news_title3') ?>
                                    </a>
                                </h3>
                                <a href="index.php?p=actualites/article3" class="th-btn"><?= __('read_more') ?></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <button data-slider-prev="#blogSlider1" class="slider-arrow slider-prev">
                <i class="far fa-arrow-left"></i>
            </button>
            <button data-slider-next="#blogSlider1" class="slider-arrow slider-next">
                <i class="far fa-arrow-right"></i>
            </button>

        </div>
    </div>
</section>