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
            $('.open-gnb').css({
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
            $('.open-gnb').css({
                paddingTop: '27.5px',
                paddingBottom: '27.5px',
            })
            $('.logonav .nav .depth2').css({
                top: '100%'
            })
        }
    });


})(jQuery)