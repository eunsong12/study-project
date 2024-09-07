$(function(){

    // slickPause
    // slickPlay
    // slickNext
    // slickPrev
    // slickGoto
    $(".visualArea .slider").slick({

        centerMode: true,
        variableWidth: true,
        dots: true,
        
        // arrows: true,
        // prevArrow: $(".btnContents button#prevArrow"),
        // nextArrow: $(".btnContents button#nextArrow"),

        asNavFor: ".secondArea .slider",

        autoplay: true,
        autoplaySpeed: 900,
        
    });

    // 내장된 버튼을 치환하는게 아니라 강제로 버튼으로 만들어버림.
    $(".btnContents button").on("click", function(){

        const controlStr = $(this).attr("data-slick");
        //data-slick안에 이름을 준 (예시)slickPrev로 치환된다.
        //결국 controlStr = slickPrev인 셈.

        $(".visualArea .slider").slick(controlStr);
        
        // const index = $(this).index();
        // if (index === 0) {
        //     $(".visualArea .slider").slick("slickPrev");
        // }
        // if (index === 1) {
        //     $(".visualArea .slider").slick("slickPause");
        // }
        // if (index === 2) {
        //     $(".visualArea .slider").slick("slickPlay");
        // }
        // if (index === 3) {
        //     $(".visualArea .slider").slick("slickNext");
        // }
    });
    
    //철자 실수 자주 하는 사람은 const로 이름을 주는게 좋다. 그중에서도 대문자를 활용하는 방법을 추천.
    const SLICK_PAUSE = "slickPause"
    const SLICK_PLAY = "slickPlay"

    $(".optionArea button#pause").on("click", function(){

        $(".visualArea .slider").slick(SLICK_PAUSE); //stop:true
        
    });
    $(".optionArea button#play").on("click", function(){
        $(".visualArea .slider").slick(SLICK_PLAY); //autoPlay:true

    });

    $(".secondArea .slider").slick({
        asNavFor: ".visualArea .slider"
    });
});