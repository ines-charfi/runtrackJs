function tri(numbers, order) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            // Comparer les éléments pour décider de l'ordre
            if ((order === "asc" && numbers[i] > numbers[j]) || 
                (order === "desc" && numbers[i] < numbers[j])) {
                // Échanger les éléments si nécessaire
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers;
}

// Exemples d'utilisation
let numbres = [6, 7, 8, 1, 4, 2, 5, 9, 5];
console.log(tri(numbres, "asc"));  // Affiche [1, 2, 5, 5, 6, 9]
console.log(tri(numbres, "desc")); // Affiche [9, 6, 5, 5, 2, 1]