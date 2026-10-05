/* Crea mediante JavaScript un pequeño formulario para registrar una tecnología.
• Solicita nombre, descripción y categoría o tipo.
• Agrega un botón “Agregar tecnología”.
• Cuando el usuario complete el formulario, la nueva tecnología deberá aparecer automáticamente en la
página sin recargarla.
• No se aceptarán campos vacíos. Si falta información, deberás mostrar un mensaje indicando el
problema.
*/ 
// objeto tecnologia

function tecnologia(nombre, desc, tipo){
    this.nombre = nombre;
    this.desc = desc;
    this.tipo = tipo;
}

function printTechnologies(cont7){        
        const titulo7 = document.createElement("h3");
        titulo7.textContent = tecnologias7[cont7].nombre;
        divisor2_7.append(titulo7);
        const desc7 = document.createElement("p");
        desc7.textContent = tecnologias7[cont7].desc;
        desc7.style.fontFamily = "Lucida Handwriting";
        divisor2_7.append(desc7);
        const tipo7 = document.createElement("p");
        tipo7.textContent = tecnologias7[cont7].tipo;
        tipo7.style.color = "red";
        divisor2_7.append(tipo7);
        divisor2_7.append(document.createElement("hr"));
}

function agregarTecnologia(cont7, nombre, desc, tipo){
    tecnologias7[cont7] = new tecnologia(nombre,desc,tipo);
    printTechnologies(cont7);
    cont7 += 1;
    return cont7;
}



// preparando la vista inicial
const estilo = document.createElement("style");
document.head.append(estilo);

estilo.textContent = ".grupo{margin-bottom: 20px;}";

const estilo2 = document.createElement("style");
document.head.append(estilo2);

estilo2.textContent = ".tarjeta{ background: pink; padding: 50px; border-radius: 20px; width: 100%; max-width: 450px; box-sizing: border-box;}";

const divisor7 = document.createElement('div');
document.body.appendChild(divisor7);
divisor7.id = "PequeñoFormulario";
divisor7.classList.add("tarjeta");

divisor7.append(document.createElement("h1"));
divisor7.querySelector("h1").textContent = "Ejercicio7"

divisor7.append(document.createElement("h2"));
divisor7.querySelector("h2").textContent = "== Formulario Tecnologias =="
divisor7.querySelector("h2").style.fontFamily = "Papyrus" 
divisor7.querySelector("h2").style.color = "green";

// label 1
const divisor7_1 = document.createElement('div');
divisor7.appendChild(divisor7_1);
divisor7_1.classList.add("grupo");

const lbl1 = document.createElement("label");
divisor7_1.append(lbl1);
lbl1.textContent = "Nombre de la Tecnologia: ";

const nombre = document.createElement("input");
divisor7_1.append(nombre);
nombre.placeholder = "JavaScript";

// label 2
const divisor7_2 = document.createElement('div');
divisor7.appendChild(divisor7_2);
divisor7_2.classList.add("grupo");


const lbl2 = document.createElement("label");
divisor7_2.append(lbl2);
lbl2.textContent = "Descripcion: ";

const desc = document.createElement("input");
divisor7_2.append(desc);
desc.placeholder = "Informacion acerca de";


// label 3

const divisor7_3 = document.createElement('div');
divisor7.appendChild(divisor7_3);
divisor7_3.classList.add("grupo");

const lbl3 = document.createElement("label");
divisor7_3.append(lbl3);
lbl3.textContent = "Tipo: ";

const tipo = document.createElement("input");
divisor7_3.append(tipo);
tipo.placeholder = "FrontEnd";

const btnadd = document.createElement("button");
divisor7.append(btnadd);
btnadd.innerHTML = "Agregar Tecnologia";
btnadd.style.background = "orange";
btnadd.addEventListener("click", function(){

    if(nombre.value != "" && desc.value != "" && tipo.value != ""){

        menError.textContent = "";
        cont7 = agregarTecnologia(cont7, nombre.value, desc.value, tipo.value);
        nombre.value = "";
        desc.value = "";
        tipo.value = "";

    }else{
        menError.textContent = "Favor de llenar todos los campos porfaplox";
    }
});

const menError = document.createElement("p");
divisor7.append(menError); 
menError.textContent = "";

// --------- Mostrar Tecnologias ----------

let cont7 = 0

let tecnologias7 = []; 

const divisor2_7 = document.createElement('div');
document.body.appendChild(divisor2_7);

const separador7 = document.createElement("hr");
separador7.style.height = "10px";
separador7.style.backgroundColor = "black";
document.body.append(separador7);