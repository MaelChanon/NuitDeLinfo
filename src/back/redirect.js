// Fichier : redirect.js

// Fonction pour vérifier le statut 404 et rediriger si nécessaire
function check404AndRedirect() {
    // Vérifier si la page a un statut 404
    if (window.location.href.indexOf("404") > -1) {
        // Rediriger vers la page HTML souhaitée
        window.location.href = "./404.html";
    }
}

// Attacher la fonction au chargement de la fenêtre
window.onload = check404AndRedirect;