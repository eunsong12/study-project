$(function () {

	
	const character_name = "전사";
	const character_hp = 1000;
	const character_mp = 300;
	const character_gender = "여성";
	const character_attack = function () {};
	const character_login = true;
	
	
	// Object (객체);
	const character = {
		name: "메카트로닉",
		hp: 2000,
		mp: 1000,
		gender: "남성",
		attack: function () {},
		login: true,
	};
	// console.log( character.name );
	// console.log( character.gender );
	// console.log( character.login );
	
	
	const box = {
		text: "안녕하세요",
		design: {
			width: "100px",
			height: "200px",
			background: "#000",
			color: "white",
			border: "10px solid orange"
		},
		clickHandler: function () {
			alert("클릭했습니다");
		}
	};
	$(".box").text(  box.text  );
	$(".box").css(  box.design );
	$(".box").on("click", box.clickHandler);
	
	
});

// ********* function 코드 블럭 바깥쪽 X ********/
// const a = 100;
// $("h1").css("background" ,"red")