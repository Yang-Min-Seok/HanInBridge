$(document).ready(function(){
    
    let w = $(window).width();
    
    // for mobile
    if(w <= 768){
        
        // when user opens page -> hide menu_btn
        $(function(){
            $('#menu_btn').hide();
        })

        // when user clicks #menu_anchor -> slideUp #menu_anchor and slideDown #menu_btn
        $('#menu_anchor').click(function(){
            $(this).slideUp(700);
            $('#menu_btn').slideDown(700);
            return false;
        })

        // when user clicks #menu_btn li:nth-child(1) -> slideUp #menu_btn and slideDown #menu_anchor
        $('#menu_btn li:nth-child(1)').click(function(){
            $('#menu_btn').slideUp(700);
            $('#menu_anchor').slideDown(700);
            return false;
        })
    }

})