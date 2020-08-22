function modal() {
    let more = document.querySelector('.more'),
        over = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        over.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        over.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
}

module.exports = modal;