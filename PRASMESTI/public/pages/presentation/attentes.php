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
            <h1 class="breadcumb-title">Les attentes</h1>
            <ul class="breadcumb-menu">
                <li><a href="index.php?p=accueil">Accueil</a></li>
                <li>Présentation</li>
                <li>Les attentes</li>
            </ul>
        </div>
    </div>
</div>

<section class="presentation-page">
    <div class="container">

        <!-- Introduction -->
        <section class="presentation-card section-intro">
            <div class="card-content">
                <span class="eyebrow">Page « les attentes »</span>
                <h1 class="pyramid-title" style="font-size: 1.8rem; color: #f97316; margin-bottom: 1rem;">
                    Le PRASMESTI : quelles attentes ?
                </h1>

                <p class="lead-text">
                    Les attentes du PRASMESTI traduisent une ambition forte : faire du portail un véritable <strong>moteur d’intégration, de performance collective et de transformation structurelle</strong> des systèmes d’Éducation, Formation, Sciences, Technologie et Innovation (EFSTI) en Afrique centrale.
                </p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

        <!-- Attentes 1 à 3 -->
        <section class="presentation-card section-attentes-1">
            <div class="card-content">
                <h2 class="section-title">Dynamiser, valoriser et impulser</h2>

                <h3 class="sub-block-title" style="margin-top: 15px;">1. Renforcer un écosystème de collaboration dynamique</h3>
                <p>Le PRASMESTI vise à intensifier les échanges et les synergies entre les États membres de la CEEAC, les partenaires au développement et les opérateurs économiques, afin de bâtir un cadre de coopération intégré, fluide et durable.</p>

                <h3 class="sub-block-title" style="margin-top: 15px;">2. Accroître l’attractivité du secteur EFSTI</h3>
                <p>En structurant et en valorisant l’offre régionale, le portail contribue à renforcer la visibilité et la compétitivité du secteur, notamment à travers le développement de services innovants à forte valeur ajoutée.</p>

                <h3 class="sub-block-title" style="margin-top: 15px;">3. Impulser des chantiers structurants et innovants</h3>
                <p>Le PRASMESTI est attendu comme un outil d’impulsion stratégique, capable de soutenir la conception et le pilotage de projets régionaux ambitieux, en phase avec les défis scientifiques, technologiques et économiques contemporains.</p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

        <!-- Attentes 4 à 6 -->
        <section class="presentation-card section-attentes-2">
            <div class="card-content">
                <h2 class="section-title">Gouvernance, modernisation et transmission</h2>

                <h3 class="sub-block-title" style="margin-top: 15px;">4. Piloter les politiques publiques par la donnée (monitoring)</h3>
                <p>L’un des enjeux majeurs est de mettre en place un suivi en temps réel des actions et des programmes, grâce à des indicateurs fiables, permettant :</p>
                <ul>
                    <li>d’identifier rapidement les blocages,</li>
                    <li>d’optimiser la prise de décision,</li>
                    <li>et d’accélérer les interventions sur le terrain.</li>
                </ul>

                <h3 class="sub-block-title" style="margin-top: 15px;">5. Structurer et moderniser le back-office institutionnel</h3>
                <p>Le portail doit permettre l’harmonisation et la digitalisation des pratiques administratives, notamment : l’archivage numérique, le suivi des programmes et projets, la traçabilité des actions, garantissant ainsi transparence, continuité et efficacité.</p>

                <h3 class="sub-block-title" style="margin-top: 15px;">6. Fluidifier la transmission des savoirs</h3>
                <p>Le PRASMESTI ambitionne de transformer le partage d’informations en levier de performance collective, en favorisant une circulation rapide, fiable et accessible des connaissances.</p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

        <!-- Attentes 7 et 8 -->
        <section class="presentation-card section-attentes-3">
            <div class="card-content">
                <h2 class="section-title">Services numériques et interopérabilité</h2>

                <h3 class="sub-block-title" style="margin-top: 15px;">7. Déployer un e-service régional intégré</h3>
                <p>Il s’agit de mettre en place une plateforme numérique centrale, dédiée à l’EFSTI, facilitant :</p>
                <ul>
                    <li>le partage d’expériences ;</li>
                    <li>le réseautage professionnel ;</li>
                    <li>et le renforcement continu des capacités.</li>
                </ul>

                <h3 class="sub-block-title" style="margin-top: 15px;">8. Favoriser l’interopérabilité des systèmes et des métiers</h3>
                <p>Le portail doit créer des passerelles numériques entre les différentes institutions et métiers, afin de :</p>
                <ul>
                    <li>simplifier les flux de travail,</li>
                    <li>améliorer la coordination,</li>
                    <li>renforcer la capitalisation des connaissances.</li>
                </ul>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

        <!-- Levier d'image -->
        <section class="presentation-card section-image-transformation">
            <div class="card-content">
                <h2 class="section-title">Le PRASMESTI : un levier d’image et de transformation</h2>
                <p>Au-delà de ses fonctions techniques, le PRASMESTI incarne une ambition politique et symbolique forte :</p>

                <p style="margin-top: 15px; padding: 10px; background-color: #fff7ed; border-left: 4px solid #f97316; border-radius: 4px;">
                    👉 positionner l’Afrique centrale comme un espace de savoir, d’innovation et de développement du capital humain.
                </p>

                <ul style="margin-top: 15px;">
                    <li><strong>Une identité porteuse de sens :</strong> le choix du vert reflète un engagement en faveur de la durabilité et de l’alignement avec les Objectifs de Développement Durable (ODD).</li>
                    <li><strong>Une cohérence institutionnelle affirmée :</strong> son design et son ergonomie respectent la charte graphique de la CEEAC, en harmonie avec les orientations de l’Agenda 2063 et de l’Agenda 2030.</li>
                    <li><strong>Une appropriation facilitée :</strong> grâce à un univers visuel cohérent et intuitif, les usagers s’approprient plus facilement les objectifs régionaux et les outils proposés.</li>
                </ul>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

        <!-- Modalités et Acteurs -->
        <section class="presentation-card section-acteurs">
            <div class="card-content">
                <h2 class="section-title">Modalités d'accès & Un outil au service de tous</h2>

                <h3 class="sub-block-title" style="margin-top: 15px;">Quelles modalités d’accès ?</h3>
                <p>Le portail propose un accès différencié, adapté aux profils des utilisateurs :</p>
                <ul>
                    <li><strong>Intranet :</strong> accès sécurisé pour les collaborateurs de la CEEAC et les points focaux, dédié à la gestion interne et à la coordination ;</li>
                    <li><strong>Extranet :</strong> accès réservé aux institutions et établissements EFSTI des États membres dûment enregistrés ;</li>
                    <li><strong>Internet :</strong> accès public à certaines données, informations générales et statistiques.</li>
                </ul>

                <h3 class="sub-block-title" style="margin-top: 15px;">Un outil au service de tous les acteurs</h3>
                <p>Le PRASMESTI offre des opportunités concrètes à chaque catégorie d’acteurs :</p>
                <ul>
                    <li><strong>États membres :</strong> valoriser leurs performances, attirer des partenariats et renforcer le pilotage des politiques publiques ;</li>
                    <li><strong>Éditeurs de solutions numériques :</strong> promouvoir leurs expertises (audit, formation, solutions innovantes) ;</li>
                    <li><strong>Bureaux d’études et partenaires techniques :</strong> présenter leurs offres de services, de l’analyse stratégique à la mise en œuvre opérationnelle.</li>
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
                <h2 class="section-title">En synthèse</h2>
                <p>Les attentes du PRASMESTI convergent vers une finalité claire :</p>

                <p style="font-size: 1.1rem; font-weight: bold; color: #f97316; text-align: center; padding: 15px; background-color: #fff7ed; border-radius: 8px; margin: 15px 0;">
                    👉 faire du numérique un levier d’intégration, de gouvernance et de transformation durable.
                </p>

                <p>
                    Le PRASMESTI devient ainsi un outil fédérateur, au service d’une Afrique centrale plus connectée, plus performante et résolument tournée vers l’avenir.
                </p>
            </div>
            <div class="card-image">
                <!-- Insérez votre balise <img> ici -->
                <span>Espace Image</span>
            </div>
        </section>

    </div>
</section>