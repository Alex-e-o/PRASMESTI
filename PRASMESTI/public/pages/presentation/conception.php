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
        <span class="sub-title">Présentation du Projet</span>
        <h1>Conception et opérationnalisation du PRASMETI</h1>

        <div class="objective-box">
            <strong>Objectif principal :</strong> Mettre en place un système régional d'information, de suivi et d'aide à la décision ESTI (Éducation, Sciences, Technologie et Innovation).
        </div>
    </div>
</section>

<section class="steps-section">
    <div class="container">

        <div class="row gy-4">

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">01</div>
                    <h3 class="step-title">Diagnostic des systèmes existants</h3>
                    <ul class="step-list">
                        <li>Réaliser un audit des systèmes nationaux d'information (EMIS, systèmes de recherche, innovation).</li>
                        <li>Identifier les forces, faiblesses et niveaux de maturité numérique.</li>
                        <li>Cartographier les acteurs, outils et flux de données existants.</li>
                        <li>Analyser les lacunes en matière de données (qualité, disponibilité, comparabilité).</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">02</div>
                    <h3 class="step-title">Définition du cadre conceptuel</h3>
                    <ul class="step-list">
                        <li>Définir un cadre régional harmonisé de suivi ESTI.</li>
                        <li>Élaborer un référentiel d'indicateurs communs : éducation, recherche et innovation.</li>
                        <li>Aligner les indicateurs sur les standards internationaux (ODD, UNESCO) et les priorités régionales.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">03</div>
                    <h3 class="step-title">Conception de l'architecture</h3>
                    <ul class="step-list">
                        <li>Définir l'architecture technique du système régional (plateforme centralisée ou interopérable).</li>
                        <li>Concevoir une base de données régionale et des modules sectoriels.</li>
                        <li>Assurer l'interopérabilité avec les systèmes nationaux et définir les protocoles d'échange.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">04</div>
                    <h3 class="step-title">Développement de la plateforme</h3>
                    <ul class="step-list">
                        <li>Développer une plateforme numérique régionale ESTI.</li>
                        <li>Intégrer la collecte, les tableaux de bord dynamiques et la visualisation des données.</li>
                        <li>Mettre en place des outils d'aide à la décision (reporting, alertes, projections).</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">05</div>
                    <h3 class="step-title">Gouvernance des données</h3>
                    <ul class="step-list">
                        <li>Définir les rôles et responsabilités (CEEAC, États, institutions).</li>
                        <li>Élaborer un cadre de gouvernance : qualité, sécurité, confidentialité.</li>
                        <li>Mettre en place un réseau de points focaux nationaux ESTI.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">06</div>
                    <h3 class="step-title">Renforcement des capacités</h3>
                    <ul class="step-list">
                        <li>Former les acteurs nationaux en collecte, outils numériques, analyse statistique et prospective.</li>
                        <li>Développer des guides et manuels d'utilisation.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">07</div>
                    <h3 class="step-title">Collecte et reporting</h3>
                    <ul class="step-list">
                        <li>Standardiser les outils de collecte de données.</li>
                        <li>Mettre en place un calendrier régional de reporting.</li>
                        <li>Définir des formats harmonisés de rapports national et régionaux.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">08</div>
                    <h3 class="step-title">Suivi, évaluation et pilotage</h3>
                    <ul class="step-list">
                        <li>Élaborer un cadre régional de suivi-évaluation.</li>
                        <li>Produire des rapports régionaux périodiques et notes d'analyse stratégique.</li>
                        <li>Mettre en place des revues sectorielles régionales.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">09</div>
                    <h3 class="step-title">Dimensions transversales</h3>
                    <ul class="step-list">
                        <li>Intégrer des données sur le genre, la jeunesse, les zones vulnérables et les situations de crise.</li>
                        <li>Prendre en compte les enjeux de transformation numérique.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">10</div>
                    <h3 class="step-title">Partenariats et interconnexion</h3>
                    <ul class="step-list">
                        <li>Collaborer avec universités, centres de recherche et partenaires (UNESCO, UNICEF, etc.).</li>
                        <li>Assurer l'interopérabilité avec les systèmes internationaux.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">11</div>
                    <h3 class="step-title">Mobilisation des ressources</h3>
                    <ul class="step-list">
                        <li>Élaborer un budget de développement et de maintenance du système.</li>
                        <li>Mobiliser les financements (bailleurs, partenaires, États).</li>
                        <li>Prévoir la durabilité financière et technique.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">12</div>
                    <h3 class="step-title">Phase pilote et déploiement</h3>
                    <ul class="step-list">
                        <li>Lancer une phase pilote dans certains États membres.</li>
                        <li>Tester et ajuster les outils.</li>
                        <li>Déployer progressivement à l'échelle régionale.</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-4 col-md-6">
                <div class="step-card">
                    <div class="step-number">13</div>
                    <h3 class="step-title">Communication et valorisation</h3>
                    <ul class="step-list">
                        <li>Développer une stratégie de diffusion des données et des portails publics.</li>
                        <li>Valoriser les données pour le plaidoyer, la prise de décision et la transparence.</li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="btn-wrap-bottom">
            <a href="javascript:history.back()" class="th-btn" style="display: inline-block; background-color: #002d5b; color: #fff; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; transition: 0.3s;">
                <i class="fas fa-arrow-left me-2"></i> Retour à la page précédente
            </a>
        </div>

    </div>
</section>