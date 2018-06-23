let headerScroll = {
    headerScrollInit: function($) {
        let $header = $('.header');

        if (!$header.length) {
            return;
        }

        $(window).on('scroll', headerScrollHandler);

        function headerScrollHandler(){
            if($(document).scrollTop() > 30){
              $header.addClass('sticky');
            } else {
              $header.removeClass('sticky');
            }
        }

    }

};

export default headerScroll;