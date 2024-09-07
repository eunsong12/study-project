
// //함수을 선언 (함수 생성)
// function naming(){
//     alert("홍길동입니다");
// }
// //함수 호출 (함수 사용)
// naming();



            //매개변수
// function myName( name, age, hello ){
//     alert(`${hello} 제 이름은 ${name} 이고, 나이는 ${age} 입니다`);
// }
// myName("김은성", 20, "안녕하세요");
// myName("홍길동", 23, "반갑습니다");

$(function(){

    // $(".wrap .box").css("background", "red").on("click", function(){});
    // $(".wrap .box:nth-child(1)").css("background", "blue").on("click", function(){});
    // $(".wrap .box:nth-child(2)").css("background", "orange").on("click", function(){});

    // $(".wrap .box").css("background", "red");
    // $(".wrap .box").css("background", "red")
    // .eq(0).css("background", "yellow");
    // $(".wrap .box").eq(1).css("background", "lime");
    // $(".wrap .box").eq(2).css("background", "orange");


    let num = 0;
    
    //긴 수식을 또 축소화 시킴
    //function의 기능 중 하나: const로 변수주는거랑 똑같음
    function highlight( a ){

        $(".wrap .box").eq( a ).addClass("active");
        $(".wrap .box").eq( a ).siblings().removeClass("active");

    }

    $(".buttons button.next").on("click", function(){

        // if (num === 5){
        //     num = 0;
        //     // $(".wrap .box").removeClass("active");
        // };
        if(num < 4 ){
            num = num + 1;
        } else if(num === 4){
            num = 0;
        } else if(num === 0 ) {
            //처음 시작하면 무조건 0부터 시작해라
            //라는 코드 없나..? first click 0
        }
        
        
        // $(".wrap .box").eq(num).addClass("active");
        // $(".wrap .box").eq(num).siblings().removeClass("active");
        
        // 위의 수식 축소한 것.
        highlight(num);
    });

    $(".buttons button.prev").on("click", function(){
        // if(num === 0){
        //     num = 4;
        // };
        if(num > 0){
            num = num - 1;
        } else if(num === 0){
            num = 4
        }

        // $(".wrap .box").eq(num).addClass("active");
        // $(".wrap .box").eq(num).siblings().removeClass("active");
        highlight(num);
    });

    
    
    
});