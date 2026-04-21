<style>
    /* --- STYLES DES DRAPEAUX DANS LE FOOTER --- */
    .brand-area-footer {
        padding-top: 40px !important;
        padding-bottom: 20px !important;
        background-color: #ffffff !important; /* Force le fond blanc */
        border-top: 1px solid #f0f0f0; /* Optionnel : petite ligne pour séparer du contenu du haut */
    }
    .brand-area-footer .brand-wrap-title {
        color: #1a1a1a; /* S'assure que le titre reste foncé sur le fond blanc */
    }
    #brandSlider1 .swiper-wrapper {
        height: auto !important;
        align-items: center !important;
    }
    #brandSlider1 .swiper-slide {
        height: auto !important;
        display: flex;
        justify-content: center;
        align-items: center;
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
        -webkit-filter: none;
    }
    .country-name {
        color: #1a1a1a;
        font-weight: 600;
        font-size: 14px;
        text-transform: uppercase;
    }
</style>

<footer id="footer-section" class="footer-wrapper footer-default">

    <div class="overflow-hidden brand-area-footer">
        <div class="container">
            <div class="brand-wrap1 p-0 m-0 text-center">
                <h3 class="brand-wrap-title mb-4"><?= __('eccas_members') ?></h3>
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
    <div class="footer-top">
        <div class="container">
            <div class="subscribe-box">
                <div class="row gy-40 align-items-center justify-content-center">
                    <div class="col-xl-6">
                        <h4 class="subscribe-box_title"><?= __('stay_informed') ?></h4>
                        <p class="subscribe-box_text"><?= __('follow_initiatives') ?></p>
                    </div>
                    <div class="col-xl-6 col-lg-8">
                        <form class="newsletter-form">
                            <div class="form-group">
                                <input class="form-control" type="email" placeholder="<?= __('enter_email') ?>" required="">
                            </div>
                            <button type="submit" class="th-btn style3"><i class="fas fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="widget-area">
        <div class="container">
            <div class="row justify-content-between" style="--bs-gutter-x: 0.7rem">
                <div class="col-md-6 col-xl-auto">
                    <div class="widget footer-widget">
                        <div class="th-widget-about">
                            <div class="about-logo">
                                <a href="index.php?p=accueil"><img src="assets/img/Logo2.png" alt="PRASMESTI"></a>
                            </div>
                            <p class="about-text" style="text-align:center"> <?= __('inform_to_orient') ?> (PRASMESTI)
                                <?= __('eccas_members') ?>.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-auto">
                    <div class="widget widget_nav_menu footer-widget">
                        <h3 class="widget_title"><?= __('quick_links') ?></h3>
                        <div class="menu-all-pages-container">
                            <ul class="menu">
                                <li><a href="index.php?p=accueil"><?= __('accueil') ?></a></li>
                                <li><a href="index.php?p=presentation/presentation"><?= __('presentation') ?></a></li>
                                <li><a href="#"><?= __('normative_texts') ?></a></li>
                                <li><a href="#"><?= __('implementation_status') ?></a></li>
                                <li><a href="#"><?= __('intellectual_property') ?></a></li>
                                <li><a href="#"><?= __('innovations') ?></a></li>
                                <li><a href="index.php?p=gallerie"><?= __('galleries') ?></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-xl-auto">
                    <div class="widget widget_nav_menu footer-widget">
                        <h3 class="widget_title"><?= __('learn_more_footer') ?></h3>
                        <div class="menu-all-pages-container">
                            <ul class="menu">
                                <li><a href="index.php?p=actualites"><?= __('news') ?></a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Projets</a></li>
                                <li><a href="index.php?p=facesti">FACESTI</a></li>
                                <li><a href="#">ARESTI</a></li>
                                <li><a href="#">PRASME</a></li>
                                <li><a href="index.php?p=contact"><?= __('contact_us') ?></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-auto">
                    <div class="widget footer-widget">
                        <div class="th-widget-contact">
                            <h3 class="widget_title"><?= __('contact_us') ?></h3>
                            <div class="info-card">
                                <div class="box-icon">
                                    <i class="fal fa-phone"></i>
                                    <div class="bg-shape1" data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"></div>
                                    <div class="bg-shape2" data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"></div>
                                </div>
                                <div class="box-content">
                                    <p class="box-text">Téléphone:</p>
                                    <h4 class="box-title"><a href="tel:+24177056649">+241 77 05 66 49</a></h4>
                                </div>
                            </div>
                            <div class="info-card">
                                <div class="box-icon">
                                    <i class="fal fa-envelope-open"></i>
                                    <div class="bg-shape1" data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"></div>
                                    <div class="bg-shape2" data-mask-src="assets/img/shape/info_card_icon_bg_shape_1_1.png"></div>
                                </div>
                                <div class="box-content">
                                    <p class="box-text">Email:</p>
                                    <h4 class="box-title"><a href="mailto:prasmesti@ceeac-eccas.org">prasmesti@ceeac-eccas.org</a></h4>
                                </div>
                            </div>
                            <div class="th-social style2">
                                <a href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://www.twitter.com/"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.youtube.com/"><i class="fab fa-youtube"></i></a>
                                <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="copyright-wrap">
        <div class="container">
            <div class="row justify-content-center gy-3 align-items-center">
                <div class="col-lg-12">
                    <p class="copyright-text text-center">
                        <i class="fal fa-copyright"></i> Copyright @ PRASMESTI 2026. <?= __('all_rights_reserved') ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>

<div class="scroll-top">
    <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style="transition: stroke-dashoffset 10ms linear 0s; stroke-dasharray: 307.919, 307.919; stroke-dashoffset: 307.919;"></path>
    </svg>
</div>

<script src="assets/js/vendor/jquery-3.7.1.min.js"></script>
<script src="assets/js/swiper-bundle.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/jquery.magnific-popup.min.js"></script>
<script src="assets/js/jquery.counterup.min.js"></script>
<script src="assets/js/jquery-ui.min.js"></script>
<script src="assets/js/imagesloaded.pkgd.min.js"></script>
<script src="assets/js/isotope.pkgd.min.js"></script>

<script src="assets/js/main.js"></script>
</body>
</html>