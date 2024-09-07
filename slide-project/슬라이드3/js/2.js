$(function(){

    const $visual = $("section.visual");

    function fune(next, total, pageCount){
        $visual.find(".progressbar span").css({
            width: (next / total) * 100 + "%",
        });
        $visual.find(".paging").text(pageCount);
    };
    
    $visual.find(".slider").on("init", function(event, slick){
        // console.log(slick.slideCount); 전체 갯수에 대한 정보
        // console.log(slick.currentSlide); 현재 활성화 되어있는 페이지정보

        const mynext = slick.currentSlide + 1;
        const totalCount = slick.slideCount;
        const pageCount = `${mynext} / ${totalCount}`
        fune(mynext, totalCount, pageCount);
        
    });
    
    $visual.find(".slider").on("beforeChange", function(event, slick, current, next){

        const mynext = next + 1;
        const totalCount = slick.slideCount;
        const pageCount = `${mynext} / ${totalCount}`
        fune(mynext, totalCount, pageCount);
        
        // if (next === 0) {
        //     $visual.find(".progress span").css({
        //         width: (mynext / 4) * 100 + "%",
        //     })
        // } else if (next === 1){
        //     $visual.find(".progress span").css({
        //         width: (mynext / 4) * 100 + "%",
        //     })
        // } else if (next === 2){
        //     $visual.find(".progress span").css({
        //         width: (mynext / 4) * 100 + "%",
        //     })
        // } else if (next === 3){
        //     $visual.find(".progress span").css({
        //         width: (mynext / 4) * 100 + "%",
        //     })
        // }
    });
    
    $visual.find(".slider").slick({
        arrows: true,
        prevArrow: $visual.find(".prevArrow"),
        nextArrow: $visual.find(".nextArrow"),
        initialSlide: 0,
    });
});