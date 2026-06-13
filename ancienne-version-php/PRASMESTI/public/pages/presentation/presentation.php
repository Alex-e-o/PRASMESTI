<style>
    /* Styles spécifiques à cette page */
    .th-btn.style3 {
        background: #f44336;
        color: var(--white-color);
        box-shadow: inset 0 0 0 0 var(--theme-color);
    }

    /* Style pour la liste avec les icônes "check" */
    .listeElement12L3 {
        list-style: none;
        padding-left: 0;
        margin-top: 15px;
    }
    .listeElement12L3 li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        font-size: 16px;
    }
    .listeElement12L3 li::before {
        content: "\f0eb"; /* Icône ampoule/idée */
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        position: absolute;
        left: 0;
        top: 2px;
        color: rgb(5, 29, 56);
        font-size: 18px;
    }

    /* Style par défaut pour les autres listes si non défini dans le CSS global */
    .listeElement12L1, .listeElement16L1, .listeElement16L2, .listeElement17 {
        list-style-type: disc;
        padding-left: 20px;
        margin-bottom: 20px;
    }
    .listeElement12L1 li, .listeElement16L1 li, .listeElement16L2 li, .listeElement17 li {
        margin-bottom: 10px;
    }

    /* --- FORCER LE TEXTE EN NOIR --- */
    .blog-content,
    .blog-content p,
    .blog-content li,
    .blog-content h2,
    .blog-content h3,
    .blog-content h4,
    .corps7,
    .corps8 {
        color: #000000 !important;
    }

    /* --- AGRANDIR LE TEXTE DE LECTURE --- */
    .blog-content p,
    .blog-content li,
    .corps7,
    .corps8 {
        font-size: 17px !important; /* Vous pouvez tester 16px, 17px ou 18px selon votre préférence */
        line-height: 1.7 !important; /* Ajoute un peu d'espace entre les lignes pour que le grand texte reste aéré et lisible */
    }
</style>

<div class="breadcumb-wrapper " data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="theme">
    <div class="container">
        <div class="breadcumb-content">
                <h1 class="breadcumb-title"><?= __('presentation_title') ?></h1>
            <ul class="breadcumb-menu">
                <li><a href="index.php?p=accueil"><?= __('accueil') ?></a></li>
                <li><?= __('presentation') ?></li>
                <li><?= __('presentation_title') ?></li>
            </ul>
        </div>
    </div>
</div>

<section class="donation-details space-top space-extra2-bottom">
    <div class="container">
        <div class="row gx-40" style="text-align: justify;">
            <div class="col-xxl-12 col-lg-12">
                <div class="blog-content">
                    <h2 class="h3 page-title mt-n2"><?= __('presentation_title') ?></h2>
                    <p class="mb-35"><?= __('presentation_intro') ?>
                        <br> <?= __('mission_title') ?>
                    </p>
                    <div class="checklist style2">
                        <ul>
                            <li><?= __('mission_item1') ?></li>
                            <li><?= __('mission_item2') ?></li>
                            <li><?= __('mission_item3') ?></li>
                            <li><?= __('mission_item4') ?></li>
                            <li><?= __('mission_item5') ?></li>
                            <li><?= __('mission_item6') ?></li>
                        </ul>
                    </div>
                    <br />

                    <p class="mb-45"><?= __('success_condition') ?></p>
                    <h3 class="mb-15"><?= __('description_label') ?></h3>
                    <p class="mb-45"><?= __('description_text') ?></p>
                    <h3 class="mb-15"><?= __('why_prasmesti_q') ?></h3>
                    <div class="checklist style2">
                        <ul>
                            <li><?= __('why_item1') ?></li>
                            <li><?= __('why_item2') ?></li>
                            <li><?= __('why_item3') ?></li>
                            <li><?= __('why_item4') ?></li>
                        </ul>
                    </div>
                    <br>
                    <div class="row gx-40 gy-30 align-items-center">
                        <div class="col-xl-6">
                            <div class="page-img mb-0">
                                <img src="assets/img/donation/donation-s-1-2.jpg" alt="Blog Image">
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <h4><?= __('functions_title') ?></h4>
                            <div class="checklist style2">
                                <ul>
                                    <li><?= __('func_comm') ?></li>
                                    <li><?= __('func_coord') ?></li>
                                    <li><?= __('func_content') ?></li>
                                    <li><?= __('func_kb') ?></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div class="corps6 element12" id="element12">
                        <h4><?= __('expectations_title') ?></h4>
                        <ul class="listeElement12L1">
                            <li><?= __('exp_item1') ?></li>
                            <li><?= __('exp_item2') ?></li>
                            <li><?= __('exp_item3') ?>
                                <ul class="listeElement12L3">
                                    <li><?= __('exp_sub1') ?></li>
                                    <li><?= __('exp_sub2') ?></li>
                                    <li><?= __('exp_sub3') ?></li>
                                </ul>
                            </li>
                            <li><?= __('exp_item4') ?></li>
                            <li><?= __('exp_item5') ?></li>
                        </ul>
                    </div>

                    <div class="corps7 element13" id="element13">
                        <br>
                        <h4><?= __('brand_image_title') ?></h4>
                        <?= __('brand_image_text1') ?> <br /><br />

                        <?= __('brand_image_text2') ?>
                    </div>

                    <br>
                    <div class="corps8 element16" id="element16">
                        <h4><?= __('access_possibilities_title') ?></h4>
                        <?= __('access_intro') ?>
                        <ul class="listeElement16L1">
                            <li><?= __('intranet_desc') ?></li>
                            <li><?= __('extranet_desc') ?></li>
                            <li><?= __('internet_desc') ?></li>
                        </ul>
                        <?= __('access_challenge') ?>
                        <ul class="listeElement16L2">
                            <li><?= __('access_member_state') ?></li>
                            <li><?= __('access_software_editor') ?></li>
                            <li><?= __('access_study_office') ?></li>
                        </ul>
                    </div>

                    <div class="corps9 element17" id="element17">
                        <h4><?= __('summary_objectives_title') ?></h4>
                        <ul class="listeElement17">
                            <li><?= __('sum_obj1') ?></li>
                            <li><?= __('sum_obj2') ?></li>
                            <li><?= __('sum_obj3') ?></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

                </div>
            </div>
        </div>
    </div>
</section>