

// 함수를 선언 ( 함수 생성 )
// function naming() {
// 	alert("홍길입니다");
// }
// 함수 호출 ( 함수 사용 )
// naming();


             // 매개변수
// function myName( name, age, hello ) {
// 	alert(  `${hello}! 제 이름은 ${name} 이고, 나이는 ${age}세 입니다`  );
// }
// myName(  "김종범",  30,  "안녕하세요" );
// myName( "르브론제임스", 40, "반갑습니다" );



$(function () {
	
	// $(".wrap .box").css("background", "red");
	// $(".wrap .box:nth-child(1)").css("background", "blue");
	// $(".wrap .box:nth-child(2)").css("background", "orange");
	
	
	// $(".wrap .box").eq(0).css("background", "yellow");
	// $(".wrap .box").eq(1).css("background", "lime");
	// $(".wrap .box").eq(2).css("background", "orange");
	
	
	// $(".wrap .box").on("click", function () {
	// 	$(this).addClass("active");
	// });
	
	
	// num = num + 1; // 1
	// num = num + 1; // 2
	// num = num + 1; // 3
	// num = num + 1; // 4
	
	let num = 0;
	function highlight( abc ) {
		$("h1").text( abc );
		$(".wrap .box").eq( abc ).addClass("active");
		$(".wrap .box").eq( abc ).siblings().removeClass("active")
	}
	$(".buttons button.prev").on("click", function () {
		if (num > 0) {
			num = num - 1;
		} else if ( num === 0 ) {
			num = 4;
		}
		highlight( num );
	});
	$(".buttons button.next").on("click", function () {
		if (num < 4) {
			num = num + 1; // 1
		} else if ( num === 4 ) {
			num = 0;
		}
		highlight( num );
	});
	
});

















