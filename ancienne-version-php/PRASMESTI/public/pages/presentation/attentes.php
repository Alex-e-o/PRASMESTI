<style>
    /* Style spécifique conservé */
    .th-btn.style3 {
        background: #f44336;
        color: var(--white-color);
        box-shadow: inset 0 0 0 0 var(--theme-color);
    }

    /* AJOUT UNIQUEMENT TYPOGRAPHIE */
    .presentation-page p,
    .presentation-page li {
        font-size: 17px;
        line-height: 1.7;
        color: #111111;
        text-align: justify;
    }

    .presentation-page .lead-text {
        font-size: 18px;
        line-height: 1.8;
        color: #000000;
    }

    .presentation-page .section-title {
        font-size: 30px;
        font-weight: 800;
        color: #0d6efd;
    }

    .presentation-page .sub-block-title {
        font-size: 22px;
        font-weight: 700;
        color: #111111;
    }

    /* Conteneur global */
    .presentation-page .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    /* Style de base des cartes */
    .presentation-card {
        display: flex; /* Active Flexbox pour aligner texte et image côte à côte */
        align-items: stretch; /* Les deux colonnes ont la même hauteur */
        gap: 30px; /* Espace entre le texte et l'image */

        border: 3px solid #f97316; /* Bordure orange */
        border-radius: 12px; /* Coins arrondis */
        padding: 30px; /* Espace à l'intérieur de la carte */
        margin-bottom: 40px; /* Espace entre les cartes */

        background-color: #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05); /* Légère ombre pour le relief */
    }

    /* ALTERNANCE : Inverse la direction une carte sur deux */
    .presentation-card:nth-child(even) {
        flex-direction: row-reverse;
    }

    /* Zone de texte */
    .card-content {
        flex: 1; /* Prend tout l'espace disponible */
    }

    /* Zone d'image (espace réservé) */
    .card-image {
        flex: 0 0 400px; /* Largeur fixe de 400px pour l'image (à ajuster selon vos besoins) */

        /* Styles temporaires pour visualiser l'emplacement */
        background-color: #fff7ed; /* Fond légèrement orangé */
        border: 2px dashed #fb923c; /* Bordure pointillée pour maquette */
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #f97316;
        font-weight: bold;
        min-height: 250px;
    }

    /* Si vous ajoutez une vraie balise <img> à l'intérieur de .card-image */
    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover; /* Permet à l'image de bien remplir la zone sans se déformer */
        border-radius: 8px;
    }

    /* Responsive : Pour les téléphones et petites tablettes */
    @media (max-width: 768px) {
        .presentation-card,
        .presentation-card:nth-child(even) {
            flex-direction: column; /* Empile le texte et l'image à la verticale */
            gap: 20px;
        }

        .card-image {
            flex: auto;
            width: 100%;
            min-height: 200px;
        }
    }
</style>

<div class="breadcumb-wrapper " data-bg-src="assets/img/bg/breadcumb-bg.jpg" data-overlay="theme">
    <div class="container">
        <div class="breadcumb-content">
            <h1 class="breadcumb-title"><?= __('expectations') ?></h1>
            <ul class="breadcumb-menu">
                <li><a href="index.php?p=accueil"><?= __('accueil') ?></a></li>
                <li><?= __('presentation') ?></li>
                <li><?= __('expectations') ?></li>
            </ul>
        </div>
    </div>
</div>

<section class="presentation-page">
    <div class="container">

        <!-- Introduction -->
        <section class="presentation-card section-intro">
            <div class="card-content">
                <span class="eyebrow"><?= __('expectations_eyebrow') ?></span>
                <h1 class="pyramid-title" style="font-size: 1.8rem; color: #f97316; margin-bottom: 1rem;">
                    <?= __('expectations_q') ?>
                </h1>

                <p class="lead-text">
                    <?= __('expectations_lead') ?>
                </p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- Attentes 1 à 3 -->
        <section class="presentation-card section-attentes-1">
            <div class="card-content">
                <h2 class="section-title"><?= __('dyn_val_impulse_title') ?></h2>

                <h3 class="sub-block-title" style="margin-top: 15px;"><?= __('exp_h_1_title') ?></h3>
                <p><?= __('exp_h_1_text') ?></p>

                <h3 class="sub-block-title" style="margin-top: 15px;"><?= __('exp_h_2_title') ?></h3>
                <p><?= __('exp_h_2_text') ?></p>

                <h3 class="sub-block-title" style="margin-top: 15px;"><?= __('exp_h_3_title') ?></h3>
                <p><?= __('exp_h_3_text') ?></p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- Attentes 4 à 6 -->
        <section class="presentation-card section-attentes-2">
            <div class="card-content">
                <h2 class="section-title"><?= __('gov_mod_trans_title') ?></h2>

                <h3 class="sub-block-title" style="margin-top: 15px;"><?= __('exp_h_4_title') ?></h3>
                <p><?= __('exp_h_4_text') ?></p>
                <ul>
                    <li><?= __('exp_h_4_li1') ?></li>
                    <li><?= __('exp_h_4_li2') ?></li>
                    <li><?= __('exp_h_4_li3') ?></li>
                </ul>

                <h3 class="sub-block-title" style="margin-top: 15px;"><?= __('exp_h_5_title') ?></h3>
                <p><?= __('exp_h_5_text') ?></p>

                <h3 class="sub-block-title" style="margin-top: 15px;"><?= __('exp_h_6_title') ?></h3>
                <p><?= __('exp_h_6_text') ?></p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- Attentes 7 et 8 -->
        <section class="presentation-card section-attentes-3">
            <div class="card-content">
                <h2 class="section-title"><?= __('e_services_interop_title') ?></h2>

                <h3 class="sub-block-title" style="margin-top: 15px;"><?= __('exp_h_7_title') ?></h3>
                <p><?= __('exp_h_7_text') ?></p>
                <ul>
                    <li><?= __('exp_h_7_li1') ?></li>
                    <li><?= __('exp_h_7_li2') ?></li>
                    <li><?= __('exp_h_7_li3') ?></li>
                </ul>

                <h3 class="sub-block-title" style="margin-top: 15px;"><?= __('exp_h_8_title') ?></h3>
                <p><?= __('exp_h_8_text') ?></p>
                <ul>
                    <li><?= __('exp_h_8_li1') ?></li>
                    <li><?= __('exp_h_8_li2') ?></li>
                    <li><?= __('exp_h_8_li3') ?></li>
                </ul>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- Levier d'image -->
        <section class="presentation-card section-image-transformation">
            <div class="card-content">
                <h2 class="section-title"><?= __('image_trans_levier_title') ?></h2>
                <p><?= __('image_trans_levier_intro') ?></p>

                <p style="margin-top: 15px; padding: 10px; background-color: #fff7ed; border-left: 4px solid #f97316; border-radius: 4px;">
                    <?= __('image_trans_levier_highlight') ?>
                </p>

                <ul style="margin-top: 15px;">
                    <li><?= __('image_trans_levier_li1') ?></li>
                    <li><?= __('image_trans_levier_li2') ?></li>
                    <li><?= __('image_trans_levier_li3') ?></li>
                </ul>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- Modalités et Acteurs -->
        <section class="presentation-card section-acteurs">
            <div class="card-content">
                <h2 class="section-title"><?= __('access_and_actors_title') ?></h2>

                <h3 class="sub-block-title" style="margin-top: 15px;"><?= __('access_q') ?></h3>
                <p><?= __('access_text') ?></p>
                <ul>
                    <li><?= __('access_intranet') ?></li>
                    <li><?= __('access_extranet') ?></li>
                    <li><?= __('access_internet') ?></li>
                </ul>

                <h3 class="sub-block-title" style="margin-top: 15px;"><?= __('tool_for_all_title') ?></h3>
                <p><?= __('tool_for_all_text') ?></p>
                <ul>
                    <li><?= __('tool_for_all_li1') ?></li>
                    <li><?= __('tool_for_all_li2') ?></li>
                    <li><?= __('tool_for_all_li3') ?></li>
                </ul>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- Conclusion -->
        <section class="presentation-card section-conclusion">
            <div class="card-content">
                <h2 class="section-title"><?= __('in_synthesis_title') ?></h2>
                <p><?= __('in_synthesis_intro') ?></p>

                <p style="font-size: 1.1rem; font-weight: bold; color: #f97316; text-align: center; padding: 15px; background-color: #fff7ed; border-radius: 8px; margin: 15px 0;">
                    <?= __('in_synthesis_highlight') ?>
                </p>

                <p>
                    <?= __('in_synthesis_conclusion') ?>
                </p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

    </div>
</section>

    </div>
</section>