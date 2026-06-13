<style>
    /* --- STYLE DE L'EN-TÊTE DE PAGE --- */
    .conception-header {
        background-color: #002d5b;
        padding: 80px 20px 60px;
        text-align: center;
        color: #ffffff;
        position: relative;
    }

    .conception-header .sub-title {
        color: #f44336;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        display: block;
        margin-bottom: 15px;
        font-size: 14px;
    }

    .conception-header h1 {
        color: #ffffff;
        font-size: 2.7rem; /* légèrement agrandi */
        margin-bottom: 20px;
        font-weight: 700;
    }

    .conception-header .objective-box {
        background: rgba(255, 255, 255, 0.1);
        border-left: 4px solid #f44336;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px 30px;
        border-radius: 5px;
        font-size: 18px; /* agrandi */
        line-height: 1.7;
    }

    /* --- STYLE DES CARTES (ÉTAPES) --- */
    .steps-section {
        background-color: #f9f9f9;
        padding: 80px 0;
    }

    .step-card {
        background-color: #ffffff;
        border-radius: 10px;
        padding: 40px 30px;
        height: 100%;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        border-bottom: 4px solid transparent;
        transition: all 0.3s ease;
        position: relative;
        z-index: 1;
        overflow: hidden;
    }

    .step-card:hover {
        border-bottom-color: #f44336;
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    }

    .step-number {
        font-size: 5rem;
        font-weight: 900;
        color: rgba(244, 67, 54, 0.05);
        position: absolute;
        top: -10px;
        right: 15px;
        z-index: -1;
        line-height: 1;
        font-family: Arial, sans-serif;
    }

    .step-title {
        color: #002d5b;
        font-size: 22px; /* agrandi */
        font-weight: 700;
        margin-bottom: 20px;
        line-height: 1.5;
        padding-right: 20px;
    }

    .step-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .step-list li {
        position: relative;
        padding-left: 25px;
        margin-bottom: 12px;
        color: #111111; /* harmonisé avec autres pages */
        font-size: 17px; /* agrandi */
        line-height: 1.7;
    }

    .step-list li::before {
        content: '\f058';
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        position: absolute;
        left: 0;
        top: 3px;
        color: #f44336;
        font-size: 16px;
    }

    /* Bouton de retour */
    .btn-wrap-bottom {
        text-align: center;
        margin-top: 50px;
    }
</style>

<section class="conception-header">
    <div class="container">
        <span class="sub-title"><?= __('project_presentation') ?></span>
        <h1><?= __('conception_title_h1') ?></h1>

        <div class="objective-box">
            <strong><?= __('main_objective') ?></strong> <?= __('conception_main_obj') ?>
        </div>
    </div>
</section>

<section class="steps-section">
    <div class="container">

        <div class="row gy-4">

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">01</div>
                    <h3 class="step-title"><?= __('step_1_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_1_li1') ?></li>
                        <li><?= __('step_1_li2') ?></li>
                        <li><?= __('step_1_li3') ?></li>
                        <li><?= __('step_1_li4') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">02</div>
                    <h3 class="step-title"><?= __('step_2_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_2_li1') ?></li>
                        <li><?= __('step_2_li2') ?></li>
                        <li><?= __('step_2_li3') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">03</div>
                    <h3 class="step-title"><?= __('step_3_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_3_li1') ?></li>
                        <li><?= __('step_3_li2') ?></li>
                        <li><?= __('step_3_li3') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">04</div>
                    <h3 class="step-title"><?= __('step_4_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_4_li1') ?></li>
                        <li><?= __('step_4_li2') ?></li>
                        <li><?= __('step_4_li3') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">05</div>
                    <h3 class="step-title"><?= __('step_5_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_5_li1') ?></li>
                        <li><?= __('step_5_li2') ?></li>
                        <li><?= __('step_5_li3') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">06</div>
                    <h3 class="step-title"><?= __('step_6_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_6_li1') ?></li>
                        <li><?= __('step_6_li2') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">07</div>
                    <h3 class="step-title"><?= __('step_7_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_7_li1') ?></li>
                        <li><?= __('step_7_li2') ?></li>
                        <li><?= __('step_7_li3') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">08</div>
                    <h3 class="step-title"><?= __('step_8_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_8_li1') ?></li>
                        <li><?= __('step_8_li2') ?></li>
                        <li><?= __('step_8_li3') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">09</div>
                    <h3 class="step-title"><?= __('step_9_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_9_li1') ?></li>
                        <li><?= __('step_9_li2') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">10</div>
                    <h3 class="step-title"><?= __('step_10_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_10_li1') ?></li>
                        <li><?= __('step_10_li2') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">11</div>
                    <h3 class="step-title"><?= __('step_11_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_11_li1') ?></li>
                        <li><?= __('step_11_li2') ?></li>
                        <li><?= __('step_11_li3') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">12</div>
                    <h3 class="step-title"><?= __('step_12_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_12_li1') ?></li>
                        <li><?= __('step_12_li2') ?></li>
                        <li><?= __('step_12_li3') ?></li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">13</div>
                    <h3 class="step-title"><?= __('step_13_title') ?></h3>
                    <ul class="step-list">
                        <li><?= __('step_13_li1') ?></li>
                        <li><?= __('step_13_li2') ?></li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="btn-wrap-bottom">
            <a href="javascript:history.back()" class="th-btn" style="display: inline-block; background-color: #002d5b; color: #fff; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; transition: 0.3s;">
                <i class="fas fa-arrow-left me-2"></i> <?= __('back_to_previous') ?>
            </a>
        </div>

    </div>
</section>