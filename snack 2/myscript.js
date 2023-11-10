// L'utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la più lunga.
// - Prompt parola 1 per utente;
// - Prompt parola 2 per utente;
// - condizione: se parola 1 > parola 2, allora stampo parola 1;
// - altrimenti stampo parola 2 

const parola1 = prompt ('inserisci prima parola');
const parola2 = prompt ('inserisci seconda parola');

if (parola1 > parola2){
    console.log(parola1.value);
} else if (parola1 < parola2) {
    console.log(parola2.value)
} else {
    console.log('uguale lunghezza')
};