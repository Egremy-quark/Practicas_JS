// alert('Huevos');


// Funciones para buscar texto

var numero = 444;
var texto1 = "Hola   soy texto";
var texto2 = "Hola soy texto soy una cacahuate 2 soy el pene duro";

var busqueda = texto2.indexOf("soy"); // Te da la localización de esa palabra
var busqueda2 = texto2.lastIndexOf("soy");  // Te da la localización de esa palabra la última
var busqueda3 = texto2.search('soy'); //Lo mismo que indexof




var busqueda4 = texto2.match(/soy/g);// Para buscar a todos

var busqueda5 = texto2.match('soy');//para buscara uno


console.log(busqueda4);


// Funciones para reemplazar texto


var textoPracticas = "</br>" + "      Release time comes around so quickly! This month we have quite a few CSS updates, along with the new Object.hasOwn() static method for JavaScript.The post Time for a review of Firefox 92 appeared first on Mozilla Hacks - the Web developer blog.    "  + "</br>";

var espacio = "</br>" + "*********" + "</br>";
var funcionR = textoPracticas.replace('time','huevos'); // Reemplazar strings
var funcionSlice = textoPracticas.slice(30, 80); // Recortar strings
var funcionSplit = textoPracticas.split('         '); //Se utiliza para hacer buscadores, y distintas funcionalidades
var funcionTrim = textoPracticas.trim(); //Se utiliza para quitar espacios



// console.log(textoPracticas);

document.write(funcionTrim);
document.write(espacio)
// document.write(textoPracticas);



console.log(funcionTrim);
console.log(espacio)
// console.log(textoPracticas);