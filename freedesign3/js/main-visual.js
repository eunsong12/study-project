// $(function(){

//     $(".main-back .mainBackDiv").on("click", function(){

//         $(this).addClass("active");
//         $(this).find("img").addClass("active");
//         $(this).parent().siblings().addClass("active");
//     });

//     $("header .menu .menu2").on("click", function(){

//         $("div.menu-back").stop().fadeToggle();
//     });

//     $("header .sound i").on("click", function(){

//         const sound = $(this).attr("class");
//         sound.replace("")
//     });

//     $(window).on("scroll", function( ) {

//         const scrollTop = $(this).scrollTop();

//         console.log(scrollTop);

//         if( scrollTop >= $("section.anime").offset().top) {
//             console.log("비디오 섹션을 지나갑니다")

//             $("section.anime  .abc").addClass("fixed");
//         } else {
//             $("section.anime  .abc").removeClass("fixed");
//         }

//         if ( scrollTop  >= $("section.movie").offset().top - $(window).innerHeight()) {
//             $("section.anime  .abc")
//             .removeClass("fixed")
//             .css({
//                 top: "auto",
//                 bottom: 0,
//             });
//         }
//     })

//     // $("section.movie .slider .slick-slide").on("mouseenter", function(){

//     //     const index = $(this).index();
//     //     console.log(index);


//     //     // $(this).css({
//     //     //     background: URL(`images/movie4-missimg.png`),
//     //     // });
//     // });
    
//     $(".sample").slick({
//         arrows: true,
//         prevArrow: $(".prevArrow"),
//         nextArrow: $(".nextArrow"),
//         centerMode: true,
//         variableWidth: true,

//         autoplay: true,
//         autoplauSpeed: 1000,
//     });

    
//     $(".sample .item").on("mouseenter", function () {
//         $(this).find(".bg").fadeIn();

        
//         // $(this).find(".bg img").css({
//         //     transform: "scale(1)",
//         // });

//         $(this).find(".bg img").css({
//             transform: "scale(1.1)",
//             transition: "all 10s"
//         })
//     })
//     $(".sample .item").on("mouseleave", function () {
//         $(this).find(".bg").fadeOut();

        
//         $(this).find(".bg img").css({
//             transform: "scale(1)",
//             transition: "0.2s",
//             transitionDelay: "1s",
//         });
    
//     })

// });


$(function (){


    setTimeout(function() {

        $("section.mainvisual .visualContainer .visual-totoro").addClass("active");
        $("section.mainvisual .visualContainer .visual-castle").fadeIn();

    },  1000  );
    
    $("section.mainvisual .visualContainer .visual-totoro").on("init", function() {

    });
});

//메인비주얼 일러스트 화면맞춤. -ok
//메인비주얼 init으로 처음 시작하면 애니메이션 바로 실행.
//ㄴ설마 슬라이드에서만 init 이용가능하나..??
//메뉴버튼 누르면 메뉴 나오기(전체화면 이용).