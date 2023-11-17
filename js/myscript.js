// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// Chiedo al cliente il numero di km che vuole percorrere
const userKm = prompt("Inserisci quanti km vuoi percorrere");

// Chiedo al cliente l'età
const userEta = prompt("Inserisci la tua età");

// Calcolo prezzo del biglietto
let prezzo = 0.21 * userKm;

// Controllo prezzo del biglietto
console.log (prezzo);

// Sconto del 20% per minorenni o 40% per over 65
if (userEta < 18) {
    prezzo = prezzo - ((prezzo / 100) * 20);
} else if (userEta > 65) {
    prezzo = prezzo - ((prezzo / 100) * 40);
} 

// Stampo il prezzo con due decimali
document.getElementById("mio_id").innerHTML = "Il prezzo del biglietto per te è: € " + prezzo.toFixed(2);
 