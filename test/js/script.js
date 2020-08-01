$(document).ready(function () {
    $('.carousel__items').slick({
        infinite: true,
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left_btn.png" alt="left_btn" class="d_n"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right_btn.png" alt="right_btn" class="d_n"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    draggable: true
                }
            },
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function (back) {
        $(this).on('click', function (back_in) {
            back_in.preventDefault();
            $('.catalog-item__content').eq(back).toggleClass('catalog-item__content_active');
            $('.catalog-item__sublist').eq(back).toggleClass('catalog-item__sublist_active');
        })
    });

    $('.catalog-item__backLink').each(function (back) {
        $(this).on('click', function (back_in) {
            back_in.preventDefault();
            $('.catalog-item__content').eq(back).toggleClass('catalog-item__content_active');
            $('.catalog-item__sublist').eq(back).toggleClass('catalog-item__sublist_active');
        })
    });

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal__close').on('click', function () {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_catalog').on('click', function () {
        $('.overlay, #order').fadeIn('slow');
    });

    $('.button_catalog').each(function (i) {
        $(this).on('click', function () {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.page_up').fadeIn();
        }
        else {
            $('.page_up').fadeOut();
        }
    });

    $("a[href=#up]").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
});

