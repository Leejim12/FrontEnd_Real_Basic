//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [];
// let i =Math.floor(Math.random()*10);
// num[i] = 1;

//박스를 선택한 순서를 기록하는 배열
let selNum = [];

//박스를 선택한 개수를 기록하는 변수
let cnt = 0 ;

//폭탄이 섞였는지 체크하는 flag변수
let shuffleFlag = false;

// 메시지 출력 함수
const msgShow = (m) => {
  const msg = document.getElementById("msg");
  msg.innerHTML = `<h2>${m}</h2>`;
}

// 초기화 함수
const init = () => {
  // 메시지 지우기
  msgShow('');
  // 그림 지우기
  for (let i=1;i<=9;i++){
    document.getElementById(`box${i}`).innerHTML = '';
  }

selNum = [];
}

// 숫자박스가 선택된 경우
/*
function show(n){
  console.log(n);
}
*/

// 화살표 함수
const show = (n) => {
  if (!shuffleFlag){
    msgShow("폭탄을 섞어 주세요.");
    return;
  }

  // 폭탄이 있는 배열을 참고하여 그림 변경
  let imgSrc = null;
  if (num[n-1] == 1) {imgSrc = "boom";
    msgShow('실패');}
  else {imgSrc = 'hart';}
 
  // 현재 눌러진 숫자 박스에 그림 표시
  document.getElementById(`box${n}`).innerHTML = `<img src = ./images/${imgSrc}.png>`;
  //console.log(n);
  // if (imgSrc == "boom") shuffleFlag = false;

   //눌러진 번호판 배열에 추가
   if (!selNum.includes(n)) selNum.push(n);
  //  selNum.push(n);
  //  cnt++;
   console.log(selNum,cnt,selNum.length);

   // 성공 체크
  if (selNum.length == 8){
    let fn = [1,2,3,4,5,6,7,8,9].filter((i)=>!selNum.includes(i));
    console.log(fn[0]);
    document.getElementById(`box${n}`).innerHTML = `<img src = ./images/hart.png>`;
    msgShow('성공');
    shuffleFlag = false;
  }
  // 실패 체크
  if (imgSrc == "boom"){
    shuffleFlag = false;
    msgShow('실패');
  }
}

  // 폭탄섞기 함수
const boxShuffle = () => {
  num.sort(()=>Math.random() - 0.5);
  shuffleFlag = true;

  init(); //초기화함수 호출
  console.log(num);
}

/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", ()=>{
  for (let i = 0; i < 8 ; i ++){
    num.push(0);
  }
  num.push(1);
  console.log(num);
});


// const boxShuffle = () => {
//   let num = [0,0,0,0,0,0,0,0,0];
//   let i =Math.floor(Math.random()*10);
//   num[i] = 1;
// };

