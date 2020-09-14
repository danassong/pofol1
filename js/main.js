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



    /* 섹션2 블로그 리스트 순차적으로 나타나는 애니메이션 */
    $(window).scroll(function(){
        var sct = $(this).scrollTop()

        var blogNear = $('.bloglist').offset().top - $(this).height()/2

        if (sct >= blogNear) {
            for ( var i = 0; i < $('.blogul .blgli').length; i++) {
                $('.blogul .blogli').eq(i).css({
                    animationDelay: i * 0.3 + 's'
                }).addClass('animate__fadeInUp')
            }
        } else {
            $('.blogul .blogli').removeClass('animate__fadeInUp')
        }

        // if (sct >= blogNear){
        //     $('.bloglist').addClass('on')
        // } else {
        //     $('.bloglist').removeClass('on')
        // }
    })



    
})(jQuery)