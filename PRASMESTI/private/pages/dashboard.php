<!doctype html>
<html lang="fr">

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
        .btn-primary {
            color: #fff;
            background-color: #003e73;
            border-color: transparent;
        }
        .navbar-brand-box {
            background-color: #fff;
        }
    </style>
</head>

<body>

<div id="layout-wrapper">

    <header id="page-topbar" class="isvertical-topbar">
        <div class="navbar-header">
            <div class="d-flex">
                <div class="navbar-brand-box">
                    <a href="../" class="logo logo-dark">
                        <span class="logo-sm">
                            <img src="assets/images/Logo.png" alt="" height="26">
                        </span>
                        <span class="logo-lg">
                            <img src="assets/images/Logo.png" alt="" height="28">
                            <span class="page-title-black">PRASMESTI</span>
                        </span>
                    </a>
                </div>

                <button type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn">
                    <i class="bx bx-menu align-middle"></i>
                </button>

                <div class="page-title-box align-self-center d-none d-md-block">
                    <h4 class="page-title mb-0">Tableau de bord</h4>
                </div>
            </div>

            <div class="d-flex">
                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item noti-icon"
                            id="page-header-notifications-dropdown-v" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        <i class="bx bx-bell icon-sm align-middle"></i>
                        <span class="noti-dot bg-danger rounded-pill">4</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-xl dropdown-menu-end p-0"
                         aria-labelledby="page-header-notifications-dropdown-v">
                        <div class="p-3">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h5 class="m-0 font-size-15"> Notifications </h5>
                                </div>
                            </div>
                        </div>
                        <div data-simplebar style="max-height: 250px;">
                            <a href="#!" class="text-reset notification-item">
                                <div class="d-flex">
                                    <div class="flex-grow-1">
                                        <p class="text-muted font-size-13 mb-0 float-end">Il y'a 1 heure</p>
                                        <div>
                                            <p class="mb-0">Réunion nationale des experts en éducation prévue le 25 novembre à 10h00.</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="dropdown d-inline-block">
                    <button type="button" class="btn header-item user text-start d-flex align-items-center"
                            id="page-header-user-dropdown-v" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                        <img class="rounded-circle header-profile-user" src="assets/images/users/Blaise_OSSENE.jpg"
                             alt="Avatar">
                        <span class="d-none d-xl-inline-block ms-2 fw-medium font-size-15" style="color: #000;">
                                <?php echo htmlspecialchars($_SESSION['user_name'] ?? 'Admin'); ?>
                            </span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end pt-0">
                        <div class="p-3 border-bottom">
                            <p class="mb-0 font-size-11 text-muted">
                                <?php echo htmlspecialchars($_SESSION['user_email'] ?? 'admin@prasmesti.org'); ?>
                            </p>
                        </div>
                        <a class="dropdown-item" href="#!"><i class="mdi mdi-account-circle text-muted font-size-16 align-middle me-2"></i> Profil</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="index.php?p=logout"><i class="mdi mdi-logout text-muted font-size-16 align-middle me-2"></i> Déconnexion</a>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="vertical-menu">
        <div class="navbar-brand-box">
            <a href="" class="logo logo-dark">
                <span class="logo-sm">
                    <img src="assets/images/Logo.png" alt="" height="26">
                </span>
                <span class="logo-lg">
                    <img src="assets/images/Logo.png" alt="" height="28">
                    <span class="page-title-black">PRASMESTI</span>
                </span>
            </a>
        </div>

        <button type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn">
            <i class="bx bx-menu align-middle"></i>
        </button>

        <div data-simplebar class="sidebar-menu-scroll">
            <div id="sidebar-menu">
                <ul class="metismenu list-unstyled" id="side-menu">
                    <li>
                        <a href="index.php?p=dashboard">
                            <i class="bx bx-home-alt icon nav-icon"></i>
                            <span class="menu-item" data-key="t-dashboard">Tableau de bord</span>
                        </a>
                    </li>

                    <li>
                        <a href="javascript: void(0);" class="has-arrow">
                            <i class="bx bx-envelope icon nav-icon"></i>
                            <span class="menu-item" data-key="t-email">Documents</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li><a href="#" data-key="t-inbox">Ajout d'un document</a></li>
                            <li><a href="#" data-key="t-read-email">Liste des documents</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="javascript: void(0);" class="has-arrow">
                            <i class="bx bx-folder-open icon nav-icon"></i>
                            <span class="menu-item">Projets et Initiatives</span>
                        </a>
                        <ul class="sub-menu" aria-expanded="false">
                            <li><a href="index.php?p=questionnaire">Questionnaire</a></li>
                            <li><a href="#">Liste des projets</a></li>
                        </ul>
                    </li>

                    <li>
                        <a href="#" class="has-arrow">
                            <i class="bx bx-layout icon nav-icon"></i>
                            <span class="menu-item" data-key="t-forms">Rapports</span>
                        </a>
                    </li>

                    <li>
                        <a href="index.php?p=statistiques" class="has-arrow">
                            <i class="bx bx-bar-chart icon nav-icon"></i>
                            <span class="menu-item" data-key="t-tables">Statistiques</span>
                        </a>
                    </li>

                    <li>
                        <a href="index.php?p=historique" class="has-arrow">
                            <i class="bx bx-history icon nav-icon"></i>
                            <span class="menu-item" data-key="t-charts">Historique des actions</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-xl-12">
                        <div class="row">
                            <div class="col-xl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div>
                                            <div class="d-flex align-items-center">
                                                <div class="avatar">
                                                    <div class="avatar-title rounded bg-primary-subtle ">
                                                        <i class="bx bxs-school font-size-24 mb-0 text-primary"></i>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-0 font-size-15">Etablissements</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 class="mt-4 pt-1 mb-0 font-size-22">34 123 <span class="text-success fw-medium font-size-13 align-middle"> <i class="mdi mdi-arrow-up"></i> 8.34% </span> </h4>
                                                <div class="d-flex mt-1 align-items-end overflow-hidden">
                                                    <div class="flex-grow-1">
                                                        <p class="text-muted mb-0 text-truncate">Liste des établissements</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div>
                                            <div class="d-flex align-items-center">
                                                <div class="avatar">
                                                    <div class="avatar-title rounded bg-primary-subtle ">
                                                        <i class="bx bx-folder-open font-size-24 mb-0 text-primary"></i>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-0 font-size-15">Projets en cours</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 class="mt-4 pt-1 mb-0 font-size-22">63 </h4>
                                                <div class="d-flex mt-1 align-items-end overflow-hidden">
                                                    <div class="flex-grow-1">
                                                        <p class="text-muted mb-0 text-truncate">Projets financés</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div>
                                            <div class="d-flex align-items-center">
                                                <div class="avatar">
                                                    <div class="avatar-title rounded bg-primary-subtle ">
                                                        <i class="bx bx-pen font-size-24 mb-0 text-primary"></i>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-0 font-size-15">Alphabétisation</h6>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 class="mt-4 pt-1 mb-0 font-size-22">78%<span class="text-danger fw-medium font-size-13 align-middle"> <i class="mdi mdi-arrow-down"></i> 2.64% </span> </h4>
                                                <div class="d-flex mt-1 align-items-end overflow-hidden">
                                                    <div class="flex-grow-1">
                                                        <p class="text-muted mb-0 text-truncate">Taux d’alphabétisation</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3">
                                <div class="card">
                                    <div class="card-body">
                                        <div>
                                            <div class="d-flex align-items-center">
                                                <div class="avatar">
                                                    <div class="avatar-title rounded bg-primary-subtle ">
                                                        <i class="bx bx-user font-size-24 mb-0 text-primary"></i>
                                                    </div>
                                                </div>
                                                <div class="flex-grow-1 ms-3">
                                                    <h6 class="mb-0 font-size-15">Formation </h6>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 class="mt-4 pt-1 mb-0 font-size-22">6482 <span class="text-success fw-medium font-size-13 align-middle"> <i class="mdi mdi-arrow-down"></i> 5.79% </span> </h4>
                                                <div class="d-flex mt-1 align-items-end overflow-hidden">
                                                    <div class="flex-grow-1">
                                                        <p class="text-muted mb-0 text-truncate">Enseignants formés</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/libs/metismenujs/metismenujs.min.js"></script>
<script src="assets/libs/simplebar/simplebar.min.js"></script>
<script src="assets/libs/eva-icons/eva.min.js"></script>

<script src="assets/libs/apexcharts/apexcharts.min.js"></script>

<script src="assets/libs/jsvectormap/js/jsvectormap.min.js"></script>
<script src="assets/libs/jsvectormap/maps/world-merc.js"></script>

<script src="assets/js/pages/dashboard.init.js"></script>
<script src="assets/js/app.js"></script>

</body>
</html>