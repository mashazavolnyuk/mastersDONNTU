/**
 * Created by Merry on 24.05.2015.
 */

$(function () {
    var height = $(document).height();
    var rm = $('#left_panel');
    if (rm.length > 0) {
        rm[0].style.height = height + 'px';
    }

    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var h=$(window).height()* 0.3;
        if (scrolled>h)
        {
            $('#left_panel')[0].style.top=0+'px';

        }
        else

        {   var t=$('#top_panel').height();
            var k=t-scrolled;
            $('#left_panel')[0].style.top=k+'px';
        }
    }


});

$(window).on('resize orientationChanged', function () {
    var height = $(document).height();
    var rm = $('#left_panel');
    if (rm.length > 0) {
        rm[0].style.height = height + 'px';
    }
});

