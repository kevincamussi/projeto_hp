$(document).ready(function(){
    const navTab = $('.head-menu__link');
    const pageHeader =  $('.head');
    const height = 32;

    navTab.click(function(){
        navTab.removeClass('active');
        $(this).addClass('active');
    })


    $(document).on('scroll', function() {

        function addBgColor () {
            pageHeader.addClass('bg-black');
        }

        function removeBgColor () {
            pageHeader.removeClass('bg-black');
            pageHeader.css({'transition': '0.8s'});
        }

        $(this).scrollTop() > height ? addBgColor() : removeBgColor();


        navTab.each(function(){

            let container = $(this).attr('href');
            let containerOffset = $(container).offset().top;
            let containerHeight = $(container).outerHeight();
            let containerBottom = containerOffset + containerHeight;
            let scrollPosition = $(document).scrollTop();
    
            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }
        });
    })
})