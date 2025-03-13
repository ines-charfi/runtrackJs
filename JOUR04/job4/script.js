
        // Sélectionner le bouton et le tableau
        const updateButton = document.getElementById("update-button");
        const userTableBody = document.querySelector("#user-table tbody");

        // Fonction pour mettre à jour le tableau
        function updateTable() {
            // Vider le tableau actuel
            userTableBody.innerHTML = "";

            // Utiliser Fetch pour récupérer les données du fichier JSON
            fetch("utilisateur.json")
                .then(response => response.json())
                .then(data => {
                    // Ajouter chaque utilisateur au tableau
                    data.forEach(user => {
                        const row = document.createElement("tr");

                        // Ajouter l'ID
                        const idCell = document.createElement("td");
                        idCell.textContent = user.id;
                        row.appendChild(idCell);

                        // Ajouter le nom
                        const nomCell = document.createElement("td");
                        nomCell.textContent = user.nom;
                        row.appendChild(nomCell);

                        // Ajouter le prénom
                        const prenomCell = document.createElement("td");
                        prenomCell.textContent = user.prenom;
                        row.appendChild(prenomCell);

                        // Ajouter l'email
                        const emailCell = document.createElement("td");
                        emailCell.textContent = user.email;
                        row.appendChild(emailCell);

                        // Ajouter la ligne au tableau
                        userTableBody.appendChild(row);
                    });
                })
                .catch(error => {
                    console.error("Erreur lors de la récupération des données :", error);
                });
        }

        // Ajouter un écouteur d'événement au bouton
        updateButton.addEventListener("click", updateTable);

        // Mettre à jour le tableau au chargement de la page
        updateTable();
 