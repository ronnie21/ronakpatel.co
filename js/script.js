$(window).load(function(){
	$('#div-load').fadeOut(2000);
});
	
$(function(){ 
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#pageTop').fadeIn();
		} else {
			$('#pageTop').fadeOut();
		}
	}); 
});

$(function() {
    $('#pageTop').bind('click',function(event){
        var $anchor = $(this);
        
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 900,'easeInOutExpo');
		
        event.preventDefault();
    });
});

//slider
$(function() {
	$(".rslides").responsiveSlides();
});