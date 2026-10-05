/*Ejercicio 9 · Estado y LocalStorage
Actualmente, si recargas la página, las tecnologías agregadas por el usuario probablemente desaparecerán.
Modifica tu programa para almacenar la información utilizando localStorage.
• Al agregar una tecnología: actualiza tu arreglo, guarda la información y actualiza la interfaz.
• Cuando la página vuelva a cargarse: consulta si existe información almacenada, recupérala y
reconstruye la interfaz.
• Agrega un botón “Borrar datos guardados” que permita eliminar la información almacenada y regresar al
estado inicial.*/

function guardar9(){
    localStorage.setItem("tecnologias", JSON.stringify(tecnologias7));
}


const divisor9 = document.createElement("div");
document.body.append(divisor9);

const title9 = document.createElement("h1");
divisor9.append(title9);
title9.textContent = "Ejercicio 9 - Elementos guardados";

// cuando se carga la pagina recupera lo que tenia guardado
let guardadas9 = JSON.parse(localStorage.getItem("tecnologias")) || [];

for(let i = 0; i < guardadas9.length; i += 1){
    cont7 = agregarTecnologia(cont7, guardadas9[i].nombre, guardadas9[i].desc, guardadas9[i].tipo);
}

// botn de ejericicio7 
btnadd.addEventListener("click", guardar9);

const btnBorrar9 = document.createElement("button");
divisor9.append(btnBorrar9);
btnBorrar9.textContent = "Borrar datos guardados";
btnBorrar9.style.background = "red";
btnBorrar9.addEventListener("click", function(){
    localStorage.removeItem("tecnologias");
    tecnologias7 = [];
    cont7 = 0;
    divisor2_7.innerHTML = "";
});

const separador9 = document.createElement("hr");
separador9.style.height = "10px";
separador9.style.backgroundColor = "black";
document.body.append(separador9);