(function($){

    $('#secBox').load('main.html')

    $('.navwrap .depth1 .depth2 li > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })

    $('.topmenu > a').on('click', function(e){
        e.preventDefault()
        var url = $(this).attr('href')
        $('#secContainer').remove()
        $('#secBox').load(url)
    })


    $('.logoNav > h1').on('click', function(e){
        e.preventDefault()
        $('#secContainer').remove()
        $('#secBox').load('index.html')
    })


})(jQuery)