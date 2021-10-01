// alert('Huevos');


/*
    Programa que muestre todos los números divisores de un número introducido en un prompt
*/

var numero = parseInt(prompt('Mete un número', 1));


/*
Creamos un ciclo For ya que este por su estructura que se utiliza para ejecutar un bloque de código un número determinado de veces.
Un ciclo For se puede configurar para detener condicionalmente la ejecución del código además de su salida basada en iteraciones.

*/

/*
    1: Inicializamos la variable i
    2: creamos una condición en la que mientras i sea menor igual que la variable introducida i seguir´incrementándose 
    3:
*/
for(var i = 1; i <= numero; i++){
    
    if(numero%i == 0){
        document.write(`Los divisores son ${i+'</br>'}`)
    }

}