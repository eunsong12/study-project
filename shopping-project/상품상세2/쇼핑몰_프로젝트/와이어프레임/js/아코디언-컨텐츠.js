// ************* CSS 설정이 많을 경우 ************* //
// $(선택자).css({
// 	속성: 값
// });

// $(".example").css({
// 	background: "red",
// 	color: "white",
// 	width: "100px",
// 	height: "100px",
// });


// ************* THIS 없이 작업 할 경우 ************* //

// $("#accordionContent li:nth-child(1) .question").on("click", function () {
// 	$("#accordionContent li:nth-child(1) .answer").slideToggle();
//
// 	$("#accordionContent li:nth-child(2) .answer").slideUp();
// 	$("#accordionContent li:nth-child(3) .answer").slideUp();
// 	$("#accordionContent li:nth-child(4) .answer").slideUp();
// });
//
// $("#accordionContent li:nth-child(2) .question").on("click", function () {
// 	$("#accordionContent li:nth-child(2) .answer").slideToggle();
//
// 	$("#accordionContent li:nth-child(1) .answer").slideUp();
// 	$("#accordionContent li:nth-child(3) .answer").slideUp();
// 	$("#accordionContent li:nth-child(4) .answer").slideUp();
// });
//
// $("#accordionContent li:nth-child(3) .question").on("click", function () {
// 	$("#accordionContent li:nth-child(3) .answer").slideToggle();
//
// 	$("#accordionContent li:nth-child(1) .answer").slideUp();
// 	$("#accordionContent li:nth-child(2) .answer").slideUp();
// 	$("#accordionContent li:nth-child(4) .answer").slideUp();
// });
//
// $("#accordionContent li:nth-child(4) .question").on("click", function () {
// 	$("#accordionContent li:nth-child(4) .answer").slideToggle();
//
// 	$("#accordionContent li:nth-child(1) .answer").slideUp();
// 	$("#accordionContent li:nth-child(2) .answer").slideUp();
// 	$("#accordionContent li:nth-child(3) .answer").slideUp();
// });



$(function () {
	
	
	$("#accordionContent li .question").on("click", function () {
		// $("#accordionContent li .answer").stop().slideUp();
		$(this).parent().siblings().find(".answer").slideUp();
		$(this).siblings().stop().slideToggle();
		
		
		// ************* CSS 속성을 변경할 경우 addClass 사용을 추천 ************* //
		// $("#accordionContent li .question").removeClass("active");
		$(this).parent().siblings().find(".question").removeClass("active");
		$(this).toggleClass("active");
		
		
		// ************* 우측 이미지 변경 코드 ************* //
		const myIndex = $(this).parent().index(); // 0, 1, 2, 3
		
		// myIndex 가 0 : images/app-capture-01.png
		// myIndex 가 1 : images/app-capture-02.png
		// myIndex 가 2 : images/app-capture-03.png
		// myIndex 가 3 : images/app-capture-04.png
		const mySrc = `images/app-capture-0${myIndex + 1}.png`;
		
		$(".rightImage").html(`<img src=${mySrc} alt="아코디언 챕터 이미지">`);
		
		
		// let mySrc = "";
		//
		// if ( myIndex === 0 ) {
		// 	mySrc = "images/app-capture-01.png";
		// } else if ( myIndex === 1 ) {
		// 	mySrc = "images/app-capture-02.png";
		// } else if ( myIndex === 2 ) {
		// 	mySrc = "images/app-capture-03.png";
		// } else {
		// 	mySrc = "images/app-capture-04.png";
		// }
		// $(".rightImage").html(`<img src=${mySrc} alt="아코디언 챕터 이미지">`);
	});
	
	// ************* 첫번째 li question 클래스 클릭하면서 시작 ************* //
	$("#accordionContent li:nth-child(1) .question").trigger('click');
});