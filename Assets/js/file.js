$(window).scroll(function(){
	$('.navbar-default').toggleClass('scrolled', $(this).scrollTop() > 400);
});