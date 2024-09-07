$(function(){

    $(".slider").slick({
        arrows: false,

        variableWidth: true,
        centerMode: true,

        // autoplay: true,
        // autoplaySpeed: 900,
    });

    $(".slider").on("beforeChange", function(){
        console.log("beforeChange는 언제 발생되는거지?");
        $("body").css("background", "blue");
    });

    $(".slider").on("afterChange", function(){
        console.log("afterChange는 언제 발생되는거지?");
        $("body").css("background", "yellow");
    });
    
});