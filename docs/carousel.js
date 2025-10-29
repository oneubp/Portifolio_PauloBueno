const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if(i === index) slide.classList.add('active');
  });
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Inicializa o primeiro slide
showSlide(currentIndex);
