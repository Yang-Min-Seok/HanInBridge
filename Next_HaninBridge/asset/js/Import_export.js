$(document).ready(function(){

    // when user opens page, move hgroup
    $(function(){
        $('#introduce .wrap hgroup h3').css({'transform':'translateX(-20%)','transition':'all 2s'});
        $('#introduce .wrap hgroup h4').css({'transform':'translateX(20%)','transition':'all 2s'});
    })
})