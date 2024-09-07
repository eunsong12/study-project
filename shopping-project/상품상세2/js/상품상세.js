$(function() {

    $(".imageGallery .left-bottom li").on("click", function() {

        const src = $(this).find("img").attr("src");
        
        $(".imageGallery .left-main").find("img").attr("src", src);

        $(this).addClass("active");
        $(this).siblings().removeClass("active");



    });

    $(".imageGallery .right li").on("click", function(){

        const product = $(this).find("img").attr("src");

        $(".imageGallery .left-main").find("img").attr("src", product);

        if ($(".imageGallery .left-main img").attr("src", product)) {
            $(".imageGallery .left-bottom li:nth(1)").find("img").attr("src", "images/proBeige_cut1.jpg");
            $(".imageGallery .left-bottom li:nth(2)").find("img").attr("src", "images/proBeige_cut2.jpg");
            $(".imageGallery .left-bottom li:nth(3)").find("img").attr("src", "images/proBeige_cut3.jpg");
        };
        
        // if ($(".imageGallery .left-main img").attr("src", product)) {
        //     $(".imageGallery .left-bottom li:nth(1)").find("img").attr("src", "images/boot_cut1.jpg");
        //     $(".imageGallery .left-bottom li:nth(2)").find("img").attr("src", "images/boot_cut2.jpg");
        //     $(".imageGallery .left-bottom li:nth(3)").find("img").attr("src", "images/boot_cut3.jpg");
        // };
        
    });
    

    
});

// 리플레이스 안씀