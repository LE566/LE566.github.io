/* DEFINIMOS LA RUTA DE DONDE CONSULTAREMOS LOS RECURSOS */
const API_URL = 'https://jsonplaceholder.typicode.com'
/*  OBTENEMOS EL ELEMENTO DEL DOM HTML DONDE ARROJAREMOS LA INFO */
const HTMLResponse = document.getElementById('app');
/* CREAMOS EL ELEMENTO DONDE ARROJAREMOS LA INFO */
const ul = document.createElement('ul');

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            /* Creamos el elemento li para almacenar cada usuario en el ul */
            let element = document.createElement('li')
            element.appendChild(
                document.createTextNode(`${user.name}`)
            );
            /* agregamos el name dentro del li y dentro del ul */
            ul.appendChild(element);

        });
        //al final, agregamos el ul dentro del div obtenido
        HTMLResponse.appendChild(ul)
    })
    .catch ((error) => {
        console.error('error en la solicitud')
    });