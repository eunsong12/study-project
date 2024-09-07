$(function () {
	// const BRANCHES_DATA = [ "더현대서울", "서울역점", "압구정점", "무역센터점", "목동점", "천호점" ];
	// BRANCHES_DATA[0]; // 더현대서울
	// BRANCHES_DATA[1]; // 서울역점
	// BRANCHES_DATA[2]; // 압구정점
	// BRANCHES_DATA[3]; // 더현대서울
	// BRANCHES_DATA[4]; // 더현대서울
	// BRANCHES_DATA[5]; // 더현대서울
	
	// $(window).on("scroll", function () {
	// 	const scrollTop = $(this).scrollTop();
	// 	console.log(scrollTop);
	// });
	
	
	// BOM : Browser Object Model (window 계통)
	$(window).on("resize", function () {
		const winWidth = $(this).innerWidth(); // 스크린 넓이
		if (winWidth >= 768) {
			$(".overlay").hide()
			$(".modal").hide();
		}
	});
	
	// DOM : Document Object Model
	$(".menu").on("click", function () {
		$(".overlay").toggle();
		$(".modal").stop().fadeToggle();
	});
	
	
	const $branch = $("section.branch");
	const $branch_group = $branch.find(".group");
	
	const BRANCHES_DATA = [ "더현대서울", "서울역점", "압구정점", "무역센터점", "목동점", "천호점" ];
	
	$branch.find(".slider").on("init", function (event, slick) {
		$branch_group.eq( slick.currentSlide ).addClass("active");
	});
	
	$branch.find(".slider").on("beforeChange", function (event, slick, current, next) {
		$branch_group.eq( next ).addClass("active");
		$branch_group.eq( next ).siblings().removeClass("active");
	});
	
	$branch.find(".slider").slick({
		arrows: false,
		fade: true,
		dots: true,
		appendDots: $branch.find(".sliderNav"),
		dotsClass: "branchMenu",
		
		customPaging: function (slick, index) { // index : 0, 1, 2, 3, 4, 5
			// console.log( BRANCHES_DATA[0] ); 더현대서울
			// console.log( BRANCHES_DATA[1] ); 서울역점
			// console.log( BRANCHES_DATA[2] ); 압구정점
			// console.log( BRANCHES_DATA[3] ); 무역센터점
			// console.log( BRANCHES_DATA[4] ); 목동점
			// console.log( BRANCHES_DATA[5] ); 천호점
			
			return BRANCHES_DATA[ index ];
		}
	});
});