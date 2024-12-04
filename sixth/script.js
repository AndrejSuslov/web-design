const track = document.querySelector('.carousel-track');

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
