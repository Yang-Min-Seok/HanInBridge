$(document).ready(function(){
    
    let w = $(window).width();
    
    // for mobile
    if(w <= 768){
        
        // when user opens page, move hgroup
        $(function(){
            $('#introduce .wrap hgroup h3').css({'transform':'translateX(-15%)','transition':'all 2s'});
            $('#introduce .wrap hgroup h4').css({'transform':'translateX(15%)','transition':'all 2s'});
        })

    }

})