$(document).ready(function(){
    
    let w = $(window).width();
    
    // for mobile
    if(w <= 768){
        
        // whe user goes to interpreter section -> make hgroup clear
        $(function() {
            $(window).scroll(function() {
                let a = $(this).scrollTop();
                // for test
                // console.log(a);
                if(a > 45){
                    $('#interpreter .wrap hgroup').animate({opacity:'1',transition:'0.7s'});
                }
            });
        });
        
    }

})