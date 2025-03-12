
// JavaScript pour mettre à jour la couleur du footer en fonction du défilement
let footer = document.getElementById("footer");
window.addEventListener("scroll", scroll); {
   

}
function scroll() {
    // Calculer le pourcentage de défilement
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    // Changer la couleur du footer en fonction du pourcentage de défilement
    footer.style.backgroundColor = `hsl(${scrolled}, 100%, 50%)`;
}

