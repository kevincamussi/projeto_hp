$(document).ready(function(){
    AOS.init();

    const menuHamburger = $('.material-symbols-outlined');
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
            menuHamburger.css({'color':'#fff'});
        }

        function removeBgColor () {
            pageHeader.removeClass('bg-black');
            pageHeader.css({'transition': '0.8s'});
            menuHamburger.css({'color':'#000'});
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