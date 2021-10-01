// alert('Huevos');

// Parametros REST Y SPREAD


function listadoFrutas(fruta1, fruta2, ...restoDefrutas){
    console.log(`Fruta 1: ${fruta1}`);
    console.log(`Fruta 2: ${fruta2}`);
    console.log(`Resto de frutas: ${restoDefrutas}`);
    console.log('****************************')
}

/* Al agregar los tres puntos antes del nombre de una variable esta se convierte en un array, esto es un parámetro tipo REST*/


listadoFrutas('ponche', 'papaya', 'pepino', 'coco', 'plátano', 'pera', 'manzana');

// El listado de Frutras de arriba se puede invocar de la siguiente forma y dará el mismo resultado



var frutas = ["ponche", "papaya"]//Array(arreglo) = listado de objetos
listadoFrutas(...frutas, 'pepino', 'coco', 'plátano', 'pera', 'manzana'); // Sí ponemos los tres puntos antes de llamar a nuestra variable estaremos haciendo un SPREAD.




listadoFrutas(frutas, 'pepino', 'coco', 'plátano', 'pera', 'manzana');
// Si no ponemos los tres puntos antes de la variable el valor de este reemplazará únicamente el primer valor.