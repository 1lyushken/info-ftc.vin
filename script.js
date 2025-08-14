const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

// Инициализация
showSlide(currentSlide);

// Автопереключение каждые 4 секунды
let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 4000);

// Клик по точке
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSlide = parseInt(dot.dataset.slide);
        showSlide(currentSlide);
        clearInterval(slideInterval); // сброс авто-переключения
        slideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 4000);
    });
});

const circles = document.querySelectorAll('.circle');

let index = 0;

setInterval(() => {
    // Сброс всех на белый фон
    circles.forEach(c => {
        c.style.background = '#fff';
        c.style.color = '#0047FF';
    });

    // Активный круг с синим фоном
    circles[index].style.background = '#0047FF';
    circles[index].style.color = '#fff';

    index = (index + 1) % circles.length;
}, 2000); // каждые 2 секунды

const questions = document.querySelectorAll('.faq-question');
const answers = document.querySelectorAll('.faq-answer');

questions.forEach(q => {
    q.addEventListener('click', () => {
        // снимаем активность со всех вопросов и ответов
        questions.forEach(item => item.classList.remove('active'));
        answers.forEach(ans => ans.classList.remove('active'));

        // активируем текущий вопрос
        q.classList.add('active');
        const answerId = q.dataset.answer;
        document.getElementById(answerId).classList.add('active');
    });
});

document.getElementById("openAuthModal").addEventListener("click", function(e) {
    e.preventDefault(); // отменяем переход по ссылке
    document.getElementById("authModal").style.display = "block";
});

document.querySelector(".close").onclick = function() {
    document.getElementById("authModal").style.display = "none";
};

window.onclick = function(event) {
    if (event.target === document.getElementById("authModal")) {
        document.getElementById("authModal").style.display = "none";
    }
};
