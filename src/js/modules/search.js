import $ from 'jquery';

$(document).ready(function() {
	$('.header__search').click(function(event) {
		$('.header__search-panel').toggleClass('active');
        $('.header__burger,.header__menu').removeClass('active');
	});
})