let createProductPopup = {
    createProductPopupInit: function($) {
        let $showPopupBtn = $('.show-popup');

        if (!$showPopupBtn.length) {
            return;
        }

        $showPopupBtn.on('click', function () {
            $('.popup-holder').addClass('popup-show');
            $.ajax({
                method: "GET",
                url: "../../popup.html",
                success: function (html) {
                    $("#insertdata").html(html);
                    $('.popup-slider-for').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        fade: true,
                        asNavFor: '.popup-slider-nav'
                    });

                    $('.popup-slider-nav').slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                        asNavFor: '.popup-slider-for',
                        dots: false,
                        vertical: true,
                        verticalSwiping: true,
                        focusOnSelect: true,
                        
                    });
                    $(".slick-slide ").zoom({on:"grab"});
                }
            }).done(function (html){

            });

        });

        $('div.popup-holder').delegate('.close-popup, .popup-overlay', "click", function () {
            $('.popup-holder').removeClass('popup-show');
            $("#insertdata").html('');
        });
    }

};

export default createProductPopup;