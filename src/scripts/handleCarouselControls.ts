const carouselControlSpans = document.querySelectorAll("#carousel-controls span");
let currentIndex = 0;

const activateNext = () => {
    carouselControlSpans[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselControlSpans.length;
    carouselControlSpans[currentIndex].classList.add("active");
};

carouselControlSpans[0].classList.add("active");

setInterval(activateNext, 5000);
