<?php
// ------------------------------------------------------------------
// 1. CONFIGURATION DES DONNÉES (PHP)
// Ajoutez ou modifiez vos sites ici. C'est la seule partie à toucher !
// ------------------------------------------------------------------
$pageTitle = "Portail de Projets";
$subTitle = "Bienvenue sur mon hub central. Voici mes différentes réalisations.";
$myEmail = "alexisossene@gmail.com";

// Tableau contenant les sites (Titre, URL, Description, Icone FontAwesome)
$sites = [
    [
        "title" => "PRASMESTI",
        "url" => "PRASMESTI/", // Lien vers votre projet actuel
        "desc" => "Portail Régional d'Aide au Suivi en Matière d'Éducation, Sciences, Technologies et Innovations (CEEAC).",
        "icon" => "fas fa-globe-africa",
        "color" => "#ff5528" // Couleur spécifique (orange du logo)
    ],
    [
        "title" => "Mon Portfolio",
        "url" => "https://github.com/Alex-e-o",
        "desc" => "Présentation de mes compétences dans les différents langages de programmation.",
        "icon" => "fas fa-laptop-code",
        "color" => "#3498db"
    ],
    [
        "title" => "Blog Personnel",
        "url" => "#",
        "desc" => "Mes articles sur la technologie et l'innovation.",
        "icon" => "fas fa-pen-nib",
        "color" => "#9b59b6"
    ],
    [
        "title" => "Contactez-moi",
        "url" => "mailto:" . $myEmail,
        "desc" => "Envoyez-moi un courriel pour une collaboration.",
        "icon" => "fas fa-envelope",
        "color" => "#2ecc71"
    ]
];
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle; ?></title>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap" rel="stylesheet">

    <style>
        /* ------------------------------------------------------------------
           2. STYLES CSS (Design et Mise en page)
           ------------------------------------------------------------------ */
        :root {
            --bg-color: #f4f7f6;
            --text-color: #333;
            --card-bg: #ffffff;
            --hover-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Nunito', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            /* Centrage vertical et horizontal de tout le contenu principal */
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }

        /* En-tête */
        header {
            text-align: center;
            padding: 60px 20px 40px;
        }

        header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: #2c3e50;
        }

        header p {
            font-size: 1.1rem;
            color: #7f8c8d;
        }

        /* Conteneur principal (Grille de cartes) */
        .container {
            max-width: 1000px;
            width: 90%;
            margin: 0 auto;
            /* Utilisation de Flexbox pour organiser les cartes */
            display: flex;
            flex-wrap: wrap; 
            justify-content: center; /* Centre les cartes horizontalement */
            gap: 25px; /* Espace entre les cartes */
            padding-bottom: 50px;
        }

        /* Style des Cartes */
        .card {
            background: var(--card-bg);
            border-radius: 15px;
            width: 280px; /* Largeur fixe pour uniformité */
            text-decoration: none;
            color: inherit;
            padding: 30px;
            text-align: center;
            transition: all 0.3s ease; /* Animation fluide */
            border: 1px solid rgba(0,0,0,0.05);
            
            /* Flexbox interne à la carte pour aligner icone, titre, texte */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }

        /* Effet au survol de la souris */
        .card:hover {
            transform: translateY(-10px); /* La carte "monte" */
            box-shadow: var(--hover-shadow);
        }

        .card-icon {
            font-size: 3rem;
            margin-bottom: 20px;
            transition: transform 0.3s;
        }

        .card:hover .card-icon {
            transform: scale(1.1); /* L'icône grossit légèrement */
        }

        .card h2 {
            font-size: 1.3rem;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .card p {
            font-size: 0.9rem;
            color: #666;
            line-height: 1.5;
        }

        /* Pied de page */
        footer {
            margin-top: auto; /* Pousse le footer tout en bas */
            text-align: center;
            padding: 20px;
            background: #2c3e50;
            color: white;
            font-size: 0.9rem;
        }
        
        /* Bouton "Visiter" stylisé */
        .btn-visit {
            margin-top: 20px;
            padding: 8px 20px;
            border-radius: 20px;
            background-color: #ecf0f1;
            color: #2c3e50;
            font-weight: bold;
            font-size: 0.85rem;
            transition: background 0.3s;
        }
        
        .card:hover .btn-visit {
            background-color: #2c3e50;
            color: white;
        }

    </style>
</head>
<body>

    <header>
        <h1><?php echo $pageTitle; ?></h1>
        <p><?php echo $subTitle; ?></p>
    </header>

    <main class="container">
        <?php foreach ($sites as $site): ?>
            
            <a href="<?php echo $site['url']; ?>" class="card">
                <div class="card-icon" style="color: <?php echo $site['color']; ?>;">
                    <i class="<?php echo $site['icon']; ?>"></i>
                </div>
                
                <div>
                    <h2><?php echo $site['title']; ?></h2>
                    <p><?php echo $site['desc']; ?></p>
                </div>

                <div class="btn-visit">Visiter <i class="fas fa-arrow-right"></i></div>
            </a>

        <?php endforeach; ?>
    </main>

    <footer>
        &copy; <?php echo date("Y"); ?> - <?php echo $pageTitle; ?>. Tous droits réservés.
    </footer>

</body>
</html>
