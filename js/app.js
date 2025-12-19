let slides = ['mySlides', 'reviewSlides', 'resultSliders'];
let slideIndex = 1;
slides.forEach(className => {
    showSlides(slideIndex, className);
});

function priceListSlider(n) {
    showSlides(slideIndex += n, "mySlides");
}
function reviewSlider(n) {
    showSlides(slideIndex += n, "reviewSlides");
}
function resultsSlider(n) {
    showSlides(slideIndex += n, "resultSliders");
}

function showSlides(n, className) {
    let i;
    let slides = document.getElementsByClassName(className);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}