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
            for ( var i = 0; i < $('.blogul .blogli').length; i++) {
                $('.blogul .blogli').eq(i).css({
                    animationDelay: i * 0.3 + 's'
                }).addClass('fadeInUp')
            }
        } else {
            $('.blogul .blogli').removeClass('fadeInUp')
        }


        var curriNear = $('.curriInfo').offset().top - $(this).height()/2
        if (sct >= curriNear){
            $('.curriInfo').addClass('on')
        } else { 
            $('.curriInfo').removeClass('on')
        }


        // section 타이틀 fadein
        var secNear = $('.sectitle').offset().top - $(this).height()/2
        if (sct >= secNear) {
            $('.sectitle').addClass('on')
        } else {
            $('.sectitle').removeClass('on')
        }




        var procNear = $('.process').offset().top - $(this).height()/2
        if (sct >= procNear) {
            for (var i = 0; i < $('.process').length; i++) {
                $('.process').eq(i).css({
                    animationDelay: i * 0.5 + 's'
                }).addClass('fadeInRight')
            }
        } else {
            $('.process').removeClass('fadeInRight')
            $('.sectitle').removeClass('fadeInUp')
        }



        var readNear = $('.readmore').offset().top - $(this).height()/2
        if (sct >= readNear) {
            $('.readmore').addClass
        } else {
            $('.readmore').removeClass
        }

    })



    
})(jQuery)