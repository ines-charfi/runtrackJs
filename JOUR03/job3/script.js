
// Configuration du jeu
const gridSize = 3; // Grille 3x3
const tileSize = 100; // Taille d'un carreau en pixels
let emptyIndex = 8; // Position initiale de la case vide (dernière case)
let tiles = []; // Tableau pour stocker les carreaux

// Sélectionner les éléments
const grid = document.getElementById("taquin-grid");
const message = document.getElementById("message");
const recommencerBtn = document.getElementById("recommencer");

// Fonction pour initialiser le jeu
function initialiserJeu() {
    // Réinitialiser le message et le bouton
    message.textContent = "";
    recommencerBtn.style.display = "none";

    // Créer les carreaux
    tiles = [];
    for (let i = 0; i < gridSize * gridSize - 1; i++) {
        const tile = document.createElement("div");
        tile.style.backgroundImage = `url(plateforme${i + 1}.png)`;
        tile.dataset.index = i;
        tile.addEventListener("click", deplacerCarreau);
        tiles.push(tile);
    }

    // Ajouter la case vide
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty");
    tiles.push(emptyDiv);

    // Mélanger les carreaux
    melangerCarreaux();

    // Afficher la grille
    afficherGrille();
}

// Fonction pour mélanger les carreaux
function melangerCarreaux() {
    for (let i = 0; i < 1000; i++) {
        const directions = [-3, 3, -1, 1]; // Haut, Bas, Gauche, Droite
        const randomDir = directions[Math.floor(Math.random() * directions.length)];
        const newIndex = emptyIndex + randomDir;

        if (newIndex >= 0 && newIndex < tiles.length) {
            // Échanger le carreau avec la case vide
            [tiles[emptyIndex], tiles[newIndex]] = [tiles[newIndex], tiles[emptyIndex]];
            emptyIndex = newIndex;
        }
    }
}

// Fonction pour afficher la grille
function afficherGrille() {
    grid.innerHTML = "";
    tiles.forEach(tile => grid.appendChild(tile));
}

// Fonction pour déplacer un carreau
function deplacerCarreau(event) {
    const tile = event.target;
    const tileIndex = tiles.indexOf(tile);

    // Vérifier si le carreau est adjacent à la case vide
    if (Math.abs(tileIndex - emptyIndex) === 1 || Math.abs(tileIndex - emptyIndex) === 3) {
        // Échanger le carreau avec la case vide
        [tiles[emptyIndex], tiles[tileIndex]] = [tiles[tileIndex], tiles[emptyIndex]];
        emptyIndex = tileIndex;

        // Afficher la grille mise à jour
        afficherGrille();

        // Vérifier si le joueur a gagné
        if (verifierVictoire()) {
            message.textContent = "Vous avez gagné !";
            message.className = "gagne";
            recommencerBtn.style.display = "block";
        }
    }
}

// Fonction pour vérifier la victoire
function verifierVictoire() {
    for (let i = 0; i < tiles.length - 1; i++) {
        if (!tiles[i].style.backgroundImage.includes(`plateforme${i + 1}.png`)) {
            return false;
        }
    }
    return true;
}

// Événement pour recommencer
recommencerBtn.addEventListener("click", initialiserJeu);

// Initialiser le jeu au chargement de la page
window.onload = initialiserJeu;
