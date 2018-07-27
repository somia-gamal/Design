$(document).ready(function(){
	
	//navbar background color scroll
	$(window).scroll(function(){
		if($(this).scrollTop() >100){
			$(".navbar").css({
				backgroundColor:"rgba(10,10,10,.95)",
				zIndex:"9999"
			
			})
		}else{
			$(".navbar").css({
				backgroundColor:"transparent"
			})
		}
	});
	//end navbar
	
	
	//scroll element
   $(".navbar ul li a").click(function(e){
	   e.preventDefault();
	   $("html,body").animate({
		   scrollTop:$('#'+$(this).data('scroll')).offset().top+1
	   },1000)
   });
	//end scroll element
	
	//carousel
	$(".carousel").carousel({
		interval:4000
	});
	
	//scroll top
	var scrolltop=$(".scroll-top");
	$(window).scroll(function(){
		if($(this).scrollTop()>500){
			scrolltop.show();
		}else{
			scrolltop.hide();
		}
	})
	scrolltop.click(function(){
		$("html,body").animate({scrollTop:0},1000)
	})

	
});