// Linked with css to change navbar color when scrolling past 400px on the page
$(window).scroll(function(){
	$('.navbar-default').toggleClass('scrolled', $(this).scrollTop() > 400);
});