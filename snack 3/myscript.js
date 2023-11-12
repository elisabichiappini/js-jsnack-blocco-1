// restizione codice js
'use strict';
//- prompt 10 volte all'utente inserisci numero.
//- stampa la somma di tutti i numeri inseriti.

//risultato da stampare:
let result = 0;

//quanti numeri vengono richiesti all'utente
let count = 10;

for (let i = 1; i <= count; i++) {
    //prompt: richiesta per utente
    const currentNumber = Number(prompt(`${i} - Inserisci un numero`));
    //verifico se l'utente inserisce solo numeri, qui dico, se diverso da NotANumber alloraa fai questa operazione
    if (!isNaN(currentNumber)) {
        console.log(`${i} - Hai inserito il numero ${currentNumber}`);
        //sommo il numero al risultato
        result += currentNumber;
        console.log(`${i} - La somma a questo punto è ${result}`);
    } else {
        console.log(`${i} - Hai inserito un valore non numerico che è stato escluso dalla somma`)
    }
};

//stampo il risultato finale
console.log(`La somma di tutti i numeri è ${result}`);