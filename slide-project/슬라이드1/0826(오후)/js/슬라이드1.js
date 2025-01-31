$(function () {
	
	// 슬라이딩할 요소를 묶고 있는 wrapper 요소
	$(".slider").slick({
		slidesToShow: 3, // 보여질 슬라이드 갯수
		slidesToScroll: 1, // 넘겨질 슬라이드 갯수
		autoplay: false, // 자동 슬라이드 여부 true / false
		autoplaySpeed: 1000, // 자동 슬라이드 진행 속도
		speed: 900, // 슬라이드 이동 속도
		
		dots: true, // 네비게이션, 인디케이트 사용 여부
		appendDots: $(".sliderNav"),
		dotsClass: "myCustomItem",
		
		arrows: true, // 좌측 우측 이동 버튼 사용 여부
		prevArrow: $(".prevArrow"),
		nextArrow: $(".nextArrow"),
		
		fade: false, // slidesToShow (보여질 슬라이드 갯수 1장일 때만 가능)
		swipe: true, // swipe 모드 (모바일 환경에서 필수)
		initialSlide: 2, // 초기 슬라이드 시작 순서
		infinite: false, // 슬라이드 무한 반복 사용 여부 (기본값 true)
	});
	
});