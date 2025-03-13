
        // Sélectionner le bouton et le paragraphe
        const button = document.getElementById("button");
        const content = document.getElementById("message");

        // Ajouter un écouteur d'événement au bouton
        button.addEventListener("click", function () {
            // Utiliser Fetch pour récupérer le fichier expression.txt
            fetch("expression.txt")
                .then(response => response.text()) // Convertir la réponse en texte
                .then(data => {
                    content.textContent = data; // Afficher le contenu dans le paragraphe
                })
                .catch(error => {
                    console.error("Erreur :", error);
                    content.textContent = "Une erreur s'est produite lors de téléchargement du fichier.";
                });
        });
 