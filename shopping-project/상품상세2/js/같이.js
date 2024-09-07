$(function(){

    $(".imageGallery .productMenu li").on("click", function () {

        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        const src = $(this).find("img").attr("src");
        $(".imageGallery .productImage img").attr("src", src);
        
    });
    
    $(".imageGallery .productMenu li:nth-child(1)").trigger("click");

    $(".fixedsidebar .popularproducts li").on("click", function() {

        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        
        const index = $(this).index();

        let fileName = "";

        if(index === 0){

            fileName = "product_cut";
            // $(".imageGallery .productMenu li:nth-child(1) img").attr("src", "images/product_cut1.jpg")
            // $(".imageGallery .productMenu li:nth-child(2) img").attr("src","images/product_cut2.jpg")
            // $(".imageGallery .productMenu li:nth-child(3) img").attr("src", "images/product_cut3.jpg")
        } else if (index ===1 ){

            fileName = "proBeige_cut";
            
            // $(".imageGallery .productMenu li:nth-child(1) img").attr("src", "images/proBeige_cut1.jpg")
            // $(".imageGallery .productMenu li:nth-child(2) img").attr("src", "images/proBeige_cut2.jpg")
            // $(".imageGallery .productMenu li:nth-child(3) img").attr("src", "images/proBeige_cut3.jpg")
        } else if (index ===2){

            fileName = "Boot_cut";
            
            // $(".imageGallery .productMenu li:nth-child(1) img").attr("src", "images/boot_cut1.jpg")
            // $(".imageGallery .productMenu li:nth-child(2) img").attr("src", "images/boot_cut2.jpg")
            // $(".imageGallery .productMenu li:nth-child(3) img").attr("src", "images/boot_cut3.jpg")
        };

        const src1 = `images/${fileName}1.jpg`;
        const src2 = `images/${fileName}2.jpg`;
        const src3 = `images/${fileName}3.jpg`;

        $(".imageGallery .productMenu li:nth-child(1) img").attr("src", src1)
        $(".imageGallery .productMenu li:nth-child(2) img").attr("src", src2)
        $(".imageGallery .productMenu li:nth-child(3) img").attr("src", src3)

        // $(".imageGallery .productMenu li:nth-child(1)").trigger("click");
        
    });
    
});