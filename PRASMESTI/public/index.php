<?php
// 1. Démarrage de la session (toujours utile pour les messages flash ou la connexion future)
session_start();

// Inclusion de l'i18n helper
require_once 'includes/i18n.php';

// 2. Inclusion de la configuration globale (si tu as créé le fichier core/config.php, sinon commente cette ligne pour l'instant)
// require_once '../core/config.php';

// 3. Récupération de la page demandée
// Si ?p= n'est pas défini, on charge 'accueil'
$p = $_GET['p'] ?? 'accueil';

// 4. Sécurité : Nettoyage du chemin
// On empêche les petits malins d'aller voir ailleurs avec des "../"
$p = str_replace(['../', './'], '', $p);

// 5. Construction du chemin vers le fichier
// On cherche le fichier dans le dossier 'pages'
$file = "pages/{$p}.php";

// 6. Assemblage de la page
// On inclut les éléments communs (Head, Header/Menu)
// Note : Les chemins sont relatifs à index.php, donc on ne met pas de "../"
include 'includes/head.php';
include 'includes/header.php'; // Ce fichier inclut lui-même menu.php s'il est bien codé

// 7. Inclusion du contenu dynamique
if (file_exists($file)) {
    include $file;
} else {
    // Gestion de l'erreur 404
    // Tu pourras créer un fichier pages/404.php plus tard
    echo "<div class='container' style='padding:100px 0; text-align:center;'>";
    echo "<h1>Oups ! Erreur 404</h1>";
    echo "<p>La page demandée <strong>{$p}</strong> est introuvable.</p>";
    echo "<a href='index.php' class='th-btn'>Retour à l'accueil</a>";
    echo "</div>";
}

// 8. Pied de page
include 'includes/footer.php';
?>