// alert('Buebos');


/*
    Hacer un programa que muestre todos los números entre dos numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt('Introduce el primer número', 0)); // declaramos dos variables para almacenar ambos números
var numero2 = parseInt(prompt('Introduce el segundo número', 0));
 

/*
Creamos un ciclo For ya que este por su estructura se utiliza para ejecutar un bloque de código un número determinado de veces.
Un ciclo For se puede configurar para detener condicionalmente la ejecución del código además de su salida basada en iteraciones.

*Primero: establecemos la variable i que será igual a la primera variable inicializada

*Segundo: mientras que el primer valor sea mayor que el segundo número, no será ejecutado el ciclo, por lo tanto, lo pedirá hasta que el segundo dato sea correcto.

*Tercero: hacemos una suma para que vaya de uno en uno
*/

document.write('<h1>De '+numero1 +' a '+ numero2+' están estos numeros:</h1>'); 
for(var i = numero1; i <=  numero2; i++){
   document.write(i+'</br>');
}

// i++ es un operador de incremento
