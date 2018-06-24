let mainSlider = {
    mainSliderInit: function($) {
        let $mainSliderWrap = $('.main-slider');

        if (!$mainSliderWrap.length) {
            return;
        }

		$mainSliderWrap.slick({
			dots: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			fade: true,
			cssEase: 'linear'
		});
    }
};

export default mainSlider;