const correctPassword = "LUNE358PHASE"; // Mot de passe à deviner

function checkPassword() {
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Vérifie si le mot de passe est correct
    if (passwordInput.value === correctPassword) {
        // Si correct, redirige vers une page de contenu
        window.location.href = 'page_secrète.html'; // Change ce nom pour ta page cible
    } else {
        // Si incorrect, affiche un message d'erreur
        errorMessage.textContent = "Mot de passe incorrect, essayez à nouveau.";
    }
}
