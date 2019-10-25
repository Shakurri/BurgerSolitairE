$(function(){
	var lordF=0;



  $('.howtoButton').on('touchstart',function () {
  	if(lordF==0){
  	$('.slider').slick({
    autoplay:false,
    arrows:true,

    dots:true,
  	});
  	lordF++;
  	}
  	$('.caption').fadeIn(500);
  	$('.slider').fadeIn(1000);
  	$('.batu').fadeIn(1000);
  });
  $('.batu').on('touchstart',function () {
  	$('.caption').fadeOut(1000);
  	$('.slider').fadeOut(500);
  });
});