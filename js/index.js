//JS
$(document).ready(function(){
	
	$('.nav ul li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
})
