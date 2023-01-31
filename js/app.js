// chiedere il nr dei chilometri da percorrere

const km = parseInt(prompt("Quanti chilometri deve percorrere?"))

// chiedere età passeggero

const età = parseInt(prompt("Qual'è la sua età?"))

// calcolare prezzo del biglietto (km * 0.21 €/km)

let prezzo = (km * 0.21)
console.log(prezzo)

// sconto 20% per età < 18 anni e sconto 40% per età > 65 anni

if (età < 18) {
    prezzo = (km * 0.21 * 0.8)

} else if (età > 65) {
    prezzo = (km * 0.21 * 0.6)

} else {
    prezzo = (km * 0.21)

}
console.log(prezzo)

// output con massimo di 2 decimali

prezzo = prezzo.toFixed(2)
console.log(prezzo)