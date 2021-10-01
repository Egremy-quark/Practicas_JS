// alert('Huevos');


/*
Las variables que únicamente estén definidas dentro de la función, podrán ser invocadas únicamente dentro de la función. Sin embargo, podré acceder a las variables creadas fuera de la función ya que esas tienen un ámbito global.

Eso es el ámbito de las variables.
 */

function holaMundo(texto){
    var hola_mundo = "huevos";
    
    console.log(texto);
    console.log(typeof numero.toString());//Para convertir en una string
    console.log(hola_mundo);
}



var numero = 69;
var texto = "Puto el que lo lea, soy una variable global";
holaMundo(texto);

console.log(numero);
(typeof numero);