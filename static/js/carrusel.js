let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function moveToNextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateCarousel();
}

function moveToPrevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const newTransform = `translateX(${-slideIndex * 960}px)`; /* Mueve de a 960px (ancho de la imagen) */
    document.querySelector('.slides').style.transform = newTransform;
}

// Autoplay (opcional)
setInterval(moveToNextSlide, 5000); // Cambia de imagen cada 5 segundos
