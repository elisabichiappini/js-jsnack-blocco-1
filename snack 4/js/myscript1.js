// restizione codice js
'use strict';
// - Crea un array vuoto 
// - Prompt all'utente numero da inserire in array
// - Continua a chiedere i numeri all'utente in prompt 
// - push nell'array fino a quando al somma elementi array è inferire a 50.

//dichiari e assegni un array vuoto
const arrayNumber = [];
//dichiari e assegni una variabile somma a scopo globale
let somma = 0 ;

//ciclo do-while : fai questo, almeno una volta, finchè/mentre la condizione è vera
do {
    let inputNumber = parseFloat(prompt('Inserisci un numero'));
    arrayNumber.push(inputNumber);
    somma += inputNumber;
    console.log(`Array: ${arrayNumber}`);
    console.log(`Somma: ${somma}`);
} while (somma < 50);

if(!isNaN(somma)) {
    console.log('Il totale di somma ora è uguale e maggiore di 50');
}