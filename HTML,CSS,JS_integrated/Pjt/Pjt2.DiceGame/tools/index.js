// 기존 함수 선언 방식
/* 
  function funPrint() {
   console.log(n);
   console.log("외부 자바스크립트");
   consloe.log("버튼" + 1);
  }
*/ 


// Es6+ : 화살표 함수
// const funPrint = (n) => {
//   // console.log(n);
//   // console.log("외부 자바스크립트");
//   console.log(`버튼${n}`);
// }
 
// document.addEventListener("DOMContentLoaded",()=>{
// // console.log("DOM TEST")
// console.log(document.getElementById("bt"))

//Dom이 생성된 이후의 요소를 CRUD해야한다.
// document.addEventListener("DOMContentLoaded",콜백함수);
// 콜백함수 : 인수로 들어갈 수 있는 함수 -> 외부에 있을 수도 있다.
//document.addEventListener("DOMContentLoaded",function () {});//

//변수
// console.log(x);





document.addEventListener("DOMContentLoaded",() => {


  //   console.log(document.getElementById("bt").innerHTML);

//  let bt = document.createElement("button") 
//   document.getElementById("bt").append(bt);

// });
// })
// ()는 익명함수이기 때문에.

// j쿼리 문법
// $doucument.ready(){ //document 생략가능.

  
// }

// 버튼 하나 추가
// console.log("DOM TEST")
// console.log(document.getElementById("bt"))
// const domAdd = () => {
//   const btn1 - document.createElement("button")
// }

// 요소 찾기
// 결과 HTMLCollection 
  const bts1 = document.getElementsByClassName("bt1")
  // console.log(bts1)

// 결과 HTMLCollection
  const bts2 = document.getElementsByTagName("button")
  // console.log(bts2)

// 결과 node
  const bts3 = document.querySelector(".bt1");
  // console.log(bts3);

// 결과 NodeList
  const bts4 = document.querySelectorAll(".bt1");
  // console.log(bts4);

  // console.log(bts4[0].innerHTML);
  
  // console.log(bts4[0].innerText);
  // console.log(bts4[0].innerText);
  // console.log(bts4[1].textContent);

  // 결과 노드리스트 반복으로 가져오기
  // for (let i = 0; i < bts4.length ; i++){
  //   console.log(bts4[0].innerHTML); 
  // }
  for(let i = 0; i < bts4.length;i++){
    console.log(bts4[i]);
    // bts4[i].innerHTML = `mybutton${i+1}`
    // console.log(bts4[i]. innerHTML);
  }

// 반복문 for in --> 키만 가져옴
// for(let i in bts4){
//   console.log(i)
// }

// 반복문 for each : 메소드형식 -> 중간에 종료할 수 없음.
bts4.forEach((item)=>{
  console.log(item.innerHTML);
});

bts4.forEach((item, idx)=>{
  console.log(`${idx}:{item.innerHTML}`);
});
// 파이썬의 포맷문자열과 비슷



//반복문 for of
for(let item of bts4){
  console.log(item.innerHTML);
}


for(let [idx, item] of bts4.entries()){
  console.log(`${idx}:${item.innerHTML}`);
  break;
}


});

