
      $(document).ready(function() {
        // Rebooter le Monde
        $('#reboot-world').click(function() {
          const quotes = [
            "Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.",
            "J'ai vu des choses que vous, les humains, ne pourriez pas croire..."
          ];
          const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
          $('#jumbotron-content').text(randomQuote);
        });

        // Afficher la modale pour l'achat du papillon
        $('#buy-butterfly').click(function() {
          $('#butterflyModal').modal('show');
        });

        // Changer la couleur du spinner lors de la validation du formulaire
        $('#main-form').submit(function(event) {
          event.preventDefault();
          const colors = ['red', 'blue', 'green', 'yellow'];
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          $('.progress-bar').css('background-color', randomColor);
        });

        // Gestion des touches D, G, C
        let keySequence = [];
        $(document).keydown(function(e) {
          keySequence.push(e.key);
          if (keySequence.length > 3) keySequence.shift();
          if (keySequence.join('') === 'dgc') {
            alert('Informations du formulaire: ' + $('#exampleEmail').val() + ', ' + $('#motDePasse').val());
            keySequence = [];
          }
        });

        // Progress Bar
        let progress = 85;
        $('#progress-more').click(function() {
          if (progress < 100) {
            progress += 10;
            $('#progress-bar').css('width', progress + '%').attr('aria-valuenow', progress);
          }
        });
        $('#progress-less').click(function() {
          if (progress > 0) {
            progress -= 10;
            $('#progress-bar').css('width', progress + '%').attr('aria-valuenow', progress);
          }
        });

        // Activer les éléments de la liste
        $('.list-group-item').click(function() {
          $('.list-group-item').removeClass('active-item');
          $(this).addClass('active-item');
        });

        // Pagination
        $('#page-prev, #page-next, #page-1, #page-2, #page-3').click(function(event) {
          event.preventDefault();
          $('#jumbotron-content').text('Nouveau contenu pour la page ' + $(this).text());
        });
      });
      $(document).ready(function () {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        // Récupération des formulaires
        const loginForm = $("#loginForm");
        const registerForm = $("#registerForm");
    
        // Ajouter les écouteurs sur les champs pour la validation asynchrone
        if (loginForm.length) {
            $("#loginEmail").on("input", validateLoginEmail);
            $("#loginPassword").on("input", validateLoginPassword);
        }
    
        if (registerForm.length) {
            $("#lastName").on("input", validateNotEmpty);
            $("#firstName").on("input", validateNotEmpty);
            $("#registerEmail").on("input", validateRegisterEmail);
            $("#registerPassword").on("input", validateRegisterPassword);
            $("#address").on("input", validateNotEmpty);
            $("#postalCode").on("input", validatePostalCode);
        }
    
        // --- Fonctions de validation pour chaque champ ---
    
        function validateLoginEmail() {
            const email = $(this).val();
            const errorElem = $("#loginEmailError");
            if (!emailRegex.test(email)) {
                errorElem.text("Veuillez entrer un email valide.");
            } else {
                errorElem.text("");
            }
        }
    
        function validateLoginPassword() {
            const password = $(this).val();
            const errorElem = $("#loginPasswordError");
            if (password.length < 8) {
                errorElem.text("Le mot de passe doit contenir au moins 8 caractères.");
            } else {
                errorElem.text("");
            }
        }
    
        function validateNotEmpty() {
            const value = $(this).val();
            const errorElem = $("#" + $(this).attr("id") + "Error");
            if (value.trim() === "") {
                errorElem.text("Ce champ est requis.");
            } else {
                errorElem.text("");
            }
        }
    
        function validateRegisterEmail() {
            const email = $(this).val();
            const errorElem = $("#registerEmailError");
            if (!emailRegex.test(email)) {
                errorElem.text("Veuillez entrer un email valide.");
            } else {
                errorElem.text("");
            }
        }
    
        function validateRegisterPassword() {
            const password = $(this).val();
            const errorElem = $("#registerPasswordError");
            if (password.length < 8) {
                errorElem.text("Le mot de passe doit contenir au moins 8 caractères.");
            } else {
                errorElem.text("");
            }
        }
    
        function validatePostalCode() {
            const postalCode = $(this).val();
            const errorElem = $("#postalCodeError");
            if (!/^\d{5}$/.test(postalCode)) {
                errorElem.text("Le code postal doit contenir 5 chiffres.");
            } else {
                errorElem.text("");
            }
        }
    });