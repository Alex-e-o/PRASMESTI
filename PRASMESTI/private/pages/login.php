<?php
// Note : session_start() est déjà fait dans index.php, pas besoin de le remettre ici.

$error = '';

// Traitement du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    // VÉRIFICATION (ADMIN / ADMIN)
    if ($username === 'admin' && $password === 'admin') {
        $_SESSION['user_logged_in'] = true;
        $_SESSION['user_name'] = 'David Blaise OSSENE';
        $_SESSION['user_email'] = 'blaise.ossene@prasmesti.co';

        // Redirection vers le dashboard via le routeur
        header("Location: index.php?p=dashboard");
        exit;
    } else {
        $error = "Identifiants incorrects.";
    }
}
?>

<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8" />
    <title>Connexion | PRASMESTI Admin</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="assets/images/favicon.png">
    <link href="assets/css/bootstrap.min.css" id="bootstrap-style" rel="stylesheet" type="text/css" />
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <link href="assets/css/app.min.css" id="app-style" rel="stylesheet" type="text/css" />

    <style>
        body { background-color: #f8f9fa; }
        .card-login { border: none; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        .btn-primary { background-color: #003e73; border-color: #003e73; }
        .btn-primary:hover { background-color: #002a4d; border-color: #002a4d; }
        .text-primary-custom { color: #003e73 !important; }
    </style>
</head>

<body>
<div class="account-pages my-5 pt-sm-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="card overflow-hidden card-login">
                    <div class="bg-primary-subtle">
                        <div class="row">
                            <div class="col-7">
                                <div class="text-primary-custom p-4">
                                    <h5 class="text-primary-custom">Bienvenue !</h5>
                                    <p>Connectez-vous pour accéder au PRASMESTI.</p>
                                </div>
                            </div>
                            <div class="col-5 align-self-end">
                                <img src="assets/images/profile-img.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="card-body pt-0">
                        <div class="auth-logo">
                            <a href="../public/" class="auth-logo-dark">
                                <div class="avatar-md profile-user-wid mb-4">
                                        <span class="avatar-title rounded-circle bg-light">
                                            <img src="assets/images/Logo.png" alt="" class="rounded-circle" height="34">
                                        </span>
                                </div>
                            </a>
                        </div>
                        <div class="p-2">
                            <?php if($error): ?>
                                <div class="alert alert-danger mb-4" role="alert">
                                    <?php echo $error; ?>
                                </div>
                            <?php endif; ?>

                            <form class="form-horizontal" action="" method="POST">
                                <div class="mb-3">
                                    <label for="username" class="form-label">Identifiant</label>
                                    <input type="text" class="form-control" id="username" name="username" placeholder="admin">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Mot de passe</label>
                                    <div class="input-group auth-pass-inputgroup">
                                        <input type="password" class="form-control" name="password" placeholder="admin">
                                    </div>
                                </div>
                                <div class="mt-3 d-grid">
                                    <button class="btn btn-primary waves-effect waves-light" type="submit">Se connecter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="mt-5 text-center">
                    <p>
                        <a href="../public/index.php" class="fw-medium text-primary">
                            <i class="mdi mdi-arrow-left me-1"></i> Retour à l'accueil
                        </a>
                    </p>
                    <p>© <script>document.write(new Date().getFullYear())</script> PRASMESTI</p>
                </div>
            </div>
        </div>
    </div>
</div>

<script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/libs/metismenujs/metismenujs.min.js"></script>
<script src="assets/libs/simplebar/simplebar.min.js"></script>
<script src="assets/libs/eva-icons/eva.min.js"></script>
<script src="assets/js/app.js"></script>
</body>
</html>