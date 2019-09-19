!function (t) {
    "use strict";
    t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = t(this.hash);
            console.log(this.hash.slice(1));
            if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length) {
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

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.show();
        } else {
            mybutton.hide();
        }
    }

}(jQuery);