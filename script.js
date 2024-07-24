let slideIndex = 0;
let slideInterval;

function changeSlide(n) {
    clearInterval(slideInterval);
    slideIndex += n;
    if (slideIndex >= document.getElementsByClassName("slide").length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = document.getElementsByClassName("slide").length - 1;
    }
    showSlides();
    slideInterval = setInterval(() => changeSlide(1), 6000); // Change image every 6 seconds
}

function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n - 1;
    showSlides();
    slideInterval = setInterval(() => changeSlide(1), 6000); // Change image every 6 seconds
}

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Initialize the slideshow
document.addEventListener("DOMContentLoaded", () => {
    showSlides();
    slideInterval = setInterval(() => changeSlide(1), 6000); // Change image every 6 seconds
});
