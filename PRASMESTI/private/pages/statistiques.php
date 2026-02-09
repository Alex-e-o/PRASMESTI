<!doctype html>
<html lang="fr">

<?php include 'includes/head.php'; ?>

<body>

<div id="layout-wrapper">

    <?php include 'includes/topbar.php'; ?>

    <?php include 'includes/sidebar.php'; ?>

    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">

                <div class="row">
                    <div class="col-12">
                        <div class="page-title-box d-flex align-items-center justify-content-between">
                            <h4 class="mb-0">Statistiques</h4>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Evolution des Projets de Réhabilitation</h4>
                            </div>
                            <div class="card-body">
                                <canvas id="lineChart" class="chartjs-chart"
                                        data-colors='["rgba(31, 88, 199, 0.2)", "#3b76e1"]'>
                                </canvas>
                                <p class="text-muted mt-3">Ce graphique montre le nombre de projets de
                                    réhabilitation des routes initiés, en cours et achevés au cours des cinq
                                    dernières années.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Répartition du Budget par Secteur</h4>
                            </div>
                            <div class="card-body">
                                <canvas id="bar" class="chartjs-chart"
                                        data-colors='["rgba(40, 183, 101, 0.8)", "rgba(40, 183, 101, 0.9)"]'>
                                </canvas>
                                <p class="text-muted mt-3">Visualisation de l'allocation budgétaire pour les
                                    infrastructures routières, la formation, et d'autres secteurs.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Répartition Géographique des Projets</h4>
                            </div>
                            <div class="card-body">
                                <canvas id="pieChart" class="chartjs-chart"
                                        data-colors='["#28b765", "#ebeff2"]'></canvas>
                                <p class="text-muted mt-3">Proportion de projets réalisés dans chaque pays membre de
                                    la CEEAC.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Statut des Projets</h4>
                            </div>
                            <div class="card-body">
                                <canvas id="doughnut" class="chartjs-chart"
                                        data-colors='["#3b76e1", "#ebeff2"]'></canvas>
                                <p class="text-muted mt-3">Répartition des projets en fonction de leur statut :
                                    terminés, en cours, ou planifiés.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Evaluation des Risques</h4>
                            </div>
                            <div class="card-body">
                                <canvas id="polarArea" class="chartjs-chart"
                                        data-colors='["#52c6ea", "#28b765", "#ed5555", "#3b76e1"]'>
                                </canvas>
                                <p class="text-muted mt-3">Analyse des risques par catégorie, incluant les aspects
                                    financiers, opérationnels et environnementaux.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title mb-0">Compétences du Personnel</h4>
                            </div>
                            <div class="card-body">
                                <canvas id="radar" class="chartjs-chart"
                                        data-colors='["rgba(42, 181, 125, 0.2)", "#28b765", "rgba(31, 88, 199, 0.2)", "#3b76e1"]'>
                                </canvas>
                                <p class="text-muted mt-3">Niveau de compétence des équipes dans des domaines clés
                                    comme la gestion de projet et l'ingénierie.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <script>document.write(new Date().getFullYear())</script> © PRASMESTI.
                    </div>
                    <div class="col-sm-6">
                        <div class="text-sm-end d-none d-sm-block">
                            Conçu par IT CORP.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/libs/metismenujs/metismenujs.min.js"></script>
<script src="assets/libs/simplebar/simplebar.min.js"></script>
<script src="assets/libs/eva-icons/eva.min.js"></script>

<script src="assets/libs/chart.js/chart.umd.js"></script>
<script src="assets/js/pages/chartjs.init.js"></script>

<script src="assets/js/app.js"></script>

</body>
</html>