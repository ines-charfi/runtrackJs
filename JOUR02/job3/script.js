let compteur = 0;
let button = document.getElementById("button");
button.addEventListener("click", addOne);
function addOne(){
compteur ++;

document.getElementById("compteur").firstChild.nodeValue = compteur;
}

