let tabs = {
    tabsInit: function($) {
        let $tabsWrap = $('.tabs-head');

        if (!$tabsWrap.length) {
            return;
        }

		$tabsWrap.on('click', 'li:not(.active)', function () {
		    $(this).addClass('active').siblings().removeClass('active')
		    	.closest('.tabs').find('.product-info-container').removeClass('active')
		    	.eq($(this).index()).addClass('active');
		});
    }
};

export default tabs;