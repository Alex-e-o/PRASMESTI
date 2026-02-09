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
                            <h4 class="mb-0">Historique des actions</h4>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="position-relative">
                                    <div class="modal-button mt-2">
                                        <div class="row align-items-start">
                                            <div class="col-sm-auto">
                                                <div class="d-flex gap-1">
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" id="datepicker-range">
                                                        <span class="input-group-text"><i class="bx bx-calendar-event"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="table-invoices-list"></div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="modal fade" id="addInvoiceModal" tabindex="-1" aria-labelledby="addInvoiceModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-xl modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addInvoiceModalLabel">Détails de l'action</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                        <form>
                            <div class="text-center mb-4">
                                <h5>Informations complémentaires</h5>
                                <p class="card-title-desc">Détails historiques de l'enregistrement sélectionné.</p>
                            </div>
                        </form>
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
                            Développé par <a href="https://www.it-corp.co" target="_blank" class="text-reset">IT CORP</a>
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

<script src="assets/libs/gridjs/gridjs.umd.js"></script>
<script src="assets/libs/flatpickr/flatpickr.min.js"></script>
<script src="assets/js/pages/historique.js"></script>

<script src="assets/js/app.js"></script>

</body>
</html>