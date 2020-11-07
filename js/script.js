$(document).ready(function() {
    $('.menu-icon').click(function() {
        $('.menu-icon,.burger_active').toggleClass('active');
          $('body').toggleClass('lock');
    })
})
