import $ from 'jquery';
import slick from 'slick-carousel';

$(document).ready(function () {
	/*свойства*/
	$('.slider').slick({
		arrows:false,
		dots:true,
		/*adaptiveHeight: true,*/
		slidesToShow: 1,
		/*speed: 500,
		easing: 'ease',
		infinite: true,
		initialSlide: 1,
		autoplay:false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: false,
		pauseOnDotsHover:true,
		draggable: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode:false,
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		fade: false,
		responsive:[{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 501,
			settings: {
				slidesToShow: 1
			}
		}
		],
		mobileFirst:false,
*/
})
	/*События*/
	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		console.log(currentSlide);
	})
	$('.slider').on('afterChange', function(event, slick, currentSlide) {
		console.log(currentSlide);
	})

	/*Методы*/
	$('.slider').slick('setPosition'); 
	// $('.slider').slick('goTo', 1); 
	$('.link_add').click(function(event) {
		$('.slider').slick('slickAdd','<div class="newSlide">123</div>'); 
		return false;
	});
	$('.link_remove').click(function(event) {
		$('.slider').slick('slickRemove',0); 
		return false;
	});
	
});

$(document).ready(function () {
	/*свойства*/
	$('.about__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.slider-nav'
	  });
	  $('.slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.about__slider',
		dots: true,
		centerMode: false,
		focusOnSelect: true
	  });
});

$(document).ready(function () {
	/*свойства*/
	$('.reviews__slider').slick({
		arrows:true,
		dots:true,
		/*adaptiveHeight: true,*/
		slidesToShow: 1,
		/*speed: 500,
		easing: 'ease',
		infinite: true,
		initialSlide: 1,
		autoplay:false,
		autoplaySpeed: 1500,
		pauseOnFocus: true,
		pauseOnHover: false,
		pauseOnDotsHover:true,
		draggable: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: true,
		centerMode:false,
		variableWidth: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		fade: false,
		responsive:[{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 501,
			settings: {
				slidesToShow: 1
			}
		}
		],
		mobileFirst:false,
*/
})
	/*События*/
	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		console.log(currentSlide);
	})
	$('.slider').on('afterChange', function(event, slick, currentSlide) {
		console.log(currentSlide);
	})

	/*Методы*/
	$('.slider').slick('setPosition'); 
	// $('.slider').slick('goTo', 1); 
	$('.link_add').click(function(event) {
		$('.slider').slick('slickAdd','<div class="newSlide">123</div>'); 
		return false;
	});
	$('.link_remove').click(function(event) {
		$('.slider').slick('slickRemove',0); 
		return false;
	});
	
});

