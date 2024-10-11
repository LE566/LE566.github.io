/* DEFINIMOS LA RUTA DE DONDE CONSULTAREMOS LOS RECURSOS */
const API_URL = 'https://jsonplaceholder.typicode.com';
/* OBTENEMOS EL ELEMENTO DEL DOM HTML DONDE ARROJAREMOS LA INFO */
const HTMLResponse = document.getElementById('apptable');
/* CREAMOS EL ELEMENTO DONDE ARROJAREMOS LA INFO */
const table = document.createElement('table');

/* Creamos el encabezado de la tabla */
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');
const headers = ['Título', 'Mensaje']; // Encabezados

headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
});
thead.appendChild(headerRow);
table.appendChild(thead);

/* Creamos el cuerpo de la tabla */
const tbody = document.createElement('tbody');

fetch(`${API_URL}/posts`)
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const trBody = document.createElement('tr');

            // Celda para el título
            const tdTitle = document.createElement('td');
            tdTitle.textContent = post.title; // Título del post
            trBody.appendChild(tdTitle);

            // Celda para el cuerpo del mensaje
            const tdBody = document.createElement('td');
            tdBody.textContent = post.body; // Cuerpo del post
            trBody.appendChild(tdBody);

            tbody.appendChild(trBody);
        });
        table.appendChild(tbody);
        // Al final, agregamos la tabla dentro del div obtenido
        HTMLResponse.appendChild(table);
    })
    .catch(error => {
        console.error('Error en la solicitud:', error);
    });
