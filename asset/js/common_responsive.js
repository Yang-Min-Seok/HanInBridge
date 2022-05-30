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
            $(this).hide();
            $('#menu_btn').slideDown(700);
            return false;
        })

        // when user clicks #menu_btn li:nth-child(1) -> hide #menu_btn and fadeIn #menu_anchor
        $('#menu_btn li:nth-child(1)').click(function(){
            $('#menu_btn').hide();
            $('#menu_anchor').fadeIn(700);
            return false;
        })
    }

})