/**
 * Fonction chercheElement
 * renvoie la position de l'élément cherché dans le tableau sinon renvoie -1
 * @param tableau
 * @param elementCherche
 * @returns {number}
 */
const chercheElementDansTableau = (tableau, elementCherche) => {
    let positionElementCherche; // variable qui va stocker la position de l'élément cherché
    let elementTrouve = false;  // booléen qui devient true si l'élément est trouvé

    //parcours de tableau, i étant l'index courant
    // la boucle for permet de parcourir le tableau élément par élément
    for (let i=0; i < tableau.length; i++) {
        //si la valeur courante est égale à l'élément cherché
        if(tableau[i] === elementCherche) {
            //on stocke la position dans la variable positionElementCherche
            positionElementCherche = i;
            //elementTrouve devient vrai
            elementTrouve = true;
        }
    }
    if (elementTrouve) {
        //si l'élément a été trouvé on renvoie la position de l'élément
        return positionElementCherche;
    } else {
        //sinon on renvoie -1
        return -1;
    }
}

//Pour tester la fonction
//document.write(chercheElementDansTableau([1, 2, 3], 3));

