
        // Sélectionner le bouton et le paragraphe
        let bouton = document.getElementById("button");
        let compteur = document.getElementById("compteur");

        
        let nombreDeClics = 0;
        function addOne() {
            nombreDeClics++;
            compteur.textContent = nombreDeClics;
        }
        // Ajouter un écouteur d'événement pour le clic sur le bouton
        bouton.addEventListener("click", addOne => {
          

            // Mettre à jour le contenu du paragraphe
            compteur.textContent = nombreDeClics;
        });
   