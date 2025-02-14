// Date cible : 21 mars à 00h00
const dateCible = new Date("March 21, 2025 00:00:00").getTime();

function miseAJourDecompte() {
    const maintenant = new Date().getTime();
    const difference = dateCible - maintenant;

    if (difference < 0) {
        document.getElementById("countdown").innerHTML = "<h2>🎉 C'est le grand jour ! 🎉</h2>";
        return;
    }

    // Calcul des jours, heures, minutes et secondes restantes
    const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
    const heures = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const secondes = Math.floor((difference % (1000 * 60)) / 1000);

    // Mise à jour des éléments HTML
    document.getElementById("jours").textContent = jours.toString().padStart(2, '0');
    document.getElementById("heures").textContent = heures.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("secondes").textContent = secondes.toString().padStart(2, '0');
}

// Mise à jour du compte à rebours toutes les secondes
setInterval(miseAJourDecompte, 1000);

// Initialisation immédiate
miseAJourDecompte();
