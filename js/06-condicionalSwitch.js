// alert('huevos');


/* Switch nos permite hacer muchas condiciones de una manera más organizada.*/


var edad = 75;
var imprime = '';

switch(edad){
    case 18: 
    imprime = 'Acabas de cumplir la mayoría de edad';
    break;
    case 25:
        imprime = 'Ya eres un adulto'; 
    break;
    case 40:
        imprime = 'Crisis de los 40';
    break;
    case 75:
        imprime = 'Ya eres un anciano';
    break;
    default:    
        imprime = 'Tu edad es neutra';
    break;
}

console.log(imprime);


// Bucle for 
// El bucle es una estructura de control que se repite varias veces
/*
    Se coloca el bucle for con la siguiente estructura:
    
    1er elemento = Var i, este es un contador que se inicializa desde el número 0

    2do elemento = Condición, en que caso seguirá haciendo iteraciones el bucle.

    3er elemento = incrementador o decrementador del contador, operador de incremento (++)

    Si queremos ver como funciona el bucle de manera más clara, podemos colocar "debugger"


*/
var numero = 101;

for(var i = 0; i <= numero; i++){
    console.log(`Vamos por el numero: ${+i}`);
    
    debugger;
}

