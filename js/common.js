(function ($) {

    /* 첫 로딩 화면 */
    var colorCode = ['#28BDBE', '#7CC6C6', '#B0DADA', '#DAEDED']
    var minCnt = setInterval(minusCount, 500)
    var k = 5
    function minusCount() {
        k--;
        if (k===0) {
            clearInterval(minCnt)
            $('.introAni').fadeOut(500)
            return false
        }
        $('.introAni i').css({
            color: colorCode[k-1]
        }) 
    }


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
            $("header").css({
                background: 'rgba(0,0,0,0.5)',
                height: 62 + 'px'
            });
            $('.logonav h1').css({
                paddingTop: 16.7 + 'px',
                paddingBottom: 16.7 + 'px',
            })
            $('.logonav .nav').css({
                paddingTop: 22 + 'px',
                paddingBottom: 22 + 'px'
            })
            $('.logonav .topmenu a').css({
                paddingTop: 25 + 'px',
                paddingBottom: 25 + 'px',
            })
        } else {
            $("header").css({
                background: 'rgba(0,0,0,0)',
                height: 72 + 'px'
            });
            $('.logonav h1').css({
                paddingTop: 21.7 + 'px',
                paddingBottom: 21.7 + 'px',
            });
            
            $('.logonav .nav').css({
                paddingTop: 27 + 'px',
                paddingBottom: 27 + 'px'
            })
            $('.logonav .topmenu a').css({
                paddingTop: 30 + 'px',
                paddingBottom: 30 + 'px',
            })
        }
    });


})(jQuery)