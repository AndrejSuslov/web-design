const track = document.querySelector('.carousel-track');
const reasonsSection = document.querySelector('.reasons');

// для бесшовной анимации дублируем слайды
const slides = Array.from(track.children);
const totalSlides = slides.length;

// реплицируем слайды
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
});

// ширинка картки
const slideWidth = slides[0].getBoundingClientRect().width;

// полный трек
track.style.width = `${track.children.length * slideWidth}px`;

// в самом начале стоим тут
let currentPosition = 0;

// функция плавной бесшовной анимации
function moveSlider() {
    currentPosition -= 1; // можно скорость задать
    if (currentPosition <= -slideWidth * totalSlides) {
        // ну и снова в начало без видимых замен, чтобы ничего не рваось
        currentPosition = 0;
    }
    track.style.transform = `translateX(${currentPosition}px)`;
    requestAnimationFrame(moveSlider);
}

// запуск
moveSlider();

// плавная анимация появления секции при первом разе на сайте
function handleScrollAnimation() {
    const sectionPosition = reasonsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (sectionPosition < screenPosition) {
        reasonsSection.classList.add('visible');
        window.removeEventListener('scroll', handleScrollAnimation);
    }
}

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation(); // чек видимости
