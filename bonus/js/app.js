// chiedere il nr dei chilometri da percorrere
// e inserirlo nell'html

let name = prompt("Inserire nome e cognome separati da uno spazio")

const nameValue = document.getElementById('name')
nameValue.innerHTML = name

// chiedere il nr dei chilometri da percorrere
// e inserirlo nell'html

const km = parseInt(prompt("Quanti chilometri deve percorrere?"))

const kmValue = document.getElementById('km')
kmValue.innerHTML = km + "km"

// chiedere età passeggero

const età = parseInt(prompt("Qual'è la sua età?"))

// calcolare prezzo base del biglietto (km * 0.21 €/km) 
// e inserirlo nell'html

let basicPrice = (km * 0.21)

const basicPriceValue = document.getElementById('basic-price')
basicPriceValue.innerHTML = basicPrice + "€"

// sconto 20% per età < 18 anni e sconto 40% per età > 65 anni

let price = 0

if (età < 18) {
   price = (basicPrice * 0.8)

} else if (età > 65) {
    price = (basicPrice * 0.6)

} else {
    price = basicPrice

}

// output con massimo di 2 decimali
// e inserirlo nell'html

price = price.toFixed(2)

const priceValue = document.getElementById('price')
priceValue.innerHTML = price + "€"

// calcolare lo sconto e inserirlo nell'html

const discount = - (price - basicPrice)

const discountValue = document.getElementById('discount')
discountValue.innerHTML = discount + "€"


