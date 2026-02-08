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
                    <div class="header-logo">
                        <a href="index.php?p=accueil"><img src="assets/img/Logo.png" alt="logo-ceeac"></a>
                    </div>
                </div>
                <div class="col-auto d-none d-md-block">
                    <div class="info-card-wrap">
                        <div class="info-card">
                            <div class="box-content">
                                <p class="box-text">Adresse:</p>
                                <h4 class="box-title"><a href="https://maps.app.goo.gl/eRuYww4DayfLzmzC7">Bd Triomphal, Libreville, Gabon</a></h4>
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
                        <div class="info-card">
                            <div class="box-content">
                                <p class="box-text">Accès experts :</p>
                                <h4 class="box-title"><a href="../private/">Connexion</a></h4>                            </div>
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
                        <div class="header-logo">
                            <a href="index.php?p=accueil"><img src="assets/img/Logo.png" alt="Logo.png"></a>
                        </div>
                    </div>
                    <nav class="main-menu d-none d-lg-block">
                        <ul>
                            <li class="<?= $current_page == 'accueil' ? 'active' : '' ?>">
                                <a href="index.php?p=accueil">Accueil</a>
                            </li>

                            <li class="menu-item-has-children <?= is_active('presentation', $current_page) ?>">
                                <a href="#">Présentation</a>
                                <ul class="sub-menu">
                                    <li><a href="index.php?p=presentation/presentation">Qu'est-ce que le PRASMESTI ?</a></li>
                                    <li><a href="index.php?p=presentation/attentes">Les attentes</a></li>
                                    <li><a href="index.php?p=presentation/objectifs">En résumé, les objectifs</a></li>
                                    <li><a href="index.php?p=responsables/responsables">Les responsables du projet</a></li>
                                    <li><a href="index.php?p=presentation/motdupresident">Mot du Président et des Commissaires</a></li>
                                </ul>
                            </li>

                            <li class="menu-item-has-children">
                                <a href="#">Textes Normatifs</a>
                                <ul class="sub-menu">
                                    <li><a href="#">Textes normatifs continentaux et internationaux</a></li>
                                    <li><a href="#">Politique sectorielle en Afrique Centrale</a></li>
                                    <li><a href="#">Stratégie sectorielle en Afrique Centrale</a></li>
                                    <li><a href="#">Projets sectoriels en Afrique Centrale</a></li>
                                    <li><a href="#">Stratégies dans les documents cadres</a></li>
                                </ul>
                            </li>

                            <li class="menu-item-has-children <?= is_active('etat_mise_oeuvre', $current_page) ?>">
                                <a href="#">État de mise en œuvre</a>
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

                            <li><a href="#">Propriété intellectuelle</a></li>

                            <li><a href="#">Innovations </a></li>

                            <li class="<?= $current_page == 'actualites' ? 'active' : '' ?>">
                                <a href="index.php?p=actualites">Actualités</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>