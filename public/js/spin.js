!function (t) {
    "use strict";

    t(".js-scroll-trigger").click(function () {
        t(".navbar-collapse").collapse("hide");
    });

    t("body").scrollspy({target: "#sideNav"});

    t('div.cube.large .front').on('click', function () {
        let cube = t(this).parent('.cube');
        cube.addClass('spin-large');
        cube.removeClass('spin-off-large');
    });

    t('div.cube.large .right').on('click', function () {
        let cube = t(this).parent('.cube');
        cube.addClass('spin-off-large');
        cube.removeClass('spin-large');
    });

    t('div.cube.medium .front').on('click', function () {
        let cube = t(this).parent('.cube');
        cube.addClass('spin');
        cube.removeClass('spin-off');
    });

    t('div.cube.medium .right').on('click', function () {
        let cube = t(this).parent('.cube');
        cube.addClass('spin-off');
        cube.removeClass('spin');
    });

}(jQuery);