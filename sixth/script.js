const track = document.querySelector('.carousel-track');

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerIcon = document.querySelector('.burger-icon');
    const nav = document.querySelector('.header-nav');

    burgerMenu.addEventListener('click', function() {
        burgerIcon.classList.toggle('active');
        nav.classList.toggle('active');
    });
});

function setupInfiniteScroll() {
    const cards = Array.from(track.children);
    const fullArray = [...cards, ...cards]; 
    track.innerHTML = ''; 

    fullArray.forEach(card => {
        track.appendChild(card.cloneNode(true)); 
    });
}

function startAnimation() {
    const cardWidth = track.firstElementChild.offsetWidth + 30; 
    let currentPos = 0;

    function animate() {
        currentPos -= 1; 

        if (Math.abs(currentPos) >= cardWidth) {
            currentPos = 0; 
            track.appendChild(track.firstElementChild); 
        }

        track.style.transform = `translateX(${currentPos}px)`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

setupInfiniteScroll();
window.onload = startAnimation;

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.grid-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => observer.observe(card));

    // Handle swipe functionality for carousel on mobile devices
    let startX = 0;
    let isDragging = false;

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const touchX = e.touches[0].clientX;
        const deltaX = touchX - startX;

        if (deltaX > 50) {
            isDragging = false; 
        } else if (deltaX < -50) {
            isDragging = false; 
        }
    });

    track.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Handle resize for responsiveness
    window.addEventListener('resize', () => {
        const cardWidth = track.firstElementChild.offsetWidth + 30;
        track.style.transform = `translateX(0px)`;
    });
});
