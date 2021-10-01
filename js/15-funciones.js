// alert('buebos');


//Funciones 

/*
Grupo de órdenes con un orden concreto
Se pueden invocar cuantas veces queramos
    *Puede recibir parámetros, que son variables que alterarán la lógica o cmabiaran los resultados devueltos por estas funciones

*/

/* 
    Hacer una calculadora que devuelva una suma, una resta, una multiplicación, y una división de dos números ingresados
*/

// var numero1 = parseInt(prompt("ingrese el primer número: ", 0));
// var numero2 = parseInt(prompt("ingrese el primer número: ", 0));


// Parametros opcionales = vienen inicializados por defecto.


// var pedirValor = parseInt(prompt('Ingresa un numero', 0));


const numero3 = 7;


let numero2 = 6;
var numero1 = 5;

console.log(numero3);
console.log(numero2);
console.log(numero1);
console.log("********************");


function porConsola(numero1, numero2,){
    
    var numero1 = 8;
    console.log(`suma ${numero1} + ${numero2} = ${numero1 + numero2}` );
    console.log(`resta ${numero1} - ${numero2} = ${numero1 - numero2}` );
    console.log(`multiplicación ${numero1} * ${numero2} = ${numero1 * numero2}` );
    console.log(`división ${numero1} / ${numero2} = ${numero1 / numero2}` );
    console.log("**********************"); 
    // console.log(mostar);
}


console.log(numero3);
console.log(numero2);
console.log(numero1);






function porPantalla(numero1, numero2){
    document.write(`suma ${numero1} + ${numero2} = ${numero1 + numero2} </br>` );
    document.write(`resta ${numero1} - ${numero2} = ${numero1 - numero2} </br>` );
    document.write(`multiplicación ${numero1} * ${numero2} = ${numero1 * numero2} </br>` );
    document.write(`división ${numero1} / ${numero2} = ${numero1 / numero2} </br>` );
    document.write(`********************** </br>`);
    
        //return 'Hola soy la calculadora'; 
        /*Este comando es para devolver un mensaje en consola, tampoco podemos colocar console.log después de este comando */
}




function calculadora(numero1, numero2, mostar = false){    
    if(mostar == false){
        porPantalla(numero1, numero2);
    }else{
        porConsola(numero1, numero2);
    }

    return true;
}
// calculadora(3, 5);
// calculadora(4, 5, true);
// calculadora(5, 5, true);
// calculadora(6, 3);



// calculadora(5, 2);

/*
for(var i = 1; i <= 10; i++){
    // console.log(i);
    calculadora(i, 10);
}
*/
