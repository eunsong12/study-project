$(function () {
	
	
	const setting1 = {
		breakpoint: 1024, // 해상도
		settings: {
			slidesToShow: 2,
			fade: false
		}
	};
	
	const setting2 = {
		breakpoint: 767,
		settings: {
			slidesToShow: 3,
		}
	}
	
	
	$(".slider").slick({
		arrows: true,
		prevArrow: $(".prevArrow"),
		nextArrow: $(".nextArrow"),
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		fade: true,
		dots: true,
		appendDots: $(".sliderNav"),
		dotsClass: "myDots",
		// 반응형 일때 적용되는 코드
		responsive: [
			{
				breakpoint: 1024, // 해상도 1024 이하
				settings: {
					slidesToShow: 2,
					fade: false
				}
			},
			{
				breakpoint: 767, // 해상도 767 이하
				settings: {
					slidesToShow: 3,
					fade: false
				}
			}
		],
	});
	
});
