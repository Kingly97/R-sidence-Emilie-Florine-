// Numéro officiel WhatsApp
const WHATSAPP_NUMBER = "242067933469";

// Fonction pour déclencher une réservation dynamique par WhatsApp
function reserverService(serviceName) {
    const message = `Bonjour Résidence Emilie Florine ! Je souhaite obtenir des informations et vérifier la disponibilité pour : *${serviceName}*.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// Mise à jour de l'année automatique dans le pied de page
document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
