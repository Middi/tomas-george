$(document).ready(function(){$("#navToggle a").click(function(n){n.preventDefault(),$("nav").slideToggle("medium")}),$(window).resize(function(){$(window).width()>="720"?$("nav").css("display","block"):$("nav").css("display","none")})});