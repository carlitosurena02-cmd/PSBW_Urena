/* Create una sección llamada “Panel interactivo” que contenga al menos tres botones. Cada botón realizará
una acción diferente sobre la página.
• Puedes ocultar/mostrar una sección, cambiar un texto, cambiar una clase o cambiar el aspecto de un
elemento.
• Agrega además un elemento que responda a un evento diferente de click.
• Puedes investigar eventos como mouseover, mouseout, dblclick, input o change.
En el README.md deberás explicar qué evento elegiste y cuándo se ejecuta. */

function contando(cont6){
    cont6 += 1;
    mensaje.textContent = "El contador va en: " + cont6;
    return cont6;
}

function visibilidad(){
    if(mensaje.style.visibility == "hidden")
        mensaje.style.visibility = "visible";
    else
        mensaje.style.visibility = "hidden";
}

function chameleon(){
    if(mensaje.style.color == "black")
        mensaje.style.color = "red"
    else if(mensaje.style.color == "red")
        mensaje.style.color = "blue"
    else if(mensaje.style.color == "blue")
        mensaje.style.color = "green"
    else if(mensaje.style.color == "green")
        mensaje.style.color = "yellow"
    else if(mensaje.style.color == "yellow")
        mensaje.style.color = "orange"
    else if(mensaje.style.color == "orange")
        mensaje.style.color = "purple"
    else if(mensaje.style.color == "purple")
        mensaje.style.color = "pink"
    else if(mensaje.style.color == "pink")
        mensaje.style.color = "black"

    if(btncamaleon.style.background == "grey")
        btncamaleon.style.background = "red"
    else if(btncamaleon.style.background == "red")
        btncamaleon.style.background = "blue"
    else if(btncamaleon.style.background == "blue")
        btncamaleon.style.background = "green"
    else if(btncamaleon.style.background == "green")
        btncamaleon.style.background = "yellow"
    else if(btncamaleon.style.background == "yellow")
        btncamaleon.style.background = "orange"
    else if(btncamaleon.style.background == "orange")
        btncamaleon.style.background = "purple"
    else if(btncamaleon.style.background == "purple")
        btncamaleon.style.background = "pink"
    else if(btncamaleon.style.background == "pink")
        btncamaleon.style.background = "grey"
}

const divisor6 = document.createElement('div');
document.body.appendChild(divisor6);
divisor6.id = "PanelInteractivo";

divisor6.append(document.createElement("h1"));
divisor6.querySelector("h1").textContent = "Ejercicio6"

let cont6 = 0;

const mensaje = document.createElement("p");
divisor6.append(mensaje);
mensaje.textContent = "El contador va en: " + cont6;
mensaje.style.color = "black";

const btninvisible = document.createElement("button");
divisor6.append(btninvisible);
btninvisible.innerHTML = "volver invisible y visible";
btninvisible.style.margin = "6px";
btninvisible.style.background = "grey";
btninvisible.addEventListener("click",visibilidad);

const btncontador = document.createElement("button");
divisor6.append(btncontador);
btncontador.innerHTML = "+1 y doble click para reiniciar";
btncontador.style.margin = "6px";
btncontador.style.background = "grey";
btncontador.addEventListener("click", function(){
    cont6 = contando(cont6)
});
btncontador.addEventListener("dblclick", () => {
    cont6 = 0;
    mensaje.textContent = "El contador va en: " + cont6;
});

const btncamaleon = document.createElement("button");
divisor6.append(btncamaleon);
btncamaleon.innerHTML = "cambiar color";
btncamaleon.style.margin = "6px";
btncamaleon.style.background = "grey";
btncamaleon.addEventListener("click", chameleon);
btncamaleon.addEventListener("mouseenter", () =>{
    if(btncamaleon.style.background == "grey")
        btncamaleon.style.background = "red"
    else if(btncamaleon.style.background == "red")
        btncamaleon.style.background = "blue"
    else if(btncamaleon.style.background == "blue")
        btncamaleon.style.background = "green"
    else if(btncamaleon.style.background == "green")
        btncamaleon.style.background = "yellow"
    else if(btncamaleon.style.background == "yellow")
        btncamaleon.style.background = "orange"
    else if(btncamaleon.style.background == "orange")
        btncamaleon.style.background = "purple"
    else if(btncamaleon.style.background == "purple")
        btncamaleon.style.background = "pink"
    else if(btncamaleon.style.background == "pink")
        btncamaleon.style.background = "grey"
})


const separador6 = document.createElement("hr");
separador6.style.height = "10px";
separador6.style.backgroundColor = "black";
divisor6.append(separador6);
