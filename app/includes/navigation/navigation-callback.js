define(["jquery"], function($) {
    return function() {
        console.log("Navigation JS Callback executed");


        $('.toggle-dropdown').hide();

        $('.toggle-menu').on('click', function(e) {
            e.preventDefault();

            $('.toggle-container').toggleClass('toggled');
            if ($('.toggle-dropdown').css('left') === '0px') {
                $('.toggle-dropdown').animate({
                  left: '100%'
                });
                setTimeout(function () {
                  $('.toggle-dropdown').hide();
                }, 600);
            } else {
                $('.toggle-dropdown').show();
                $('.toggle-dropdown').animate({
                    left: '0%'
                }, 500);
            }
        })
    }
});
