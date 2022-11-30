$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .header__menu').toggleClass('active')
    })
});

var header = $(".header__top");
var scrollChange = 80;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('fixed');
    } else {
        header.removeClass("fixed");
    }
});

var burger = $(".header__burger");
var scrollChange = 80;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        burger.addClass('fixed-burger');
    } else {
        burger.removeClass("fixed-burger");
    }
});

var menu = $(".header__menu");
var scrollChange = 80;
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        menu.addClass('fixed-menu');
    } else {
        menu.removeClass("fixed-menu");
    }
});

$(document).ready(function () {
    $('.section__title-small').click(function (event) {
        $(this).toggleClass('active-questions').next().slideToggle(300);
    })
});

$(document).ready(function () {
    $('.barf-box__slider-characteristics').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
    });
});

$(document).ready(function () {
    $('.ration__list-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
});

$(function () {

    (function quantityProducts() {
        var $quantityArrowMinus = $(".popup-order-ration__quantity-arrow-minus");
        var $quantityArrowPlus = $(".popup-order-ration__quantity-arrow-plus");
        var $quantityNum = $(".popup-order-ration__quantity-num");

        $quantityArrowMinus.click(quantityMinus);
        $quantityArrowPlus.click(quantityPlus);

        function quantityMinus() {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
        }

        function quantityPlus() {
            $quantityNum.val(+$quantityNum.val() + 1);
        }
    })();

});
