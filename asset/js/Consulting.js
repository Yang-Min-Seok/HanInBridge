$(document).ready(function(){

    let w = $(window).width();
    // for pc
    if(w>768){

        // when user opens page, move hgroup
        $(function(){
            $('#introduce .wrap hgroup h3').css({'transform':'translateX(-28%)','transition':'all 2s'});
            $('#introduce .wrap hgroup h4').css({'transform':'translateX(20%)','transition':'all 2s'});
        })
        
    }
    
    const swiper = new Swiper('.swiper', {
      
        // over effect
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        
        // set auto play
        autoplay: {
          delay: 2500,
        },
  
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