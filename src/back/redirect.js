// Fichier : redirect.js

// Fonction pour vérifier le statut 404 et rediriger si nécessaire
function check404AndRedirect() {
    // Vérifier si la page a un statut 404 en utilisant le statut de réponse HTTP
    if (document.querySelector("meta[name='prerender-status-code'][content='404']")) {
        // Rediriger vers la page HTML souhaitée
        window.location.href = "src/404.html";
    }
}

// Attacher la fonction au chargement de la fenêtre
window.onload = check404AndRedirect;