function slider() {
    let index = 1,
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        slides = document.querySelectorAll('.slider-item'),
        dots = document.querySelector('.slider-dots'),
        dot = document.querySelectorAll('.dot');

    showSlides(index);

    function showSlides(e) {

        if (index > slides.length) {
            index = 1;
        }
        if (index < 1) {
            index = slides.length;
        }

        slides.forEach((i) => i.style.display = 'none');
        dot.forEach((i) => i.classList.remove('dot-active'));

        slides[index - 1].style.display = 'block';
        dot[index - 1].classList.add('dot-active');
    }

    function plusSlide(n) {
        showSlides(index += n);
    }

    function currentSlide(n) {
        showSlides(index = n);
    }

    prev.addEventListener('click', function () {
        plusSlide(-1);
    });

    next.addEventListener('click', function () {
        plusSlide(1);
    });

    dots.addEventListener('click', function (e) {
        for (let i = 0; i < dot.length; i++) {
            if (e.target.classList.contains('dot') && e.target == dot[i]) {
                currentSlide(i + 1);
            }
        }
    });
}

module.exports = slider;