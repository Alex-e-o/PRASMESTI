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
        /* CORRECTION CRUCIALE POUR L'ESPACEMENT DU CONTENU */
        .page-content {
            padding-top: 80px !important; /* Ajustez cette valeur si nécessaire */
        }
    </style>
</head>

<body>

<div id="layout-wrapper">

    <?php include 'includes/topbar.php'; ?>

    <?php include 'includes/sidebar.php'; ?>

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

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

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