$(function(){

    function func( total, indexToPageNumber, pageCount){

    };


    const $visual = $(".visual");

    $visual.find(".slider").on("init", function(event, slick){
            // totalpagenumber 이런식으로 작성하는게 좋음
        // const current = slick.currentSlide;
        const total = slick.slideCount;
        const indexToPageNumber = slick.currentSlide + 1;
        const pageCount = `${indexToPageNumber} / ${total}`;

        $visual.find(".count").text(pageCount);

        $visual.find(".progressbar span").css({
            width: `${indexToPageNumber / total}` * 100 + "%",
        });
    });

    $visual.find(".slider").on("beforeChange", function(event, slick, current, next){

        const total = slick.slideCount;
        const indexToPageNumber = next + 1;
        const pageCount = `${indexToPageNumber} / ${total}`;

        $visual.find(".count").text(pageCount);

        $visual.find(".progressbar span").css({
            width: `${indexToPageNumber / total}` * 100 + "%",
        });
        

        // 첫페이지 수정 코드
        if (current !== next) {
            $('.slick-current + .slick-cloned').each(function(index, node) {
                const $node = $(node);
                setTimeout(function() {
                    $node.addClass('slick-current');
                    $node.addClass('slick-active');
                });
            });
        }
        
        
        // slick.currentSlide + 1, next + 1 이 왜 다른지 물어보기
        
        
        // if ( current === 0){
        //     $visual.find(".progressbar span").css({
        //         backgroundColor: "#218080",
        //         width: `${current} / ${total}`,
        //     });
        // } else if ( current === 1) {
        //     $visual.find(".progressbar span").css({
        //         backgroundColor: "#218080",
        //         width: `${current} / ${total}`,
        //         // width: "50%",
        //     });
        // } else if ( current === 2) {
        //     $visual.find(".progressbar span").css({
        //         backgroundColor: "#218080",
        //         width: `${current} / ${total}`,
        //         // width: "75%",
        //     });
        // } else if ( current === 3) {
        //     $visual.find(".progressbar span").css({
        //         backgroundColor: "#218080",
        //         width: `${current} / ${total}`,
        //         // width: "100%",
        //     });
        // }    
    });

    $visual.find(".slider").slick({

        // initialSlide: 2,
        variableWidth: true,
        centerMode: true,
        arrows: true,
        prevArrow: $(".prevArrow"),
        nextArrow: $(".nextArrow"),

    });
});