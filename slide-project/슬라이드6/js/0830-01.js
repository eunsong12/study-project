$(function(){

    const $gallery = $("section.gallery")
    
    $gallery.find(".mainSlider").slick({
        arrows: false,
        fade: true,
        // asNavFor: ".thumbnailArea",
    });
    

    $gallery.find(".thumbnailSlider").slick({
        slidesToShow: 5,
        arrows: true,
        centerMode: true,
        prevArrow: $gallery.find("button.prevArrow"),
        nextArrow: $gallery.find("button.nextArrow"),

        asNavFor: ".mainSlider",
    });

    $gallery.find(".mainSlider").on("beforeChange", function(event, slick, current, next){

        // console.log(slick.currentSlide);
        
        const nextTonumber = next + 1

        $gallery.find(".caption").text(`kitten ${nextTonumber}`)

        //next를 써야 하는건 알겠는데 아직 next 성질이 이해가 안간다.
        //그리고 왜 current를 쓰면 에러가 나는지 이유를 모르겠다.
    });
});



// $(function () {
	
	
// 	const $gallery = $("section.gallery");
	
	
// 	$gallery.find(".mainSlider").on("beforeChange", function (event, slick, current, next) {
		
// 		const captionText = `Kitten ${next + 1}`;
		
// 		$gallery.find(".caption").text(captionText);
// 	})
	
// 	$gallery.find(".mainSlider").slick({
// 		arrows: false,
//         fade: true,
// 	});
	
// 	$gallery.find(".thumbnailSlider").slick({
// 		slidesToShow: 5,
// 		arrows: true,
// 		centerMode: true,
// 		prevArrow: $gallery.find("button.prevArrow"),
// 		nextArrow: $gallery.find("button.nextArrow"),
		
// 		asNavFor: ".mainSlider"
// 	});
	
	
	
// });