// alert("huevos");

 /*
 var pelicula = function(nombre){
     return `La películas es: ${nombre}`;
 }
 /*

 /*
 Función anónima:
esta la inicializaremos con una varible, esto nos dará la libertad de modificar la función 

no tiene una función estricta para algo en concreto, sino que nosotros la pasamos de manera anonima como parámetro de una función 
 */

// Callbacks


//función normal siendo declarada
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;

}


/*
una función callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
*/

sumame(6, 8, function(dato){ //Función callback siendo declarada
    console.log(`La suma es: ${dato}`);
},
function(dato){ 
    console.log(`La suma por dos es: ${dato * 2}`)
});

// Función de flecha 

sumame(4,9, dato => {
    console.log(`La suma es: ${dato}`);
},
dato =>{
    console.log(`La suma por dos es: ${dato * 2}`)
});



// Otro ejemplo de funció callback

function saludar(nombre){
    alert `Hola ${nombre}`;
}

function procesarEntradaUsuario(callback){
    var nombre = prompt('Por favor ingresa tu nombre');
}
procesarEntradaUsuario(saludar);