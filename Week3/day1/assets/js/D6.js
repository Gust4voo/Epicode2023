/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var area = (l1,l2) => l1 * l2;
console.log(area(2,10));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var crazySum = (n1,n2) => {
    if (n1 === n2) {
        let x = (n1+n2) * 3;
        return x
    }else {
        return n1+n2;
    }
}
console.log(crazySum(2,2));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var crazyDiff = (n) => {
    if (n <= 19) {
        return Math.abs(n - 19);
    }else{
        return Math.abs((n -19) *3);
    }
}
console.log(crazyDiff(4));
console.log(crazyDiff(24));
console.log(crazyDiff(19));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var boundary = (n) => {
    if (((20 < n) && (n <= 100)) || (n===400)) {
        return true;
    }else {
        return false;
    }
}

console.log(boundary(400));
console.log(boundary(30));
console.log(boundary(1));
console.log(boundary(120));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var epify = (string) => {
    if(string.startsWith('EPICODE')) {
        return string;
    }else{
        return `EPICODE ${string}`
    }
}
console.log(epify('bla bla bla'));
console.log(epify('EPICODE bla bla bla'));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var check3and7 = (n) =>  {
    if(n<0){
        return false;
    }
    else if( (n%3===0) || (n%7===0) ){
        return true;
    }else{
        return false
    }
}
console.log(check3and7(-4));
console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(11));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var reverseString = (string) => {
    let splitString = string.split('');
    let reverseArray = splitString.reverse('');
    let reversed = reverseArray.join('');
    return reversed;
}
console.log(reverseString('Shalom'));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var upperFirst = (string) => {
    string = string.split(" ");
    console.log(string);
    for (var i = 0, x = string.length; i < x; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substr(1);
    }

    return string.join(" ");
}

console.log(upperFirst('ciao sono gustavo'));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var cutString = (string) => {
    return string.slice(1, string.length - 1 );
}
console.log(cutString('Shalom'));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
    
/* SCRIVI QUI LA TUA RISPOSTA */
var giveMeRandom = (n) => {
    let array = []
    for (let i = 0; i < n; i++) {
        array[i] = Math.floor(Math.random() * 10)    
    }
    return array; 
}
console.log(giveMeRandom(7));
console.log(giveMeRandom(100));
console.log(giveMeRandom(1));

