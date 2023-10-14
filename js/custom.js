$(function(){
	$.scrollIt({topOffset:0});

	$(".openMenu").click(function () {
		$("body").addClass("overflowH");
		$(".header").addClass("transform");
		$(".menuMobile").fadeIn();
		$(".transformPage,.menuMobile .menuContent").addClass("active");
		
	});
	
	$(".closeX,.BgClose,.menuMobile .menuContent .menuRes li a,.menuMobile .menuContent .btnOrder").click(function () {
		$("body").removeClass("overflowH");
		$(".header").removeClass("transform");
		$(".menuMobile").fadeOut();
		$(".transformPage,.menuMobile .menuContent").removeClass("active");
		
	});


	$(window).load(function () {
		
		$(".splash").fadeOut(1000,function () {
				
			$(this).remove();
			
		});
	
	});
	

	$('.the-slider-inner').bxSlider({
		useCSS: false,
		auto: true,
		controls: true,
		pager: true,
		autoHover: true,
		responsive: true,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '<i class="fa fa-angle-right"></i>',
		prevText: '<i class="fa fa-angle-left"></i>'
	});
	
	$(".inputStyle input").keyup(function() {
	    if($(this).val().length > 0) {
	         $(this).parent().addClass("active");
	    } else {
	        $(this).parent().removeClass("active");
	    }
	});
	
	$( ".selectmenu" ).selectmenu();
	
	/* WOW Js */
	new WOW().init();
	
	

	/****** Start  countTo ******/
	
	$('.statistics').one('inview', function (event, visible) {
		
		if (visible === true) {
			/****** Start  countTo******/
			$('.count').countTo();
			/****** End  countTo******/
		}
	
	});
	
	/****** End  countTo ******/
	
	$('.mixitup_list').mixItUp();
	
	$('.listFilter span').click(function () {
	    
	    $(this).addClass("active-menu").siblings().removeClass("active-menu");
	
	});
		
	
	
	
	
	
	
	
	
});
