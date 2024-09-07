
$(function () {
	
	let count = 0;
	$(".imageGallery .productMenu li").on("click", function () {
		//**** 이미지 변경 코드 ****//
		// const src = $(this).find("img").attr("src");
		// $(".imageGallery .productImage img").attr("src", src);
		
		const index = $(this).index(); // 0, 1 ,2
		count = index;
		
		const src = `images/black${index + 1}.jpg`;
		$(".imageGallery .productImage img").attr("src", src);
		
		//**** ACTIVE 클래스 추가,삭제 ****//
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	});
	$(".imageGallery .productMenu li:nth-child(1)").trigger("click");
	
	$(".imageGallery button.up").on("click", function () {
		$(".imageGallery .productMenu li").eq( count - 1 ).trigger("click");
	});
	
	$(".imageGallery button.down").on("click", function () {
		if ( count === 5 ) {
			count = -1;
		}
		$(".imageGallery .productMenu li").eq( count + 1 ).trigger("click");
	});
});