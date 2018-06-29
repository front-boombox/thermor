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

var _hideCategory = require('./modules/hide-category');

var _hideCategory2 = _interopRequireDefault(_hideCategory);

var _fixedTop = require('./modules/fixed-top');

var _fixedTop2 = _interopRequireDefault(_fixedTop);

var _mapSelect = require('./modules/map-select');

var _mapSelect2 = _interopRequireDefault(_mapSelect);

var _scrollToCategory = require('./modules/scroll-to-category');

var _scrollToCategory2 = _interopRequireDefault(_scrollToCategory);

var _moveBlock = require('./modules/move-block');

var _moveBlock2 = _interopRequireDefault(_moveBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

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
        _hideCategory2.default.hideCategoryInit($);
        _fixedTop2.default.fixedTopInit($);
        _mapSelect2.default.mapSelectInit($);
        _scrollToCategory2.default.scrollToCategoryInit($);
        _moveBlock2.default.moveBlockInit($);
    });
})(jQuery);

},{"./modules/burger":2,"./modules/create-product-popup":3,"./modules/custom-select":4,"./modules/fixed-top":5,"./modules/header-scroll":6,"./modules/hide-category":7,"./modules/logo-animate":8,"./modules/main-slider":9,"./modules/map-select":10,"./modules/move-block":11,"./modules/product-slider":12,"./modules/product-zoom":13,"./modules/scroll-to-category":14,"./modules/tabs":15}],2:[function(require,module,exports){
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
            $('.popup-slider .popup-slider-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                asNavFor: '.popup-slider .popup-slider-nav'
            });

            $('.popup-slider .popup-slider-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 3,
                arrows: false,
                asNavFor: '.popup-slider .popup-slider-for',
                dots: false,
                vertical: true,
                infinite: false,
                verticalSwiping: true,
                focusOnSelect: true
            });
            $(".popup-slider .popup-slider-for .slick-slide").zoom({ on: "grab" });
        });

        $('div.popup-holder').delegate('.close-popup, .popup-overlay', "click", function () {
            $('.popup-holder').removeClass('popup-show');
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
var fixedTop = {
    fixedTopInit: function fixedTopInit($) {
        var $fixedTopWrap = $('.fixed-top'),
            $contentWrap = $('.content-wrap');

        if (!$fixedTopWrap.length) {
            return;
        }

        $(window).on('resize', fixedTopHandler).trigger('resize');

        function fixedTopHandler() {
            setTimeout(function () {
                $contentWrap.css('margin-top', $('.fixed-top').outerHeight() + 'px');
            }, 1000);
        }
    }
};

exports.default = fixedTop;

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var hideCategory = {
    hideCategoryInit: function hideCategoryInit($) {
        var $categoryItem = $('.category-tabs .item');

        if (!$categoryItem.length) {
            return;
        }

        $categoryItem.on('click', function () {
            if ($(this).hasClass('current')) {
                $('.category-tabs-content').css('display', 'none');
                $(this).removeClass('current');
            } else {
                $('.category-tabs-content').css('height', 'auto');
                $('.category-tabs .item').removeClass('current');
                $(this).addClass('current');
            }
        });
    }
};

exports.default = hideCategory;

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mapSelect = {
    mapSelectInit: function mapSelectInit($) {
        var $mapSelectWrap = $('#select_city');

        if (!$mapSelectWrap.length) {
            return;
        }

        $mapSelectWrap.on('change', function () {
            window.location.href = $(this).val();
        });
    }
};

exports.default = mapSelect;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var moveBlock = {
    moveBlockInit: function moveBlockInit($) {
        var $topMenuItem = $('.header .top-menu a'),
            $body = $('body');

        if (!$topMenuItem.length) {
            return;
        }

        moveBlockHandler();

        $topMenuItem.bind('click', function (e) {
            if ($body.hasClass('about-us-page')) {
                e.preventDefault();
                moveBlockHandler.call(this, $body.hasClass('about-us-page'));
            }
        });

        function moveBlockHandler(flag) {
            var thisHref = void 0;
            if (flag) {
                thisHref = $(this).attr('href').split('#')[1];
                $body.addClass('hide');
                $('.static-block').css('transform', 'translateY(-10px)');
            } else {
                thisHref = window.location.hash.split('#')[1];
            }
            setTimeout(function () {
                $(".static-blocks-holder").prepend($('.static-blocks-holder #' + thisHref));
                setTimeout(function () {
                    $('html, body').scrollTop(0);
                    $body.removeClass('hide');
                    $('.static-block').css('transform', 'translateY(10px)');
                }, 300);
            }, 300);
        }
    }
};

exports.default = moveBlock;

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var scrollToCategory = {
	scrollToCategoryInit: function scrollToCategoryInit($) {
		var $categoryItemWrap = $('.category-tabs .item');

		if (!$categoryItemWrap.length) {
			return;
		}

		$categoryItemWrap.on('click', scrollToCategoryHandler);

		function scrollToCategoryHandler() {
			if ($(window).width() < 480) {
				var $categoryBlockTop = $('.category-tabs > ul.container').offset().top + $('.category-tabs > ul.container').outerHeight(),
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

exports.default = scrollToCategory;

},{}],15:[function(require,module,exports){
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
