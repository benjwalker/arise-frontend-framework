$(document).ready(function () {

    //Scroll to following section
    $('.js-to-next-section').on('click', function () {

        var wrapper = $(this).closest('section');

        var goto = wrapper.find('+ section');
        if (goto.hasClass('js-repeat-header')) {
            goto = $('.js-repeat-header').find('+ section');
        }

        var offset = $('.js-header').outerHeight();

        if ($('.js-repeat-header').length > 0 && $('.js-repeat-header').is(':visible') && $(window).width() > 900) {
            offset = 160;
        }

        $('html, body').animate({
            scrollTop: goto.offset().top - offset
        }, 750);
    });

});

$(window).on('ready load change resize orientationchange', function () {

    //Set height of element to always match the window's viewport (excluding header)
    var window_h = $(window).height();
    window_h = window_h - $('.js-header').outerHeight();

    //
    $('.js-window-height').innerHeight(window_h);
    $('.js-window-min-height').css('min-height', window_h);

    //Set height of element as to always maintain a 1:1 aspect ratio
    $('.js-keep-square').each(function () {

        var w = $(this).width();
        $(this).height(w);
    })

    adjustSameHeights();

    //Keep ratio of element on resize
    $('.js-keep-ratio').each(function () {

        var x = $(this).attr('data_x');
        var y = $(this).attr('data_y');

        var w = $(this).width();

        var h = (y / x) * w;

        $(this).height(h);
    })
});


function adjustSameHeights() {

    //Set height of elements to that of tallest
    var max_height = 0;

    //Remove height from style attribute if already set by this (otherwise it doesn't shrink back)
    $('.js-same-height').css({'height': ''});

    $('.js-same-height').each(function () {

        if ($(this).height() > max_height) {
            max_height = $(this).height();
        }

    });

    $('.js-same-height').height(max_height);

    //Set height of elements to that of tallest - but the elements must be siblings, i.e. two columns next to each other
    $('.js-same-height-siblings').each(function () {

        var max_height = 0;
        var siblings = $(this).siblings();
        var itself = $(this);

        //Remove height from style attribute if already set by this (otherwise it doesn't shrink back)
        siblings.css({'height': ''});
        itself.css({'height': ''});

        max_height = itself.outerHeight();

        siblings.each(function () {
            if ($(this).outerHeight() > max_height) {
                max_height = $(this).outerHeight();
            }
        });

        itself.outerHeight(max_height);
        siblings.outerHeight(max_height);

    });

}