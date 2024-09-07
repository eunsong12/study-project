$(function (){

    $(".slider").slick({
        arrows: true,
        prevArrow: $(".prevArrow"),
        nextArrow: $(".nextArrow"),
        
        slidesToShow: 1,
        slidesToScroll: 1,
        
        autoplay: false,
        fade: true,

        dots: true,
        appendDots: $(".sliderNav"),
        dotsClass: "myDots",
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    fade: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    fade: false
                }
            }
        ],
    });
});