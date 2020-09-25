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
        fade: true,
        arrows: false,
        // prevArrow: '<button class="prevArrow marrow"><i class = "fas fa-angle-left"></i></button>',
        // nextArrow: '<button class="nextArrow marrow"><i class = "fas fa-angle-right"></i></button>',
    })



    $('.mainSec a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
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
        } else if (sct === 0) {
            $('.blogul .blogli').removeClass('fadeInUp')
        }



        // section 타이틀 fadein

        $('.sectitle').each(function() {
            var secNear = $(this).offset().top - $(window).height()/2

            if (sct >= secNear) {
                $(this).addClass('on')
            } else if (sct === 0) {
                $(this).removeClass('on')
            }
        })


        var procNear = $('.process').offset().top - $(this).height()/2
        if (sct >= procNear) {
            for (var i = 0; i < $('.process').length; i++) {
                $('.process').eq(i).css({
                    animationDelay: i * 0.3 + 's'
                }).addClass('fadeInRight')
            }
        } else if (sct === 0) {
            $('.process').removeClass('fadeInRight')
            $('.sectitle').removeClass('fadeInUp')
        }

        
        var readNear = $('.readwrap').offset().top - $(this).height()/2
        if (sct >= readNear) {
            $('.readwrap').addClass('on')
        } else if (sct === 0) {
            $('.readwrap').removeClass('on')
        }



        var pofolNear = $('.pofolimg').offset().top - $(this).height()/2
        if (sct >= pofolNear ) {
            for ( var i = 0; i < $('.pofolimg a').length; i++) {
                $('.pofolimg a').eq(i).css({
                    animationDelay: i * 0.3 + 's'
                }).addClass('zoomIn')
            }
        } else if (sct === 0) {
            ('.pofolimg a').removeClass('zoomIn')
        }





    })




    $('.counter').counterUp();
    
})(jQuery)