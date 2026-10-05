/* En JavaScript crea un arreglo de objetos que represente cinco tecnologías web. 
Cada objeto deberá tener al
menos: nombre, descripción y tipo.
• A partir del arreglo, genera dinámicamente un contenedor div para cada tecnología.
• Cada contenedor deberá contener nombre, descripción y tipo.
• No escribas manualmente las cinco tarjetas en HTML.
• Ponle bordes a cada div y que existan espacios entre cada uno
La interfaz deberá generarse recorriendo el arreglo mediante JavaScript*/ 

const divisor3 = document.createElement("div");
document.body.append(divisor3);

divisor3.append(document.createElement("h1"));
divisor3.querySelector("h1").textContent = "Ejercicio3"

function tecnologia(nombre, desc, tipo){
    this.nombre = nombre;
    this.desc = desc;
    this.tipo = tipo;
}

const tecnologias = [
    new tecnologia("HTML","Lenguaje de etiquetas para paginas web","Frontend"),
    new tecnologia("CSS", "Lenguaje utilizado para dar estilo a paginas web", "Frontend"),
    new tecnologia("JavaScript", "Lenguaje de programacion para hacer dinamica una paginas web", "Frontend"),
    new tecnologia("Node.js", "Entorno de ejecucion de JavaScript del lado del servidor", "Backend"),
    new tecnologia("MySQL", "Sistema de gestion de bases de datos relacionales", "Base de datos")]; 

for(let i = 0; i<5 ; i+=1){
    const titulo = document.createElement("h3");
    titulo.textContent = tecnologias[i].nombre;
    divisor3.append(titulo);
    const desc = document.createElement("p");
    desc.textContent = tecnologias[i].desc;
    desc.style.fontFamily = "Lucida Handwriting";
    divisor3.append(desc);
    const tipo = document.createElement("p");
    tipo.textContent = tecnologias[i].tipo;
    tipo.style.color = "red";
    divisor3.append(tipo);
    divisor3.append(document.createElement("hr"));
}

const separador = document.createElement("hr");
separador.style.height = "10px";
separador.style.backgroundColor = "black";
divisor3.append(separador);
