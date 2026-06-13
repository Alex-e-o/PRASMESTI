<style>
    .presentation-page {
        padding: 70px 0;
        background: #f8f9fb;
    }

    .presentation-page .presentation-card {
        background: #ffffff;
        border-radius: 24px;
        padding: 50px 40px;
        box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
    }

    .presentation-page .eyebrow {
        display: inline-block;
        color: #e53935;
        font-weight: 700;
        font-style: italic;
        margin-bottom: 18px;
    }

    .presentation-page .pyramid-title {
        text-align: center;
        margin-bottom: 35px;
    }

    .presentation-page .pyramid-title span {
        display: block;
        font-weight: 800;
        color: #111111;
        line-height: 1.15;
    }

    .presentation-page .pyramid-title .line-1 {
        font-size: 30px;
    }

    .presentation-page .pyramid-title .line-2 {
        font-size: 38px;
        margin-top: 6px;
    }

    .presentation-page .pyramid-title .line-3 {
        font-size: 46px;
        margin-top: 8px;
        color: var(--theme-color);
    }

    .presentation-page .lead-text,
    .presentation-page p {
        text-align: justify;
        color: #000000;
        font-size: 17px; /* ou 18px si tu veux un peu plus */
        line-height: 1.6; /* améliore la lisibilité */
    }

    .presentation-page .section-title {
        color: #0d6efd;
        font-size: 30px;
        margin-top: 40px;
        margin-bottom: 18px;
        font-weight: 800;
    }

    .presentation-page .sub-block-title {
        font-size: 24px;
        font-weight: 800;
        color: #111111;
        margin-top: 24px;
        margin-bottom: 12px;
    }

    .presentation-page ul,
    .presentation-page ol {
        padding-left: 24px;
        margin-bottom: 18px;
    }

    .presentation-page li {
        margin-bottom: 10px;
        color: #000000;
    }

    .presentation-page .check-list {
        list-style: none;
        padding-left: 0;
    }

    .presentation-page .check-list li {
        position: relative;
        padding-left: 34px;
    }

    .presentation-page .check-list li::before {
        content: "👉";
        position: absolute;
        left: 0;
        top: 0;
    }

    .presentation-page .highlight {
        font-weight: 700;
    }

    @media (max-width: 767px) {
        .presentation-page {
            padding: 40px 0;
        }

        .presentation-page .presentation-card {
            padding: 30px 20px;
        }

        .presentation-page .pyramid-title .line-1 {
            font-size: 22px;
        }

        .presentation-page .pyramid-title .line-2 {
            font-size: 28px;
        }

        .presentation-page .pyramid-title .line-3 {
            font-size: 32px;
        }

        .presentation-page .section-title {
            font-size: 24px;
        }
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

    .presentation-page li {
        text-align: justify;
    }

</style>

<section class="presentation-page">
    <div class="container">

        <!-- Introduction -->
        <section class="presentation-card section-intro">
            <div class="card-content">
                <span class="eyebrow"><?= __('presentation_eyebrow') ?></span>
                <div class="pyramid-title">
                    <span class="line-1"><?= __('what_is') ?></span>
                    <span class="line-2">le</span>
                    <span class="line-3">PRASMESTI&nbsp;?</span>
                </div>
                <p class="lead-text">
                    <?= __('prasmesti_platform_desc') ?>
                </p>
                <p><strong><?= __('why_prasmesti_q') ?></strong></p>
                <ul class="check-list">
                    <li><strong><?= __('why_list_item1') ?></strong> ;</li>
                    <li><strong><?= __('why_list_item2') ?></strong> ;</li>
                    <li><strong><?= __('why_list_item3') ?></strong>.</li>
                </ul>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- 1. Missions principales -->
        <section class="presentation-card section-missions">
            <div class="card-content">
                <h2 class="section-title"><?= __('missions_title_main') ?></h2>
                <p><?= __('missions_intro_main') ?></p>
                <ul>
                    <li><strong><?= __('missions_item1_main') ?></strong></li>
                    <li><strong><?= __('missions_item2_main') ?></strong></li>
                    <li><strong><?= __('missions_item3_main') ?></strong></li>
                    <li><strong><?= __('missions_item4_main') ?></strong></li>
                </ul>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- 2. Fonctions clés -->
        <section class="presentation-card section-fonctions">
            <div class="card-content">
                <h2 class="section-title"><?= __('functions_title_main') ?></h2>
                <p><?= __('functions_intro_main') ?></p>
                <div class="fonction-block">
                    <h3 class="sub-block-title"><?= __('functions_sub1_main') ?></h3>
                    <ul>
                        <li><?= __('functions_item1_main') ?></li>
                        <li><?= __('functions_item2_main') ?></li>
                    </ul>
                </div>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- 3. Objectifs stratégiques -->
        <section class="presentation-card section-objectifs">
            <div class="card-content">
                <h2 class="section-title"><?= __('strat_objectives_title_main') ?></h2>
                <p><?= __('strat_objectives_intro_main') ?></p>
                <ol>
                    <li><strong><?= __('strat_objectives_item1_main') ?></strong></li>
                    <li><strong><?= __('strat_objectives_item2_main') ?></strong></li>
                </ol>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- 4. Résultats attendus -->
        <section class="presentation-card section-resultats">
            <div class="card-content">
                <h2 class="section-title"><?= __('expected_results_title_main') ?></h2>
                <ul>
                    <li><strong><?= __('expected_results_item1_main') ?></strong></li>
                    <li><strong><?= __('expected_results_item2_main') ?></strong></li>
                </ul>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- 5. Modalités d'accès -->
        <section class="presentation-card section-acces">
            <div class="card-content">
                <h2 class="section-title"><?= __('access_modalities_title_main') ?></h2>
                <p><?= __('access_modalities_intro_main') ?></p>
                <ul>
                    <li><strong><?= __('access_intranet_main') ?></strong></li>
                    <li><strong><?= __('access_extranet_main') ?></strong></li>
                    <li><strong><?= __('access_internet_main') ?></strong></li>
                </ul>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <!-- 6. Conclusion / Vision -->
        <section class="presentation-card section-vision">
            <div class="card-content">
                <h2 class="section-title"><?= __('vision_title_main') ?></h2>
                <p>
                    <?= __('vision_text1_main') ?>
                </p>
                <p>
                    <strong><?= __('vision_text2_main') ?></strong>
                </p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span><?= __('image_space') ?></span>
            </div>
        </section>

    </div>
</section>