function JourTravaille(jour, mois, annee) {
    let date = " ";
    const joursfériés = ["01-01-24", "01-05-24", "08-05-24", "14-07-24", "15-08-24", "01-11-24", "11-11-24", "25-12-24"];
    for (let i = 0; i < joursfériés.length; i++) {
    if (jour === 1 && mois === 1 || jour === 1 && mois === 5 || jour === 8 && mois === 5 || jour === 14 && mois === 7 || jour === 15 && mois === 8 || jour === 1 && mois === 11 || jour === 11 && mois === 11 || jour === 25 && mois === 12)
         {
        console.log("Non, c'est un jour férié");
    }
    else {
        console.log("Oui, c'est un jour travaillé");
    }
}
}
JourTravaille();