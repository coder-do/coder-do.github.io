$(document).ready(function () {
    $('.promo__round').each(function (i) {
        $(this).on('click', function () {
            $('.promo__round').removeClass('promo__round_active');
            $('.promo__round').eq(i).toggleClass('promo__round_active');
        });
    });
});