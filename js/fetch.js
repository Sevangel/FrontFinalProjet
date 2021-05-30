// Constantes Images

const img0 = document.getElementById('0')
const img1 = document.getElementById('1')
const img2 = document.getElementById('2')
const img3 = document.getElementById('3')
const img4 = document.getElementById('4')
const img5 = document.getElementById('5')
const img6 = document.getElementById('6')
const img7 = document.getElementById('7')
const img8 = document.getElementById('8')
const img9 = document.getElementById('9')
const img10 = document.getElementById('10')
const img11 = document.getElementById('11')

// Récupération des données de l'API

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img0.src = data[0].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img1.src = data[1].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img2.src = data[2].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img3.src = data[3].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img4.src = data[4].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img5.src = data[5].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img6.src = data[6].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img7.src = data[7].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img8.src = data[8].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img9.src = data[9].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img10.src = data[10].Image)

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => img11.src = data[11].Image)

// Constantes Paragraphe Informations

const p0 = document.getElementById('A')
const p1 = document.getElementById('B')
const p2 = document.getElementById('C')
const p3 = document.getElementById('D')
const p4 = document.getElementById('E')
const p5 = document.getElementById('F')
const p6 = document.getElementById('G')
const p7 = document.getElementById('H')
const p8 = document.getElementById('I')
const p9 = document.getElementById('J')
const p10 = document.getElementById('K')
const p11 = document.getElementById('L')

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p0.innerHTML = data[0].Nom + "<br><br><p class = 'prix'>" + data[0].Prix + "€</p>")

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p1.innerHTML = data[1].Nom + "<br><br><p class = 'prix'>" + data[1].Prix + "€</p>")

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p2.innerHTML = data[2].Nom + "<br><br><p class = 'prix'>" + data[2].Prix + "€</p>")

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p3.innerHTML = data[3].Nom + "<br><br><p class = 'prix'>" + data[3].Prix + "€</p>")

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p4.innerHTML = data[4].Nom + "<br><br><p class = 'prix'>" + data[4].Prix + "€</p>")

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p5.innerHTML = data[5].Nom + "<br><br><p class = 'prix'>" + data[5].Prix + "€</p>")
    
fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p6.innerHTML = data[6].Nom + "<br><br><p class = 'prix'>" + data[6].Prix + "€</p>")

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p7.innerHTML = data[7].Nom + "<br><br><p class = 'prix'>" + data[7].Prix + "€</p>")

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p8.innerHTML = data[8].Nom + "<br><br><p class = 'prix'>" + data[8].Prix + "€</p>")

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p9.innerHTML = data[9].Nom + "<br><br><p class = 'prix'>" + data[9].Prix + "€</p>")

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p10.innerHTML = data[10].Nom + "<br><br><p class = 'prix'>" + data[10].Prix + "€</p>")

fetch('https://api.npoint.io/39824ce29434ff37c17f')
    .then(res => res.json())
    .then(data => p11.innerHTML = data[11].Nom + "<br><br><p class = 'prix'>" + data[11].Prix + "€</p>")
