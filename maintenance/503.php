<?php
/*
 * Maintenance — point d'entrée unique de /new-prasmesti/.
 *
 * Le .htaccess réécrit toute requête du répertoire vers ce fichier. Il renvoie
 * le bon statut HTTP (503, interruption temporaire : les moteurs de recherche
 * ne désindexent pas) accompagné de la page d'indisponibilité.
 *
 * Pourquoi PHP plutôt que « RewriteRule [R=503] + ErrorDocument » : sur ce
 * serveur, le 503 émis par mod_rewrite revient avec un corps vide — la
 * sous-requête ErrorDocument ne rend rien, y compris quand le fichier visé est
 * servi normalement en accès direct (vérifié en ligne le 12 août 2026). Ici, le
 * statut et le corps sont produits par le même script : plus rien à accorder.
 */

http_response_code(503);
header('Retry-After: 86400');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Content-Type: text/html; charset=UTF-8');

readfile(__DIR__ . '/index.html');
