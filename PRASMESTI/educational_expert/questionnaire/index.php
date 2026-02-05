<!doctype html>
<html lang="en">

<head>

    <meta charset="utf-8" />
    <title>PRASMESTI - Questionnaire</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="PRASMESTI, une initiative de la CEEAC pour renforcer l'intégration régionale en Afrique centrale à travers l'éducation, les sciences, la technologie et l'innovation." name="description" />
    <meta content="PRASMESTI" name="IT CORP" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="../assets/images/favicon.png">

    <!-- choices css -->
    <link href="../assets/libs/choices.js/public/assets/styles/choices.min.css" rel="stylesheet" type="text/css" />

    <!-- color picker css -->
    <link rel="stylesheet" href="../assets/libs/@simonwep/pickr/themes/classic.min.css" /> <!-- 'classic' theme -->
    <link rel="stylesheet" href="../assets/libs/@simonwep/pickr/themes/monolith.min.css" /> <!-- 'monolith' theme -->
    <link rel="stylesheet" href="../assets/libs/@simonwep/pickr/themes/nano.min.css" /> <!-- 'nano' theme -->

    <!-- datepicker css -->
    <link rel="stylesheet" href="../assets/libs/flatpickr/flatpickr.min.css">

    <!-- Bootstrap Css -->
    <link href="../assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css"/>
    <!-- Icons Css -->
    <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css"/>
    <!-- App Css-->
    <link href="../assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css"/>

    <!-- Liens en lignes -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css"> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script> -->

    <style>
        .btn-primary {
            color: #fff;
            background-color: #003e73;
            border-color: transparent;
        }
    </style>
     

</head>


<body>

    <!-- <body data-layout="horizontal"> -->

    <!-- Begin page -->
    <div id="layout-wrapper">

        <header id="page-topbar" class="isvertical-topbar">
            <div class="navbar-header">
                <div class="d-flex">
                    <!-- LOGO -->
                    <div class="navbar-brand-box">
                        <a href="" class="logo logo-dark">
                            <span class="logo-sm">
                                <img src="../assets/images/Logo.png" alt="" height="26">
                            </span>
                            <span class="logo-lg">
                                <img src="../assets/images/Logo.png" alt="" height="26">
                            </span>
                        </a>

                        <a href="" class="logo logo-light">
                            <span class="logo-lg">
                                <img src="../assets/images/Logo.png" alt="" height="30">
                            </span>
                            <span class="logo-sm">
                                <img src="../assets/images/Logo.png" alt="" height="26">
                            </span>
                        </a>
                    </div>

                    <button type="button"
                        class="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn">
                        <i class="bx bx-menu align-middle"></i>
                    </button>

                    <!-- start page title -->
                    <div class="page-title-box align-self-center d-none d-md-block">
                        <h4 class="page-title mb-0">Questionnaire sur l'Éducation et la Formation</h4>
                    </div>
                    <!-- end page title -->

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
                                                <p class="mb-0">Réunion nationale des experts en éducation prévue le 25
                                                    novembre à 10h00.</p>
                                            </div>
                                        </div>

                                    </div>
                                </a>
                                <a href="#!" class="text-reset notification-item">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <p class="text-muted font-size-13 mb-0 float-end">Il y'a 15 min</p>
                                            <div>
                                                <p class="mb-0">Rapport mensuel sur les initiatives régionales ajouté à
                                                    la section 'Documents et Directives'.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!" class="text-reset notification-item">
                                    <div class="d-flex">
                                        <div class="flex-grow-1">
                                            <p class="text-muted font-size-13 mb-0 float-end">A l'instant</p>
                                            <div>
                                                <p class="mb-0">Votre fiche de profil a été mise à jour avec votre
                                                    participation à la conférence 'Innovations en Éducation'.</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                            <div class="p-2 border-top d-grid">
                                <a class="btn btn-sm btn-link font-size-14 btn-block text-center"
                                    href="javascript:void(0)">
                                    <i class="uil-arrow-circle-right me-1"></i> <span>Voir plus..</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown d-inline-block">
                        <button type="button" class="btn header-item user text-start d-flex align-items-center"
                            id="page-header-user-dropdown-v" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <img class="rounded-circle header-profile-user" src="../assets/images/users/Blaise_OSSENE.jpg"
                                alt="Header Avatar">
                            <span class="d-none d-xl-inline-block ms-2 fw-medium font-size-15" style="color: #fff;">Blaise OSSENE</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end pt-0">
                            <div class="p-3 border-bottom">
                                <p class="mb-0 font-size-11 text-muted">blaise.ossene@pramesti.co</p>
                            </div>
                            <a class="dropdown-item" href="#!"><i
                                    class="mdi mdi-account-circle text-muted font-size-16 align-middle me-2"></i> <span
                                    class="align-middle">Profil</span></a>
                            <a class="dropdown-item" href="#!"><i
                                    class="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-2"></i> <span
                                    class="align-middle">Aide</span></a>
                            <a class="dropdown-item d-flex align-items-center" href="#"><i
                                    class="mdi mdi-cog-outline text-muted font-size-16 align-middle me-2"></i> <span
                                    class="align-middle me-3">Paramètres</span></a>
                            <a class="dropdown-item" href="../../"><i
                                    class="mdi mdi-logout text-muted font-size-16 align-middle me-2"></i> <span
                                    class="align-middle">Déconnexion</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- ========== Left Sidebar Start ========== -->
        <div class="vertical-menu">

            <!-- LOGO -->
            <div class="navbar-brand-box">
                <a href="../" class="logo logo-dark">
                    <span class="logo-sm">
                        <img src="../assets/images/Logo.png" alt="" height="26">
                    </span>
                    <span class="logo-lg">
                        <img src="../assets/images/Logo.png" alt="" height="28">
                        <span class="page-title-black">PRASMESTI</span>
                    </span>
                </a>
            </div>

            <button type="button" class="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn">
                <i class="bx bx-menu align-middle"></i>
            </button>


            <div data-simplebar class="sidebar-menu-scroll">

                <!--- Sidemenu -->
                <div id="sidebar-menu">
                    <!-- Left Menu Start -->
                    <ul class="metismenu list-unstyled" id="side-menu">
                        <li>
                            <a href="../">
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
                                <li><a href="email-inbox.html" data-key="t-inbox">Ajout d'un document</a></li>
                                <li><a href="email-read.html" data-key="t-read-email">Liste des documents</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow">
                                <i class="bx bx-folder-open icon nav-icon"></i>
                                <span class="menu-item">Projets et Initiatives</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#" data-key="t-inbox">Questionnaire</a></li>
                                <li><a href="#" data-key="t-read-email">Liste des documents</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow">
                                <i class="bx bx-layout icon nav-icon"></i>
                                <span class="menu-item" data-key="t-forms">Rapports</span>
                            </a>
                        </li>

                        <li>
                            <a href="../statistiques" class="has-arrow">
                                <i class="bx bx-bar-chart icon nav-icon"></i>
                                <span class="menu-item" data-key="t-tables">Statistiques</span>
                            </a>
                        </li>

                        <li>
                            <a href="../historiques" class="has-arrow">
                                <i class="bx bx-history icon nav-icon"></i>
                                <span class="menu-item" data-key="t-charts">Historique des actions</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- Sidebar -->
            </div>
        </div>
        <!-- Left Sidebar End -->
        <header class="ishorizontal-topbar">
            <div class="navbar-header">
                <div class="d-flex">
                    <!-- LOGO -->
                    <div class="navbar-brand-box">
                        <a href="" class="logo logo-dark">
                            <span class="logo-sm">
                                <img src="../assets/images/logo-dark-sm.png" alt="" height="26">
                            </span>
                            <span class="logo-lg">
                                <img src="../assets/images/logo-dark.png" alt="" height="28">
                            </span>
                        </a>

                        <a href="" class="logo logo-light">
                            <span class="logo-sm">
                                <img src="../assets/images/logo-light-sm.png" alt="" height="26">
                            </span>
                            <span class="logo-lg">
                                <img src="../assets/images/Logo.png" alt="" height="30">
                            </span>
                        </a>
                    </div>

                    <button type="button" class="btn btn-sm px-3 font-size-24 d-lg-none header-item"
                        data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                        <i class="bx bx-menu align-middle"></i>
                    </button>

                    <!-- start page title -->
                    <div class="page-title-box align-self-center d-none d-md-block">
                        <h4 class="page-title mb-0">Hi, Welcome Back!</h4>
                    </div>
                    <!-- end page title -->

                </div>

                <div class="d-flex">

                    <div class="dropdown d-inline-block language-switch ms-2 ms-xl-3">
                        <button type="button" class="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <img class="header-lang-img" src="../assets/images/flags/us.jpg" alt="Header Language"
                                height="18">
                        </button>
                        <div class="dropdown-menu dropdown-menu-end">

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="eng">
                                <img src="../assets/images/flags/us.jpg" alt="user-image" class="me-1" height="12"> <span
                                    class="align-middle">English</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="sp">
                                <img src="../assets/images/flags/spain.jpg" alt="user-image" class="me-1" height="12">
                                <span class="align-middle">Spanish</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="gr">
                                <img src="../assets/images/flags/germany.jpg" alt="user-image" class="me-1" height="12">
                                <span class="align-middle">German</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="it">
                                <img src="../assets/images/flags/italy.jpg" alt="user-image" class="me-1" height="12">
                                <span class="align-middle">Italian</span>
                            </a>

                            <!-- item-->
                            <a href="javascript:void(0);" class="dropdown-item notify-item language" data-lang="ru">
                                <img src="../assets/images/flags/russia.jpg" alt="user-image" class="me-1" height="12">
                                <span class="align-middle">Russian</span>
                            </a>
                        </div>
                    </div>

                    <div class="dropdown d-inline-block">
                        <button type="button" class="btn header-item noti-icon" data-bs-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-search icon-sm align-middle"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                            <form class="p-2">
                                <div class="search-box">
                                    <div class="position-relative">
                                        <input type="text" class="form-control rounded bg-light border-0"
                                            placeholder="Search...">
                                        <i class="bx bx-search search-icon"></i>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="dropdown d-inline-block">
                        <button type="button" class="btn header-item noti-icon" id="page-header-notifications-dropdown"
                            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="bx bx-bell icon-sm align-middle"></i>
                            <span class="noti-dot bg-danger rounded-pill">4</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                            aria-labelledby="page-header-notifications-dropdown">
                            <div class="p-3">
                                <div class="row align-items-center">
                                    <div class="col">
                                        <h5 class="m-0 font-size-15"> Notifications </h5>
                                    </div>
                                    <div class="col-auto">
                                        <a href="#!" class="small fw-semibold text-decoration-underline"> Mark all as
                                            read</a>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar style="max-height: 250px;">
                                <a href="#!" class="text-reset notification-item">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 me-3">
                                            <img src="../assets/images/users/Blaise_OSSENE.jpg" class="rounded-circle avatar-sm"
                                                alt="user-pic">
                                        </div>
                                        <div class="flex-grow-1">
                                            <h6 class="mb-1">James Lemire</h6>
                                            <div class="font-size-13 text-muted">
                                                <p class="mb-1">It will seem like simplified English.</p>
                                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span>1 hour
                                                        ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!" class="text-reset notification-item">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 avatar-sm me-3">
                                            <span class="avatar-title bg-primary rounded-circle font-size-16">
                                                <i class="bx bx-cart"></i>
                                            </span>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h6 class="mb-1">Your order is placed</h6>
                                            <div class="font-size-13 text-muted">
                                                <p class="mb-1">If several languages coalesce the grammar</p>
                                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span>3 min
                                                        ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <a href="#!" class="text-reset notification-item">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 avatar-sm me-3">
                                            <span class="avatar-title bg-success rounded-circle font-size-16">
                                                <i class="bx bx-badge-check"></i>
                                            </span>
                                        </div>
                                        <div class="flex-grow-1">
                                            <h6 class="mb-1">Your item is shipped</h6>
                                            <div class="font-size-13 text-muted">
                                                <p class="mb-1">If several languages coalesce the grammar</p>
                                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span>3 min
                                                        ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="#!" class="text-reset notification-item">
                                    <div class="d-flex">
                                        <div class="flex-shrink-0 me-3">
                                            <img src="../assets/images/users/avatar-6.jpg" class="rounded-circle avatar-sm"
                                                alt="user-pic">
                                        </div>
                                        <div class="flex-grow-1">
                                            <h6 class="mb-1">Salena Layfield</h6>
                                            <div class="font-size-13 text-muted">
                                                <p class="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                                                <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span>1 hour
                                                        ago</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="p-2 border-top d-grid">
                                <a class="btn btn-sm btn-link font-size-14 btn-block text-center"
                                    href="javascript:void(0)">
                                    <i class="uil-arrow-circle-right me-1"></i> <span>View More..</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="dropdown d-inline-block">
                        <button type="button" class="btn header-item user text-start d-flex align-items-center"
                            id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <img class="rounded-circle header-profile-user" src="../assets/images/users/Blaise_OSSENE.jpg"
                                alt="Header Avatar">
                            <span class="d-none d-xl-inline-block ms-2 fw-medium font-size-15">Martin Gurley</span>
                        </button>
                        <div class="dropdown-menu dropdown-menu-end pt-0">
                            <div class="p-3 border-bottom">
                                <h6 class="mb-0">Martin Gurley</h6>
                                <p class="mb-0 font-size-11 text-muted">martin.gurley@email.com</p>
                            </div>
                            <a class="dropdown-item" href="contacts-profile.html"><i
                                    class="mdi mdi-account-circle text-muted font-size-16 align-middle me-2"></i> <span
                                    class="align-middle">Profile</span></a>
                            <a class="dropdown-item" href="apps-chat.html"><i
                                    class="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-2"></i>
                                <span class="align-middle">Messages</span></a>
                            <a class="dropdown-item" href="pages-faqs.html"><i
                                    class="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-2"></i> <span
                                    class="align-middle">Help</span></a>
                            <a class="dropdown-item d-flex align-items-center" href="#"><i
                                    class="mdi mdi-cog-outline text-muted font-size-16 align-middle me-2"></i> <span
                                    class="align-middle me-3">Settings</span><span
                                    class="badge bg-success-subtle text-success  ms-auto">New</span></a>
                            <a class="dropdown-item" href="auth-lock-screen.html"><i
                                    class="mdi mdi-lock text-muted font-size-16 align-middle me-2"></i> <span
                                    class="align-middle">Lock screen</span></a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="auth-logout.html"><i
                                    class="mdi mdi-logout text-muted font-size-16 align-middle me-2"></i> <span
                                    class="align-middle">Logout</span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="topnav">
                <div class="container-fluid">
                    <nav class="navbar navbar-light navbar-expand-lg topnav-menu">

                        <div class="collapse navbar-collapse" id="topnav-menu-content">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-home-alt icon nav-icon"></i>
                                        <span data-key="t-dashboards">Dashboards</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-dashboard">
                                        <a href="index.html" class="dropdown-item" data-key="t-ecommerce">Ecommerce</a>
                                        <a href="dashboard-sales.html" class="dropdown-item"
                                            data-key="t-sales">Sales</a>
                                    </div>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement"
                                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="bx bx-cube icon nav-icon"></i>
                                        <span data-key="t-elements">Elements</span>
                                        <div class="arrow-down"></div>
                                    </a>

                                    <div class="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
                                        aria-labelledby="topnav-uielement">
                                        <div class="ps-2 p-lg-0">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div>
                                                        <div class="menu-title">Elements</div>
                                                        <div class="row g-0">
                                                            <div class="col-lg-4">
                                                                <div>
                                                                    <a href="ui-alerts.html" class="dropdown-item"
                                                                        data-key="t-alerts">Alerts</a>
                                                                    <a href="ui-buttons.html" class="dropdown-item"
                                                                        data-key="t-buttons">Buttons</a>
                                                                    <a href="ui-cards.html" class="dropdown-item"
                                                                        data-key="t-cards">Cards</a>
                                                                    <a href="ui-carousel.html" class="dropdown-item"
                                                                        data-key="t-carousel">Carousel</a>
                                                                    <a href="ui-dropdowns.html" class="dropdown-item"
                                                                        data-key="t-dropdowns">Dropdowns</a>
                                                                    <a href="ui-grid.html" class="dropdown-item"
                                                                        data-key="t-grid">Grid</a>
                                                                    <a href="ui-images.html" class="dropdown-item"
                                                                        data-key="t-images">Images</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <div>
                                                                    <a href="ui-lightbox.html" class="dropdown-item"
                                                                        data-key="t-lightbox">Lightbox</a>
                                                                    <a href="ui-modals.html" class="dropdown-item"
                                                                        data-key="t-modals">Modals</a>
                                                                    <a href="ui-offcanvas.html" class="dropdown-item"
                                                                        data-key="t-offcanvas">Offcanvas</a>
                                                                    <a href="ui-rangeslider.html" class="dropdown-item"
                                                                        data-key="t-range-slider">Range Slider</a>
                                                                    <a href="ui-progressbars.html" class="dropdown-item"
                                                                        data-key="t-progress-bars">Progress Bars</a>
                                                                    <a href="ui-sweet-alert.html" class="dropdown-item"
                                                                        data-key="t-sweet-alert">Sweet-Alert</a>
                                                                    <a href="ui-tabs-accordions.html"
                                                                        class="dropdown-item"
                                                                        data-key="t-tabs-accordions">Tabs &
                                                                        Accordions</a>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-4">
                                                                <div>
                                                                    <a href="ui-typography.html" class="dropdown-item"
                                                                        data-key="t-typography">Typography</a>
                                                                    <a href="ui-video.html" class="dropdown-item"
                                                                        data-key="t-video">Video</a>
                                                                    <a href="ui-general.html" class="dropdown-item"
                                                                        data-key="t-general">General</a>
                                                                    <a href="ui-colors.html" class="dropdown-item"
                                                                        data-key="t-colors">Colors</a>
                                                                    <a href="ui-rating.html" class="dropdown-item"
                                                                        data-key="t-rating">Rating</a>
                                                                    <a href="ui-notifications.html"
                                                                        class="dropdown-item"
                                                                        data-key="t-notifications">Notifications</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-pages"
                                        role="button">
                                        <i class="bx bx-store icon nav-icon"></i>
                                        <span data-key="t-apps">Apps</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-pages">

                                        <a href="apps-calendar.html" class="dropdown-item"
                                            data-key="t-calendar">Calendar</a>

                                        <a href="apps-todo.html" class="dropdown-item" data-key="t-todo">Todo</a>

                                        <a href="apps-file-manager.html" class="dropdown-item"
                                            data-key="t-filemanager">File Manager</a>

                                        <a href="apps-chat.html" class="dropdown-item" data-key="t-chat">Chat</a>


                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#"
                                                id="topnav-ecommerce" role="button">
                                                <span data-key="t-ecommerce">Ecommerce</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-ecommerce">
                                                <a href="ecommerce-products.html" class="dropdown-item"
                                                    data-key="t-products">Products</a>
                                                <a href="ecommerce-product-detail.html" class="dropdown-item"
                                                    data-key="t-product-detail">Product Detail</a>
                                                <a href="ecommerce-orders.html" class="dropdown-item"
                                                    data-key="t-orders">Orders</a>
                                                <a href="ecommerce-customers.html" class="dropdown-item"
                                                    data-key="t-customers">Customers</a>
                                                <a href="ecommerce-cart.html" class="dropdown-item"
                                                    data-key="t-cart">Cart</a>
                                                <a href="ecommerce-checkout.html" class="dropdown-item"
                                                    data-key="t-checkout">Checkout</a>
                                                <a href="ecommerce-shops.html" class="dropdown-item"
                                                    data-key="t-shops">Shops</a>
                                                <a href="ecommerce-add-product.html" class="dropdown-item"
                                                    data-key="t-add-product">Add Product</a>
                                            </div>
                                        </div>

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#"
                                                id="topnav-email" role="button">
                                                <span data-key="t-email">Email</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-email">
                                                <a href="email-inbox.html" class="dropdown-item"
                                                    data-key="t-inbox">Inbox</a>
                                                <a href="email-read.html" class="dropdown-item"
                                                    data-key="t-read-email">Read Email</a>
                                            </div>
                                        </div>

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#"
                                                id="topnav-invoices" role="button">
                                                <span data-key="t-invoices">Invoices</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-invoices">
                                                <a href="invoices-list.html" class="dropdown-item"
                                                    data-key="t-invoice-list">Invoice List</a>
                                                <a href="invoices-detail.html" class="dropdown-item"
                                                    data-key="t-invoice-detail">Invoice Detail</a>
                                            </div>
                                        </div>

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#"
                                                id="topnav-contact" role="button">
                                                <span data-key="t-contacts">Contacts</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-contact">
                                                <a href="contacts-grid.html" class="dropdown-item"
                                                    data-key="t-user-grid">User Grid</a>
                                                <a href="contacts-list.html" class="dropdown-item"
                                                    data-key="t-user-list">User List</a>
                                                <a href="contacts-profile.html" class="dropdown-item"
                                                    data-key="t-user-profile">Profile</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-components"
                                        role="button">
                                        <i class="bx bx-layer icon nav-icon"></i>
                                        <span data-key="t-components">Components</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-components">
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#"
                                                id="topnav-form" role="button">
                                                <span data-key="t-forms">Forms</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-form">
                                                <a href="form-elements.html" class="dropdown-item"
                                                    data-key="t-form-elements">Form Elements</a>
                                                <a href="form-layouts.html" class="dropdown-item"
                                                    data-key="t-form-layouts">Form Layouts</a>
                                                <a href="form-validation.html" class="dropdown-item"
                                                    data-key="t-form-validation">Form Validation</a>
                                                <a href="form-advanced.html" class="dropdown-item"
                                                    data-key="t-form-advanced">Form Advanced</a>
                                                <a href="form-editors.html" class="dropdown-item"
                                                    data-key="t-form-editors">Form Editors</a>
                                                <a href="form-uploads.html" class="dropdown-item"
                                                    data-key="t-form-upload">Form File Upload</a>
                                                <a href="form-wizard.html" class="dropdown-item"
                                                    data-key="t-form-wizard">Form Wizard</a>
                                                <a href="form-mask.html" class="dropdown-item"
                                                    data-key="t-form-mask">Form Mask</a>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#"
                                                id="topnav-table" role="button">
                                                <span data-key="t-tables">Tables</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-table">
                                                <a href="tables-basic.html" class="dropdown-item"
                                                    data-key="t-basic-tables">Basic Tables</a>
                                                <a href="tables-advanced.html" class="dropdown-item"
                                                    data-key="t-advanced-tables">Advance Tables</a>
                                            </div>
                                        </div>

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#"
                                                id="topnav-charts" role="button">
                                                <span data-key="t-charts">Charts</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-charts">
                                                <a href="charts-apex.html" class="dropdown-item"
                                                    data-key="t-apex-charts">Apex Charts</a>
                                                <a href="charts-chartjs.html" class="dropdown-item"
                                                    data-key="t-chartjs-charts">Chartjs Charts</a>
                                                <a href="charts-tui.html" class="dropdown-item"
                                                    data-key="t-ui-charts">Toast UI Charts</a>
                                            </div>
                                        </div>

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#"
                                                id="topnav-icons" role="button">
                                                <span data-key="t-icons">Icons</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-icons">
                                                <a href="icons-evaicons.html" class="dropdown-item"
                                                    data-key="t-evaicons">Eva Icons</a>
                                                <a href="icons-boxicons.html" class="dropdown-item"
                                                    data-key="t-boxicons">Boxicons</a>
                                                <a href="icons-materialdesign.html" class="dropdown-item"
                                                    data-key="t-material-design">Material Design</a>
                                                <a href="icons-fontawesome.html" class="dropdown-item"
                                                    data-key="t-font-awesome">Font Awesome 5</a>
                                            </div>
                                        </div>
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#" id="topnav-map"
                                                role="button">
                                                <span data-key="t-maps">Maps</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-map">
                                                <a href="maps-google.html" class="dropdown-item"
                                                    data-key="t-google">Google</a>
                                                <a href="maps-vector.html" class="dropdown-item"
                                                    data-key="t-vector">Vector</a>
                                                <a href="maps-leaflet.html" class="dropdown-item"
                                                    data-key="t-leaflet">Leaflet</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-more"
                                        role="button">
                                        <i class="bx bx-file icon nav-icon"></i>
                                        <span data-key="t-pages">Pages</span>
                                        <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-more">
                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#"
                                                id="topnav-authentication" role="button">
                                                <span data-key="t-authentication">Authentication</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-authentication">
                                                <a href="auth-login.html" class="dropdown-item"
                                                    data-key="t-login">Login</a>
                                                <a href="auth-register.html" class="dropdown-item"
                                                    data-key="t-register">Register</a>
                                                <a href="auth-recoverpw.html" class="dropdown-item"
                                                    data-key="t-recover-password">Recover Password</a>
                                                <a href="auth-lock-screen.html" class="dropdown-item"
                                                    data-key="t-lock-screen">Lock Screen</a>
                                                <a href="auth-logout.html" class="dropdown-item"
                                                    data-key="t-logout">Logout</a>
                                                <a href="auth-confirm-mail.html" class="dropdown-item"
                                                    data-key="t-confirm-mail">Confirm Mail</a>
                                                <a href="auth-email-verification.html" class="dropdown-item"
                                                    data-key="t-email-verification">Email Verification</a>
                                                <a href="auth-two-step-verification.html" class="dropdown-item"
                                                    data-key="t-two-step-verification">Two Step Verification</a>
                                            </div>
                                        </div>

                                        <div class="dropdown">
                                            <a class="dropdown-item dropdown-toggle arrow-none" href="#"
                                                id="topnav-utility" role="button">
                                                <span data-key="t-utility">Utility</span>
                                                <div class="arrow-down"></div>
                                            </a>
                                            <div class="dropdown-menu" aria-labelledby="topnav-utility">
                                                <a href="pages-starter.html" class="dropdown-item"
                                                    data-key="t-starter-page">Starter Page</a>
                                                <a href="pages-maintenance.html" class="dropdown-item"
                                                    data-key="t-maintenance">Maintenance</a>
                                                <a href="pages-comingsoon.html" class="dropdown-item"
                                                    data-key="t-coming-soon">Coming Soon</a>
                                                <a href="pages-timeline.html" class="dropdown-item"
                                                    data-key="t-timeline">Timeline</a>
                                                <a href="pages-faqs.html" class="dropdown-item"
                                                    data-key="t-faqs">FAQs</a>
                                                <a href="pages-pricing.html" class="dropdown-item"
                                                    data-key="t-pricing">Pricing</a>
                                                <a href="pages-404.html" class="dropdown-item"
                                                    data-key="t-error-404">Error 404</a>
                                                <a href="pages-500.html" class="dropdown-item"
                                                    data-key="t-error-500">Error 500</a>
                                            </div>
                                        </div>

                                        <a href="layouts-horizontal.html" class="dropdown-item"
                                            data-key="t-horizontal">Horizontal</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== -->
        <div class="mb-4">
        </div>

        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header text-center 0">
                                    <!-- <a href="" class="logo logo-dark">
                                        <span class="logo-sm">
                                            <img src="../assets/images/Logo.png" alt="" height="50">
                                        </span>
                                        <span class="logo-lg">
                                            <img src="../assets/images/Logo.png" alt="" height="50">
                                        </span>
                                    </a> -->
                                    <span class="logo-lg">
                                        <img src="../assets/images/Logo.png" alt="" height="30">
                                        <span class="page-title-black">PRASMESTI</span>
                                    </span>

                                    <a href="" class="logo logo-light">
                                        <span class="logo-lg">
                                            <img src="../assets/images/Logo.png" alt="" height="50">
                                        </span>
                                        <span class="logo-sm">
                                            <img src="../assets/images/Logo.png" alt="" height="50">
                                        </span>
                                    </a>
                                </div><!-- end card header -->
                                <div class="card-body">
                                    <form action="#">
                                        <ul class="wizard-nav mb-5">
                                            <li class="wizard-list-item">
                                                <div class="list-item">
                                                    <div class="step-icon" data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Informations Générales sur les Établissements d'Enseignement  ">
                                                        <i class="bx bx-folder-open"></i>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="wizard-list-item">
                                                <div class="list-item">
                                                    <div class="step-icon" data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Mise en Œuvre des Dispositions Éducatives National">
                                                        <i class="fa fa-graduation-cap"></i>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="wizard-list-item">
                                                <div class="list-item">
                                                    <div class="step-icon" data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Intégration des Principes Directeurs,des Sept Piliers et Réalisation des Douze Objectifs Stratégiques de la CESA 16-25">
                                                        <i class="bx bx-globe"></i>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="wizard-list-item">
                                                <div class="list-item">
                                                    <div class="step-icon" data-bs-toggle="tooltip"
                                                        data-bs-placement="top"
                                                        title="Prise en Compte des Cibles Spécifiques en Éducation des ODD">
                                                        <i class="fa fa-universal-access"></i>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <!-- Généralités -->
                                        <div class="wizard-tab">
                                            <div class="text-center mb-5">
                                                <h5>Informations Générales sur les Établissements d'Enseignement</h5>
                                            </div>
                                            <div class="mb-4">
                                                <p><strong>Note :</strong> Les sigles suivants sont utilisés dans ce
                                                    formulaire :</p>
                                                <ul>
                                                    <li><strong>SP :</strong> Secteur Primaire</li>
                                                    <li><strong>SS :</strong> Secteur Secondaire</li>
                                                    <li><strong>ST :</strong> Secteur Tertiaire</li>
                                                </ul>
                                            </div>
                                            <hr class="mb-4" />
                                            <div>
                                                <div class="row">
                                                    <div>
                                                        <h5 class="font-size-14 mb-3">1. Combien d’établissements
                                                            publics d’enseignement général compte votre Etat ?</h5>
                                                        <div class="mb-3">
                                                            <label for="niveauFormation" class="form-label">Niveau de
                                                                formation</label>
                                                            <select class="form-control" id="niveauFormation">
                                                                <option value="prePrimaire">Pré-primaire</option>
                                                                <option value="primaire">Primaire</option>
                                                                <option value="secondaire1">Secondaire - 1er cycle
                                                                </option>
                                                                <option value="secondaire2">Secondaire - 2e cycle
                                                                </option>
                                                                <option value="etfp">ETFP</option>
                                                                <option value="enseignementSuperieur">Enseignement
                                                                    Supérieur</option>
                                                                <option value="rechercheScientifique">Recherche
                                                                    Scientifique</option>
                                                                <option value="developpementTechnologique">Développement
                                                                    Technologique</option>
                                                            </select>
                                                        </div>

                                                        <!-- Nombre d'établissements par zone -->
                                                        <h6 class="mt-4">Nombre d'établissements publics d'enseignement
                                                            général
                                                        </h6>
                                                        <div class="mb-3">
                                                            <label for="zoneUrbaine" class="form-label">Zone
                                                                urbaine</label>
                                                            <input type="number" class="form-control" id="zoneUrbaine">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="zoneSemiUrbaine" class="form-label">Zone
                                                                semi-urbaine</label>
                                                            <input type="number" class="form-control"
                                                                id="zoneSemiUrbaine">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="zoneRurale" class="form-label">Zone
                                                                rurale</label>
                                                            <input type="number" class="form-control" id="zoneRurale">
                                                        </div>

                                                        <hr class="mb-6" />


                                                        <!-- Nombre d'établissements d'enseignement technique et formation professionnelle -->
                                                        <h6 class="mt-4">Nombre d'établissements publics d'enseignement
                                                            technique et de formation professionnelle</h6>

                                                        <!-- Zone urbaine -->
                                                        <div class="mb-3">
                                                            <label for="zoneUrbaineSP" class="form-label">Zone urbaine -
                                                                SP</label>
                                                            <input type="number" class="form-control"
                                                                id="zoneUrbaineSP">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="zoneUrbaineSS" class="form-label">Zone urbaine -
                                                                SS</label>
                                                            <input type="number" class="form-control"
                                                                id="zoneUrbaineSS">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="zoneUrbaineST" class="form-label">Zone urbaine -
                                                                ST</label>
                                                            <input type="number" class="form-control"
                                                                id="zoneUrbaineST">
                                                        </div>

                                                        <!-- Zone semi-urbaine -->
                                                        <div class="mb-3">
                                                            <label for="zoneSemiUrbaineSP" class="form-label">Zone
                                                                semi-urbaine -SP</label>
                                                            <input type="number" class="form-control"
                                                                id="zoneSemiUrbaineSP">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="zoneSemiUrbaineSS" class="form-label">Zone
                                                                semi-urbaine -SS</label>
                                                            <input type="number" class="form-control"
                                                                id="zoneSemiUrbaineSS">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="zoneSemiUrbaineST" class="form-label">Zone
                                                                semi-urbaine -ST</label>
                                                            <input type="number" class="form-control"
                                                                id="zoneSemiUrbaineST">
                                                        </div>

                                                        <!-- Zone rurale -->
                                                        <div class="mb-3">
                                                            <label for="zoneRuraleSP" class="form-label">Zone rurale -
                                                                SP</label>
                                                            <input type="number" class="form-control" id="zoneRuraleSP">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="zoneRuraleSS" class="form-label">Zone rurale -
                                                                SS</label>
                                                            <input type="number" class="form-control" id="zoneRuraleSS">
                                                        </div>
                                                        <div class="mb-3">
                                                            <label for="zoneRuraleST" class="form-label">Zone rurale -
                                                                ST</label>
                                                            <input type="number" class="form-control" id="zoneRuraleST">
                                                        </div>
                                                        <hr class="mb-4" />

                                                        <!-- Outils mis en place -->
                                                        <h6 class="mt-4">Outils mis en place</h6>
                                                        <div class="mb-3">
                                                            <label class="form-label">Avez-vous mis en place des outils
                                                                pour suivre le nombre de personnes ayant trouvé un
                                                                emploi décent ?</label>
                                                            <select class="form-select" id="outilsOui"
                                                                name="outilsMisesEnPlace">
                                                                <option value="oui">Oui</option>
                                                                <option value="non">Non</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Généralités -->

                                        <!-- Mise en Œuvre des Dispositions Éducatives -->
                                        <div class="wizard-tab">
                                            <div class="text-center mb-5">
                                                <h5>Mise en Œuvre des Dispositions Éducatives National</h5>
                                            </div>
                                            <div>
                                                <div class="row">
                                                    <div>
                                                        <h5 class="font-size-14 mb-3">2. Votre pays a-t-il un document
                                                            cadre en éducation : politique, stratégie, programmes
                                                            spécifiques, dans les secteurs ci-dessous ?</h5>
                                                        <div class="mb-3">
                                                            <select class="form-control" name="formRadios"
                                                                id="formRadios1" onchange="toggleFields(this.value)">
                                                                <option value=""></option>
                                                                <option value="oui">Oui</option>
                                                                <option value="non">Non</option>
                                                            </select>
                                                        </div>
                                                        <hr class="m-3" />

                                                        <!-- Champs conditionnels pour 'Oui' -->
                                                        <div id="yesFields" style="display:none;">
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="choices-single-default1"
                                                                            class="form-label font-size-14">a. Ce
                                                                            document cadre a-t-il été mis en
                                                                            place</label>
                                                                        <select class="form-control"
                                                                            name="choices-single-default"
                                                                            id="choices-single-default1">
                                                                            <option value=""></option>
                                                                            <option value="Avant 2015">Avant 2015
                                                                            </option>
                                                                            <option value="Après 2015">Après 2015
                                                                            </option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-8 col-md-12">
                                                                    <div class="mb-6">
                                                                        <label for="choices-multiple-remove-button"
                                                                            class="form-label font-size-14">b. Quelles
                                                                            dispositions spécifiques ont-elles été
                                                                            prises pour mettre en œuvre les mesures
                                                                            ci-contre ?</label>
                                                                        <select class="form-control"
                                                                            name="choices-multiple-remove-button"
                                                                            id="choices-multiple-remove-button"
                                                                            multiple>
                                                                            <option value=""></option>
                                                                            <option
                                                                                value="Développement de la petite enfance">
                                                                                Développement de la petite enfance
                                                                            </option>
                                                                            <option
                                                                                value="Education de la petite enfance">
                                                                                Education de la petite enfance</option>
                                                                            <option
                                                                                value="Education primaire et secondaire">
                                                                                Education primaire et secondaire
                                                                            </option>
                                                                            <option
                                                                                value="Enseignement Technique et Formation Professionnelle">
                                                                                Enseignement Technique et Formation
                                                                                Professionnelle</option>
                                                                            <option value="Alphabétisation">
                                                                                Alphabétisation</option>
                                                                            <option
                                                                                value="Enseignement Supérieur, Développement Technologique et Innovation">
                                                                                Enseignement Supérieur, Développement
                                                                                Technologique et Innovation</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Champs conditionnels pour 'Non' -->
                                                        <div id="noFields" style="display:none;">
                                                            <div class="row">
                                                                <div class="col-lg-4 col-md-6">
                                                                    <div class="mb-3">
                                                                        <label for="choices-single-default2"
                                                                            class="form-label font-size-14">a. De
                                                                            quelles natures sont les obstacles ?</label>
                                                                        <select class="form-control"
                                                                            name="choices-single-default"
                                                                            id="choices-single-default2">
                                                                            <option value=""></option>
                                                                            <option value="Politiques">Politiques
                                                                            </option>
                                                                            <option value="Financières">Financières
                                                                            </option>
                                                                            <option value="Administratives">
                                                                                Administratives</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <!-- Champ qui est toujours visible -->
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="mb-6">
                                                                    <label for="example-text-input"
                                                                        class="form-label font-size-14">Dites de manière
                                                                        synthétique quelles sont les autres difficultés
                                                                        rencontrées.</label>
                                                                    <div class="col-md-12">
                                                                        <textarea id="basicpill-address-input"
                                                                            class="form-control" rows="2"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="mb-4">
                                            <div>
                                                <div class="row">
                                                    <div>
                                                        <h5 class="font-size-14 mb-3">3. En ce qui concerne les
                                                            orientations pour l’éducation et le développement de la
                                                            petite enfance, l’éducation préscolaire, l’enseignement
                                                            technique et professionnel, l’enseignement supérieur, la
                                                            recherche scientifique et l’innovation, votre pays prend-il
                                                            en compte les directives de :</h5>
                                                        <div class="mb-3">
                                                            <select class="form-control" name="formRadios3"
                                                                id="formRadios3"
                                                                onchange="toggleDispositions(this.value)">
                                                                <option value=""></option>
                                                                <option value="oui">Oui</option>
                                                                <option value="non">Non</option>
                                                            </select>
                                                        </div>
                                                        <hr class="m-3" />
                                                        <div class="row" id="dispositions_si_oui" style="display:none;">
                                                            <div class="col-lg-8 col-md-12">
                                                                <div class="mb-3">
                                                                    <label for="choices-multiple-remove-button1"
                                                                        class="form-label font-size-14">Ces mesures vous
                                                                        ont-elles aidées à améliorer la qualité de
                                                                        l’éducation dans les différents secteurs
                                                                        ?</label>
                                                                    <select class="form-control"
                                                                        name="choices-multiple-remove-button1"
                                                                        id="choices-multiple-remove-button1" multiple>
                                                                        <option value=""></option>
                                                                        <option value="EDPE">EDPE</option>
                                                                        <option value="Ecole primaire">Ecole primaire
                                                                        </option>
                                                                        <option value="1er cycle secondaire">1er cycle
                                                                            secondaire</option>
                                                                        <option value="2nd cycle secondaire">2nd cycle
                                                                            secondaire</option>
                                                                        <option value="Enseignement superieur">
                                                                            Enseignement superieur</option>
                                                                        <option value="Recherche scientifique">Recherche
                                                                            scientifique</option>
                                                                        <option value="Developpement Technologique">
                                                                            Developpement Technologique</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row" id="dispositions_si_non" style="display:none;">
                                                            <div class="col-lg-8 col-md-12">
                                                                <div class="mb-3">
                                                                    <label for="choices-multiple-remove-button2"
                                                                        class="form-label font-size-14">Quelles
                                                                        dispositions spécifiques qui ont-elles été
                                                                        prises pour mettre en œuvre les mesures
                                                                        ci-contre ?</label>
                                                                    <select class="form-control"
                                                                        name="choices-multiple-remove-button2"
                                                                        id="choices-multiple-remove-button2" multiple>
                                                                        <option value=""></option>
                                                                        <option value="l’Agenda 2030 des Nations Unies">
                                                                            l’Agenda 2030 des Nations Unies</option>
                                                                        <option
                                                                            value="l’Agenda 2063 de l’Union Africaine">
                                                                            l’Agenda 2063 de l’Union Africaine</option>
                                                                        <option value="la STISA 2024">la STISA 2024
                                                                        </option>
                                                                        <option value="la CESA 16-25">la CESA 16-25
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- Le champ ci-dessous sera toujours visible -->
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-10">
                                                                <div class="mb-3">
                                                                    <label for="example-text-input2"
                                                                        class="form-label font-size-14">Dites de manière
                                                                        synthétique quelles sont les autres difficultés
                                                                        rencontrées.</label>
                                                                    <div class="col-md-12">
                                                                        <textarea id="basicpill-address-input"
                                                                            class="form-control" rows="2"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Mise en Œuvre des Dispositions Éducatives -->


                                        <!-- Intégration des Principes Directeurs,des Sept Piliers et Réalisation des Douze Objectifs Stratégiques de la CESA 16-25 -->
                                        <div class="wizard-tab">
                                            <div class="text-center mb-5">
                                                <h5>Intégration des Principes Directeurs,des Sept Piliers et Réalisation
                                                    des Douze Objectifs Stratégiques de la CESA 16-25
                                                </h5>
                                            </div>
                                            <div>
                                                <div class="row">
                                                    <div>
                                                        <h5 class="font-size-14 mb-3">4. Le système d’éducationformation
                                                            de votre pays prend-il
                                                            en compte les six principes
                                                            directeurs de la CESA 16-25 ?</h5>
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="mb-3">
                                                                    <label for="choices-multiple-remove-button3"
                                                                        class="form-label font-size-14">Ces mesures vous
                                                                        ont-elles aidées à améliorer la
                                                                        qualité de l’éducation dans les différents
                                                                        secteurs ?</label>
                                                                    <select class="form-control"
                                                                        name="choices-multiple-remove-button3"
                                                                        id="choices-multiple-remove-button3" multiple>
                                                                        <option value=""></option>
                                                                        <option value="EDPE">les sociétés du savoir
                                                                            qu’appelle la réalisation de l’Agenda 2063
                                                                            qui repose sur le capital humain ?</option>
                                                                        <option value="Ecole primaire">l’éducation
                                                                            holistique, inclusive et
                                                                            équitable soutenue par des conditions
                                                                            d’apprentissage continu tout au long
                                                                            de la vie</option>
                                                                        <option value="1er cycle secondaire">la bonne
                                                                            gouvernance, le leadership et
                                                                            la responsabilité ?</option>
                                                                        <option value="2nd cycle secondaire">la bonne
                                                                            gouvernance, le leadership et
                                                                            la responsabilité ?</option>
                                                                        <option value="Enseignement superieur">* la
                                                                            bonne gouvernance, le leadership et
                                                                            la responsabilité ?</option>
                                                                        <option value="Recherche scientifique">
                                                                            L’environnement propice à
                                                                            l’apprentissage, assuré par une bonne
                                                                            alimentation et un état physique et
                                                                            socio-psychologique adéquat ?</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr class="mb-4">

                                            <div>
                                                <div class="row">
                                                    <div>
                                                        <h5 class="font-size-14 mb-3">5. Le système d’éducationformation
                                                            de votre pays prend-il
                                                            en compte les sept piliers de la
                                                            CESA 16-25</h5>
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="mb-3">
                                                                    <label for="choices-multiple-remove-button4"
                                                                        class="form-label font-size-14">Ces mesures vous
                                                                        ont-elles aidées à améliorer la
                                                                        qualité de l’éducation dans les différents
                                                                        secteurs ?</label>
                                                                    <select class="form-control"
                                                                        name="choices-multiple-remove-button4"
                                                                        id="choices-multiple-remove-button4" multiple>
                                                                        <option value=""></option>
                                                                        <option value="EDPE">Une volonté politique de
                                                                            redynamiser
                                                                            le secteur de l’éducation et de la
                                                                            formation ?
                                                                        </option>

                                                                        <option value="Ecole primaire">Une volonté
                                                                            politique de redynamiser
                                                                            le secteur de l’éducation et de la
                                                                            formation ?
                                                                        </option>

                                                                        <option value="1er cycle secondaire">Une volonté
                                                                            de promouvoir une
                                                                            égalité des genres et une sensibilité4
                                                                            aux différences culturelles
                                                                        </option>

                                                                        <option value="2nd cycle secondaire">Une volonté
                                                                            de mobiliser les
                                                                            ressources, notamment, les ressources
                                                                            nationales
                                                                        </option>

                                                                        <option value="Enseignement superieur"> Un
                                                                            renforcement de capacités
                                                                            institutionnel prenant en compte
                                                                            (a)- la bonne gouvernance te la
                                                                            transparence
                                                                            (b)- une coalition des acteurs pour
                                                                            un processus participatif crédible et
                                                                            autorisant des partenaires solides
                                                                            entre le gouvernement, la société
                                                                            civile et le secteur privé
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            L’orientation et l’accompagnement des
                                                                            apprenants à tous les niveaux et dans les
                                                                            différents types de formation
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <hr class="mb-4">
                                            <div>
                                                <div class="row">
                                                    <div>
                                                        <h5 class="font-size-14 mb-3">6. Le système d’éducationformation
                                                            de votre pays tend-il
                                                            vers la réalisation des douze
                                                            objectifs stratégiques de la CESA
                                                            16-25 ?
                                                            CESA 16-25</h5>
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="mb-3">
                                                                    <label for="choices-multiple-remove-button5"
                                                                        class="form-label font-size-14">Ces mesures vous
                                                                        ont-elles aidées à améliorer la
                                                                        qualité de l’éducation dans les différents
                                                                        secteurs ?</label>
                                                                    <select class="form-control"
                                                                        name="choices-multiple-remove-button5"
                                                                        id="choices-multiple-remove-button5" multiple>
                                                                        <option value=""></option>
                                                                        <option value="EDPE">OS1- Revitaliser la
                                                                            profession
                                                                            enseignante pour en assurer la qualité, la
                                                                            pertinence et l’adéquation à tous les
                                                                            niveaux d’éducation
                                                                        </option>

                                                                        <option value="Ecole primaire">OS2- Construire,
                                                                            réhabiliter et préserver
                                                                            les infrastructures scolaires et développer
                                                                            des politiques qui assurent à tous et de
                                                                            façon permanente un environnement
                                                                            serein et propice à l’apprentissage, afin
                                                                            d’accroître l’accès à une éducation de
                                                                            qualité à tous les niveaux d’éducation
                                                                        </option>

                                                                        <option value="1er cycle secondaire">OS3-
                                                                            Exploiter la capacité des TIC pour
                                                                            améliorer l’accès, la qualité de
                                                                            l’éducation et de la formation ainsi que5
                                                                            la gestion des systèmes éducatifs
                                                                        </option>

                                                                        <option value="2nd cycle secondaire">OS4-
                                                                            Assurer l’acquisition de
                                                                            connaissances et des compétences
                                                                            requises ainsi que l’amélioration des taux
                                                                            d’achèvement des études à tous les
                                                                            niveaux et pour tous les groupes, par des
                                                                            processus d’harmonisation nationale
                                                                            régionale et continentale
                                                                        </option>

                                                                        <option value="Enseignement superieur">OS5 -
                                                                            Accélérer les processus conduisant
                                                                            à la parité et à l’équité des genres ;
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            OS6- Lancer des programmes
                                                                            d’alphabétisation ambitieux et efficaces
                                                                            pour éradiquer le fléau de
                                                                            l’analphabétisme
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            OS7- Renforcer les programmes de
                                                                            sciences et de mathématiques chez les
                                                                            jeunes et promouvoir la culture
                                                                            scientifique dans la société
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            OS8- Accroître les potentialités en
                                                                            formation technique et professionnelle
                                                                            dans l’enseignement secondaire et
                                                                            supérieur, en renforçant les liaisons
                                                                            bénéfiques entre le monde du travail et
                                                                            les systèmes d’éducation et de formation
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            OS9- Redynamiser et accroître l’accès à
                                                                            l’enseignement supérieur, à la recherche
                                                                            et à l’innovation en vue de relever les
                                                                            défis du continent et de promouvoir la
                                                                            compétitivité mondiale
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            OS 10- Promouvoir l’éducation pour la
                                                                            paix, ainsi que la prévention et la
                                                                            résolution des conflits à tous les niveaux
                                                                            d’éducation et pour tous les groupes
                                                                            d’âge, en s’appuyant sur les valeurs
                                                                            communes africaine
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            OS11- Améliorer l’administration du
                                                                            système éducatif ainsi que l’outil
                                                                            statistique en renforçant les capacités de
                                                                            collecte, de gestion, d’analyse, de6
                                                                            communication, et d’usage de données
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            OS12- Organiser une coalition de toutes
                                                                            les parties prenantes en faveur de
                                                                            l’éducation pour animer et soutenir les
                                                                            initiatives nées de la mise en œuvre de la
                                                                            CESA 16-25
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Intégration des Principes Directeurs,des Sept Piliers et Réalisation des Douze Objectifs Stratégiques de la CESA 16-25 -->

                                        <!-- Prise en Compte des Cibles Spécifiques en Éducation des ODD -->
                                        <div class="wizard-tab">
                                            <div class="text-center mb-4">
                                                <h5>Prise en Compte des Cibles Spécifiques en Éducation des ODD
                                                </h5>
                                                <!-- <p class="card-title-desc">Veuillez remplir les informations ci-dessous -->
                                                </p>
                                            </div>
                                            <div>
                                                <div class="row">
                                                    <div>
                                                        <h5 class="font-size-14 mb-3">7. Le système
                                                            d’éducationformation de votre pays prend-il
                                                            en compte les cibles spécifiques en
                                                            éducation des ODD ?</h5>
                                                        <div class="row">
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="mb-3">
                                                                    <label for="choices-multiple-remove-button6"
                                                                        class="form-label font-size-14">Ces mesures vous
                                                                        ont-elles aidées à améliorer la
                                                                        qualité de l’éducation dans les différents
                                                                        secteurs ?</label>
                                                                    <select class="form-control"
                                                                        name="choices-multiple-remove-button6"
                                                                        id="choices-multiple-remove-button6" multiple>
                                                                        <option value=""></option>
                                                                        <option value="EDPE"> faire en sorte que toutes
                                                                            les filles et
                                                                            tous les garçons suivent, sur un pied
                                                                            d’égalité, un cycle complet
                                                                            d’enseignement primaire et secondaire
                                                                            gratuit et de qualité, qui débouche sur
                                                                            un apprentissage véritablement utile
                                                                            d’ici 2030 ?
                                                                        </option>

                                                                        <option value="Ecole primaire">faire en sorte
                                                                            que toutes les filles et
                                                                            tous les garçons aient accès à des
                                                                            activités de développement et de soins
                                                                            de la petite enfance et à une éducation
                                                                            préscolaire de qualité qui les préparent
                                                                            à suivre un enseignement primaire d’ici
                                                                            2030 ?
                                                                        </option>

                                                                        <option value="1er cycle secondaire">faire en
                                                                            sorte que les femmes et les
                                                                            hommes aient tous accès dans des
                                                                            conditions d’égalité à un enseignement
                                                                            technique, professionnel ou tertiaire, y
                                                                            compris universitaire, de qualité et
                                                                            d’un coût abordable d’ici 2030 ?
                                                                        </option>

                                                                        <option value="2nd cycle secondaire">augmenter
                                                                            considérablement le
                                                                            nombre de jeunes et d’adultes disposant
                                                                            des compétences, notamment
                                                                            techniques et professionnelles,
                                                                            nécessaires à l’emploi, à l’obtention7
                                                                            d’un travail décent et à
                                                                            l’entrepreneuriat d’ici 2030 ?
                                                                        </option>

                                                                        <option value="Enseignement superieur">éliminer
                                                                            les inégalités entre les
                                                                            sexes dans le domaine de l’éducation et
                                                                            assurer l’égalité d’accès des personnes
                                                                            vulnérables, y compris les personnes
                                                                            handicapées, les autochtones et les
                                                                            enfants en situation vulnérable, à tous
                                                                            les niveaux d’enseignement et de
                                                                            formation professionnelle d’ici 2030 ?
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            veiller à ce que tous les jeunes et
                                                                            une proportion considérable d’adultes,
                                                                            hommes et femmes, sachent lire, écrire
                                                                            et compter d’ici 2030 ?
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            D’ici à 2030, faire en sorte que tous
                                                                            les élèves acquièrent les connaissances
                                                                            et compétences nécessaires pour
                                                                            promouvoir le développement durable,
                                                                            notamment par l’éducation en faveur
                                                                            du développement et de modes de vie
                                                                            durables, des droits de l’homme, de
                                                                            l’égalité des sexes, de la promotion
                                                                            d’une culture de paix et de nonviolence, de
                                                                            la citoyenneté mondiale et
                                                                            de l’appréciation de la diversité
                                                                            culturelle et de la contribution de la
                                                                            culture au développement durable
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            Faire construire des établissements
                                                                            scolaires qui soient adaptés aux enfants,
                                                                            aux personnes handicapées et aux deux
                                                                            sexes ou adapter les établissements
                                                                            existants à cette fin et fournir un cadre
                                                                            d’apprentissage effectif qui soit sûr,
                                                                            exempt de violence et accessible à tous
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            D’ici à 2020, augmenter
                                                                            considérablement à l’échelle mondiale
                                                                            le nombre de bourses d’études offertes
                                                                            aux pays en développement, en
                                                                            particulier aux pays les moins avancés,
                                                                            aux petits États insulaires en
                                                                            développement et aux pays d’Afrique,
                                                                            pour financer le suivi d’études
                                                                            supérieures, y compris la formation
                                                                            professionnelle, les cursus
                                                                            informatiques, techniques et
                                                                            scientifiques et les études d’ingénieur,
                                                                            dans des pays développés et d’autres
                                                                            pays en développement
                                                                        </option>

                                                                        <option value="Recherche scientifique">
                                                                            D’ici à 2030, accroître
                                                                            considérablement le nombre
                                                                            d’enseignants qualifiés, notamment au
                                                                            moyen de la coopération internationale
                                                                            pour la formation d’enseignants dans
                                                                            les pays en développement, surtout
                                                                            dans les pays les moins avancés et les
                                                                            petits États insulaires en
                                                                            développement
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-12 col-md-12">
                                                                <div class="mb-6">
                                                                    <label for="choices-single-default2"
                                                                        class="form-label font-size-14">Ces documents
                                                                        sont-ils
                                                                        devenus des instruments
                                                                        normatifs adoptés et mis en
                                                                        œuvre par le Gouvernement et
                                                                        tous ses partenaires dans le
                                                                        domaine des formations
                                                                        éducatives, la recherche
                                                                        scientifique et l’innovation ?
                                                                        (loi, charte, décret, etc.)</label>
                                                                    <div class="col-md-12">
                                                                        <textarea id="basicpill-address-input"
                                                                            class="form-control" rows="2"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Prise en Compte des Cibles Spécifiques en Éducation des ODD -->

                                        <div class="d-flex align-items-start gap-3 mt-4">
                                            <button type="button" class="btn btn-primary w-sm" id="prevBtn"
                                                onclick="nextPrev(-1)">Précédent</button>
                                            <button type="button" class="btn btn-primary w-sm ms-auto" id="nextBtn"
                                                onclick="nextPrev(1)">Suivant</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div><!-- end col -->
                    </div><!-- end row -->
                </div>
                <!-- container-fluid -->
            </div>
            <!-- End Page-content -->


        </div>
        <!-- end main content-->

    </div>
    <!-- END layout-wrapper -->

    <!-- Right Sidebar -->
    <!-- <a href="#" class="right-bar-toggle layout-setting-btn" id="right-bar-toggle">
        <i class="bx bx-cog icon-sm font-size-18"></i> <span>Settings</span>
    </a> -->

    <!-- Right Sidebar -->
    <div class="right-bar">
        <div data-simplebar class="h-100">
            <div class="rightbar-title d-flex align-items-center bg-dark p-3">

                <h5 class="m-0 me-2 text-white">Theme Customizer</h5>

                <a href="javascript:void(0);" class="right-bar-toggle-close ms-auto">
                    <i class="mdi mdi-close noti-icon"></i>
                </a>
            </div>

            <!-- Settings -->
            <hr class="m-0" />

            <div class="p-4">
                <h6 class="mb-3">Layout</h6>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout" id="layout-vertical" value="vertical">
                    <label class="form-check-label" for="layout-vertical">Vertical</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout" id="layout-horizontal"
                        value="horizontal">
                    <label class="form-check-label" for="layout-horizontal">Horizontal</label>
                </div>

                <h6 class="mt-4 mb-3">Layout Mode</h6>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-mode" id="layout-mode-light"
                        value="light">
                    <label class="form-check-label" for="layout-mode-light">Light</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-mode" id="layout-mode-dark" value="dark">
                    <label class="form-check-label" for="layout-mode-dark">Dark</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-mode" id="layout-mode-bordered"
                        value="bordered">
                    <label class="form-check-label" for="layout-mode-bordered">Bordered</label>
                </div>

                <h6 class="mt-4 mb-3">Layout Width</h6>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-width" id="layout-width-fluid"
                        value="fluid" onchange="document.body.setAttribute('data-layout-size', 'fluid')">
                    <label class="form-check-label" for="layout-width-fluid">Fluid</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-width" id="layout-width-boxed"
                        value="boxed" onchange="document.body.setAttribute('data-layout-size', 'boxed')">
                    <label class="form-check-label" for="layout-width-boxed">Boxed</label>
                </div>

                <h6 class="mt-4 mb-3">Layout Position</h6>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-position" id="layout-position-fixed"
                        value="fixed" onchange="document.body.setAttribute('data-layout-scrollable', 'false')">
                    <label class="form-check-label" for="layout-position-fixed">Fixed</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-position" id="layout-position-scrollable"
                        value="scrollable" onchange="document.body.setAttribute('data-layout-scrollable', 'true')">
                    <label class="form-check-label" for="layout-position-scrollable">Scrollable</label>
                </div>

                <h6 class="mt-4 mb-3">Topbar Type</h6>


                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="topbar-color" id="topbar-color-light"
                        value="light" onchange="document.body.setAttribute('data-topbar', 'light')">
                    <label class="form-check-label" for="topbar-color-light">Light</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="topbar-color" id="topbar-color-dark" value="dark"
                        onchange="document.body.setAttribute('data-topbar', 'dark')">
                    <label class="form-check-label" for="topbar-color-dark">Dark</label>
                </div>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="topbar-color" id="topbar-type-hidden"
                        value="hidden" onchange="document.body.setAttribute('data-topbar', 'hidden')">
                    <label class="form-check-label" for="topbar-type-hidden">Hidden</label>
                </div>


                <div id="sidebar-setting">
                    <h6 class="mt-4 mb-3 sidebar-setting">Sidebar Size</h6>

                    <div class="form-check sidebar-setting">
                        <input class="form-check-input" type="radio" name="sidebar-size" id="sidebar-size-default"
                            value="default" onchange="document.body.setAttribute('data-sidebar-size', 'lg')">
                        <label class="form-check-label" for="sidebar-size-default">Default</label>
                    </div>
                    <div class="form-check sidebar-setting">
                        <input class="form-check-input" type="radio" name="sidebar-size" id="sidebar-size-compact"
                            value="compact" onchange="document.body.setAttribute('data-sidebar-size', 'md')">
                        <label class="form-check-label" for="sidebar-size-compact">Compact</label>
                    </div>
                    <div class="form-check sidebar-setting">
                        <input class="form-check-input" type="radio" name="sidebar-size" id="sidebar-size-small"
                            value="small" onchange="document.body.setAttribute('data-sidebar-size', 'sm')">
                        <label class="form-check-label" for="sidebar-size-small">Small (Icon View)</label>
                    </div>

                    <h6 class="mt-4 mb-3 sidebar-setting">Sidebar Color</h6>

                    <div class="form-check sidebar-setting">
                        <input class="form-check-input" type="radio" name="sidebar-color" id="sidebar-color-light"
                            value="light" onchange="document.body.setAttribute('data-sidebar', 'light')">
                        <label class="form-check-label" for="sidebar-color-light">Light</label>
                    </div>
                    <div class="form-check sidebar-setting">
                        <input class="form-check-input" type="radio" name="sidebar-color" id="sidebar-color-dark"
                            value="dark" onchange="document.body.setAttribute('data-sidebar', 'dark')">
                        <label class="form-check-label" for="sidebar-color-dark">Dark</label>
                    </div>
                    <div class="form-check sidebar-setting">
                        <input class="form-check-input" type="radio" name="sidebar-color" id="sidebar-color-brand"
                            value="brand" onchange="document.body.setAttribute('data-sidebar', 'brand')">
                        <label class="form-check-label" for="sidebar-color-brand">Brand</label>
                    </div>
                </div>

                <h6 class="mt-4 mb-3">Direction</h6>

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-direction" id="layout-direction-ltr"
                        value="ltr">
                    <label class="form-check-label" for="layout-direction-ltr">LTR</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="layout-direction" id="layout-direction-rtl"
                        value="rtl">
                    <label class="form-check-label" for="layout-direction-rtl">RTL</label>
                </div>

            </div>

        </div> <!-- end slimscroll-menu-->
    </div>
    <!-- /Right-bar -->

    <!-- Right bar overlay-->
    <div class="rightbar-overlay"></div>

    <!-- chat offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasActivity" aria-labelledby="offcanvasActivityLabel">
        <div class="offcanvas-header border-bottom">
            <h5 id="offcanvasActivityLabel">Offcanvas right</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            ...
        </div>
    </div>

    <!-- JAVASCRIPT -->
    <script src="../assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="../assets/libs/metismenujs/metismenujs.min.js"></script>
    <script src="../assets/libs/simplebar/simplebar.min.js"></script>
    <script src="../assets/libs/eva-icons/eva.min.js"></script>

    <!-- choices js -->
    <script src="../assets/libs/choices.js/public/assets/scripts/choices.min.js"></script>

    <!-- color picker js -->
    <script src="../assets/libs/@simonwep/pickr/pickr.min.js"></script>
    <script src="../assets/libs/@simonwep/pickr/pickr.es5.min.js"></script>

    <!-- datepicker js -->
    <script src="../assets/libs/flatpickr/flatpickr.min.js"></script>

    <!-- init js -->
    <script src="../assets/js/pages/form-advanced.init.js"></script>
    <script src="../assets/js/pages/form-wizard.init.js"></script>
    <script src="../assets/js/app.js"></script>

    
    <script>
        document.addEventListener('DOMContentLoaded', function () {
            var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
                removeItemButton: true,
                maxItemCount: 6,
                searchResultLimit: 6,
                renderChoiceLimit: 6
            });

            var multipleCancelButton1 = new Choices('#choices-multiple-remove-button1', {
                removeItemButton: true,
                maxItemCount: 6,
                searchResultLimit: 6,
                renderChoiceLimit: 6
            });
            var multipleCancelButton2 = new Choices('#choices-multiple-remove-button2', {
                removeItemButton: true,
                maxItemCount: 6,
                searchResultLimit: 6,
                renderChoiceLimit: 6
            });

            var multipleCancelButton3 = new Choices('#choices-multiple-remove-button3', {
                removeItemButton: true,
                maxItemCount: 6,
                searchResultLimit: 6,
                renderChoiceLimit: 6
            });

            var multipleCancelButton4 = new Choices('#choices-multiple-remove-button4', {
                removeItemButton: true,
                maxItemCount: 6,
                searchResultLimit: 6,
                renderChoiceLimit: 6
            });

            var multipleCancelButton5 = new Choices('#choices-multiple-remove-button5', {
                removeItemButton: true,
                maxItemCount: 6,
                searchResultLimit: 6,
                renderChoiceLimit: 6
            });

            var multipleCancelButton6 = new Choices('#choices-multiple-remove-button6', {
                removeItemButton: true,
                maxItemCount: 6,
                searchResultLimit: 6,
                renderChoiceLimit: 6
            });
        });

        function toggleFields(value) {
            if (value === 'oui') {
                document.getElementById('yesFields').style.display = 'block';
                document.getElementById('noFields').style.display = 'none';
            } else if (value === 'non') {
                document.getElementById('yesFields').style.display = 'none';
                document.getElementById('noFields').style.display = 'block';
            } else {
                document.getElementById('yesFields').style.display = 'none';
                document.getElementById('noFields').style.display = 'none';
            }
        }

        function toggleDispositions(value) {
            if (value === 'oui') {
                document.getElementById('dispositions_si_oui').style.display = 'block';
                document.getElementById('dispositions_si_non').style.display = 'none';
            } else if (value === 'non') {
                document.getElementById('dispositions_si_oui').style.display = 'none';
                document.getElementById('dispositions_si_non').style.display = 'block';
            } else {
                document.getElementById('dispositions_si_oui').style.display = 'none';
                document.getElementById('dispositions_si_non').style.display = 'none';
            }
        }

    </script>


</body>

</html>