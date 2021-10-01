// alert("Huevos");

//condicional IF
// Si A es igual a B entonces haz algo

var edad1 = 3;
var edad2 = 25;
var edad3 = 15;
var edad4 = 16;
var edad5 = 15;

/*
Operadores relacionales
  mayor: >
  menor: <
  mayor o igual: >=
  menor o igual: <=
  igual: ===
  distinto: !==
*/
//Si pasa esto
if(edad1 > edad2){
    console.log("edad 1 es mayor que edad 2");
}else{
    console.log("edad 1 es inferior a edad 2");
}

//Operacor relacional <= y >=

if(edad3 >= 16){
    console.log(`junaito tiene ${edad3} al igual que poncho que tiene ${edad5}`);
    if(edad3 <= 14){
        console.log(`Al tener ${edad3} tienes derecho a celebrar tus quince años`);
    }else if(edad3 >= 16){
        console.log(`Al tener más de ${edad3} no tienes derecho a quince años`);
    }
}else{
    console.log(`juanito tiene ${edad3} por lo tanto es mayor que paco que tiene ${edad1}`);
}

/*Operadores relacionales en los cuales metes más de una condición, varias condiciones dentro de una condición, se les conoce como OPERADORES LÓGICOS*/

//OPERADORES LÓGICOS
/* 
AND (Y): &&
OR (O): ||
NEGACIÓN: !
 */

var year = 2039


// Negación
if(year != 2016 ){
    console.log(`El año no es 2016, realmente es: ${year}`);
}

// AND
if(year >= 2000 && year <= 2020){
    console.log('Estamos en la era actual');
}else{
    console.log('Estamos en la edad postmoderna');
}

//  OR
if(year == 2008 || year == 2018 || year == 2028 || year == 2038){
    console.log('El año termina en 8');
}else{
    console.log('Año de putos');
}