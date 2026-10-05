/* Utilizando JavaScript:
• Selecciona el título creado anteriormente.
• Cambia su contenido.
• Agrega un id al título.
• Agrega una clase a los párrafos.
• Modifica al menos tres propiedades visuales mediante JavaScript (por ejemplo: tamaño de letra, color,
margen, alineación o fondo).
No modifiques directamente el HTML para conseguir estos cambios.
*/

const claseconestilo = document.createElement("style");

claseconestilo.textContent = ".claseconestilo{color: red; font-weight: bold; font-family: Lucida Handwriting; font-size: 14px;}";

document.head.append(claseconestilo);

titulo.textContent= "Antes era Ejercicio1, ahora es Ejercicio2";
titulo.id = "titulo1"

par1.classList.add("claseconestilo");
par2.classList.add("claseconestilo");



