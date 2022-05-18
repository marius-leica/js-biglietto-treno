const kmPercorsi = prompt("Inserisci il numero di km percorsi");
const etaUtente = prompt("Inserisci la tua età");

const prezzoBiglietto = kmPercorsi * 0.21;
const scontoMinorenni = prezzoBiglietto - prezzoBiglietto * 0.2;
const scontoOver65 = prezzoBiglietto - prezzoBiglietto * 0.4;
let prezzoM;
let prezzoS;
let prezzoN;

const eta = document.getElementById("eta");
const km = document.getElementById("km");
const prezzo = document.getElementById("prezzo");
km.innerHTML = "La distanza da percorrere è di" + " " + kmPercorsi + " km";

if (etaUtente <= 18) {
  eta.innerHTML =
    "La tua età è di" +
    " " +
    etaUtente +
    " anni e ti verrà applicato lo sconto del 20%";
} else if (etaUtente >= 65) {
  eta.innerHTML =
    "La tua età è di" +
    " " +
    etaUtente +
    " anni e ti verrà applicato lo sconto del 40%";
} else {
  eta.innerHTML = "La tua età è di" + " " + etaUtente + " anni";
}

if (etaUtente <= 18) {
  prezzoM = scontoMinorenni;
  prezzo.innerHTML = "Totale:" + " " + prezzoM.toFixed(2) + " €";
} else if (etaUtente >= 65) {
  prezzoS = scontoOver65;
  prezzo.innerHTML = "Totale:" + " " + prezzoS.toFixed(2) + " €";
} else {
  prezzoN = prezzoBiglietto;
  prezzo.innerHTML = "Totale:" + " " + prezzoN.toFixed(2) + " €";
}
