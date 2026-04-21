<section class="space bg-gray" data-bg-src="assets/img/bg/donation-bg1-1.png" id="donation-sec">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="title-area text-center">
                    <span class="sub-title"><?= __('issues_q') ?></span>
                    <h4 class="sec-title" style="text-transform: none;">
                        <?= __('issues_intro_h4') ?>
                    </h4>
                </div>
            </div>
        </div>

        <div class="slider-area">
            <div class="swiper th-slider has-shadow" id="donationSlider1"
                 data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}},"autoHeight":"true"}'>
                <div class="swiper-wrapper">

                    <div class="swiper-slide">
                        <div class="donation-card">
                            <div class="donation-card-shape" data-mask-src="assets/img/donation/donation-card-bg-shape1-1.png"></div>
                            <div class="box-thumb">
                                <img src="assets/img/donation/donation1-1.jpg" alt="État membre">
                            </div>
                            <div class="box-content">
                                <h3 class="box-title">
                                    <a href="index.php?p=presentation/etat_membre">
                                        <?= __('for_community') ?>
                                    </a>
                                </h3>
                                <a href="index.php?p=presentation/etat_membre" class="th-btn style6"><?= __('see_more') ?></a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="donation-card" data-theme-color="var(--theme-color2)">
                            <div class="donation-card-shape" data-mask-src="assets/img/donation/donation-card-bg-shape1-1.png"></div>
                            <div class="box-thumb">
                                <img src="assets/img/donation/donation1-2.jpg" alt="Éditeur logiciel">
                            </div>
                            <div class="box-content">
                                <h3 class="box-title">
                                    <a href="index.php?p=presentation/editeur_logiciel">
                                        <?= __('for_member_state') ?>
                                    </a>
                                </h3>
                                <a href="index.php?p=presentation/editeur_logiciel" class="th-btn style6"><?= __('see_more') ?></a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-slide">
                        <div class="donation-card" data-theme-color="#FF5528">
                            <div class="donation-card-shape" data-mask-src="assets/img/donation/donation-card-bg-shape1-1.png"></div>
                            <div class="box-thumb">
                                <img src="assets/img/donation/donation1-3.jpg" alt="Bureau d’études">
                            </div>
                            <div class="box-content">
                                <h3 class="box-title">
                                    <a href="index.php?p=presentation/bureau_etudes">
                                        <?= __('for_operator_partner') ?>
                                    </a>
                                </h3>
                                <a href="index.php?p=presentation/bureau_etudes" class="th-btn style6"><?= __('see_more') ?></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>