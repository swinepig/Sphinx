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
            bodywrapper.animate({
                left: "0px"
            },
            "slow");
            navigationprev.css('left', '10px');
            nav.fadeOut("slow");
            $.cookie('sidebar', 'collapsed', {
                path: '/'
            });
        } else {
            bodywrapper.animate({
                left: "270px"
            },
            "slow");
            navigationprev.css('left', '270px');
            nav.fadeIn("slow");
            $.cookie('sidebar', 'expanded', {
                path: '/'
            });
        }
    }

    function set_position_from_cookie() {

        var value = $.cookie('sidebar');
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

  $('.wy-menu-vertical ul li').mouseenter(function(){
		$(this).children('ul').children('li').children('a').css('padding','0.4045em 2.427em');
  	$(this).children('ul').show();
  	}
  );
  
  $('.wy-menu-vertical ul li').mouseleave(function(){
  	$(this).children('ul').hide();
  	}
  );
});