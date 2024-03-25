$(document).ready(function() {
    $('.header__burger').click(function(event) {
       $('.header__body,.mobile-header, .header__container').addClass('active');
       $('body').addClass('lock');
 
    });
    $('.header__close').click(function(event) {
      $('.header__body, .header__container').removeClass('active');
      $('body').removeClass('lock');

   });

 });
 