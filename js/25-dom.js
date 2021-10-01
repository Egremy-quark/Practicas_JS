// alert('Huevos');

//DomDocument Object Model, se utiliza para modificar los elementos de nuestra página desde el JS



function cambiaColorClass(background, padding, color){
    misClases.style.background = background;
    misClases.style.padding = padding;
    misClases.style.color = color;
}


var misClases = document.querySelector('.caja'); // .[nombreclase]


misClases.style.background = "blue";    
misClases.style.padding = "8px";
misClases.style.color = "white";


console.log(misClases);







function cambiaColorId(background, padding, color){
    myId.style.background = background;
    myId.style.padding = padding;
    myId.style.color = color;
}


//var myId = document.getElementById('ponche');
// Capturar el código que está dentro de mi div desde js, siempre y cuando sea un id
var myId = document.querySelector('#ponche') // #[nombreId]



myId.innerHTML = "¡Texto desde JS!";
myId.style.background = "black";
myId.style.padding = "8px";
myId.style.color = "white";


console.log(myId);