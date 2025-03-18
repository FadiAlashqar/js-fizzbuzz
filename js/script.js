// step 1: inizlizzasione variabile Contatore
// step 2: condizione fine ciclo
// step 3: incremento varibaile contatore

for (let i = 0; i <= 100; i++) {
// asssegno l'etichetta "Fizz" ai multipli di 3
    if (i % 3 == 0) {
        console.log("Fizz")
    }
// assegno l'etichetta "Buzz" ai multipli di 5   
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
// assegno l'etichetta "FizzBuzz" ai multipli di 5 e 3
else{
    console.log("FizzBuzz")
}

}