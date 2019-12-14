!function (t) {
    "use strict";

    // Click sur le menu
    // Scroll to div
    t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var e = t(this.hash);
            var link = t('#link-' + this.hash.substr(1))
            // Si l'élément correspondant à l'ancre est trouvé
            // Scroll à son endroit
            if ((e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")).length) {
                var offset = 9 * window.innerHeight / 100;
                return t("html, body").animate({scrollTop: e.offset().top - offset}, 1000);
            } else {
                // Scroll en bas de page
                return t("html, body").animate({scrollTop: document.body.scrollHeight}, 1000);
            }
        }
    });

    // Scroll to top
    var scrollToTopButton = t("#scrollToTop");

    /**
     * Affiche ou masque le bouton scrollToTop
     */
    function toggleScrollButton() {
        if (t(window).scrollTop() > 95 * window.innerHeight / 100) {
            scrollToTopButton.show();
        } else {
            scrollToTopButton.hide();
        }
    }

    /**
     * Ajoute ou supprime la classe 'active' sur le li correspondant
     * à l'élément affiché à l'écran, en fonction de son offset.
     */
    function toggleActiveMenu() {
        var find = false;
        var last = null;
        var offset = 9 * window.innerHeight / 100;
        // Si l'affichage est plus haut que la div #accueil
        if (t(window).scrollTop() < t('#accueil').offset().top) {
            t('li.active').removeClass('active');
            t('#link-accueil').parent('li').addClass('active');
        } else {
            // Pour chaque div de contenu
            t('.joyofa-middle').each(function (index, element) {
                // Sauvegarde de l'élément si il est plus haut que le scrollTop
                if (t(window).scrollTop() >= t(element).offset().top) {
                    last = element;
                } else {
                    // Au premier élément visible trouvé : ajout de la classe active.
                    if (!find) {
                        find = true;
                        t('li.active').removeClass('active');
                        t('#link-' + t(last).prop('id')).parent('li').addClass('active');
                    }
                }
            });
        }
    }

    /**
     * Ajoute ou supprime la classe fixed sur le body en fonction de la position de l'écran
     */
    function fixeMenu() {
        if (t(window).scrollTop() > 95 * window.innerHeight / 100) {
            t('body').addClass('fixed');
        } else {
            t('body').removeClass('fixed');
        }
    }

    /**
     * Bind le click sur le bouton scrollToTop
     */
    scrollToTopButton.on('click', function () {
        t("html, body").animate({scrollTop: 0}, 1000);
    });

    /**
     * Bind les fonctions nécessaire au scroll
     */
    t(window).bind('scroll', function () {
        toggleScrollButton();
        toggleActiveMenu();
        fixeMenu();

    });

    /**
     * Bind les fonctions à exécuter au démarrage.
     */
    t(window).ready(function () {
        toggleScrollButton();
        toggleActiveMenu();
        fixeMenu();
    });
}(jQuery);