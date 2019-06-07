
// Bienvenue à ce premier challenge.
// Vous afficherez les resultats dans le terminal avec la commande:
// 'node <nom du ficher>'
// Pour que les resultats soient visible dans le terminal, vous utiliserez
// la fonction 'console.log'
// ex: console.log('simplon');
// ex: console.log(fonction());
// ex: console.log(nom de la variable);
// Lorque vous avez validé un exercice, mettez le en commentaire !!




//Additionnez ces deux termes et stockez le résultat dans une variable
//puis l'afficher
//const num1 = "4";
//const num2 = "5";
//TODO
//let résultat = parseInt(num1)+parseInt(num2);
//console.log (résultat);



//Variables et opérateurs
//Déclarer deux variables avec comme valeur 4 et 5
//var a = 4, b = 5;
//Créez une autre variable contenant l'addition des deux et l'afficher.
//var c = (a+b);
//console.log (c);

//Les tableaux
//Déclarez un tableau avec 5 villes
//const villes = ["marseille","paris","lyon","grenoble","bordeaux"];
//Afficher la ville à l'indice 3
//console.log(villes[3]); // Affiche "grenoble"
//Ajouter une ville au tableau
//villes.push("londres");
//console.log(villes);
//Supprimer la ville à l'indice 2
//villes.splice(2,1);
//console.log(villes);

//TODO




//Les boucles
//
//Boucler sur le tableau 'array1' afin de monter chaque
//éléments au carré et afficher le tableau.
//const array1 = [2, 4, 8]; for (let i=0 ; i<array1.length ; i++){ console.log(Math.pow(array1[i],2)); }

//TODO


// Le tableau suivant indique les notes d'une promo lointaine !
// Calculer la moyenne de cette promo et afficher le resultat
//const promo = [12, 13, 17, 3, 14, 18];
//var somme= 0
//var n=promo.length;
//for (let i=0 ;i<promo.length ; i++){
//somme =somme+ promo[i];
 //}
//var moyenne = somme/n;
//console.log(moyenne);

// Afficher la date d'aujourd'hui sous la forme:
// "Nous somme le [jour/mois/année] et il est [heure/minute]"
// Afficher ensuite "bonjour" si il est entre 7h du matin et 17h
// et "bonsoir" s'il est entre 17h et 00H

var now = new Date();
var annee   = now.getFullYear();
var mois    = now.getMonth() + 1;
var jour    = now.getDate();
var heure   = now.getHours();
var minute  = now.getMinutes();

console.log( "Nous sommes le "+jour+"/"+mois+"/"+annee+" et il est "+heure+" heure "+minute+" minutes ");
// Résultat: Nous sommes le 2/11/2012 et il est 19 heure 57 minutes 37 secondes


if (heure >= 7 && heure <= 17 ){
console.log("Bonjour");
}
else if (heure > 17 && heure <00) {
  console.log("Bonsoir");
}

// Résultat: Nous sommes le 2/11/2012 et il est 19 heure 57 minutes 37 secondes



//les conditions
//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18
//if (age >=18){
  //console.log ("peut voter");
//}
//else {
//  console.log ("ne peut pas voter");
//}
//----------------- Fonctions -------------------

//Créez deux variables initialisées à 3 et 4.
//const num1=3, num2=4;
//Créez une fonction qui retourne l'addition de ces deux valeurs.
//const add = (num1, num2) => {
  //const result = num1 +num2;
//return result;
//console.log (result);
//};
//console.log(
//  add (num1,num2);






//Créez une fonction qui prend en paramètre la valeur i. La fonction doit
//retourner la valeur i au carré et l'afficher.

//const square = (number) => {
//return(Math.pow(number,2));
//};
//console.log(square(7));

// En utilisant la methode 'map', mettre la chaine de
// caractère en majuscule.
const beatles = ["paul", "john", "ringo", "george"];

//console.log(beatles);
console.log(beatles.map(function(beatles) {return beatles.toUpperCase();}));
//Créez un tableau nommé tab dont le premier
//élément est -2, le deuxième 3 et le troisième 4
//Créez une fonction qui soustrait chaque éléments du tableau au suivant.
const tab = [-2,3,4];
const tab2 = [];
const soustrait = (tableau) => {

for(let i=0; i<tableau.lenght-1 ; i++)
{
tab2.push(tableau[i+1]-tableau[i]);
}
console.log(tab2);
 //TODO
};
console.log(soustrait(tab));


//Créez une fonction qui renvoie la somme de chaque éléments du
//tableau si celui-ci est supérieur à 0.
const array2 = [-2, 4, -5, 3, 6];
const addPositiveNumber = (tableau) => {
 //TODO
};




//Créez une fonction qui prend un parametre 'r' et qui
//renvoie le périmetre d'un cercle.
const périmetreCercle = (r) => {
  //TODO
};

//Créez une fonction qui met la premiere lettre d'un mot en majuscule.
//Le reste du mot doit être en minuscule.
//Le mot est "SimPloN"
const capitalize = (word) => {
  //TODO
};



//Odd or Even
//Créez un fonction qui prend un nombre en parametre et qui renvoie :
//paire si le nombre est pair
//impaire si le nombre est impair
//Tips : jetez un coup d'oeil à l'opérateur '%' dans la doc.



//Mot inversé
//créez une fonction qui prend en paramètre une chaine de caractère.
//Cette fonction renvoie la chaine de caractère inversée.
//ex: reverseWord('simplon') ==> 'nolpmis'
//Aide : join(), split(), reverse()
const reverseWord = (word) => {
  //TODO
};


//créez une fonction qui renvoie la somme de tableau
const nombres = ["3", "5", "6", "2"];










// javascript
//const mot = 'simplon';


//function capitalize(word){
    //traitement
    //1 - on recupere le premiere lettre
  //  const firstLetter = word[0].toUpperCase();
    //2 - je la stock dans une variable
    //3 - je la mets en majuscule
    //4 - On l'affiche
    //console.log(firstLetter);
    //5 - On stock le reste du mot dans une variable qu'on met en minuscule
    //const restOfWord = word.substr(1).toLowerCase();
    //6 - on concatene dans une variable
    //const response = `${firstLetter}${restOfWord}`;
    //const response = firstLetter + restOfWord;
    //7 - on retourne la reponse
    //return response;


//capitalize(mot);

//const capitalize = () => {};
