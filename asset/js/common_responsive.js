$(document).ready(function(){
    
    let w = $(window).width();
    
    // for mobile
    if(w <= 768){
        
        // when user opens page -> hide menu_btn
        $(function(){
            $('#menu_btn').hide();
        })

        // when user clicks #menu_anchor -> hide #menu_anchor and slideDown #menu_btn
        $('#menu_anchor').click(function(){
            $(this).hide(1000);
            $('#menu_btn').slideDown(1000);
        }) 
    }

})