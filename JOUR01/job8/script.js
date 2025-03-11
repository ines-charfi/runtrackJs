function estPremier(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
function SommeNombresPremiers(a , b){
    if (estPremier(a) && estPremier(b)){
        return a + b;
    }
    return false;
}

console.log(estPremier(15)); 
console.log(estPremier(2)); 
console.log(SommeNombresPremiers(2, 5)); 
