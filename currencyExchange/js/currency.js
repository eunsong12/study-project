//박스 2개 만들기
//드랍다운 리스트 만들기
//환율정보 들고오기
//드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
//금액을 입력하면 환전이 된다
//드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
//숫자를 한국어로 읽는법
//반대로 밑에 박스에서 숫자를 바꿔도 위에 적용이 됨


let currencyRatio = {
    USD: {
        KRW: 1344.47,
        USD: 1,
        VND: 24670.00,
        unit: "달러",
    },
    KRW: {
        KRW: 1,
        USD: 0.00074,
        VND: 18.35,
        unit: "원",
    },
    VND: {
        KRW: 0.054,
        USD: 0.000041,
        VND: 1,
        unit: "동",
    },
};

//객체변수를 언급하는 두가지 방법
// 1. 
// console.log(currencyRatio.USD.unit);
// 2. (오늘 사용할 것)
// console.log(currencyRatio['VND']['unit'])


document
    .querySelectorAll("#from-currency-list a")
    .forEach((menu) => menu.addEventListener("click", function () {

        //버튼을 가져온다
        // console.log(document.getElementById("from-button"));


        //버튼의 값을 바꾼다
        document.getElementById("from-button").textContent = this.textContent

        //선택된  currency(통화) 값을 변수에 저장해준다


    }));