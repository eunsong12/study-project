$(function(){

    //슬라이딩할 요소를 묶고 있는 wrapper 요소(부모요소)
    $(".slider").slick({
        slidesToShow: 3, //보여질 슬라이드 갯수
        slidesToScroll: 1, // 넘겨질 슬라이드 갯수
        
        autoplay: false, //자동 슬라이드 여부 true/false
        autoplaySpeed: 500, //자동 슬라이드 진행 속도
        
        speed: 900, //슬라이드 이동 속도

        dots: true, //네비게이션, 인디케이트 사용 여부
        appendDots: $(".sliderNav"),
        dotsClass: "myItem",

        arrow: true,
        prevArrow: $(".prevArrow"),
        nextArrow: $(".nextArrow"),

        fade: false, //slidesToShow (보여질 슬라이드 갯수 1장일 때만 가능)
        swipe: true,
        
        initialSlide: 2, // index (기본값은 0)
    });
    
});