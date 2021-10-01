'Use strict'
// alert('Huevos');

/*
    Utilizando un bucle debemos mostrar la media y la suma de los numeros introducidos por el usuario, hasta que metamos un número negativo se mostrarán los datos.

    OBJETIVO:
    Media y Suma de los números intriducidos por el usuario.
*/

var suma = 0;
var contador = 0;


/* 
    Primero crearemos una var, prompt, en la que introduciremos los números.

    Segundo, declararemos dentro de un if, que si no es un número lo que ingresamos lo volverá a pedir, también agregaremos una condición en la que debemos de introducir de manera forzosa un número mayor a 0, ya que si no ponemos esta condicion la persona que ingrese un 0 no se cumplirán las demás condiciones.
*/

do{
    var numero = parseInt(prompt('Introduce números hasta que metas uno negativo', 0));

        if(isNaN(numero)){
            numero = 0;
        }else if(numero >= 0){
            suma += numero; //El += es igual a suma = suma + numero;

            contador++;
        }

        console.log(suma);
        console.log(contador);

}while(numero >= 0)

alert(`La suma de todos los numeros es ${suma}`);
alert(`El promedio de todos los numeros sumados es ${suma/contador}`);
alert('El promedio de todos los numeros sumados es: ' + (suma/contador));