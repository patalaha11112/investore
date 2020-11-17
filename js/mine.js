// Top up
jQuery(function(f){    var element = f('#top-up');
    f(window).scroll(function(){
        element['fade'+ (f(this).scrollTop() > 1100 ? 'In': 'Out')](500);           
    });
});
// END Top up

// Menu
function openNav() {
	document.getElementById("mySidenav").style.width = "260px";
  }
  
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
// END Menu

// Smooth scroll
$(document).ready(function() {
    $("a.scrollto").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 1500);
      return false;
    });
  });
  // END Smooth scroll

// Slider card product
$(document).ready(function(){
	$('.portfolios__slider').slick({
	  	slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		prevArrow: '<p class="slider-arrow left"><i class="left"></i></p>',
		nextArrow: '<p class="slider-arrow"><i class="right"></i></p>',		
		centerPadding: '40px',
		responsive: [
			{
			breakpoint: 1200,
			  settings: {				  
				  centerPadding: '10px',
			  }
			},	
			{
			  breakpoint: 992,
			  settings: {
				  slidesToShow: 1,
				  dots: true,
				  arrows: false,
				  centerPadding: '190px',
			  }
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
					centerPadding: '160px',
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
					centerPadding: '115px',
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
					centerPadding: '100px',
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
					centerPadding: '30px',
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 1,
					dots: true,
					arrows: false,
					centerPadding: '0',
				}
			},
									
		]
	});
});
// END Slider card product