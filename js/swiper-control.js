new Swiper('.portfolio__slider', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			spaceBetween: 20,
			slidesPerView: 1,
		},

		525: {
			slidesPerView: 2,
		},

		1024: {
			spaceBetween: 20,
			slidesPerView: 3,
		}
	},
	slideToClickedSlide: true,
	slidesPerView: 1,
	loopedSlides: 3,
	spaceBetween: 20,
	preloadImages: false,

	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},

	watchSlidesProgress: true,
	watchSliedesVisibility: true,

});

new Swiper('.reviews__slider', {
	navigation: {
		nextEl: '.reviews__btn-next',
		prevEl: '.reviews__btn-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		320: {
			spaceBetween: 20,
			slidesPerView: 1,
		},

		505: {
			slidesPerView: 2,
		},

		1024: {
			spaceBetween: 20,
			slidesPerView: 3,
		}
	},
	slideToClickedSlide: true,
	slidesPerView: 1,
	loopedSlides: 3,
	spaceBetween: 20,
	preloadImages: false,

	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},

	watchSlidesProgress: true,
	watchSliedesVisibility: true,

});