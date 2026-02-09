<head>
    <meta charset="utf-8" />
    <title>Tableau de bord | PRASMESTI</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="PRASMESTI Dashboard" name="description" />
    <meta content="IT CORP" name="author" />

    <link rel="shortcut icon" href="assets/images/favicon.png">

    <link href="assets/libs/jsvectormap/css/jsvectormap.min.css" rel="stylesheet" type="text/css" />

    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />

    <style>
        .btn-primary { color: #fff; background-color: #003e73; border-color: transparent; }
        .navbar-brand-box { background-color: #fff; }
        .page-content { padding-top: 80px !important; }

        /* --- LOGIQUE HOVER (SURVOL) --- */
        /* Force l'affichage du sous-menu quand on survole le parent LI */
        #side-menu li:hover > .sub-menu {
            display: block !important;
            height: auto !important;
            visibility: visible !important;
        }
        /* Style optionnel pour montrer que c'est interactif */
        .has-arrow:after { transition: transform 0.2s; }
        #side-menu li:hover > .has-arrow:after {
            transform: rotate(-180deg);
        }
    </style>
</head>