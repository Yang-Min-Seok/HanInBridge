$(document).ready(function(){

    // when user opens page -> slideDown #introduce .wrap hgroup and p
    $(function(){
        $('#introduce .wrap hgroup h3').slideDown(2000);
        $('#introduce .wrap div p').slideDown(2000);
    });

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
})