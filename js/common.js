(function($){

    $('#secBox').load('main.html')

    $('.navwrap > .depth2 > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })


    $('.logoNav > h1').on('click', function(e){
        e.preventDefault()
        $('#secContainer').remove()
        $('#secBox').load('main.html')
    })


})(jQuery)