// step 1: inizlizzasione variabile Contatore
// step 2: condizione fine ciclo
// step 3: incremento varibaile contatore

for (let i = 1; i <= 100; i++) {
// assegno l'etichetta "FizzBuzz" ai multipli di 5 e 3
    if (i % 5 == 0 && i % 3 == 0 ) {
    console.log("FizzBuzz");
    }
// assegno l'etichetta "Buzz" ai multipli di 5   
    else if(i % 5 == 0) {
        console.log("Buzz");
    }
// asssegno l'etichetta "Fizz" ai multipli di 3
    else if (i % 3 == 0) {
    console.log("Fizz");
}
    else{
        console.log(i);
}
}