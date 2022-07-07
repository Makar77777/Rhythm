"use strict"

const reviewsSwiper = document.querySelector('.reviews__swiper');

if (reviewsSwiper) {
	const swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		autoHeight: true,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}
