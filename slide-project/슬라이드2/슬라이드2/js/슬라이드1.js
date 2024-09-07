$(function () {
	
	const $slider = $(".slider");
	
	$slider.slick({
		arrows: true,
		prevArrow: $(".prevArrow"),
		nextArrow: $(".nextArrow"),
		
		dots: true,
		appendDots: $(".dotsArea"),
		dotsClass: "myNav",
		
		centerMode: true,
		variableWidth: true, // 가변 넓이
	});
	
	/*  slick-active 첫페이지 수정 코드 */
	$slider.on("beforeChange", function (event, slick, current, next) {
		if (current !== next) {
			$(".slick-current + .slick-cloned").each(function (index, element) {
				const item = $(element);
				setTimeout(function() {
					item.addClass("slick-current");
					item.addClass("slick-active");
				});
			});
		}
	});
	
});





