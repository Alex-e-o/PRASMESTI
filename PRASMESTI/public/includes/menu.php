<?php
// Récupération de la page courante pour gérer la classe "active" du menu
$current_page = $_GET['p'] ?? 'accueil';

// Petite fonction pour vérifier si un menu doit être actif (y compris les sous-menus)
function isActive($prefix, $current) {
    return strpos($current, $prefix) === 0 ? 'active' : '';
}
?>

<div class="th-menu-wrapper">
    <div class="th-menu-area text-center">
        <button class="th-menu-toggle"><i class="fal fa-times"></i></button>
        <div class="mobile-logo">
            <a href="index.php?p=accueil"><img src="assets/img/Logo.png" alt="PRASMESTI"></a>
        </div>
        <div class="th-mobile-menu">
            <ul>
                <li class="<?= $current_page == 'accueil' ? 'active' : '' ?>">
                    <a href="index.php?p=accueil">Accueil</a>
                </li>

                <li class="menu-item-has-children <?= isActive('presentation', $current_page) ?>">
                    <a href="index.php?p=presentation">Présentation</a>
                    <ul class="sub-menu">
                        <li><a href="index.php?p=presentation/presentation">Qu'est-ce que le PRASMESTI ?</a></li>
                        <li><a href="index.php?p=presentation/pourquoi_le_PRASMESTI">Pourquoi le PRASMESTI?</a></li>
                        <li><a href="index.php?p=presentation/objectifs">Les objectifs</a></li>
                        <li><a href="index.php?p=presentation/attentes">Les attentes</a></li>
                        <li><a href="index.php?p=presentation/enjeux">Les enjeux</a></li>
                        <li><a href="index.php?p=presentation/conception">Conception et opérationnalisation</a></li>
                        <li><a href="index.php?p=presentation/responsables">Les responsables du projet</a></li>
                    </ul>
                </li>

                <li class="menu-item-has-children">
                    <a href="#">Textes Normatifs</a>
                    <ul class="sub-menu">
                        <li><a href="#">Textes normatifs continentaux</a></li>
                        <li><a href="#">Politique sectorielle</a></li>
                    </ul>
                </li>

                <li class="menu-item-has-children <?= isActive('etat_mise_oeuvre', $current_page) ?>">
                    <a href="#">État de mise en œuvre</a>
                    <ul class="sub-menu">
                        <li><a href="#">Angola</a></li>
                        <li><a href="#">Burundi</a></li>
                        <li><a href="#">Cameroun</a></li>
                        <li><a href="#">Centrafrique</a></li>
                        <li><a href="#">République du Congo</a></li>
                        <li><a href="index.php?p=etat_mise_oeuvre/gabon">Gabon</a></li>
                        <li><a href="#">Guinée Équatoriale</a></li>
                        <li><a href="#">RDC</a></li>
                        <li><a href="#">Rwanda</a></li>
                        <li><a href="#">Sao Tomé et Principe</a></li>
                        <li><a href="#">Tchad</a></li>
                    </ul>
                </li>

                <li><a href="#">Propriété intellectuelle</a></li>
                <li><a href="#">Innovations</a></li>
                <li class="<?= $current_page == 'actualites' ? 'active' : '' ?>">
                    <a href="index.php?p=actualites">Actualités</a>
                </li>
                <li class="<?= $current_page == 'contact' ? 'active' : '' ?>">
                    <a href="index.php?p=contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</div>

<header class="th-header header-default onepage-nav">
    <div class="menu-top">
        <div class="container">
            <div class="row justify-content-center justify-content-lg-between align-items-center gy-2">
                <div class="col-auto d-none d-lg-block">
                    <div class="header-logo">
                        <a href="index.php?p=accueil"><img src="assets/img/Logo.png" alt="PRASMESTI"></a>
                    </div>
                </div>
                <div class="col-auto d-none d-md-block">
                    <div class="info-card-wrap">
                        <div class="info-card">
                            <div class="box-content">
                                <p class="box-text">Adresse:</p>
                                <h4 class="box-title"><a href="#">Bd Triomphal, Libreville, Gabon</a></h4>
                            </div>
                        </div>
                        <div class="info-card">
                            <div class="box-content">
                                <p class="box-text">Téléphone:</p>
                                <h4 class="box-title"><a href="tel:+24177056649">+241 77 05 66 49</a></h4>
                            </div>
                        </div>
                        <div class="info-card">
                            <div class="box-content">
                                <p class="box-text">Email:</p>
                                <h4 class="box-title"><a href="mailto:prasmesti@ceeac-eccas.org">prasmesti@ceeac-eccas.org</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-auto header-social-col">
                    <div class="th-social">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
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
                        <div class="header-logo">
                            <a href="index.php?p=accueil"><img src="assets/img/Logo.png" alt="PRASMESTI"></a>
                        </div>
                    </div>
                    <nav class="main-menu d-none d-lg-block">
                        <ul>
                            <li class="<?= $current_page == 'accueil' ? 'active' : '' ?>">
                                <a href="index.php?p=accueil">Accueil</a>
                            </li>

                            <li class="menu-item-has-children <?= isActive('presentation', $current_page) ?>">
                                <a href="index.php?p=presentation">Présentation</a>
                                <ul class="sub-menu">
                                    <li><a href="index.php?p=presentation/presentation">Qu'est-ce que le PRASMESTI ?</a></li>
                                    <li><a href="index.php?p=presentation/attentes">Les attentes</a></li>
                                    <li><a href="index.php?p=presentation/objectifs">En résumé, les objectifs</a></li>
                                    <li><a href="index.php?p=presentation/motdupresident">Mot du Président</a></li>
                                    <li><a href="index.php?p=responsables/responsables">Les Responsables</a></li>
                                </ul>
                            </li>

                            <li class="menu-item-has-children">
                                <a href="#">Textes Normatifs</a>
                                <ul class="sub-menu">
                                    <li><a href="#">Textes normatifs continentaux</a></li>
                                    <li><a href="#">Politique sectorielle</a></li>
                                    <li><a href="#">Stratégie sectorielle</a></li>
                                    <li><a href="#">Projets sectoriels</a></li>
                                </ul>
                            </li>

                            <li class="menu-item-has-children <?= isActive('etat_mise_oeuvre', $current_page) ?>">
                                <a href="#">État de mise en œuvre</a>
                                <ul class="sub-menu">
                                    <li><a href="#">Angola</a></li>
                                    <li><a href="#">Burundi</a></li>
                                    <li><a href="#">Cameroun</a></li>
                                    <li><a href="#">Centrafrique</a></li>
                                    <li><a href="#">République du Congo</a></li>
                                    <li><a href="index.php?p=etat_mise_oeuvre/gabon">Gabon</a></li>
                                    <li><a href="#">Guinée Équatoriale</a></li>
                                    <li><a href="#">RDC</a></li>
                                    <li><a href="#">Rwanda</a></li>
                                    <li><a href="#">Sao Tomé et Principe</a></li>
                                    <li><a href="#">Tchad</a></li>
                                </ul>
                            </li>

                            <li><a href="#">Propriété intellectuelle</a></li>
                            <li><a href="#">Innovations</a></li>

                            <li class="<?= $current_page == 'actualites' ? 'active' : '' ?>">
                                <a href="index.php?p=actualites">Actualités</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="header-button">
                    <a href="index.php?p=contact" class="th-btn style3 d-lg-block d-none">
                        <i class="fas fa-phone me-2"></i>Contactez-nous
                    </a>
                    <button type="button" class="icon-btn th-menu-toggle d-lg-none"><i class="far fa-bars"></i></button>
                </div>
            </div>
        </div>
    </div>
</header>