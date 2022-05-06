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
            if(a > 800){
                $('#interpreter .wrap hgroup').animate({opacity:'1',transition:'0.7s'});
            }
        });
    });

})