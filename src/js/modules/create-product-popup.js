let createProductPopup = {
    createProductPopupInit: function($) {
        let $showPopupBtn = $('.show-popup');

        if (!$showPopupBtn.length) {
            return;
        }

        $showPopupBtn.on('click', function () {
            $('.popup-holder').addClass('popup-show');
            $('.popup-slider .popup-slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                asNavFor: '.popup-slider .popup-slider-nav'
            });

            $('.popup-slider .popup-slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                asNavFor: '.popup-slider .popup-slider-for',
                dots: false,
                vertical: true,
                verticalSwiping: true,
                focusOnSelect: true

            });
            $(".popup-slider .popup-slider-for .slick-slide").zoom({on: "grab"});

        });

        $('div.popup-holder').delegate('.close-popup, .popup-overlay', "click", function () {
            $('.popup-holder').removeClass('popup-show');
        });
    }
};

export default createProductPopup;