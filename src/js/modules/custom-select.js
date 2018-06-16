let customSelect = {
    customSelectInit: function($) {
        let $customSelectWrap = $('.select');

        if (!$customSelectWrap.length) {
            return;
        }

        jcf.setOptions('Select', {
            wrapNative: false,
            wrapNativeOnMobile: false,
            fakeDropInBody: false
        });

        jcf.replaceAll();
    }

};

export default customSelect;