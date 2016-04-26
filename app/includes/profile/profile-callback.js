define(["jquery"], function($) {
    return function() {
        console.log("Profile JS Callback executed");

        function alignButtons() {
            $('body').css('overflow', 'hidden');
            var windowWidth = $(window).width();
            $('body').css('overflow', 'auto');
            if (windowWidth < 768) {
                setTimeout(function() {
                    var profileHeight = $('.profile-image-container img').outerHeight();
                    $('.button-container ul').height(profileHeight);
                    var $buttons = $('#profile .button-container.visible-xs .button');
                    var btnHeight = $buttons.outerHeight();
                    var btnNumber = $buttons.length;
                    $buttons.css('margin-bottom', ((profileHeight - (btnHeight * btnNumber)) / 2));
                }, 500);
            }
        }
        alignButtons();

        var resizeTimer;

        $(window).on('resize', function(e) {
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function() {
                alignButtons();
            }, 250);

        });
    }
});
