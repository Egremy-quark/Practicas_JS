//alert("huevos");

//Operadores

var numeroUno = 7;
var numeroDos = 16;
var operacion = numeroDos + numeroUno;

console.log(operacion);

//Tipos de datos
var numero = 1; //Al escribir un número js lo interpretará de manera inmediata como tal
var cadenaDeTexto = "Pepe pela papas"; //las comillas dobles o comillas simples js lo interpretará como tal
var verdadero_o_falso = true; // los datos booleanos son utilizados para los if


var numeroFalso = "33";

/* Con estas "funciones" podemos convertir un dato tipo string en un dato tipo number*/

/*parseInt = datos enteros
  parseFloat = datos con decimales
  number = convertir cualquier dato en number
  string = para convertir cualquier dato en string
  typeof = te devuelve le tipo de dato 
  */

console.log(parseInt(numeroFalso) + 7)
console.log(parseFloat(numeroFalso) + 7)
console.log(Number(numeroFalso) +7)

var numeroEntero = 44.05;

/*cuando la variable establecida es un dato tipo numérico podemos realizar la operación dentro del paréntesis, en cambio cuando es tipo cadena de texto, no*/
console.log(parseInt(numeroEntero + 15))
console.log(parseFloat(numeroEntero) + 15)