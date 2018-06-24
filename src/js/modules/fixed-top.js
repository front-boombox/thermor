let fixedTop = {
    fixedTopInit: function($) {
        let $fixedTopWrap = $('.fixed-top'),
            $contentWrap = $('.content-wrap');

        if (!$fixedTopWrap.length) {
            return;
        }

        $(window).on('resize', fixedTopHandler).trigger('resize');

        function fixedTopHandler(){
            setTimeout(function(){
                $contentWrap.css('margin-top', `${$('.fixed-top').outerHeight()}px`);
            }, 1000);
        }
    }
};

export default fixedTop;