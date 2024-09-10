$(function(){
    
    $(".movieItemBundle").slick({
        arrows: true,
        prevArrow: $(".prevArrow"),
        nextArrow: $(".nextArrow"),
        centerMode: true,
        variableWidth: true,

        autoplay: true,
        autoplauSpeed: 1000,
    });
    
    $(".movieItemBundle .item").on("mouseenter", function () {
        $(this).find(".bg").fadeIn();

        
        // $(this).find(".bg img").css({
        //     transform: "scale(1)",
        // });

        $(this).find(".bg img").css({
            transform: "scale(1.1)",
            transition: "all 10s"
        })
    })
    $(".movieItemBundle .item").on("mouseleave", function () {
        $(this).find(".bg").fadeOut();

        
        $(this).find(".bg img").css({
            transform: "scale(1)",
            transition: "0.2s",
            transitionDelay: "1s",
        });
    
    })

});