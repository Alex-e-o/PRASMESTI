<div class="vertical-menu">
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

    <div data-simplebar class="sidebar-menu-scroll">
        <div id="sidebar-menu" style="padding-top: 10px;">
            <ul class="metismenu list-unstyled" id="side-menu">

                <li class="<?php echo ($p == 'dashboard') ? 'mm-active' : ''; ?>">
                    <a href="index.php?p=dashboard" class="<?php echo ($p == 'dashboard') ? 'active' : ''; ?>">
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

                <li class="<?php echo ($p == 'questionnaire') ? 'mm-active' : ''; ?>">
                    <a href="javascript: void(0);" class="has-arrow">
                        <i class="bx bx-folder-open icon nav-icon"></i>
                        <span class="menu-item">Projets et Initiatives</span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="index.php?p=questionnaire" class="<?php echo ($p == 'questionnaire') ? 'active' : ''; ?>">Questionnaire</a></li>
                        <li><a href="#">Liste des projets</a></li>
                    </ul>
                </li>

                <li>
                    <a href="#" class="has-arrow">
                        <i class="bx bx-layout icon nav-icon"></i>
                        <span class="menu-item" data-key="t-forms">Rapports</span>
                    </a>
                </li>

                <li class="<?php echo ($p == 'statistiques') ? 'mm-active' : ''; ?>">
                    <a href="index.php?p=statistiques" class="has-arrow <?php echo ($p == 'statistiques') ? 'active' : ''; ?>">
                        <i class="bx bx-bar-chart icon nav-icon"></i>
                        <span class="menu-item" data-key="t-tables">Statistiques</span>
                    </a>
                </li>

                <li class="<?php echo ($p == 'historique') ? 'mm-active' : ''; ?>">
                    <a href="index.php?p=historique" class="has-arrow <?php echo ($p == 'historique') ? 'active' : ''; ?>">
                        <i class="bx bx-history icon nav-icon"></i>
                        <span class="menu-item" data-key="t-charts">Historique des actions</span>
                    </a>
                </li>

                <li class="menu-title">Navigation</li>
                <li>
                    <a href="../public/index.php">
                        <i class="bx bx-arrow-back icon nav-icon"></i>
                        <span class="menu-item">Retour au site public</span>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</div>