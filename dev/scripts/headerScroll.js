$(document).ready(function(){var s=$(".head-menu__link"),t=$(".head");s.click(function(){s.removeClass("active"),$(this).addClass("active")}),$(document).on("scroll",function(){32<$(this).scrollTop()?t.addClass("bg-black"):(t.removeClass("bg-black"),t.css({transition:"0.8s"})),s.each(function(){var s=$(this).attr("href"),t=$(s).offset().top,a=t+$(s).outerHeight(),e=$(document).scrollTop();e<a-20&&t-20<=e?$(this).addClass("active"):$(this).removeClass("active")})})});