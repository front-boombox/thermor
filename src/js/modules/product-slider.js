let productSlider = {
    productSliderInit: function($) {
        let $productSliderWrap = $('.product-slider.slider-for');

        if (!$productSliderWrap.length) {
            return;
        }

        $('.product-slider.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-slider.slider-nav'
        });

        $('.product-slider.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.product-slider.slider-for',
            dots: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
};

export default productSlider;