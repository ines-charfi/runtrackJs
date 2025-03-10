// Création d'une fonction qui détermine si une année est bisextile ou non
// Une année est bisextile si elle est divisible par 4 et non divisible par 100 ou si elle est divisible par 400

function bisextile(année) {
    if ((année % 4 === 0 && année % 100 !== 0) || (année % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation de la fonction
console.log(bisextile(2000)); // true
console.log(bisextile(2008)); // true
console.log(bisextile(1904)); // false
console.log(bisextile(2023)); // false