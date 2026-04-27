<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$allowed_langs = ['fr', 'en'];
$default_lang = 'fr';

// Check for language change in URL
if (isset($_GET['lang']) && in_array($_GET['lang'], $allowed_langs)) {
    $_SESSION['lang'] = $_GET['lang'];
    
    // Redirect to same page without the lang parameter to keep URLs clean
    $url = strtok($_SERVER["REQUEST_URI"], '?');
    $params = $_GET;
    unset($params['lang']);
    if (!empty($params)) {
        $url .= '?' . http_build_query($params);
    }
    header("Location: $url");
    exit;
}

$lang = $_SESSION['lang'] ?? $default_lang;

// Load translations
$translations = include __DIR__ . "/../lang/{$lang}.php";

/**
 * Translation helper function
 */
function __($key) {
    global $translations;
    return $translations[$key] ?? $key;
}
