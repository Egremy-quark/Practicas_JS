// alert('B');

/*
1. Pida 6 números por pantalla y los meta en un array.
2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página y en la consola.
3. Ordenarlo y mostrarlo.
4. Invertir su orden y mostrarlo.
5.Mostrar cuantos elementos tiene el array.
6. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su índice (Se valorará el uso de funciones).
*/


var numeros = ' ';
var coleccionNum = [];

do{
    numeros = parseInt(prompt(' ingrese 6 cifras', 0));
    coleccionNum.push(numeros);
}
while(numeros != -5){

 // peliculas.pop(); // elimina el ultimo elemento de un array
    coleccionNum.pop(); // Property 'pop' does not exist on type 'never' =  Cuando no está dentro de un array
}


document.write('<ul>');
coleccionNum.forEach((numeros, index)=>{
    document.write(`<li>${index} ${coleccionNum}</li>`);
    
});
document.write('</ul>');