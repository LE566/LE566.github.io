/* DEFINIMOS LA RUTA DE DONDE CONSULTAREMOS LOS RECURSOS */
const API_URL = 'https://jsonplaceholder.typicode.com';
/* OBTENEMOS EL ELEMENTO DEL DOM HTML DONDE ARROJAREMOS LA INFO */
const HTMLResponse = document.getElementById('appposts');
/* CREAMOS EL ELEMENTO DONDE ARROJAREMOS LA INFO */
const ol = document.createElement('ol');

fetch(`${API_URL}/comments`)
    .then((response) => response.json())
    .then((comments) => {
        // Limitar a los primeros 30 comentarios
        const limitedComments = comments.slice(0, 30);
        
        limitedComments.forEach((comment) => {
            /* Creamos el elemento li para almacenar cada comentario */
            let element = document.createElement('li');

            // Crear un texto con salto de línea
            element.innerHTML = `${comment.email} comentó:<br>${comment.body}`;

            /* Agregamos el li dentro de la ol */
            ol.appendChild(element);
        });

        // Al final, agregamos el ol dentro del div obtenido
        HTMLResponse.appendChild(ol);
    })
    .catch((error) => {
        console.error('Error en la solicitud:', error);
    });
