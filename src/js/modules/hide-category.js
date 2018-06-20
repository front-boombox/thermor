let hideCategory = {
    hideCategoryInit: function($) {
        let $categoryItem = $('.category-tabs .item');

        if (!$categoryItem.length) {
            return;
        }

        $categoryItem.on('click', function(){
            showCategoryHandler.call(this);
        });

        function showCategoryHandler(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
                $('.category-tabs-content').fadeOut('slow');
            }
        }
    }

};

export default hideCategory;