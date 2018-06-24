let hideCategory = {
    hideCategoryInit: function($) {
        let $categoryItem = $('.category-tabs .item');

        if (!$categoryItem.length) {
            return;
        }

        $categoryItem.on('click', function () {
            if($(this).hasClass('current')){
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

export default hideCategory;