let scrollToCategory = {
    scrollToCategoryInit: function($) {
        let $categoryItemWrap = $('.category-tabs .item');

        if (!$categoryItemWrap.length) {
            return;
        }

        $categoryItemWrap.on('click', scrollToCategoryHandler);

        function scrollToCategoryHandler() {
			if ($(window).width() < 480) {
				let $categoryBlockTop = $('.category-tabs > ul.container').offset().top + $('.category-tabs > ul.container').outerHeight(),
					$headerHeight = $('.header').outerHeight();

				setTimeout(function () {
					$('html, body').animate({
						scrollTop: $categoryBlockTop - $headerHeight
					}, 400);
				}, 500);
			}
		}
    }
};

export default scrollToCategory;