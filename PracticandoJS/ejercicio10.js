/* Ejercicio 10 · Formularios y AJAX
En este último ejercicio utilizarás un formulario para obtener información del usuario y realizar una petición
a un servidor sin recargar la página. El objetivo es comprender cómo JavaScript puede comunicarse con un
servidor y utilizar la respuesta recibida para modificar el DOM.
Parte 1. Crear el formulario
Crea mediante JavaScript un formulario que permita buscar información de un usuario de GitHub. El
formulario deberá contener:
• Un campo de texto para introducir el nombre de usuario de GitHub.
• Un botón “Buscar usuario”.
• Una sección vacía donde posteriormente se mostrará el resultado.
El formulario y sus elementos deberán ser creados desde JavaScript.
Parte 2. Capturar el envío del formulario
Utiliza el evento submit para detectar cuando el usuario envíe el formulario. Evita que el navegador recargue
la página al enviarlo. Investiga y utiliza:
event.preventDefault();
Obtén posteriormente el nombre de usuario introducido. Antes de realizar la petición deberás verificar que
el campo no esté vacío.
Parte 3. Realizar una petición AJAX
Realiza una petición desde JavaScript a la API pública de GitHub utilizando:
https://api.github.com/users/USUARIO
USUARIO deberá sustituirse dinámicamente por el valor escrito en el formulario. Para realizar la petición
utiliza fetch(). Por ejemplo, si el usuario escribe octocat, tu programa deberá consultar:
https://api.github.com/users/octocat
No deberás copiar manualmente la información del usuario dentro de tu código.
Parte 4. Procesar la respuesta
Convierte la respuesta obtenida a formato JSON y utiliza los datos recibidos para mostrar en la página,
como mínimo:
• Nombre de usuario.
• Nombre real, si está disponible.
• Fotografía/avatar.
• Número de repositorios públicos.
• Número de seguidores.
• Número de usuarios que sigue.
• Enlace a su perfil de GitHub.
Todos los elementos utilizados para presentar esta información deberán generarse o modificarse utilizando
JavaScript y el DOM.
Parte 5. Manejo de errores
Tu programa también deberá contemplar situaciones en las que la petición no pueda completarse
correctamente, por ejemplo:
• El usuario dejó el formulario vacío.
• El usuario de GitHub no existe.
• Existe algún problema al realizar la petición.
• La respuesta del servidor no es correcta.
En estos casos deberás mostrar un mensaje apropiado dentro de la página. No se deberá utilizar alert() para
mostrar estos errores.
Parte 6. Nueva búsqueda
Después de realizar una búsqueda, el usuario deberá poder introducir otro nombre y realizar una nueva
consulta. La información anterior deberá reemplazarse con los datos de la nueva búsqueda sin recargar la
página.*/

const divisor10 = document.createElement("div");
document.body.append(divisor10);

const title10 = document.createElement("h1");
divisor10.append(title10);
title10.textContent = "Jefe final - Ejercicio 10"; 


const form10 = document.createElement("form");
document.body.append(form10);
form10.addEventListener("submit", function(event){
    event.preventDefault();

     if(enter10.value == ""){
        resultados10.textContent = "Campo de usuario vacio";
        return;
     }

    fetch("https://api.github.com/users/" + enter10.value)
    .then(function(respuesta){
        if(!respuesta.ok){
            throw new Error("Usuario no encontrado");
        }
        return respuesta.json();
    })
    .then(function(datos){
        resultados10.innerHTML = "";

        const h3datos = document.createElement("h3");
        resultados10.append(h3datos);
        h3datos.textContent = datos.login;

        const pdatos = document.createElement("p");
        resultados10.append(pdatos);
        if(datos.name == null)
            pdatos.textContent = "sin nombre disponible";
        else
            pdatos.textContent = datos.name 

        const imgdatos = document.createElement("img");
        resultados10.append(imgdatos);
        imgdatos.width = 100;
        imgdatos.src =  datos.avatar_url;

        const pdatos2 = document.createElement("p");
        resultados10.append(pdatos2);
        pdatos2.textContent = "numero de repositorios publicos: " + datos.public_repos;

        const pdatos3 = document.createElement("p");
        resultados10.append(pdatos3);
        pdatos3.textContent = "numero de seguidores: " + datos.followers;

        const pdatos4 = document.createElement("p");
        resultados10.append(pdatos4);
        pdatos4.textContent = "numero de seguidos" + datos.following;

        const adatos = document.createElement("a");
        resultados10.append(adatos);
        adatos.href = datos.html_url;
        adatos.text = "ir al perfil de github";

    })
    .catch(function(error){
        resultados10.textContent = "ERROR";
    });
})

const lbl10 = document.createElement("label");
lbl10.textContent = "Usuario de Github";
form10.append(lbl10);

const enter10 = document.createElement("input");
enter10.placeholder = "Octocat";
form10.append(enter10);

const btn10 = document.createElement("button");
btn10.innerHTML = "Buscar usuario";
form10.append(btn10);


const resultados10 = document.createElement("div");
divisor10.append(resultados10);


const separador10 = document.createElement("hr");
separador10.style.height = "10px";
separador10.style.backgroundColor = "black";
document.body.append(separador10);