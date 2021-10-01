// alert('Huevos');

/*
Mostrar los números impares que estén entre dos número introducidos
*/

var numero1 = parseInt(prompt('Introduce el primero numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));


while(numero1 < numero2){
    numero1++; // Operador de incremento

    if(numero1%2 != 0){/* Si el resto del número 1, dividido entre 2, es diferente a 0, entonces es impar*/
        document.write(`El ${numero1} es impar </br>`)
    }
}