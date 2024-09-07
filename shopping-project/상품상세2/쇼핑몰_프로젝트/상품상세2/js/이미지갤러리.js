$(function () {
	
	
	$(".imageGallery .productMenu li").on("click", function () {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		
		const src = $(this).find("img").attr("src"); // "images/product_cut3.jpg"
		
		// $(".imageGallery .productImage img").attr("src", src);
		$(".imageGallery .productImage").find("img").attr("src", src);
	});
	
	$(".imageGallery .productMenu li:nth-child(3)").trigger("click");
	
	
	$(".fixedSidebar .popularProducts li").on("click", function () {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		
		const src = $(this).find("img").attr("src").replace("1.jpg", "") // "images/boot_cut1.jpg"
		$(".imageGallery .productMenu li:nth-child(1) img").attr("src", `${src}1.jpg` );
		$(".imageGallery .productMenu li:nth-child(2) img").attr("src", `${src}2.jpg` );
		$(".imageGallery .productMenu li:nth-child(3) img").attr("src", `${src}3.jpg` );
		
		$(".imageGallery .productMenu li:nth-child(1)").trigger("click");
	});
	
	
	// ***** 첫번째 방법 ***** //
	$(".fixedSidebar .popularProducts li").on("click", function () {
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
	
		const index = $(this).index();
	
		// 인덱스가 0번 일때
		// images/product_cut1.jpg
		// images/product_cut2.jpg
		// images/product_cut3.jpg
	
		// 인덱스가 1번 일때
		// images/proBeige_cut1.jpg
		// images/proBeige_cut2.jpg
		// images/proBeige_cut3.jpg
	
		// 인덱스가 2번 일때
		// images/boot_cut1.jpg
		// images/boot_cut2.jpg
		// images/boot_cut3.jpg
	
		let fileName = "";
	
		if ( index === 0 ) {
			fileName = "product_cut";
		} else if ( index === 1 ) {
			fileName = "proBeige_cut"
		} else if ( index === 2 ) {
			fileName = "boot_cut";
		}
	
		const src1 = `images/${fileName}1.jpg`; // images/proBeige_cut1.jpg
		const src2 = `images/${fileName}2.jpg`; // images/proBeige_cut2.jpg
		const src3 = `images/${fileName}3.jpg`; // images/proBeige_cut3.jpg
	
		$(".imageGallery .productMenu li:nth-child(1) img").attr("src", src1);
		$(".imageGallery .productMenu li:nth-child(2) img").attr("src", src2);
		$(".imageGallery .productMenu li:nth-child(3) img").attr("src", src3);
	
		$(".imageGallery .productMenu li:nth-child(1)").trigger("click");
	});
});