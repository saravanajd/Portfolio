var $animation_elements = $('section:not(#header)');
var $window = $(window);
$(document).ready(function () {
    $animation_elements = $('section:not(#header)');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $('#header').height() - 50) {
            $('#menu').addClass('bg-secondary');
        } else {
            $('#menu').removeClass('bg-secondary');
        }
    });

    $('ul.menu a').on('click',function(e){
        e.preventDefault();
        var $section = $(this).attr('href');  
        $('html, body').animate({
            scrollTop: $($section).offset().top
        },1000)
    })

    $('#btnPortfolio').on('click',function(e){
        e.preventDefault();
        var $section = $(this).attr('href');  
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        },1000)
    })
    
});
console.log($animation_elements);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position - 20)) {
            $element.addClass('animate');
        } else {
            $element.removeClass('animate');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');