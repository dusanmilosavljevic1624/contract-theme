define(["jquery"], function($) {
    return function() {
        console.log("Profile JS Callback executed");


        function alignButtons() {
            setTimeout(function() {
                var profileHeight = $('.profile-image-container img').outerHeight();
                $('.button-container ul').height(profileHeight);
                var $buttons = $('#profile .button-container .button');
                var btnHeight = $buttons.outerHeight();
                var btnNumber = $buttons.length;

                $buttons.css('margin-bottom', ((profileHeight - (btnHeight * btnNumber)) / 2));
            }, 500);
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
