const shapesContainer = document.querySelector('.shapes');
let maxStars = 15;

function updateMaxStars() {
    if (window.innerWidth <= 600) {
        maxStars = 8;
    } else {
        maxStars = 15;
    }
}

updateMaxStars();

function getRandomColor() {
    const colors = ['rgba(255, 255, 255, 0.8)'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createStar() {
    if (shapesContainer.children.length < maxStars) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 30 + 10;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = '-50px';
        star.style.background = getRandomColor(); // Cambiar color de estrella
        star.style.animationDuration = (Math.random() * 4 + 2) + 's';
        star.style.animationDelay = Math.random() * 2 + 's';
        shapesContainer.appendChild(star);

        star.addEventListener('animationend', () => {
            star.remove();
        });
    }
}

setInterval(createStar, 500);

window.addEventListener('resize', () => {
    updateMaxStars();
});