/*Agrega un botón llamado “Reorganizar página”. Cuando el usuario lo presione, utiliza JavaScript para mover
elementos que ya existen en el DOM.
• Por ejemplo, un orden inicial podría ser: Título → Descripción → Lista → Contenedores DIV.
• Después de presionar el botón: Contenedores DIV → Título → Lista → Descripción.
• Agrega otro botón llamado “Restaurar orden” que regrese los elementos a su posición original.
Importante: no deberás crear nuevamente los elementos. Deberás mover los nodos existentes dentro del
DOM. El objetivo es observar que JavaScript puede modificar la estructura del documento incluso después
de que el navegador haya cargado el HTML.*/

const divisor4 = document.createElement("div");
document.body.append(divisor4);

const title4 = document.createElement("h1");
divisor4.append(title4);
title4.textContent = "Ejercicio 4"; 


const separador4 = document.createElement("hr");
separador4.style.height = "10px";
separador4.style.backgroundColor = "black";
document.body.append(separador4);