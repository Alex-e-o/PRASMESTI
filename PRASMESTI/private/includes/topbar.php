<header id="page-topbar" class="isvertical-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <div class="navbar-brand-box">
                <a href="index.php?p=dashboard" class="logo logo-dark">
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