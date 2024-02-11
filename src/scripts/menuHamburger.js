$(document).ready(function(){
    const menuHamburger = $('.material-symbols-outlined');
    const menu = $('.head-menu');
    const screenSize = $(window).width();

    menuHamburger.click( function() {
        function closeMenu () {
            menuHamburger.text('menu');
            menu.css({ 'transform': 'translateY(-160px)' });
            menu.css({ 'opacity': '0' });
        }
        
        function openMenu ()  {
            menuHamburger.text('close');
            menu.css({ 'transform': 'translateY(0)' });
            menu.css({ 'opacity': '1' });
        }

        screenSize <= 767 && menuHamburger.text() == 'menu'  ? openMenu() : closeMenu();
    })
})