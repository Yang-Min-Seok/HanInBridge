$(document).ready(function(){

    // when user opens page -> slideDown #introduce .wrap hgroup and p
    $(function(){
        $('#introduce .wrap hgroup h3').slideDown(2000);
        $('#introduce .wrap div p').slideDown(2000);
    });

    let i = c = 0, onoff=1;
    
    // update 'on' class
    function pagenum(){
        $(".c_btn_bot>li").removeClass("on");
        $(".c_btn_bot>li:nth-child("+(c+1)+")").addClass("on")
    }

    // when user clicks c_btn_bot>li -> take to propal img
    $(".c_btn_bot>li").click(function(){
        i = c - $(this).index();
        c = $(this).index();
        w += 1280 * i;

        $(".slide").stop().animate({"margin-left":w}, 500);
        pagenum();
    });

    // make moveL
    let w = 0;
    function moveL(){
        c++;
        if(c==4){
            c=0;
        };
        pagenum();
        $(".slide").stop().animate({"margin-left":w=-1280*c}, 500);
    }
    
    // make moveR
    function moveR(){
        c--;
        if(c==-1){
            c=3;
        };
        pagenum()
        $(".slide").stop().animate({"margin-left":w=-1280*c},500);
    }
    
    // call moveL every 4 sec
    let Timer = setInterval(moveL, 4000);

    // implement left, right button
    const l_btn = $('i.fa-circle-arrow-left'), r_btn = $('i.fa-circle-arrow-right');
    l_btn.click(function(){
        moveR();
    })
    r_btn.click(function(){
        moveL();
    })

    // clear Timer when mouse gets over the left, right button
    $('i.fa-solid').hover(function(){
        clearInterval(Timer);
    },function(){ // when coursor gets out of the button, set Timer again
        Timer=setInterval(moveL,4000);
    });

})