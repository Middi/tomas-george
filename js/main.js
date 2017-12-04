$(document).ready(function () {

    $("#navToggle a").click(function (e) {
        e.preventDefault();
        $("nav").slideToggle("medium");
    });

    $(window).resize(function () {
        if ($(window).width() >= "720") {
            $("nav").css("display", "block");
        } else {
            $("nav").css("display", "none");
        }
    });



    // ===========================
    // Smooth Scrolling
    // ===========================

    $('body').on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
        //change this number to create the additional off set        
        var customoffset = -18
        $('html, body').animate({
            scrollTop: target_offset - customoffset
        }, 1000);
    });

});