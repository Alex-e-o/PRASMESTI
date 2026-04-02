<style>
    /* Style spécifique conservé */
    .th-btn.style3 {
        background: #f44336;
        color: var(--white-color);
        box-shadow: inset 0 0 0 0 var(--theme-color);
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

        <!-- Introduction -->
        <section class="presentation-card section-intro">
            <div class="card-content">
                <span class="eyebrow">Page « objectifs »</span>
                <h1 class="pyramid-title" style="font-size: 1.8rem; color: #f97316; margin-bottom: 1rem;">
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
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

        <!-- 1. Informer sur l'interne -->
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
                <p style="margin-top: 15px; padding: 10px; background-color: #fff7ed; border-left: 4px solid #f97316; border-radius: 4px;">
                    👉 <strong>Opportunité pour les États membres :</strong> mieux se positionner, partager leurs avancées, apprendre les uns des autres et éviter la duplication des efforts.
                </p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

        <!-- 2. Informer sur l'externe -->
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
                <p style="margin-top: 15px; padding: 10px; background-color: #fff7ed; border-left: 4px solid #f97316; border-radius: 4px;">
                    👉 <strong>Opportunité pour les États membres :</strong> s’inspirer des meilleures expériences mondiales, renforcer leur compétitivité et intégrer plus efficacement les dynamiques globales.
                </p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

        <!-- 3. Former -->
        <section class="presentation-card section-former">
            <div class="card-content">
                <h2 class="section-title">3. Former : construire un capital humain adapté aux défis contemporains</h2>
                <p>Le PRASMESTI joue un rôle essentiel dans le renforcement des capacités, en permettant de :</p>
                <ul>
                    <li><strong>Mettre à disposition des données fiables et actualisées</strong> (statistiques, indicateurs, analyses) pour éclairer la décision ;</li>
                    <li><strong>Identifier les besoins en compétences et en formation</strong>, en lien avec les réalités économiques et sociales ;</li>
                    <li><strong>Diffuser des contenus pédagogiques et techniques</strong>, favorisant l’apprentissage continu ;</li>
                    <li><strong>Soutenir l’adéquation formation-emploi</strong>, en orientant les systèmes éducatifs vers les compétences d’avenir.</li>
                </ul>
                <p style="margin-top: 15px; padding: 10px; background-color: #fff7ed; border-left: 4px solid #f97316; border-radius: 4px;">
                    👉 <strong>Opportunité pour les États membres :</strong> disposer d’un outil d’aide à la décision, améliorer la qualité des formations et préparer efficacement les jeunes aux exigences du marché du travail.
                </p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

        <!-- Outil / Intégration -->
        <section class="presentation-card section-outil">
            <div class="card-content">
                <h2 class="section-title">Un outil au cœur de l’intégration régionale</h2>
                <p>En articulant ces trois fonctions, le PRASMESTI devient :</p>
                <ul>
                    <li><strong>un accélérateur d’intégration académique</strong>, en facilitant la convergence des systèmes éducatifs ;</li>
                    <li><strong>un catalyseur de coopération scientifique</strong>, en favorisant le partage de connaissances et la collaboration entre chercheurs ;</li>
                    <li><strong>un levier de transformation technologique</strong>, en diffusant les innovations et en renforçant les capacités ;</li>
                    <li><strong>un instrument de gouvernance moderne</strong>, fondé sur la donnée, la transparence et la coordination.</li>
                </ul>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

        <!-- Conclusion -->
        <section class="presentation-card section-conclusion">
            <div class="card-content">
                <h2 class="section-title">Conclusion</h2>
                <p>
                    Le PRASMESTI n’est pas seulement un portail :
                    <strong>il est un espace commun de savoirs, d’échanges et de construction collective.</strong>
                </p>

                <p style="margin-top: 15px;">Il offre aux États membres de la CEEAC une opportunité unique :</p>
                <p style="font-size: 1.1rem; font-weight: bold; color: #f97316; text-align: center; padding: 15px; background-color: #fff7ed; border-radius: 8px;">
                    👉 transformer la diversité en force, l’information en action et le savoir en développement.
                </p>

                <p style="margin-top: 15px;">
                    En cela, il constitue un pilier essentiel pour bâtir une Afrique centrale intégrée, compétente et tournée vers l’avenir.
                </p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

    </div>
</section>