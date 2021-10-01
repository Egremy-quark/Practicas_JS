

/* 
    Programa que pida 2 números y que nos diga cual es el mayor, el menor y si son iguales

    Plus: Si los numeros no son numero o son menores o iguales a cero, nos los vuelva a pedir.
*/

var numero1 = parseInt(prompt('Introduce el primer número', 0));
var numero2 = parseInt(prompt('Introduce el segundo número', 0));

/* Haremos un while, ya que con el while analizaremos las variables hasta que estas sean correctas. Con este while cumpliremos la función de realizar una petición de ingresar un número cada vez que la persona no cumpla con estas características solicitadas.*/

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer número', 0));
    numero2 = parseInt(prompt('Introduce el segundo número', 0));
}


console.log(numero1, numero2); 

if(numero1 == numero2){
    alert('Los números son iguales');
}else if(numero1 > numero2){
    alert(`El ${numero1} que es el primer número es el mayor`);
    alert(`Y el ${numero2} es el menor`);
}else if(numero2 > numero1){
    alert(`El ${numero2} que es el segundo número es el mayor`);
    alert(`Y el ${numero1} es el menor`);
}else{
    alert('Introduce numeros correctos');
}