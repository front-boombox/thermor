let burger = {
    burgerInit: function($) {
        let $burgerBtn = $('.burger-btn'),
            $navbar = $('.header .navbar');

        if (!$burgerBtn.length) {
            return;
        }

        $burgerBtn.on('click', function() {
            burgerHandler.call(this);
        });

        function burgerHandler(){
          $(this).toggleClass('active');
          $navbar.fadeToggle();
        }
    }
};

export default burger;