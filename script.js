// Carrousel automatique
let index = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[index].style.display = 'none';
    index = (index + 1) % totalSlides;
    slides[index].style.display = 'block';
}

setInterval(nextSlide, 3000); // Change toutes les 3 secondes

// Initialiser la première image comme visible
slides[index].style.display = 'block';

// Ajouter une classe pour les éléments visibles au scroll
window.addEventListener('scroll', function () {
    const cards = document.querySelectorAll('.tarif-card');
    cards.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight) {
            card.classList.add('visible');
        }
    });
});
