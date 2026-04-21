<style>
    /* Style spécifique conservé */
    .th-btn.style3 {
        background: #f44336;
        color: var(--white-color);
        box-shadow: inset 0 0 0 0 var(--theme-color);
    }

    /* TYPOGRAPHIE GLOBALE AJOUTÉE */
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
        margin-bottom: 15px;
    }

    /* Conteneur global */
    .presentation-page .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    /* Style de base des cartes */
    .presentation-card {
        display: flex;
        align-items: stretch;
        gap: 30px;

        border: 3px solid #f97316;
        border-radius: 12px;
        padding: 30px;
        margin-bottom: 40px;

        background-color: #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    .presentation-card:nth-child(even) {
        flex-direction: row-reverse;
    }

    .card-content {
        flex: 1;
    }

    .card-image {
        flex: 0 0 400px;
        background-color: #fff7ed;
        border: 2px dashed #fb923c;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #f97316;
        font-weight: bold;
        min-height: 250px;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }

    @media (max-width: 768px) {
        .presentation-card,
        .presentation-card:nth-child(even) {
            flex-direction: column;
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
            <h1 class="breadcumb-title"><?= __('objectives') ?></h1>
            <ul class="breadcumb-menu">
                <li><a href="index.php?p=accueil"><?= __('accueil') ?></a></li>
                <li><?= __('presentation') ?></li>
                <li><?= __('objectives') ?></li>
            </ul>
        </div>
    </div>
</div>

<section class="presentation-page">
    <div class="container">

        <section class="presentation-card section-intro">
            <div class="card-content">
                <span class="eyebrow"><?= __('objectifs_eyebrow') ?></span>

                <h1 style="font-size: 2rem; color: #f97316; margin-bottom: 1rem; font-weight: 800;">
                    <?= __('objectifs_strat_lever_title') ?>
                </h1>

                <p class="lead-text">
                    <?= __('objectifs_lead_text') ?>
                </p>

                <p>
                    <?= __('objectifs_context_text') ?>
                </p>
            </div>

            <div class="card-image">
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <section class="presentation-card section-interne">
            <div class="card-content">
                <h2 class="section-title"><?= __('obj_h_1_title') ?></h2>

                <p><?= __('obj_h_1_intro') ?></p>

                <ul>
                    <li><?= __('obj_h_1_li1') ?></li>
                    <li><?= __('obj_h_1_li2') ?></li>
                    <li><?= __('obj_h_1_li3') ?></li>
                    <li><?= __('obj_h_1_li4') ?></li>
                </ul>

                <p style="margin-top: 15px; padding: 12px; background-color: #fff7ed; border-left: 4px solid #f97316; border-radius: 4px; font-size: 17px;">
                    <?= __('obj_h_1_highlight') ?>
                </p>
            </div>

            <div class="card-image">
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <section class="presentation-card section-externe">
            <div class="card-content">
                <h2 class="section-title"><?= __('obj_h_2_title') ?></h2>

                <p><?= __('obj_h_2_intro') ?></p>

                <ul>
                    <li><?= __('obj_h_2_li1') ?></li>
                    <li><?= __('obj_h_2_li2') ?></li>
                    <li><?= __('obj_h_2_li3') ?></li>
                    <li><?= __('obj_h_2_li4') ?></li>
                </ul>

                <p style="margin-top: 15px; padding: 12px; background-color: #fff7ed; border-left: 4px solid #f97316; border-radius: 4px;">
                    <?= __('obj_h_2_highlight') ?>
                </p>
            </div>

            <div class="card-image">
                <span><?= __('image_space') ?></span>
            </div>
        </section>

        <section class="presentation-card section-former">
            <div class="card-content">
                <h2 class="section-title"><?= __('obj_h_3_title') ?></h2>

                <p><?= __('obj_h_3_intro') ?></p>

                <ul>
                    <li><?= __('obj_h_3_li1') ?></li>
                    <li><?= __('obj_h_3_li2') ?></li>
                    <li><?= __('obj_h_3_li3') ?></li>
                    <li><?= __('obj_h_3_li4') ?></li>
                </ul>
            </div>

            <div class="card-image">
                <span><?= __('image_space') ?></span>
            </div>
        </section>

    </div>
</section>

    </div>
</section>