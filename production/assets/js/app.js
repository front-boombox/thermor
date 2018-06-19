(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _logoAnimate = require('./modules/logo-animate');

var _logoAnimate2 = _interopRequireDefault(_logoAnimate);

var _burger = require('./modules/burger');

var _burger2 = _interopRequireDefault(_burger);

var _mainSlider = require('./modules/main-slider');

var _mainSlider2 = _interopRequireDefault(_mainSlider);

var _productSlider = require('./modules/product-slider');

var _productSlider2 = _interopRequireDefault(_productSlider);

var _productZoom = require('./modules/product-zoom');

var _productZoom2 = _interopRequireDefault(_productZoom);

var _customSelect = require('./modules/custom-select');

var _customSelect2 = _interopRequireDefault(_customSelect);

var _tabs = require('./modules/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _headerScroll = require('./modules/header-scroll');

var _headerScroll2 = _interopRequireDefault(_headerScroll);

var _createProductPopup = require('./modules/create-product-popup');

var _createProductPopup2 = _interopRequireDefault(_createProductPopup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
    'use strict';

    // When DOM is ready

    $(function () {
        _logoAnimate2.default.logoAnimateInit($);
        _burger2.default.burgerInit($);
        _mainSlider2.default.mainSliderInit($);
        _productSlider2.default.productSliderInit($);
        _productZoom2.default.productZoomInit($);
        _customSelect2.default.customSelectInit($);
        _tabs2.default.tabsInit($);
        _headerScroll2.default.headerScrollInit($);
        _createProductPopup2.default.createProductPopupInit($);
    });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/burger":2,"./modules/create-product-popup":3,"./modules/custom-select":4,"./modules/header-scroll":5,"./modules/logo-animate":6,"./modules/main-slider":7,"./modules/product-slider":8,"./modules/product-zoom":9,"./modules/tabs":10}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var burger = {
    burgerInit: function burgerInit($) {
        var $burgerBtn = $('.burger-btn'),
            $navbar = $('.header .navbar');

        if (!$burgerBtn.length) {
            return;
        }

        $burgerBtn.on('click', function () {
            burgerHandler.call(this);
        });

        function burgerHandler() {
            $(this).toggleClass('active');
            $navbar.fadeToggle();
        }
    }

};

exports.default = burger;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var createProductPopup = {
    createProductPopupInit: function createProductPopupInit($) {
        var $showPopupBtn = $('.show-popup');

        if (!$showPopupBtn.length) {
            return;
        }

        $showPopupBtn.on('click', function () {
            $('.popup-holder').addClass('popup-show');
            $.ajax({
                method: "GET",
                url: "popup.html",
                success: function success(html) {
                    $("#insertdata").html(html);
                }
            }).done(function (html) {});
        });
    }

};

exports.default = createProductPopup;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var customSelect = {
    customSelectInit: function customSelectInit($) {
        var $customSelectWrap = $('.select');

        if (!$customSelectWrap.length) {
            return;
        }

        jcf.setOptions('Select', {
            wrapNative: false,
            wrapNativeOnMobile: false,
            fakeDropInBody: false
        });

        jcf.replaceAll();
    }

};

exports.default = customSelect;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var headerScroll = {
    headerScrollInit: function headerScrollInit($) {
        var $header = $('.header');

        if (!$header.length) {
            return;
        }

        $(window).on('scroll', headerScrollHandler);

        function headerScrollHandler() {
            if ($(document).scrollTop() > 30) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky');
            }
        }
    }

};

exports.default = headerScroll;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var logoAnimate = {
    logoAnimateInit: function logoAnimateInit($) {
        var $header = $('.header');

        if (!$header.length) {
            return;
        }

        setTimeout(function () {
            $header.removeClass('flag-active');
        }, 3000);
    }

};

exports.default = logoAnimate;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
var mainSlider = {
				mainSliderInit: function mainSliderInit($) {
								var $mainSliderWrap = $('.main-slider');

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

exports.default = mainSlider;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var productSlider = {
    productSliderInit: function productSliderInit($) {
        var $productSliderWrap = $('.product-slider.slider-for');

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
            responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]
        });
    }

};

exports.default = productSlider;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var productZoom = {
    productZoomInit: function productZoomInit($) {
        var $productImage = $(".product-slider.slider-for .slick-slide");

        if (!$productImage.length) {
            return;
        }

        $productImage.zoom({
            on: "grab",
            touch: "false"
        });
    }

};

exports.default = productZoom;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var tabs = {
    tabsInit: function tabsInit($) {
        var $tabsWrap = $('.tabs-head');

        if (!$tabsWrap.length) {
            return;
        }

        $tabsWrap.on('click', 'li:not(.active)', function () {
            $(this).addClass('active').siblings().removeClass('active').closest('.tabs').find('.product-info-container').removeClass('active').eq($(this).index()).addClass('active');
        });
    }

};

exports.default = tabs;

},{}]},{},[1]);
