$(function(){
    
    const $branch = $("section.branch");

    const $branch_group = $branch.find(".group");

    const BRANCHS = ["더현대서울", "서울역점", "압구정점", "무역센터점", "목동점", "천호점"];
    //대열이라고 하는 데이터
    //보통 이름은 array를 많이 씀
    //언급할때는 index 순서를 사용. 맨 앞에 있는게 0,1,2,3 순으로 감.
    //20, 30 , 40 등 숫자도 들어감

    // console.log(BRANCHS[1])

    //DOM
    $(".menu").on("click", function(){

        $(".overlay").toggle();
        $(".modal").stop().fadeToggle();
    });
    
    //BOM 
    $(window).on("resize", function(){

        const winWidth = $(this).innerWidth(); //스크린 넓이
        console.log(winWidth)

        if(winWidth >= 768 ){
            $(".overlay").hide();
            $(".modal").hide();
        }
    });

    // js 순서 중요함.
    //init가 제일 위에 올 수 있도록 할 것.
    $branch.find(".slider").on("init", function(event, slick){

        $branch_group.eq( slick.currentSlide ).addClass("active");
        // console.log(slick.currentSlide);
    });

    $branch.find(".slider").on("beforeChange", function(event, slick, current, next){

        $branch_group.eq(next).addClass("active");
        $branch_group.eq(next).siblings().removeClass("active");
    });

    $branch.find(".slider").slick({

        arrows: false,
        fade: true,
        dots: true,
        appendDots: $branch.find(".slideNav"),
        dotsClass: "branchMenu",

        customPaging: function (slick, index) {
            return BRANCHS[index];
            // console.log(  BRANCHS[index]  );

            // return "안녕하세요"
            //리턴안에 이미지랑 뭐든 들어갈 수 있음

            //if문을 써도 된다.
            // if (index === 0){
            //     return "더현대서울"
            // }
        },
    });
});

// customPaging
// 내가 커스텀 해줄테니 값으로 함수를 넣어라
// 앞에는 slick, 뒤에는 index 라는 정보를 알려줌 