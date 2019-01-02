
$(document).ready(function(){
	
	var titles = $(".ac-title"),
		texts = $(".ac-text");
	
	texts.hide();
	
	titles.on("click", function(){
		
		var that = $(this),
			text = that.next();
			
		
			
		titles.removeClass("ac-title-active");
		texts.stop().slideUp(300);
		
		if(text.is(":visible")){
			text.stop().slideUp(300);
			that.removeClass("ac-title-active");
		}else{
			text.stop().slideDown(300);
			that.addClass("ac-title-active");

		}
		
	});
	
});