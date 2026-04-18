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
            <h1 class="breadcumb-title">Objectifs</h1>
            <ul class="breadcumb-menu">
                <li><a href="index.php?p=accueil">Accueil</a></li>
                <li>Présentation</li>
                <li>Objectifs</li>
            </ul>
        </div>
    </div>
</div>

<section class="presentation-page">
    <div class="container">

        <section class="presentation-card section-intro">
            <div class="card-content">
                <span class="eyebrow">Page « objectifs »</span>

                <h1 style="font-size: 2rem; color: #f97316; margin-bottom: 1rem; font-weight: 800;">
                    PRASMESTI : levier stratégique pour accélérer l’intégration régionale
                </h1>

                <p class="lead-text">
                    Le PRASMESTI s’inscrit comme un outil structurant au service de l’intégration scolaire, académique, scientifique et technologique en Afrique centrale. À travers ses fonctions d’information, de formation et de mise en réseau, il répond à un impératif majeur : <strong>mieux connecter les systèmes, les acteurs et les savoirs pour transformer le potentiel régional en résultats concrets.</strong>
                </p>

                <p>
                    Dans un contexte marqué par la fragmentation des informations, la faible circulation des connaissances et l’insuffisante coordination des initiatives, le PRASMESTI offre une réponse adaptée, moderne et fédératrice.
                </p>
            </div>

            <div class="card-image">
                <span>Espace Image</span>
            </div>
        </section>

        <section class="presentation-card section-interne">
            <div class="card-content">
                <h2 class="section-title">1. Informer sur l’interne : renforcer la cohérence et la visibilité régionale</h2>

                <p>Le PRASMESTI permet de :</p>

                <ul>
                    <li><strong>Valoriser les initiatives des États membres</strong>, en rendant visibles les projets, réformes et innovations en cours ;</li>
                    <li><strong>Assurer un suivi continu des politiques et programmes régionaux</strong>, facilitant ainsi leur évaluation et leur appropriation ;</li>
                    <li><strong>Créer une mémoire institutionnelle vivante</strong>, à travers la capitalisation des expériences, des bonnes pratiques et des dynamiques sectorielles ;</li>
                    <li><strong>Renforcer le sentiment d’appartenance communautaire</strong>, en donnant à voir une Afrique centrale en mouvement, solidaire et engagée.</li>
                </ul>

                <p style="margin-top: 15px; padding: 12px; background-color: #fff7ed; border-left: 4px solid #f97316; border-radius: 4px; font-size: 17px;">
                    👉 <strong>Opportunité pour les États membres :</strong> mieux se positionner, partager leurs avancées, apprendre les uns des autres et éviter la duplication des efforts.
                </p>
            </div>

            <div class="card-image">
                <span>Espace Image</span>
            </div>
        </section>

        <section class="presentation-card section-externe">
            <div class="card-content">
                <h2 class="section-title">2. Informer sur l’externe : ouvrir la région et stimuler l’innovation</h2>

                <p>Le PRASMESTI constitue une fenêtre stratégique sur le monde, en permettant de :</p>

                <ul>
                    <li><strong>Suivre les tendances internationales</strong> en matière d’éducation, de recherche, de technologie et d’innovation ;</li>
                    <li><strong>Accéder aux cadres normatifs</strong>, aux opportunités et aux bonnes pratiques d’autres régions ;</li>
                    <li><strong>Identifier des partenariats techniques et financiers</strong> avec des acteurs internationaux ;</li>
                    <li><strong>Aligner les politiques nationales</strong> sur les standards régionaux et internationaux.</li>
                </ul>

                <p style="margin-top: 15px; padding: 12px; background-color: #fff7ed; border-left: 4px solid #f97316; border-radius: 4px;">
                    👉 <strong>Opportunité pour les États membres :</strong> s’inspirer des meilleures expériences mondiales.
                </p>
            </div>

            <div class="card-image">
                <span>Espace Image</span>
            </div>
        </section>

        <section class="presentation-card section-former">
            <div class="card-content">
                <h2 class="section-title">3. Former : construire un capital humain adapté aux défis contemporains</h2>

                <p>Le PRASMESTI joue un rôle essentiel dans le renforcement des capacités.</p>

                <ul>
                    <li><strong>Mettre à disposition des données fiables</strong></li>
                    <li><strong>Identifier les besoins en compétences</strong></li>
                    <li><strong>Diffuser des contenus pédagogiques</strong></li>
                    <li><strong>Soutenir l’adéquation formation-emploi</strong></li>
                </ul>
            </div>

            <div class="card-image">
                <span>Espace Image</span>
            </div>
        </section>

    </div>
</section>