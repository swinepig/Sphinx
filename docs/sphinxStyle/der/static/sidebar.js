/*
 * sidebar.js
 * ~~~~~~~~~~
 */

$(function() {
    var bodywrapper = $('.documentwrapper');
    var navigationprev = $('.navigation.navigation-prev');
    var nav = $('.wy-grid-for-nav');
    $('.sibebarz').click(check);
    set_position_from_cookie();
    function check() {

        if (nav.css('display') == 'block') {
        	  document.cookie = 'sidebar=collapsed';
            bodywrapper.animate({
                left: "0px"
            },
            "slow");
            navigationprev.css('left', '10px');
            nav.fadeOut("slow");
        } else {
        	  document.cookie = 'sidebar=expanded';
            bodywrapper.animate({
                left: "270px"
            },
            "slow");
            navigationprev.css('left', '270px');
            nav.fadeIn("slow");
        }
    }

    function set_position_from_cookie() {
        if (!document.cookie) return;
        var items = document.cookie.split(';');
        for (var k = 0; k < items.length; k++) {
            var key_val = items[k].split('=');
            var key = key_val[0];
            if (key == 'sidebar') {
                var value = key_val[1];
                if ((value == 'collapsed') && (!sidebar_is_collapsed())) {
                    bodywrapper.css('left', '0px');
                    navigationprev.css('left', '10px');
                    nav.hide();
                } else if ((value == 'expanded')  && (sidebar_is_collapsed())) {
                    bodywrapper.css('left', '270px');
                    navigationprev.css('left', '270px');
                    nav.show();
                }
            }
        }
    }
    
    function sidebar_is_collapsed() {
      return nav.is(':not(:visible)');
    }
});