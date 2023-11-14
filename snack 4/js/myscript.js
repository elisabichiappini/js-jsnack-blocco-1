// restizione codice js
'use strict';
// - Crea un array vuoto 
// - Prompt all'utente numero da inserire in array
// - Continua a chiedere i numeri all'utente in prompt 
// - push nell'array fino a quando al somma elementi array è inferire a 50.

//dichiaro e assegno array
const arrayNumeri = [];
//dichiarata a scopo globale
let sommaNumeri = 0;


while (sommaNumeri < 50) {
    //dichiaro e assegno prompt e salvo dato in variabile
    const inputUtente = Number(prompt('Inserisci un numero'));
        //condizione se non è un numero quello del utente
        if (isNaN(inputUtente)) {
            alert.log('Inserisci un numero, non un testo')
        //condizione altrimenti (essedo stato digitato un numero)
        } else {
            //sommo in arrayNumeri il valore input inserito
            arrayNumeri.push(inputUtente);
            //sommo alla somma il numero inserito dall'utente
            sommaNumeri += inputUtente;
        }
}

//stampo 
console.log('La somma dei numeri che hai inserito è: ', sommaNumeri);
console.log('I numeri che hai inserito sono: ', arrayNumeri);

for (let i = 0; i < arrayNumeri.length; i++) {
    console.log(arrayNumeri[i]);
}







//undefin = il valore della variabile non è definito