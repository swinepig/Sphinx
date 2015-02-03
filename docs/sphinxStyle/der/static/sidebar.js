/*
 * sidebar.js
 * ~~~~~~~~~~
 */

$(function() {
    alert(document.cookie);
    var bodywrapper = $('.documentwrapper');
    var navigationprev = $('.navigation.navigation-prev');
    var nav = $('.wy-grid-for-nav');
    $('.sibebarz').click(check);
    set_position_from_cookie();
    function check() {

        if (nav.css('display') == 'block') {
            bodywrapper.animate({
                left: "0px"
            },
            "slow");
            navigationprev.css('left', '10px');
            nav.fadeOut("slow");
            document.cookie = 'sidebar=collapsed';
        } else {
            bodywrapper.animate({
                left: "270px"
            },
            "slow");
            navigationprev.css('left', '270px');
            nav.fadeIn("slow");
            document.cookie = 'sidebar=expanded';
        }
    }

    function set_position_from_cookie() {
        if (!document.cookie) return;
            var key_val = document.cookie.split('=');
            var key = key_val[0];
            if (key == 'sidebar') {
                var value = key_val[1];
                if ((value == 'collapsed')) {
                    bodywrapper.css('left', '0px');
                    navigationprev.css('left', '10px');
                    nav.hide();
                } else if ((value == 'expanded')) {
                    bodywrapper.css('left', '270px');
                    navigationprev.css('left', '270px');
                    nav.show();
                }
            }
    }
});