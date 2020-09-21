(function ($) {



    $('#imgbg img').addClass('fadeInUp')


    $(window).scroll(function () {
        var sct = $(this).scrollTop()

        var sc3Near = $('#seccol3').offset().top - $(this).height() / 2
        if (sct >= sc3Near) {
            $('#seccol3 .title').addClass('fadeIn')
        } else if (sct === 0) {
            $('#seccol3 .title').removeClass('fadeIn')
        }
    })

})(jQuery)