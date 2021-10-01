/*Esta palabra reservada es mejor que var, ya que var estará establecida en el scoupe del documento, y let limita su valor dentro del bloque */

//alert("hola mundo");

//Prueba con var, var se irá actualizando cada vez que reasignemos su valor.

var numero = 40
console.log(numero); //40

if(true){
    var numero = 50;
    console.log(numero); //50
}

console.log(numero); //50


// Prueba con let, let tiene un alcance límitado. 

var texto = "Curso de JS";
console.log(texto); //curso de js

if(true){
    let texto = "Curso Laravel";
    console.log(texto); //Curso Laravel
}

console.log(texto); //curso de js

// Constantes

var promocion = "2 x 1";
const empanadas = "5 peso la empanada";

var promoEmpanada = `esta noche tenemos a ${empanadas} pero por oferta única tenemos una promoción del ${promocion}`;

console.log(promoEmpanada);

if(true){
    let empanadas = "4 peso la empanada";
    let promoEmpanada = `este día tenemos a ${empanadas} pero no contamos con la oferta de ${promocion}`
    console.log(promoEmpanada);
}

var promoEmpanada = `este día tenemos una súper promoción ya que ${empanadas} y también tenemos el ${promocion} aproveche viejo puto`
 console.log(promoEmpanada);


