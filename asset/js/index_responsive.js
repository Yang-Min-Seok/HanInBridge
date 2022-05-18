$(document).ready(function(){
    
    let w = $(window).width();
    
    // for mobile
    if(w <= 768){
        
        // when user opens page -> give effect to #responsive_menu
        $('#responsive_menu .wrap ul li:nth-child(1)').css({'transform':'translateX(0)','transition':'1s'})
        $('#responsive_menu .wrap ul li:nth-child(2)').css({'transform':'translateX(0)','transition':'1s'})
        $('#responsive_menu .wrap ul li:nth-child(3)').css({'transform':'translateX(0)','transition':'1s'})

    }

})