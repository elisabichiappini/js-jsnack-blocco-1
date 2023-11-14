// restizione codice js
'use strict';
// - Crea un array vuoto 
// - Prompt all'utente numero da inserire in array
// - Continua a chiedere i numeri all'utente in prompt 
// - push nell'array fino a quando al somma elementi array è inferire a 50.

// dichiara e assegna array di valori vuoti
const arrayNumeri3 = [];

// dichiara e assegna variabili a scopo globale
let userInput3 = 0;
let i;

// ciclo for
for (i = 0; i < 50; i = i + userInput3) {
    userInput3 = Number(prompt('Inserisci un numero'));
    arrayNumeri3.push(userInput3);
}

// mostro i risultati a schermo
alert(arrayNumeri3);
alert(i);