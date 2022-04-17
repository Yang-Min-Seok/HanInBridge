$(document).ready(function(){
            
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

    // move page when user clicks 'About us' / 'Services'
    let gnb = $('.navi > ul > li');
    gnb.click(function(){
        let i = $(this).index() + 1;
        $('html,body').animate({scrollTop:$('main section').eq(i).offset().top},500);
        return false;
    })
    
    // when user clicks #services_txt1_translate -> show #services_txt1_idn
    $('#services_txt1_translate').click(function(){
        $(this).hide();
        $('#services_txt1_idn').slideDown();
        $('#services_txt1_translate_hide').show();
        return false;
    });

    // when user clicks #services_txt1_translate_hide -> hide #services_txt1_idn
    $('#services_txt1_translate_hide').click(function(){
        $(this).hide()
        $('#services_txt1_translate').show();
        $('#services_txt1_idn').slideUp();
        return false;
    });

    // when user clicks #services_txt2_translate -> show #services_txt2_idn
    $('#services_txt2_translate').click(function(){
        $(this).hide()
        $('#services_txt2_idn').slideDown();
        $('#services_txt2_translate_hide').show();
        return false;
    });

    // when user clicks #services_txt2_translate_hide -> hide #services_txt2_idn
    $('#services_txt2_translate_hide').click(function(){
        $(this).hide()
        $('#services_txt2_translate').show();
        $('#services_txt2_idn').slideUp();
        return false;
    });

    // implemention of #top_btn
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
    
    // when user goes down to 'About us' section -> slideDown #title_txt p
    $(function() {
        $(window).scroll(function() {
            // showing now px from top
            // console.log($(window).scrollTop());
            if($(this).scrollTop() > 1100){
                $('#title_txt p, #title h2').slideDown(1500);
            }
        });
    });

    // when user hovers #services_img1 a -> change background-color
    $('#services_img1 a').hover(function(){
        $('#services_img1').css({'background-color':'#A67951','transition':'0.9s'})
    },function(){
        $('#services_img1').css({'background-color':'#fff','transition':'0.9s'})
    })

    // when user hovers #services_img2 a -> change background-color
    $('#services_img2 a').hover(function(){
        $('#services_img2').css({'background-color':'#A67951','transition':'0.9s'})
    },function(){
        $('#services_img2').css({'background-color':'#fff','transition':'0.9s'})
    })
    

});