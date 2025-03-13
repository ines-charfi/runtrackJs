
        // Sélectionner les éléments
        const container = document.getElementById("image-container");
        const melangerBtn = document.getElementById("melanger");
        const verifierBtn = document.getElementById("verifier");
        const message = document.getElementById("message");

        // Fonction pour mélanger les images
        function melangerImages() {
            const images = Array.from(container.children);

            // Mélanger les images avec l'algorithme de Fisher-Yates
            for (let i = images.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                container.appendChild(images[j]); // Déplacer l'image à la fin
            }

            message.textContent = ""; // Réinitialiser le message
        }

        // Fonction pour vérifier l'ordre des images
        function verifierOrdre() {
            const images = container.children;
            let ordreCorrect = true;

            for (let i = 0; i < images.length; i++) {
                const ordreImage = parseInt(images[i].getAttribute("data-order"));
                if (ordreImage !== i + 1) {
                    ordreCorrect = false;
                    break; // Sortir de la boucle si l'ordre est incorrect
                }
            }

            // Afficher le message en fonction du résultat
            if (ordreCorrect) {
                message.textContent = "Vous avez gagné";
                message.className = "gagne";
            } else {
                message.textContent = "Vous avez perdu";
                message.className = "perdu";
            }
        }

        // Événements
        melangerBtn.addEventListener("click", melangerImages); // Mélanger les images
        verifierBtn.addEventListener("click", verifierOrdre); // Vérifier l'ordre
  