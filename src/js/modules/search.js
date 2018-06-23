let search = {
    searchInit: function($) {
        let $search = $('#search-data');

        if (!$search.length) {
            return;
        }

        $search.keyup(function () {
            $(".search-result-holder").show();
        });
    }
};

export default search;