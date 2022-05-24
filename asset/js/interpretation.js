$(document).ready(function(){

    // when user opens page -> give animation effect to title
    $(function(){
        $('#introduce .wrap hgroup h3').css({'transform':'translateX(0)','transition':'all 2s'});
        $('#introduce .wrap hgroup h2').css({'transform':'translateX(0)','transition':'all 2s'});
    });

    // when user goes to interpreter section -> give animation effect to title
    $(function() {
        $(window).scroll(function() {
            let a = $(this).scrollTop();
            // for test
            // console.log(a);
            if(a > 300){
                $('#interpreter .wrap hgroup').animate({opacity:'1',transition:'0.7s'});
            }
        });
    });

    // adopt swiper
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