!function (t) {
    "use strict";
    t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = t(this.hash);
            var link = t('#link-' + this.hash.substr(1))
            console.log(link);
            if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length) {
                t('li.active').removeClass('active');
                link.parent('li').addClass('active');
                return t("html, body").animate({scrollTop: e.offset().top}, 1000);
            }
        }
    });

    t(".js-scroll-trigger").click(function () {
        t(".navbar-collapse").collapse("hide");
    });

    t("body").scrollspy({target: "#sideNav"});

    t('div.cube .front').on('click', function () {
        let cube = t(this).parent('.cube');
        cube.addClass('spin');
        cube.removeClass('spin-off');
    });

    t('div.cube .right').on('click', function () {
        let cube = t(this).parent('.cube');
        cube.addClass('spin-off');
        cube.removeClass('spin');
    });

    //Get the button:
    var mybutton = $("#scrollToTop");

    mybutton.on('click', function() {
        t("html, body").animate({scrollTop: 0}, 1000);
    });


    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.show();
        } else {
            mybutton.hide();
        }
    }

    $(window).bind('scroll', function () {
        scrollFunction();
        if ($(window).scrollTop() > 650) {
            $('.navbar').addClass('fixed');
        } else {
            $('.navbar').removeClass('fixed');
        }
    });

}(jQuery);