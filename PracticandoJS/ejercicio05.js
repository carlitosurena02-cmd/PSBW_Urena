/*Agrega dos botones: “Agregar elemento” y “Eliminar último elemento”.
• Al presionar Agregar elemento, JavaScript deberá crear un nuevo elemento y añadirlo a una lista.
• Los elementos deberán numerarse automáticamente: Elemento 1, Elemento 2, Elemento 3, etc.
• Al presionar Eliminar último elemento, deberá eliminarse el último elemento de la lista.
• Si la lista está vacía, el programa deberá evitar errores y mostrar un mensaje apropiado.*/
function agregarElemento(cont){
    mensajeError.textContent = "";
    cont += 1;
    const addlist = document.createElement("li");
    addlist.textContent = "Este es el elemento " + cont;
    lista2.append(addlist);
    return cont;
}

function eliminiarElemento(cont){
    if(cont <= 0){
         mensajeError.textContent = "No se puede eliminar otro, lista vacia";
         return cont;
    }
    const removelist = lista2.querySelectorAll("li");
    removelist[cont-1].remove();
    cont -= 1;
    return cont;
}


const divisor5 = document.createElement('div');
document.body.appendChild(divisor5);

divisor5.append(document.createElement("h1"));
divisor5.querySelector("h1").textContent = "Ejercicio5"

const mensajeError = document.createElement("p");
divisor5.append(mensajeError);

const lista2 = document.createElement("ul");
divisor5.append(lista2);

let cont = 0;

const btn1 = document.createElement("button");
divisor5.append(btn1);
btn1.innerHTML = "agregar elemento";
btn1.style.margin = "12px"
btn1.addEventListener("click", function(){
    cont = agregarElemento(cont);
});

const btn2 = document.createElement("button");
divisor5.append(btn2);
btn2.innerHTML = "eliminar elemento";
btn2.addEventListener("click", function(){
    cont = eliminiarElemento(cont);
});

const separador5 = document.createElement("hr");
separador5.style.height = "10px";
separador5.style.backgroundColor = "black";
divisor5.append(separador5);