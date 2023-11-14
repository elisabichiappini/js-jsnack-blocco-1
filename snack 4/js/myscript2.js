// restizione codice js
'use strict';
// - Crea un array vuoto 
// - Prompt all'utente numero da inserire in array
// - Continua a chiedere i numeri all'utente in prompt 
// - push nell'array fino a quando al somma elementi array è inferire a 50.

// dichiaro e assegno un array vuoto
const arrayNumeri = [];
//dichiaro e assegno variabili a scopo globale che verranno riassegnate
let sommaInput = 0;
let userInput = 0;

for (let i = 0; i < 50; i = i + userInput) {
    userInput = Number(prompt('Inserisci numero'));
    arrayNumeri.push(userInput);
    i += userInput;
    sommaInput = i;
}

// mostra i risultati a schermo
alert(arrayNumeri);
alert(sommaInput);