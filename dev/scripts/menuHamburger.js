$(document).ready(function(){var t=$(".material-symbols-outlined"),s=$(".head-menu"),e=$(window).width();t.click(function(){e<=767&&"menu"==t.text()?(t.text("close"),s.css({transform:"translateY(0)"}),s.css({opacity:"1"})):(t.text("menu"),s.css({transform:"translateY(-160px)"}),s.css({opacity:"0"}))})});