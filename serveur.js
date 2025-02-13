// Importation des modules
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuration du dossier des fichiers statiques
app.use(express.static('public'));

// Route pour récupérer la liste des images
app.get('/images', (req, res) => {
    fs.readdir(path.join(__dirname, 'public/images'), (err, files) => {
        if (err) {
            console.error("Erreur lors du chargement des images:", err);
            return res.status(500).json({ error: "Erreur lors du chargement des images" });
        }
        console.log("Images trouvées :", files);  // Journalise les fichiers trouvés
        res.json({ images: files });
    });
});


// Route principale pour servir la page HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'client.html'));
});

app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});