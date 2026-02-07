<?php
// ==========================================
// 1. CONFIGURATION DU CHEMIN (CORRIGÉE)
// ==========================================
// On ajoute '/PRASMESTI' car vos dossiers sont imbriqués
define('ROOT', __DIR__ . '/PRASMESTI');

// ==========================================
// 2. CHOIX DE LA PAGE
// ==========================================
$page = isset($_GET['page']) ? $_GET['page'] : 'acceuil';
$page = str_replace(array('/', '.'), '', $page);

// ==========================================
// 3. CHARGEMENT DU CONTENU
// ==========================================
ob_start();

// Chemin vers les pages publiques
$cheminPage = ROOT . '/src/pages/public/' . $page . '.php';

if (file_exists($cheminPage)) {
    include $cheminPage;
} else {
    // Si le fichier n'existe pas, on charge l'accueil
    include ROOT . '/src/pages/public/acceuil.php';
}

$contenuPage = ob_get_clean();
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PRASMESTI</title>

    <link rel="stylesheet" href="PRASMESTI/public/Assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="PRASMESTI/public/Assets/css/fontawesome.min.css">
    <link rel="stylesheet" href="PRASMESTI/public/Assets/css/style.css">
</head>

<body>

<?php include ROOT . '/templates/components/header.php'; ?>

<?php echo $contenuPage; ?>

<?php include ROOT . '/templates/components/footer.php'; ?>

<script src="PRASMESTI/public/Assets/js/vendor/jquery-3.7.1.min.js"></script>
<script src="PRASMESTI/public/Assets/js/bootstrap.min.js"></script>
<script src="PRASMESTI/public/Assets/js/main.js"></script>
</body>
</html>