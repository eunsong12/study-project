$(function(){

    // for( let i = 0; i < 5; 1++){
    //     console.log(i);
    // };

    $(".slider").slick({
        dots: true,
        appendDots: $(".sliderNav"),
        dotsClass: "navDots",

        customPaging: function(slick, index) {
            // 반복문이 내장되어 있음
            // console.log(index);
            const countPage = `${index + 1} / 5`;
            
            return countPage;
        },
    });

    $(".slider").on("beforeChange", function(event, slick, current, next){

        if( next === 0){
            $(".progress").css("width", "0");
        } else if (next ===1){
            $(".progress").css("width", "25%");
        } else if (next ===2){
            $(".progress").css("width", "50%")
        } else if (next ===3){
            $(".progress").css("width", "75%")
        } else if (next ===4){
            $(".progress").css("width", "100%")
        }





        // $(".box").css("width", 100 * next + "px");
    });
});