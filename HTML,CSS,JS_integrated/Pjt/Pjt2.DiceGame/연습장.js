// 랜덤수
let randNum;
// 사용자 선택 수 
let userNum;

// 화면 보기 함수
const dispDom = (msgP, inNumP, bt1P, bt2P) =>{
  document.getElementById("msg").style.display = msgP;
  document.getElementById("inNum").style.display = inNumP;
  document.getElementById("bt1").style.display = bt1P;
  document.getElementById("bt2").style.display = bt2P;
   
}



// 주사위
// function showDice(){}
 const showDice = () => {
// function 생략가능
  console.log("주사위");
  randNum = Math.floor(Math.random()*6)+1;
  console.log(`주사위 랜덤수 => ${randNum}`);
}


// dom제어
  dispDom("block","none","block","none");

 // 확인
  const showOk = () => {
    userNum = form1.num.value;
    console.log(`사용자 선택 수 확인 => ${userNum}`)
  }

//Dom생성 이후 요소 Crud해야함.
document.addEventListener("DOMContentLoaded",()=>{
// document.getElementById("msg").style.display = "none";
// document.getElementById("inNum").style.display = "none"
document.getElementById("bt2").style.display = "none"


});