$(function() {

// $(".card .color ul li").on("click", function() {
    //     $(this).toggleClass("active")
    //     $(this).siblings().removeClass("active")
    // });
    $("  .card .size ul li,    .card .color ul li  ").on("click", function() {

        $(this).toggleClass("active")
        $(this).siblings().removeClass("active")
        
    });
    
    $(".card .like").on("click", function() {
        $(this).toggleClass("active")
    });
    
    $(".card button").on("click", function() {
        // $(this).parent().siblings().prevAll().removeClass("active")
        // $(선택자).closest(상위선택자);
        // 해당 선택자로 부터 가장 가까운 상위요소를 찾아낸다.
        
        const card = $(this).closest(".card");

        card.find(".size ul li").removeClass("active");
        card.find(".color ul li").removeClass("active");
        card.find(".like").removeClass("active");

    });
});