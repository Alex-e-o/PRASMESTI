<?php
// Récupération de la page actuelle pour gérer la classe "active"
$current_page = isset($_GET['p']) ? $_GET['p'] : 'accueil';

// Fonction pour vérifier si une section est active (pour les menus déroulants)
function is_active($prefix, $current) {
    return (strpos($current, $prefix) === 0) ? 'active' : '';
}
?>

<header class="th-header header-default onepage-nav">
    <div class="menu-top">
        <div class="container">
            <div class="row justify-content-center justify-content-lg-between align-items-center gy-2">

                <div class="col-auto d-none d-lg-block">
                    <div class="header-logo" style="display: flex; align-items: center; gap: 5px;">
                        <a href="index.php?p=accueil" style="line-height: 0; margin: 0; padding: 0;">
                            <img src="assets/img/Logo.png" alt="logo-ceeac" style="max-height: 70px; margin: 0 !important; padding: 0 !important;">
                        </a>

                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                            <span style="font-weight: 800; color: #000; font-size: 24px; line-height: 1.1; letter-spacing: 1px; margin-bottom: 2px;">PRASMESTI</span>

                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span class="sub-title" style="color: #000 !important; margin-bottom: 0; font-size: 15px; line-height: 1.2;"><?= __('inform_to_orient') ?></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-auto d-none d-md-block">
                    <div class="info-card-wrap">

                        <div class="info-card">
                            <div class="box-content">
                                <p class="box-text"><?= __('address') ?>:</p>
                                <h4 class="box-title"><a href="https://maps.app.goo.gl/eRuYww4DayfLzmzC7">Bd Triomphal, Libreville, Gabon</a></h4>
                            </div>
                        </div>

                        <div class="info-card" style="display: flex; align-items: center;">
                            <div class="box-content" style="text-align: center;">
                                <p class="box-text">David Blaise OSSENE</p>
                                <h4 class="box-title" style="max-width: 280px; white-space: normal; line-height: 1.4; font-size: 13px; font-weight: 600; margin: 0 auto;">Directeur Education, Culture et Développement Technologique, Commission de la CEEAC</h4>
                            </div>
                            <img class="rounded-circle header-profile-user"
                                 src="../private/assets/images/users/Blaise_OSSENE.jpg"
                                 alt="David Blaise OSSENE"
                                 style="width: 65px; height: 65px; object-fit: cover;margin-left: 30px; margin-right: 5px; border: 2px solid #e5e5e5;">
                        </div>

                        <div class="info-card">
                            <div class="box-content">
                                <p class="box-text"><?= __('experts_access') ?> :</p>
                                <h4 class="box-title"><a href="../private/"><?= __('connection') ?></a></h4>
                            </div>
                        </div>

                        <div class="info-card">
                            <div class="box-content">
                                <p class="box-text">Language:</p>
                                <h4 class="box-title">
                                    <?php
                                    $fr_params = $_GET;
                                    $fr_params['lang'] = 'fr';
                                    $en_params = $_GET;
                                    $en_params['lang'] = 'en';
                                    ?>
                                    <a href="?<?= http_build_query($fr_params) ?>" style="<?= $lang == 'fr' ? 'font-weight: bold; color: #f44336;' : '' ?>">FR</a> | 
                                    <a href="?<?= http_build_query($en_params) ?>" style="<?= $lang == 'en' ? 'font-weight: bold; color: #f44336;' : '' ?>">EN</a>
                                </h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="sticky-wrapper">
        <div class="container">
            <div class="menu-area">
                <div class="menu-area-wrap">

                    <div class="col-auto d-inline-block d-lg-none">
                        <div class="header-logo" style="display: flex; align-items: center; gap: 5px;">
                            <a href="index.php?p=accueil" style="line-height: 0; margin: 0; padding: 0;">
                                <img src="assets/img/Logo.png" alt="Logo.png" style="max-height: 50px; margin: 0 !important; padding: 0 !important;">
                            </a>

                            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
                                <span style="font-weight: 800; color: #000; font-size: 18px; line-height: 1.1; letter-spacing: 0.5px; margin-bottom: 2px;">PRASMESTI</span>

                                <div class="d-none d-sm-flex" style="align-items: center; gap: 5px;">
                                    <span style="display: inline-block; width: 20px; height: 2px; background-color: #f44336;"></span>
                                    <span class="sub-title" style="color: #000 !important; margin-bottom: 0; font-size: 12px; line-height: 1.2;"><?= __('orient_to_inform') ?></span>
                                    <span style="display: inline-block; width: 20px; height: 2px; background-color: #f44336;"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav class="main-menu d-none d-lg-block">
                        <ul>
                            <li class="<?= $current_page == 'accueil' ? 'active' : '' ?>">
                                <a href="index.php?p=accueil"><?= __('accueil') ?></a>
                            </li>

                            <li class="menu-item-has-children <?= is_active('presentation', $current_page) ?>">
                                <a href="index.php?p=presentation"><?= __('presentation') ?></a>
                                <ul class="sub-menu">
                                    <li><a href="index.php?p=presentation/presentation"><?= __('what_is_prasmesti') ?></a></li>
                                    <li><a href="index.php?p=presentation/pourquoi_le_PRASMESTI"><?= __('why_prasmesti') ?></a></li>
                                    <li><a href="index.php?p=presentation/objectifs"><?= __('objectives') ?></a></li>
                                    <li><a href="index.php?p=presentation/attentes"><?= __('expectations') ?></a></li>
                                    <li><a href="index.php?p=presentation/enjeux"><?= __('issues') ?></a></li>
                                    <li><a href="index.php?p=presentation/conception"><?= __('design_ops') ?></a></li>
                                    <li><a href="index.php?p=presentation/responsables"><?= __('project_leads') ?></a></li>
                                </ul>
                            </li>

                            <li class="menu-item-has-children">
                                <a href="#"><?= __('normative_texts') ?></a>
                                <ul class="sub-menu">
                                    <li><a href="#" style="text-transform: none;"><?= __('continental_texts') ?></a></li>
                                    <li><a href="#" style="text-transform: none;"><?= __('sectoral_policy') ?></a></li>
                                    <li><a href="#" style="text-transform: none;"><?= __('sectoral_strategy') ?></a></li>
                                    <li><a href="#" style="text-transform: none;"><?= __('sectoral_projects') ?></a></li>
                                    <li><a href="#" style="text-transform: none;"><?= __('framework_strategies') ?></a></li>
                                </ul>
                            </li>

                            <li class="menu-item-has-children <?= is_active('etat_mise_oeuvre', $current_page) ?>">
                                <a href="#"><?= __('implementation_status') ?></a>
                                <ul class="sub-menu">
                                    <li><a href="#">Angola </a></li>
                                    <li><a href="#">Burundi</a></li>
                                    <li><a href="#">Cameroun</a></li>
                                    <li><a href="#">Centrafrique</a></li>
                                    <li><a href="#">République du Congo</a></li>
                                    <li><a href="index.php?p=etat_mise_oeuvre/gabon">Gabon</a></li>
                                    <li><a href="#">Guinée Équatoriale</a></li>
                                    <li><a href="#">République Démocratique du Congo</a></li>
                                    <li><a href="#">Rwanda</a></li>
                                    <li><a href="#">Sao Tomé et Principe</a></li>
                                    <li><a href="#">Tchad</a></li>
                                </ul>
                            </li>

                            <li><a href="#"><?= __('intellectual_property') ?></a></li>

                            <li><a href="#"><?= __('innovations') ?></a></li>

                            <li class="<?= $current_page == 'actualites' ? 'active' : '' ?>">
                                <a href="index.php?p=actualites"><?= __('news') ?></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>