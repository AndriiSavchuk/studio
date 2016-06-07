//Preloader

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

//Fixed header

$(document).ready(function(){	
	$("#header").removeClass("default");
	$(window).scroll(function(){
		if ($(this).scrollTop() > 20) {
			$("#header").addClass("default").fadeIn('fast');
		} else {
			$("#header").removeClass("default").fadeIn('fast');
		};
	});
});