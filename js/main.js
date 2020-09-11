(function($) {

    $('.slideinner').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        pauseOnFocus: false,
        cssEase: 'linear',
        draggable: true,
        fade: false,
        arrows: false,
        // prevArrow: '<button class="prevArrow marrow"><i class = "fas fa-angle-left"></i></button>',
        // nextArrow: '<button class="nextArrow marrow"><i class = "fas fa-angle-right"></i></button>',
    })


    
})(jQuery)