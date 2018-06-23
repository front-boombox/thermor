// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import logoAnimate from './modules/logo-animate';
import burger from './modules/burger';
import mainSlider from './modules/main-slider';
import productSlider from './modules/product-slider';
import productZoom from './modules/product-zoom';
import customSelect from './modules/custom-select';
import tabs from './modules/tabs';
import headerScroll from './modules/header-scroll';
import createProductPopup from './modules/create-product-popup';
import hideCategory from './modules/hide-category';
import fixedTop from './modules/fixed-top';
import search from './modules/search';

(($) => {
    'use strict';

    // When DOM is ready
    $(() => {
        logoAnimate.logoAnimateInit($);
        burger.burgerInit($);
        mainSlider.mainSliderInit($);
        productSlider.productSliderInit($);
        productZoom.productZoomInit($);
        customSelect.customSelectInit($);
        tabs.tabsInit($);
        headerScroll.headerScrollInit($);
        createProductPopup.createProductPopupInit($);
        hideCategory.hideCategoryInit($);
        fixedTop.fixedTopInit($);
        search.searchInit($);
    });

})(jQuery);