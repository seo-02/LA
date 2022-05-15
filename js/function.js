$(function(){
    $('a').on('click',function(evt){
        evt.preventDefault();
    });
    
    const nav = $('section.tour > nav > ul > li > a ');
    const article = $('section.tour > article');
    const schedule = $('section.schedule > .schedule-con2 > .daySche > .scheText > p > a');
    const airplane = $('section.schedule > .schedule-con1 > .airplaneC');
    const arrTop = [];
    let idx = null;
    

    //tour 스크롤이벤트
    $(window).on('scroll',function(){
        let scrollTop = $(this).scrollTop();

        if(scrollTop>1200){
            airplane.css({
                animation : 'airplane 3s linear forwards'
            });
        }

        if(scrollTop>$('nav').parent().offset().top){
            $('nav').css({position:'fixed'});
        }else{
            $('nav').css({position:'absolute'});
        }

        for(let i =0;i<arrTop.length;i++){
            if(scrollTop>=arrTop[i]){
                //활성화표시
                nav.eq(i).parent().addClass('on').siblings().removeClass('on');
            }else if(scrollTop<arrTop[0]){
                nav.parent().removeClass('on');
            }
        }
    });

    //클릭시 스크롤
    for(let i=0;i<nav.length;i++){
        arrTop[i]=article.eq(i).offset().top;
    }

    nav.on('click',function(){
        idx = nav.index(this);

        $('html,body').stop().animate({
            scrollTop: arrTop[idx]
        },600);
    });

    schedule.on('click',function(){
        idx = schedule.index(this);

        $('html,body').stop().animate({
            scrollTop: arrTop[idx]
        },600);
    });

    //할리우드
    const hollyImg = $('section.tour > .holly > .holly-con > ul > li > .img');
    const hollyTit = $('section.tour > .holly > .holly-con > ul > li > .tit');
    const hollyText = $('section.tour > .holly > .holly-con > ul > li > .text');
    $(window).resize(function(){   });
    let windowW = $(window).width();

    hollyImg.on('click',function(){
        if($(this).hasClass('on')){
            $(this).removeClass('on').stop().animate({
                left: 0,
            });
            $(this).parent().css({
                backgroundColor :'#fff'
            });
            hollyTit.css({color:'#000'});
        }else{
            if(windowW>640){
                $(this).addClass('on').stop().animate({
                    left: 750,
                });
                hollyTit.css({color:'#fff'});
            }else {
                $(this).addClass('on').stop().animate({
                    left:350,
                });
            }
            $(this).parent().css({
                background :'rgb(255, 150, 29)'
            });
            hollyText.fadeIn(600);
        }
    });
 

    //유니버셜
    const uniSlide = $('section.tour > .universal > .universal-con > .slide');
    const uniBtnPrev = $('section.tour > .universal > .universal-con > a.prev');
    const uniBtnNext = $('section.tour > .universal > .universal-con > a.next');
    let nowIdx =2;
    uniBtnNext.on('click',function(){
        uniSlide.children('li').removeClass('on').eq(nowIdx).addClass('on');
        uniSlide.stop().animate({
            left:-300
        },0,function(){
            $('section.tour > .universal > .universal-con > .slide').children('li').first().appendTo(uniSlide);
            uniSlide.css({left:0});
        });
    });
    uniBtnPrev.on('click',function(){
        uniSlide.children('li').removeClass('on').eq(0).addClass('on');
        uniSlide.stop().animate({
            left:300
        },0,function(){
            $('section.tour > .universal > .universal-con > .slide').children('li').last().prependTo(uniSlide);
            uniSlide.css({left:0});
        });
    });
});
