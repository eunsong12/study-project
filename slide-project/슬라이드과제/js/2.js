$(function(){

    $("section.about .tabmenu li").on("click", function(){

        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        const index = $(this).index();

        const group = $("section.about .body .descriptions .group");

        group.eq(index).addClass("active").siblings().removeClass("active");
        
    });
    
});