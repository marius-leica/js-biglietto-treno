let kmPercorsi = prompt("Inserisci il numero di km da percorrere");
if (isNaN(kmPercorsi) || kmPercorsi < 1 || kmPercorsi > 1999) {
  kmPercorsi = prompt(
    "Per favore inserisci il numero di km da percorere in un formato numerico valido"
  );
} else if (kmPercorsi.length == "") {
  kmPercorsi = prompt("Questo campo non può essere vuoto");
}

let etaUtente = prompt("Inserisci la tua età");
if (isNaN(etaUtente) || etaUtente < 1 || etaUtente > 122) {
  etaUtente = prompt(
    "Per favore inserisci la tua età in un formato numerico valido"
  );
} else if (etaUtente.length == "") {
  etaUtente = prompt("Questo campo non può essere vuoto");
}

const prezzoBiglietto = kmPercorsi * 0.21;
const scontoMinorenni = prezzoBiglietto - prezzoBiglietto * 0.2;
const scontoOver65 = prezzoBiglietto - prezzoBiglietto * 0.4;
let prezzoM;
let prezzoS;
let prezzoN;

let eta = document.getElementById("eta");
let km = document.getElementById("km");
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
