$(document).ready(function() {
    var toggle = true;
    $('.dropdown-menu').click(function() {

        toggle = !toggle;

        

        if (toggle == true) {

            $('.dropdown-menu').html('<a href="#"><i class="las la-bars la-4x"></i></a>');

        } else {$('.dropdown-menu').html('<a href="#"><i class="las la-times la-4x"></i></a>');
    }


        $('.header-nav').slideToggle(300);
    });
});