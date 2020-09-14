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

    $('.logonav > h1').load('index.html')



    /* 마우스 오르내릴때 화면 온오프 */
    /* var sct = 0

    $('section').scroll(function () {
        sct = $(this).scrollTop()
        var blogcount = $('.bloglist > li').length

        if (sct >= $('#blog').offset().top) {
            for (var i = 0; i < blogcount; i++) {
                $('.gallery > li').eq(i).css({
                    animationDelay: (i + 1) * 0.15 + 's'
                })
            }
        }
    }) */


})(jQuery)