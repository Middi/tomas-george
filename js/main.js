$(document).ready(function() {
    
    $("#navToggle a").click(function(e) {
      e.preventDefault();
      $("nav").slideToggle("medium");
    });
  
    $(window).resize(function() {
      if ($(window).width() >= "720") {
        $("nav").css("display", "block");
      }
      else {
        $("nav").css("display", "none");
      }
    });
  
  });
  
  