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