// alert('Huevos');


// Arrays, arreglos, matrices

/*
Colección de datos, valores que puede tener una variable
*/
var nombre = "juanito alcachofa";



// Formas de crear un array

var nombres = ["Victor Pepitas", "Juanito Alcachofas", "Elver Galarga", "Laura Silva Dealegría", "Pedro Comes", "Helen Licóptero", "PAncho Pistolas", "Pepe Zandungo", "Jorge Nitales"];
var lenguajes = new Array("PHP", "JS","Go", "Java");

// console.log(nombres[2]); 
// console.log(lenguajes[3]) // Se utiliza para sacar el índice de tu array


// console.log(nombres.length); // Cantidad de elementos dentro de mi array



// Petición con un prompt para extraer un elemento de mi array

/*
var elemento = parseInt(prompt('Qué elemento del array quieres', 0));

if(elemento >= nombres.length){
    alert('Introduce un número menor a ' + nombres.length);
    var elemento = parseInt(prompt('Qué elemento del array quieres', 0));
}else{
    alert(  'El usuario seleccionado es '   + (nombres[elemento]));

    alert(`El usuario seleccionado es ${nombres[elemento]}`)
}
*/



// Mostrar todos los objetos que están listados en tu array


document.write(`<h1>Nombres de Trabajadores</h1>`);


// Utilizaremos un bucle para colocar todos los objetos que están dentro del array


/*
document.write('<ul>')
for(i = 0; i < nombres.length; i++){
    document.write(`<li>${nombres[i]}</li>`);
}

document.write('</ul>');*/

//Segunda forma método forEach
/*
Siempre que utilicemos una función flecha terminaremos la función con un });, el forEach nos itera el array, y nos muestra todo lo que hay dentro.
*/


document.write('<ul>');

nombres.forEach((nombres, index, data)=>{
    document.write(`<li>${index} ${nombres}</li>`);
    
});


document.write('</ul>');



