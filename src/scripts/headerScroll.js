$(document).ready(function(){
    $(window).on('scroll', function() {
        const pageHeader =  $('.head');
        const height = 32;

        function addBgColor () {
            pageHeader.addClass('bg-black');
        }

        function removeBgColor () {
            pageHeader.removeClass('bg-black');
        }

        $(this).scrollTop() > height ? addBgColor() : removeBgColor();
    })
})