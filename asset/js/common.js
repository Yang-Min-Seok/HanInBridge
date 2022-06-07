$(document).ready(function(){
    
    // implemention of top button
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('#top_btn').fadeIn();
            } 
            else {
                $('#top_btn').fadeOut();
            }
        });
        
        $("#top_btn").click(function() {
            $('html, body').animate({scrollTop : 0}, 400);
            return false;
        });
    });

    // when user hovers #navi_anchor -> hide this and slideDown #navi
    $('#navi_anchor').hover(function(){
        $(this).hide();
        $('#navi').slideDown(1500);
        return false;
    })

    // when user clicks #navi li:nth-child(1) a -> hide #navi and show #navi_anchor
    $('#navi li:nth-child(1) a').click(function(){
        $('#navi').hide(1000);
        $('#navi_anchor').show(1000);
        return false;
    })

})