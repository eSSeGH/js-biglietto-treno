// chiedere il nr dei chilometri da percorrere
// e inserirlo nell'html

let name = prompt("Inserire nome e cognome separati da uno spazio")
console.log(name)

const nameValue = document.getElementById('name')
nameValue.innerHTML = name

// chiedere il nr dei chilometri da percorrere
// e inserirlo nell'html

const km = parseInt(prompt("Quanti chilometri deve percorrere?"))

const kmValue = document.getElementById('km')
kmValue.innerHTML = km + "km"

// chiedere età passeggero

const età = parseInt(prompt("Qual'è la sua età?"))

// calcolare prezzo del biglietto (km * 0.21 €/km) 

let price = (km * 0.21)
console.log(price)

// sconto 20% per età < 18 anni e sconto 40% per età > 65 anni

if (età < 18) {
    price = (km * 0.21 * 0.8)

} else if (età > 65) {
    price = (km * 0.21 * 0.6)

} else {
    price = (km * 0.21)

}
console.log(price)

// output con massimo di 2 decimali
// e inserirlo nell'html

price = price.toFixed(2)
console.log(price)

const priceValue = document.getElementById('price')
priceValue.innerHTML = price + "€"