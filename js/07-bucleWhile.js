// alert('huevos');

// Bucle While

/*
consta de una condición, y esta al ser cumplida se ejecutará de manera infinita.

    Este bucle es similar al for
      es menos estricto que el bucle for
      posibilidad de crear bucles infinitos
      bucle indefinido
*/

var year = 2018;

while(year >= 1990){
    // ejecuta esto
    console.log(`Estamos en el año: ${year}`)
    /* Si dejaramos el código con esas instrucciones el bucle se incrementaría de manera infinita, por lo tanto, debemos utilizar un "Operador de incremento", para que así la var "year", vaya incrementando de uno en uno y así se  detenga hasta llegar al límite establecido*/
    if(year == 1991){
        break; //Corta ejecución del bucle
    }

    year--;
}


// Do while

/*
A diferencia del While, este antes ejecutará el bloque de código y luego comprobará la condición para hacer de nuevo ese bloque de código.
*/

var years = 30;

do{
    alert('Sólo cuando sea diferente a 20');
    years--;
}while(years > 28)