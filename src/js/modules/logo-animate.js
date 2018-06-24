let logoAnimate = {
    logoAnimateInit: function($) {
        let $header = $('.header');

        if (!$header.length) {
            return;
        }

        setTimeout(() => {
            $header.removeClass('flag-active');
        }, 3000);
    }
};

export default logoAnimate;