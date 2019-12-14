!function (t) {
    "use strict";

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

}(jQuery);