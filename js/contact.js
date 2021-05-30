// Validation du formulaire

document.querySelector("body > main > form#form").addEventListener("submit", function(e){

	// Renseignement des champs non obligatoire

	var inputName = document.querySelector("#Name").value
	var inputPhoneNumber = document.querySelector("#PhoneNumber").value

	// Affichage des éléments renseignés 

	var input = [document.querySelector("#email").value, document.querySelector("#msg").value, document.querySelector('#MessageType').value,inputName, inputPhoneNumber]
	console.log(input)	

	// Annulation du comportement par défaut : envoi au serveur
	e.preventDefault();	
})