let logoAnimate = {
    logoAnimateInit: function($) {
        let $header = $('.header');

        if (!$header.length) {
            return;
        }

        setTimeout(() => {
            $header.removeClass('flag-active');
        }, 3000);

// delete tabslet --save
        $('.category-tabs > ul').on('click', 'li:not(.active)', function () {
		    $(this).addClass('active').siblings().removeClass('active')
		    	.closest('.category-tabs').find('.category-tabs-content')
		    	.fadeOut('slow', function(){
		    		console.log(this);
		    		$('.category-tabs-content').eq($(this).index()).fadeIn('slow');
		    	});
		});

    }

};

export default logoAnimate;