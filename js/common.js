(function ($) {

    /* 첫 로딩 화면 */
    var colorCode = ['#28BDBE', '#7CC6C6', '#B0DADA', '#DAEDED']
    var minCnt = setInterval(minusCount, 500)
    var k = 5

    function minusCount() {
        k--;
        if (k === 0) {
            clearInterval(minCnt)
            $('.introAni').fadeOut(500)
            return false
        }
        $('.introAni i').css({
            color: colorCode[k - 1]
        })
    }


    init()

    var flag = true

    function init() {
        var ww = $(window).width()
        if (ww > 767 && flag) {
            $('.logoNav .nav').show()
            $('.open_nav, .close_nav').hide()
            flag = false
        } else if (ww <= 767 && !flag) {
            $('.open_nav').show()
            $('.logoNav .nav').hide()
            flag = true
        }
    }


    $(window).on('resize', function () {
        init()
    })

    // nav 햄버거 버튼
    $('.logoNav .open_nav').on('click', function () {
        $(this).next().stop().slideDown(300)
        $(this).hide()
        $(this).nextAll('.close_nav').css({
            display: 'block'
        })
    })
    $('.logoNav .close_nav').on('click', function () {
        $(this).prev().stop().slideUp(300)
        $(this).hide()
        $(this).prevAll('.open_nav').css({
            display: 'block'
        })
    })



    /* PAGE 로드 분리 */
    $('#secBox').load('main.html')

    $('.navwrap .depth1 .depth2 li > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('.topmenu > a').on('click', function (e) {
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    // $('.logonav > h1').load('index.html')



    /* 마우스 오르내릴때 헤더 */
    var sct = 0;
    $(window).scroll(function () {
        sct = $(this).scrollTop();

        //헤더 상단
        if (sct >= 200) {
            // 내리면
            $("header").css({
                background: 'rgba(0,0,0,0.5)',
                height: '62px'
            });
            $('.logonav h1').css({
                paddingTop: '16.7px',
                paddingBottom: '16.7px',
            })
            $('.logonav .topmenu a').css({
                paddingTop: '25px',
                paddingBottom: '25px',
            })
            $('.open_nav').css({
                paddingTop: '22.5px',
                paddingBottom: '22.5px',
            })
            $('.logonav .nav .depth2').css({
                top: '92%'
            })
        } else {
            // 상단 탑
            $("header").css({
                background: 'rgba(0,0,0,0)',
                height: '72px'
            });
            $('.logonav h1').css({
                paddingTop: '21.7px',
                paddingBottom: '21.7px',
            });
            $('.logonav .topmenu a').css({
                paddingTop: '30px',
                paddingBottom: '30px',
            })
            $('.open_nav').css({
                paddingTop: '27.5px',
                paddingBottom: '27.5px',
            })
            $('.logonav .nav .depth2').css({
                top: '100%'
            })
        }


        /// 스크롤이벤트가 발생하면 business.html에서
        /// .businessSec 구역을 찾아서 함수 호출해 애니메이션 수행하게

        if ($('#secContainer').children().is('.businessSec')) {
            bizScroll()
        }
    });


    function bizScroll() {
        var sc3Near = $('#seccol3').offset().top - $(this).height() / 2
        if (sct >= sc3Near) {
            $('#seccol3 > .explain').addClass('fadeIn')
        } else if (sct === 0) {
            $('#seccol3 > .explain').removeClass('fadeIn')
        }



        var img3Near = $('#img3arr').offset().top - $(this).height() / 2

        if (sct >= img3Near) {
            for (var i = 0; i < $('#img3arr div').length; i++) {
                $('#img3arr div').eq(i).css({
                    animationDelay: i * 0.3 + 's'
                }).addClass('fadeInUp')
            }
        } else if (sct === 0) {
            $('#img3arr div').removeClass('fadeInUp')
        }



        var sc2Near = $('#seccol2').offset().top - $(this).height() / 2

        if (sct >= sc2Near) {
            for (var i = 0; i < $('#seccol2 div').length; i++) {
                $('#seccol2 div').eq(i).css({
                    animationDelay: i * 0.3 + 's'
                }).addClass('fadeInUp')
            }
        } else if (sct === 0) {
            $('#seccol2 div').removeClass('fadeInUp')
        }



        var sc1Near = $('#seccol1').offset().top - $(this).height() / 2
        if (sct >= sc1Near) {
            $('#seccol1 .pofolimg').addClass('fadeInUp')
        } else if (sct === 0) {
            $('#seccol1 .pofolimg').removeClass('fadeInUp')
        }



        var img4Near = $('#img4arr').offset().top - $(this).height() / 1.5

        if (sct >= img4Near) {
            for (var i = 0; i < $('#img4arr a').length; i++) {
                $('#img4arr a').eq(i).css({
                    animationDelay: i * 0.2 + 's'
                }).addClass('fadeInUp')
            }
        } else if (sct === 0) {
            $('#img4arr a').removeClass('fadeInUp')
        }
    }



})(jQuery)