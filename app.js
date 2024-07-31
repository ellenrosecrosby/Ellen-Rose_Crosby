/* var prenom = prompt ("What's your name:");
console.log(prenom);
var titre = document.getElementById("titre");
console.log(titre);
titre.textContent = "Bonjour " + prenom + " !"; */



var titre = document.getElementById('titre');

if(localStorage.getItem("prenomDuVisiteur")) {
titre.textContent = "Bonjour " + localStorage.getItem("prenomDuVisiteur") + " !";
}

else {
var prenom = prompt("What's your name");
localStorage.setItem("prenomDuVisiteur", prenom);
}