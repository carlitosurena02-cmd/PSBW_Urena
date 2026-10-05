/* Ejercicio 8 · Buscar y filtrar información
Utilizando las tecnologías almacenadas en la página, agrega un campo “Buscar tecnología”.
• Mientras el usuario escribe, deberán mostrarse únicamente las tecnologías cuyo nombre coincida
parcial o totalmente con la búsqueda.
• Por ejemplo, escribir “Java” podría mostrar JavaScript y Java.
• La búsqueda deberá actualizarse mientras el usuario escribe, sin necesidad de recargar la página. */

function tecnologia(nombre, desc, tipo){
    this.nombre = nombre;
    this.desc = desc;
    this.tipo = tipo;
}


function busquedaChida(cadena){

    if(cadena == ""){
        sinbusqueda.textContent = "no hay nada que mirar aqui...";
        return;
    }
    for(let i = 0; i<tecnologias7.length; i += 1){
        if(tecnologias7[i].nombre.includes(cadena)){
            const titulo8 = document.createElement("h3");
            titulo8.textContent = tecnologias7[i].nombre;
            divisor8.append(titulo8);
            const desc8 = document.createElement("p");
            desc8.textContent = tecnologias7[i].desc;
            desc8.style.fontFamily = "Lucida Handwriting";
            divisor8.append(desc8);
            const tipo8 = document.createElement("p");
            tipo8.textContent = tecnologias7[i].tipo;
            tipo8.style.color = "red";
            divisor8.append(tipo8);
            divisor8.append(document.createElement("hr"));
        }
    }
    
}

// vista del ejercicio 8 desde el ejercicio 7
const titulo8 = document.createElement("h2");
titulo8.textContent = "Ejercicio 8";
divisor7.append(titulo8);

const div8 = document.createElement("div");
divisor7.append(div8);
const lbl4 = document.createElement("label");
lbl4.textContent = "Busqueda de las chidas ";
div8.append(lbl4);
const buscar = document.createElement("input");
div8.append(buscar)
buscar.placeholder = "Busca algo :)";
buscar.addEventListener("input",function(){
    divisor8.innerHTML = "";
    busquedaChida(buscar.value);
});

// vista del espacio del ejercicio 8

const divisor8 = document.createElement("div");
document.body.append(divisor8);

const title = document.createElement("h1");
divisor8.append(title);
title.textContent = "Busca en el Ejercicio 8"; 

const sinbusqueda = document.createElement("p");
sinbusqueda.textContent = "no hay nada que mirar aqui...";
divisor8.append(sinbusqueda);


const separador8 = document.createElement("hr");
separador8.style.height = "10px";
separador8.style.backgroundColor = "black";
document.body.append(separador8);
