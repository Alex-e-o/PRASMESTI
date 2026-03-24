
    <style>
        .construction-section {
            background-color: #f9f9f9; /* Fond gris clair pour faire ressortir le cadre blanc */
            padding: 100px 15px; /* Espace en haut et en bas */
            min-height: 60vh; /* S'assure que le footer est poussé vers le bas */
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .construction-card {
            background-color: #ffffff;
            border: 1px solid #e5e5e5;
            border-top: 4px solid #f44336; /* Le liseré rouge/orange en haut */
            border-radius: 8px;
            padding: 60px 50px;
            max-width: 900px; /* Largeur du cadre comme sur votre image */
            width: 100%;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); /* Ombre douce */
            margin: 0 auto;
        }

        .construction-card .sub-title {
            color: #f44336;
            font-size: 1.1em;
            font-style: italic;
            display: block;
            margin-bottom: 10px;
            text-align: center;
        }

        .construction-card .sec-title {
            color: #1a1a1a;
            font-size: 2.5em;
            font-weight: bold;
            margin-bottom: 30px;
            text-align: center;
        }

        .construction-card .professional-text {
            color: #666666;
            font-size: 1.1em;
            line-height: 1.8;
            text-align: justify; /* Le texte justifié comme sur votre image */
            margin-bottom: 20px;
        }

        .construction-card .btn-wrap {
            text-align: center;
            margin-top: 40px;
        }

        /* Ajustement pour les petits écrans (téléphones) */
        @media (max-width: 768px) {
            .construction-card {
                padding: 40px 20px;
            }
        }
    </style>

    <section class="construction-section">
        <div class="construction-card">

            <div class="title-area">
                <span class="sub-title">—— Pas encore! ——</span>
                <h2 class="sec-title">En construction</h2>
            </div>

            <div class="ceeac-content">
                <p class="professional-text">
                    Nous préparons actuellement le contenu de cette section pour vous offrir des informations complètes et pertinentes. Notre équipe y travaille activement afin de mettre à votre disposition des ressources de qualité concernant la Communauté Économique des États de l'Afrique Centrale.
                </p>
                <p class="professional-text">
                    Merci de votre compréhension et de votre patience. N'hésitez pas à revenir très prochainement pour découvrir l'intégralité de nos nouveautés et de nos publications officielles.
                </p>
            </div>

            <div class="btn-wrap">
                <a href="javascript:history.back()" class="th-btn" style="display: inline-block; background-color: #002d5b; color: #fff; padding: 15px 30px; border-radius: 5px; text-decoration: none; font-weight: bold; transition: 0.3s;">
                    <i class="fas fa-arrow-left me-2"></i> Aller à la présentation
                </a>
            </div>
        </div>
    </section>

