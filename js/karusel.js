const prew = document.getElementById("prew"),
    next = document.getElementById("next"),
    slides = document.querySelectorAll(".slide"),
    kares = document.querySelectorAll(".kare"),
    numbers = document.getElementsByClassName(".number");
let index = 0;
const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    for (kare of kares) {
        kare.classList.remove('active');
    }
    document.getElementById('number').value = '0' + (index + 1);
    kares[n].classList.add('active');
    slides[n].classList.add('active');
}
const nextslide = () => {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index)
    } else {
        index++;
        activeSlide(index)
    }
}
const prewslide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index)
    } else {
        index--;
        activeSlide(index)
    }
}
kares.forEach((item, indexkare) => {
    item.addEventListener('click', () => {
        index = indexkare;
        activeSlide(index);
    })
})
next.addEventListener('click', nextslide);
prew.addEventListener('click', prewslide);