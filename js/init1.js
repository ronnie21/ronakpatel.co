(function($){
	$(function(){
		// Untoggle menu on click outside of it
		$(document).mouseup(function (e) {
			var container = $('.main-menu li a');
			if (!(container.is(e.target) && container.has(e.target).length === 0) && 
				(!($('#pull').is(e.target)) && $('#pull').has(e.target).length === 0)) {
			container.removeClass("in");
			$('#main-wrap').removeClass("open");
			}
		});
    
		$("#pull").click(function(e) {
			e.preventDefault();
			if ($('#main-wrap').hasClass('open')) {
				//$('#left-wrap').removeClass('open');
				$('#main-wrap').removeClass('open');
			}
			else {
				$('#main-wrap').addClass('open');
				//$('#left-wrap').addClass('open');
			}
		})
	});
})(jQuery);

//css3 animations
$(document).ready(function () {
	
	$('#container ul li img').addClass("fadeIn");
});

//pageload
$(window).load(function(){
	$('#div-load').fadeOut(2000);
});

//slider
$(function() {
	$(".rslides").responsiveSlides();
});