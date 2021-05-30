var cart = document.querySelector('.CART')
var count = StoredPanier.length
var DefCount = 0
var Balise1 = "<p>"
var Balise2 = "</p><br>"


while (DefCount < count) {
    Sentence = Balise1 + StoredPanier[0] + Balise2
    cart.innerHTML = Sentence
    DefCount++
}
// cart.innerHTML = "<p>"+ StoredPanier[0] +"</p><p>" + StoredPanier[1] + "</p>"

var Erase = document.querySelector(".Erase")

Erase.addEventListener("click", (e) => {
    localStorage.clear()
    alert("Votre panier a été vidé !")
})

var Validate = document.querySelector('.Validate')

Validate.addEventListener("click", (e) => {
    const div = document.createElement('div')
    div.className = 'Final'
})
