import $ from 'jquery';

$(document).ready(function() {
	// блоки открываются по одному
	/*$('.block__title').click(function(event) {
		if ($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});*/
	$('.spoiler__info').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
})