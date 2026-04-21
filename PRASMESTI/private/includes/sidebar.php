<div class="vertical-menu custom-vertical-menu" id="app-sidebar">
    <div class="navbar-brand-box">
        <a href="index.php?p=dashboard" class="logo logo-dark">
            <span class="logo-sm">
                <img src="assets/images/Logo.png" alt="" height="26">
            </span>
            <span class="logo-lg">
                <img src="assets/images/Logo.png" alt="" height="28">
                <span class="page-title-black sidebar-brand-text">PRASMESTI</span>
            </span>
        </a>
    </div>

    <div class="sidebar-menu-scroll">
        <div id="sidebar-menu" style="padding-top: 10px;">
            <ul class="list-unstyled sidebar-nav mb-0">

                <li class="sidebar-item <?php echo ($p == 'dashboard') ? 'active' : ''; ?>">
                    <a class="sidebar-link" href="index.php?p=dashboard">
                        <i class="bx bx-home-alt icon nav-icon"></i>
                        <span class="menu-item">Tableau de bord</span>
                    </a>
                </li>

                <li class="sidebar-item has-submenu <?php echo in_array($p, ['ajout_doc', 'liste_doc']) ? 'open active' : ''; ?>">
                    <button class="sidebar-link sidebar-toggle" type="button" data-menu-toggle>
                        <span class="sidebar-link-content">
                            <i class="bx bx-envelope icon nav-icon"></i>
                            <span class="menu-item">Documents</span>
                        </span>
                        <i class="bx bx-chevron-down submenu-arrow"></i>
                    </button>

                    <ul class="sidebar-submenu" <?php echo in_array($p, ['ajout_doc', 'liste_doc']) ? 'style="display:block;"' : ''; ?>>
                        <li>
                            <a class="<?php echo ($p == 'ajout_doc') ? 'active' : ''; ?>" href="index.php?p=ajout_doc">
                                Ajout d'un document
                            </a>
                        </li>
                        <li>
                            <a class="<?php echo ($p == 'liste_doc') ? 'active' : ''; ?>" href="index.php?p=liste_doc">
                                Liste des documents
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="sidebar-item has-submenu <?php echo in_array($p, ['questionnaire', 'liste_projets']) ? 'open active' : ''; ?>">
                    <button class="sidebar-link sidebar-toggle" type="button" data-menu-toggle>
                        <span class="sidebar-link-content">
                            <i class="bx bx-folder-open icon nav-icon"></i>
                            <span class="menu-item">Projets et Initiatives</span>
                        </span>
                        <i class="bx bx-chevron-down submenu-arrow"></i>
                    </button>

                    <ul class="sidebar-submenu" <?php echo in_array($p, ['questionnaire', 'liste_projets']) ? 'style="display:block;"' : ''; ?>>
                        <li>
                            <a class="<?php echo ($p == 'questionnaire') ? 'active' : ''; ?>" href="index.php?p=questionnaire">
                                Questionnaire
                            </a>
                        </li>
                        <li>
                            <a class="<?php echo ($p == 'liste_projets') ? 'active' : ''; ?>" href="index.php?p=liste_projets">
                                Liste des projets
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="sidebar-item <?php echo ($p == 'rapports') ? 'active' : ''; ?>">
                    <a class="sidebar-link" href="index.php?p=rapports">
                        <i class="bx bx-layout icon nav-icon"></i>
                        <span class="menu-item">Rapports</span>
                    </a>
                </li>

                <li class="sidebar-item <?php echo ($p == 'statistiques') ? 'active' : ''; ?>">
                    <a class="sidebar-link" href="index.php?p=statistiques">
                        <i class="bx bx-bar-chart icon nav-icon"></i>
                        <span class="menu-item">Statistiques</span>
                    </a>
                </li>

                <li class="sidebar-item <?php echo ($p == 'historique') ? 'active' : ''; ?>">
                    <a class="sidebar-link" href="index.php?p=historique">
                        <i class="bx bx-history icon nav-icon"></i>
                        <span class="menu-item">Historique des actions</span>
                    </a>
                </li>

                <li class="menu-title">Navigation</li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="../public/index.php">
                        <i class="bx bx-arrow-back icon nav-icon"></i>
                        <span class="menu-item">Retour au site public</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>