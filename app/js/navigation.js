$(document).ready(function() {
	$('.mobile-nav-button').click(function() {
	  console.log('click')
		$('.main-nav').toggleClass('selected');
	});

	$(".mobile-nav-icon").click(function(){
	  $(this).toggleClass("is-active");
	});
})