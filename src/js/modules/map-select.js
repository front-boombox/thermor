let mapSelect = {
    mapSelectInit: function($) {
        let $mapSelectWrap = $('#select_city');

        if (!$mapSelectWrap.length) {
            return;
        }

        $mapSelectWrap.on('change', function(){
			window.location.href = $(this).val();
		});
    }
};

export default mapSelect;


