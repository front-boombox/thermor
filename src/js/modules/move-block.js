let moveBlock = {
    moveBlockInit: function($) {
        let $topMenuItem = $('.header .top-menu a'),
            $body = $('body');

        if (!$topMenuItem.length) {
            return;
        }

        moveBlockHandler();

        $topMenuItem.bind('click', function(e) {
            if($body.hasClass('about-us-page')){
                e.preventDefault();
                moveBlockHandler.call(this, $body.hasClass('about-us-page'));
            }
        });

        function moveBlockHandler(flag){
            let thisHref;
            if(flag){
                thisHref = $(this).attr('href').split('#')[1];
                $body.addClass('hide');
            } else {
                thisHref = window.location.hash.split('#')[1];
            }
            setTimeout(function(){
                $(".static-blocks-holder").prepend($(`.static-blocks-holder #${thisHref}`));
                setTimeout(function(){
                    $('html, body').scrollTop(0);
                    $body.removeClass('hide');
                }, 300);
            }, 300);
        }
    }
};

export default moveBlock;