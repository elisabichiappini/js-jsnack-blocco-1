// restizione codice js
'use strict';
// Fai inserire un numero, che chiameremo N, all'utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. 
// Ogni volta che ne crei uno, stampalo a schermo.

//user prompt
const userInput = Number(prompt('Inserisci un numero'));
const randomNumeri = 10;

//ciclo per N volte
for (let i = 1; i <= randomNumeri; i++) {
    const arrayNumer = [];

    //genero 10 numeri casuali
    for (let j = 0; j <= randomNumeri; j++) {
        let random = Math.floor(Math.random() * 100) + 1;
        //pusho elementi in array
        arrayNumer.push(random);
    }
        alert(`Array ${i}: ${arrayNumer}`);
}