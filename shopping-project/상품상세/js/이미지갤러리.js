// $(function () {

//     $(".imageGallery .productMenu li").on("click", function () {

//         // 이미지 변경 코드------------
//         const src = $(this).find("img").attr("src");
//         $(".imageGallery .productImage img").attr("src", src);
        
//         // $(this).closest(".productImage").children("img").attr("src", src);

//         //**** ACTIVE 클래스 추가,삭제 ****//
//         $(this).addClass("active");
//         $(this).siblings().removeClass("active");
        
//     });

//     $(".imageGallery .productMenu li:nth-child(1)").trigger("click");
//     // $(".imageGallery .productMenu li").eq(0)

// });



// 복습

$(function () {

    let count = 0;

    $(".imageGallery .productMenu li").on("click", function () {

        const src = $(this).find("img").attr("src");

        $(".imageGallery .productImage").find("img").attr("src", src);

        $(this).addClass("active");
        $(this).siblings().removeClass("active")
        
        const index = $(this).index();

        count = index;
        
    });

    $(".imageGallery .productMenu li:nth-child(1)").trigger("click");
    
    $(".imageGallery button.up").on("click", function() {

        // const index = $(".imageGallery .productMenu li").index();
        // $(this).closest(".sideBar").find("li").insertAfter();

        // console.log(count);

        $(".imageGallery .productMenu li").eq( count - 1).trigger("click");
        // eq(0) = nth-child(1)
    });

    $(".imageGallery button.down").on("click", function() {

        
        $(".imageGallery .productMenu li").eq( count + 1 ).trigger("click");

        if (count === 5){
            count = -1;
        }
        // 만약 count에 0을 넣고 싶다면 트리거 수식 위로 올라가야 한다
        // 왜냐하면 5에서 +1을 해서 6이 되기 전에, 5에서 실행을 해야 하기 때문이다.
    });
});