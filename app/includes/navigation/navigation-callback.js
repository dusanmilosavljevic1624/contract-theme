define(["jquery"], function ($) {
    return function () {
        console.log("Navigation JS Callback executed");

        $('.toggle-dropdown').hide();

        $('.toggle-menu').on('click', function (e) {
          e.preventDefault();

          $('.toggle-container').toggleClass('toggled');
          $('.toggle-dropdown').toggle();
        })
    }
});
