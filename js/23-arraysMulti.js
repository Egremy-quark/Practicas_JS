// alert('Be');

// Arrays miltidimensionales

var categorias = ['Acción', 'Terror', 'Comedia', 'Suspenso'];
var peliculas = new Array('Hoyo profundo', 'Anaconda', 'Verga fogoza', 'Nalgas pelonas', 'La familia es poderosa');

console.log(peliculas);
var cine = [categorias, peliculas];


//Ordenar por orden alfabético


var peliculas_orden = peliculas.sort();
console.log(peliculas_orden); 
console.log(peliculas);

/*
var elemento = '';
do{
    elemento = prompt('Ingresa tu película');
    peliculas.push(elemento);
}
while(elemento != "ACABAR"){

 // peliculas.pop(); // elimina el ultimo elemento de un array

}


document.write('<ul>');
peliculas.forEach((peliculas, index, data)=>{
    document.write(`<li>${index} ${peliculas}</li>`);
    
});
document.write('</ul>');
*/


// console.log(cine[0][1]); // Para ubicar un elemento de mi array 

// console.log(cine[0][1]);
// console.log(cine[1][0]);


// Eliminar un elemento de mi array

var indice = peliculas.indexOf('Verga fogoza');



if(indice > -1){
    peliculas.splice(indice, 1);
    console.log(indice);
}







// convertir de array a string
/*
var peliculas_string = peliculas.join();
console.log(peliculas_string)*/


// convertir de string a array 
/*
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(', ');

console.log(cadena_array);*/