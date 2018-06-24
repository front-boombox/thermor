let productZoom = {
    productZoomInit: function($) {
        let $productImage = $(".product-slider.slider-for .slick-slide");

        if (!$productImage.length) {
            return;
        }

        $productImage.zoom({
        	on: "grab",
        	touch: "false"
        });
    }
};

export default productZoom;