const divisor1 = document.createElement('div');
document.body.appendChild(divisor1);

const titulo = document.createElement('h1');
divisor1.appendChild(titulo);
titulo.textContent= "Ejercicio1";

const subtitulo = document.createElement("h2");
divisor1.append(subtitulo);
subtitulo.textContent = "holita chikito";

const par1 = document.createElement("p");
divisor1.append(par1);
par1.textContent = "Maestra perdon por apenas empezar la tarea ";

const par2 = document.createElement("p");
divisor1.append(par2);
par2.textContent = "Maestra, la primer y segunda actividad estan relacionadas, no me desactive la 1 cuando cheque la 2 plis"; 

const lista = document.createElement("ul");
divisor1.append(lista);

for(let i = 0; i<5 ; i+=1){
    const elemento = document.createElement("li");
    elemento.textContent = "Este es el elemento " + i;
    lista.append(elemento);
}

const separador1 = document.createElement("hr");
separador1.style.height = "10px";
separador1.style.backgroundColor = "black";
divisor1.append(separador1);