const shapesContainer = document.querySelector('.shapes');
const maxStars = 100; // Número de estrellas

function getRandomPosition(max) {
    return Math.random() * max;
}

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 5 + 1; // Tamaño entre 1 y 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    star.style.left = `${getRandomPosition(window.innerWidth)}px`;
    star.style.top = `${getRandomPosition(window.innerHeight)}px`;

    shapesContainer.appendChild(star);

    // Desaparece la estrella después de un tiempo
    setTimeout(() => {
        star.remove();
    }, 2000);
}

// Generar estrellas
setInterval(() => {
    if (shapesContainer.children.length < maxStars) {
        createStar();
    }
}, 100); // Intervalo de creación
