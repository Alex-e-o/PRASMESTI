<?php
session_start();

// 1. Récupération de la page demandée (par défaut 'dashboard')
$p = $_GET['p'] ?? 'dashboard';

// 2. Sécurité : Nettoyage du chemin
$p = str_replace(['../', './'], '', $p);

// 3. Gestion de la Déconnexion
if ($p === 'logout') {
    session_destroy();
    header("Location: index.php?p=login");
    exit;
}

// 4. Gestion de la Connexion
// Si l'utilisateur n'est PAS connecté
if (!isset($_SESSION['user_logged_in']) || $_SESSION['user_logged_in'] !== true) {
    // Si on n'est pas déjà sur la page de login, on force la redirection
    if ($p !== 'login') {
        header("Location: index.php?p=login");
        exit;
    }
} else {
    // Si l'utilisateur EST connecté mais essaie d'aller sur login, on le renvoie au dashboard
    if ($p === 'login') {
        header("Location: index.php?p=dashboard");
        exit;
    }
}

// 5. Chargement de la page
// On cherche le fichier dans le dossier 'pages'
$file = "pages/{$p}.php";

if (file_exists($file)) {
    // On inclut la page demandée.
    // Attention : Comme on inclut depuis la racine 'private/', les chemins CSS/JS dans vos pages
    // devront être 'assets/...' et non '../assets/...'
    include $file;
} else {
    // Page 404 simple pour l'admin
    echo "<h1>Erreur 404 : Page introuvable</h1>";
    echo "<a href='index.php'>Retour au tableau de bord</a>";
}
?>