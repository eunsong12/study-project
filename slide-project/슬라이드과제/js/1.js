$(function(){

    $(".slider").slick({
        arrows: true,
        prevArrow: $(".btnContents #prevArrow"),
        nextArrow: $(".btnContents #nextArrow"),

        autoplay: true,
        autoplauSpeed: 900,
    });

    $(".visual").find(".slider").on("init", function(event, slick){
        const total = slick.slideCount;
        const indexToPageNumber = slick.currentSlide + 1;
        const pageCount = `${indexToPageNumber} / ${total}`;

        $(".visual").find(".count").text(pageCount);

        $(".visual").find(".progressbar span").css({
            width: `${indexToPageNumber / total}` * 100 + "%",
        });
    });

    $(".visual").find(".slider").on("beforeChange", function(event, slick, current, next){

        const total = slick.slideCount;
        const indexToPageNumber = next + 1;
        const pageCount = `${indexToPageNumber} / ${total}`;

        $(".visual").find(".count").text(pageCount);
        
        if (current !== next) {
            $('.slick-current + .slick-cloned').each(function(index, node) {
                const $node = $(node);
                setTimeout(function() {
                    $node.addClass('slick-current');
                    $node.addClass('slick-active');
                });
            });
        }
    });

    const SLICK_PAUSE = "slickPause"
    const SLICK_PLAY = "slickPlay"

    $(".optionArea button#pause").on("click", function(){
        $(".visualArea .slider").slick(SLICK_PAUSE); //stop:true
    });
    $(".optionArea button#play").on("click", function(){
        $(".visualArea .slider").slick(SLICK_PLAY); //autoPlay:true
    });

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $('.topBtn').fadeIn(200);
        } else {
            $('.topBtn').fadeOut(200);
        }
    });
    $('.topBtn').on("click", function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
  
  
});