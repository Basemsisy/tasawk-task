$('document').ready(function () {

	$('body').css({'paddingTop': $('.header').innerHeight()- 25});
/*=========================================================================
  navbar animation
=========================================================================*/
	$(window).scroll(function () {
		if($(document).scrollTop() >= 10) {
			$('.upperbar').css({'paddingTop': '2px','paddingBottom': '2px'});
		} else { 
			$('.upperbar').css({'paddingTop': '20px','paddingBottom': '20px'});
		}
	});

/*=========================================================================
  loading Screen
=========================================================================*/

	$(window).on('load',function () {
		$(".loading-over .lod").fadeOut(0,function (){
				$("body").css("overflowY","auto");
				$(this).parent ().fadeOut(0,function (){
					$(this).remove ();
				});
			});
		});

})