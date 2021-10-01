// alert('B');

/*
1. Pida 6 números por pantalla y los meta en un array.
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola.
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5.Mostrar cuantos elementos tiene el array.
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice (Se valorará el uso de funciones).
*/





// Primero crearemos un nueva array delimitando la cantidad de objetos aceptados por este

// var numeros = new Array(6);

// document.write(`<h1>Números contenidos en el array</h1>`);

/*
document.write(`<ul>`);
// Creamos un bucle for para pedir números hasta llegar a la cantidad de 6 elementos.
for(var i = 0; i <= 5; i++){ 
    numeros[i] = parseInt(prompt(' ingrese 6 cifras', 0));
    document.write(`<li>${numeros[i]}</li>`);
}

document.write(`</ul>`);
*/


// Segunda forma de hacerlo
// Creamos un array para contener los datos

function mostrarArray(elementos, textoCustom = ""){
    document.write(`<h1>Números contenidos en el array ${textoCustom} </h1>`);
    document.write(`<ul>`);
    /* Lo mismo que el anterior, pero en este utilizaremos una función callback */
    numeros1.forEach((elemento, index)=>{
        document.write(`<li>${elemento}</li>`);
    });
    document.write(`</ul>`);
}


// Pedir numeros
var numeros1 = [];

for(var i = 0; i <= 5; i++){
    numeros1.push(parseInt(prompt('Ingrese un número', 0)));

}

// Mostrar array en el body de la página
mostrarArray(numeros1);

// Mostrar array en la consola
console.log(numeros1);

// Ordenar y mostrar
numeros1.sort(function(a,b){return a-b});
mostrarArray(numeros1, 'ordenados');

// Invertir y mostrar
numeros1.reverse();
document.write(numeros1, 'revertido');


// Cuantos elementos tiene un array

document.write(`<h2>El array tiene: ${numeros1.length} elementos</h2>`);

// Busqueda
var busqueda = parseInt(prompt('Busca un numero', 0));
var posicion = numeros1.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write(`<hr/><h1>Encontrado</h1>`);
    document.write(`<h1>Posición de la busqueda: ${posicion}</h1><hr/>`);  

}else{
    document.write(`<hr/><h1>NO HA SIDO ENCONTRADO</h1><hr/>`);
}


