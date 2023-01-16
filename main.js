// // // // # Exercice d'observation :
// // // // >*En utilisant querySelector et querySelectorAll, sert toi des class du fichier style.css et rien d'autre !
// // // // >*Cherche des methodes pour résoudre les énoncés suivants :*

// // // // ## Partie 1 Ajoute de contenu
// // // // ### 1. Dans le h1 ajoute le texte suivant : Les attributs class et id

let h1 = document.body.getElementsByTagName("h1")[0];
h1.innerHTML = "Les attributs class et id";

// // // // ### 2. Dans le premier h2 ajoute le texte suivant : Exercice 2 partie A

let h2 = document.body.getElementsByTagName("h2")[0];
h2.innerHTML = "Exercice 2 partie A";

// // // // ### 3. Dans le second h2 ajoute le texte suivant : Exercice 2 partie B

let h2_2 = document.body.getElementsByTagName("h2")[1];
h2_2.innerHTML = "Exercice 2 partie B";

// // // // ### 4. Dans le premier p ajoute le texte suivant(attention a conserver les balises) :  L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> 

let p = document.body.getElementsByTagName("p")[0];
p.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>";

// // // // ### 5. Dans le second p ajoute le texte suivant(attention a conserver les balises) :   La manipulation de l'attribut Style peut-être une <i>solution</i> rapide

let p_1 = document.body.getElementsByTagName("p")[1];
p_1.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide";



// // // // ## Partie 2.1 Ajout d'attribut et de leurs valeurs

// // // // ### 6. Rajoute l'attribut id dans le h1 et donne lui la valeur "bigTitle"

h1.setAttribute('id', 'bigTitle');

// // // or

document.querySelector("h1").id = "bigTitle";

// // // // ### 7. Rajoute l'attribut class a la div avec comme valeur "container"

let div = document.querySelector('div');
div.setAttribute('class', 'container');

// // // or
document.querySelector("div").classList.add("container");


// // // // ### 8. Aux h2 ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "title"

let h2_e = document.querySelectorAll('h2');
h2_e.forEach(function(element) {
  element.setAttribute('class', 'title');
});

// // // // ### 9. Aux p ajoute avec l'aide d'un foreach l'attribut class avec comme valeur "text"

let p_e = document.querySelectorAll('p');
p_e.forEach(function(element) {
    element.setAttribute('class',`text`);
});

// // // // ## Partie 2.2 Ajout d'attribut et de leurs valeurs

// // // // ### 10. Dans la première section ajoute l'attribut class et les class suivantes : margin-bottom border-black padding

let section = document.querySelectorAll('section');
section[0].setAttribute('class', 'margin-bottom border-black padding');

// // // ### 11. Dans la seconde section ajoute l'attribut class et les class suivantes : margin-top border-black padding

let section_1 = document.querySelectorAll('section');
section_1[1].setAttribute('class', 'margin-top border-black padding');

// // // ### 12. Dans la div ayant comme parent une section, ajoute l'attribut style et fait en sorte qu'il ait un fond bleu, une bordure de ton choix, une hauteur de 20px et une largueur de 20px

let div_1 = document.querySelector('section div');
div_1.setAttribute('style', 'background-color: blue; border: 1px solid black; height: 20px; width: 20px;');