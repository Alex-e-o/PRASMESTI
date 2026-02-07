<?php
// On récupère la page actuelle pour gérer la classe "active" du menu
$page = isset($_GET['page']) ? $_GET['page'] : 'acceuil';
?>

<header class="th-header header-default onepage-nav">
    <div class="sticky-wrapper">
        <div class="container">
            <div class="menu-area">
                <div class="col-auto d-inline-block d-lg-none">
                    <div class="header-logo">
                        <a href="index.php?page=acceuil">
                            <img src="PRASMESTI/public/Assets/img/Logo.png" alt="Logo PRASMESTI">
                        </a>
                    </div>
                </div>
                <nav class="main-menu d-none d-lg-block">
                    <ul>
                        <li class="<?php echo ($page === 'acceuil') ? 'active' : ''; ?>">
                            <a href="index.php?page=acceuil">Accueil</a>
                        </li>
                        <li class="<?php echo ($page === 'presentation') ? 'active' : ''; ?>">
                            <a href="index.php?page=presentation">Présentation</a>
                        </li>
                        <li class="<?php echo ($page === 'contact') ? 'active' : ''; ?>">
                            <a href="index.php?page=contact">Contact</a>
                        </li>
                        <li>
                            <a href="index.php?page=dashboard/home" style="color: var(--theme-color);">Accès Expert</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>