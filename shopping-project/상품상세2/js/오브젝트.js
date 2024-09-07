$(function () {


    const character_name = "전사";
    const character_hp = 1000;
    const character_mp = 300;
    const character_gender = "여성"
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

    character.name;
    
    // console.log(character.name);
    // console.log(character.gender);
    // console.log(character.login);
    
    // key, 벨류
    // key, 매서드
    const box = {
        text: "안녕하세요",
        css: {
            width: "100px",
            height: "200px",
            background: "#000",
            color: "white",
            border: "10px solid orange"
        },

        clickHandler: function() {
            alert("클릭했습니다");
        }
    };
    // 변수지정 안에 중괄호를 담을 수 있음.
    // 중괄호 안에 또 중괄호를 담을 수 있음.
    // 이것들을 언급할때는 box.text , box.css.width 등 .을 이용함.
    
    $(".box").text(box.text);
    // $(".box").css({
    //     width: box.width,
    //     height: box.height,
    //     background: box.background,
    //     textColor: box.textColor,
    //     border: box.textColor
    // });
    $(".box").css(box.css);
    $(".box").css(box.css.width);
    $(".box").on("click", box.clickHandler)
    
    // 모든 중괄호 형태로 들어가는 코드는 빼와서 변수를 지정할 수 있음.

    // ******내가 이해한 것*******
    // 코드는 길고 복잡한것들은 모두 변수를 지정해 깔끔하게 만드려는 성향이 있는것 같다.
    // 어떤 긴 함수식을 작성한다면, 그것을 변수화 시켜서 여기저기에 재활용하는게 함수의 기능이다.
    
});