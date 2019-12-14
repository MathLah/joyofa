!function (t) {
    "use strict";

    // Scroll to div
    t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = t(this.hash);
            var link = t('#link-' + this.hash.substr(1))

            if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length) {
                t('li.active').removeClass('active');
                link.parent('li').addClass('active');
                return t("html, body").animate({scrollTop: e.offset().top}, 1000);
            }
        }
    });

    // Scroll to top
    var scrollToTopButton = $("#scrollToTop");

    function scrollFunction() {
        if ($(window).scrollTop() > 95 * window.innerHeight/100) {
            scrollToTopButton.show();
        } else {
            scrollToTopButton.hide();
        }
    }

    scrollToTopButton.on('click', function() {
        t("html, body").animate({scrollTop: 0}, 1000);
    });

    $(window).bind('scroll', function () {
        scrollFunction();
        if ($(window).scrollTop() > 95 * window.innerHeight/100) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    });

    $(window).ready(function() {
        scrollFunction();
    });
}(jQuery);