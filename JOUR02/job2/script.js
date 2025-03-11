  // Fonction pour afficher ou masquer l'article
  function showhide() {
    // On cherche l'article dans la page
    let article = document.getElementById("Article");

    // Si l'article n'existe pas, on le crée et on l'ajoute
    if (!article) {
        article = document.createElement("Article");
        article.id = "Article"; // On lui donne un ID
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage."; 
        article.style.color = "blue";
        article.style.backgroundColor = "lightgrey"; 
        article.style.fontSize = "20px"; 
        article.style.padding = "20px";
        article.style.fontFamily = "Arial"; 
        article.style.position = "absolute";
        document.body.appendChild(article); // On l'ajoute à la page
    } else {
        // Si l'article existe, on le supprime
        article.remove();
    }
}

citation(); // Appel de la fonction
showhide(); // Appel de la fonction