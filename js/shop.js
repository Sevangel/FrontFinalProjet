var btn = document.querySelectorAll('.btn')
var Nbpanier = document.querySelector('span.NbPanier')
let i = localStorage.getItem('Panier')
var Send0Button = document.querySelector(".Zero")
var Send1Button = document.querySelector(".Un")
var Send2Button = document.querySelector(".Deux")
var Send3Button = document.querySelector(".Trois")
var Send4Button = document.querySelector(".Quatre")
var Send5Button = document.querySelector(".Cinq")
var Send6Button = document.querySelector(".Six")
var Send7Button = document.querySelector(".Sept")
var Send8Button = document.querySelector(".Huit")
var Send9Button = document.querySelector(".Neuf")
var Send10Button = document.querySelector(".Dix")
var Send11Button = document.querySelector(".Onze")
var StoredPanier = JSON.parse(localStorage.getItem('Cart'))
var Tab = []

Send0Button.addEventListener ("click", (e) => {
    console.log("CHECK0")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`


    Tab.push("Bottes Bleues")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    if (StoredPanier == null) {
        StoredPanier = Tab
    }
    else {
        StoredPanier = StoredPanier + Tab
    }

    console.log(StoredPanier)
})

Send1Button.addEventListener ("click", (e) => {
    console.log("CHECK1")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Bottes Rouges")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    if (StoredPanier == null) {
        StoredPanier = Tab
    }
    else {
        StoredPanier = StoredPanier + Tab
    }

    console.log(StoredPanier)
})

Send2Button.addEventListener ("click", (e) => {
    console.log("CHECK2")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Bottes Jaunes")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    if (StoredPanier == null) {
        StoredPanier = Tab
    }
    else {
        StoredPanier = StoredPanier + Tab
    }

    console.log(StoredPanier)
})

Send3Button.addEventListener ("click", (e) => {
    console.log("CHECK3")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Manteau Bleu")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    StoredPanier = Tab

    console.log(StoredPanier)
})

Send4Button.addEventListener ("click", (e) => {
    console.log("CHECK4")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Manteau Rouge")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    StoredPanier = Tab

    console.log(StoredPanier)
})

Send5Button.addEventListener ("click", (e) => {
    console.log("CHECK5")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Manteau Jaune")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    StoredPanier = Tab

    console.log(StoredPanier)
})

Send6Button.addEventListener ("click", (e) => {
    console.log("CHECK6")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Manteau Transparent")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    StoredPanier = Tab

    console.log(StoredPanier)
})

Send7Button.addEventListener ("click", (e) => {
    console.log("CHECK7")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Parapluie Bleu")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    StoredPanier = Tab

    console.log(StoredPanier)
})

Send8Button.addEventListener ("click", (e) => {
    console.log("CHECK8")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Parapluie Rouge")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    StoredPanier = Tab

    console.log(StoredPanier)
})

Send9Button.addEventListener ("click", (e) => {
    console.log("CHECK9")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Parapluie Jaune")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    StoredPanier = Tab

    console.log(StoredPanier)
})

Send10Button.addEventListener ("click", (e) => {
    console.log("CHECK10")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Parapluie Transparent")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    StoredPanier = Tab

    console.log(StoredPanier)
})

Send11Button.addEventListener ("click", (e) => {
    console.log("CHECK11")
    i++
    localStorage.setItem('Panier', i)
    Nbpanier.innerHTML = `${i}`

    Tab.push("Autre Transparent")
    localStorage.setItem('Cart', JSON.stringify(StoredPanier))
    StoredPanier = Tab

    console.log(StoredPanier)
})

Nbpanier.innerHTML = i
console.log(StoredPanier)