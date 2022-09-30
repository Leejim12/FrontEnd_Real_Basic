  let radios = 0;
  
    document.querySelector(".No1")
  
  function getDice(event) {
    var radios = document.getElementsByName('DiceVaule');

    for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
    // do whatever you want with the checked radio

      // only one radio can be logically checked, don't check the rest
      return radios[i].value;

      }
    }
  };
  // }
  const reset = () => {
    window.location.reload()
  };
  
  const show = () => {
 
    // let OnOff = document.getElementsByClassName('DiceV');
    // OnOff.display = 'inline-block';
  
    
    let tag = ""
    //1. 태그 만들기
    // for(let i=1; i<=6;i++){ 
    //   //템플릿문자열
    // tag = tag + `<div class=divmsg><img src="tools/image/${i}.png"></img></div>`
    // // `<div class="divMsg">${i}</div>`
    //    console.log(i)
    // }
    
    let i = Math.floor(Math.random() * 6 + 1);
    tag = tag + `<div class=divmsg><img src="tools/image/${i}.png" ></img id="msgImg"></div>`
    // `<div class="divMsg">${i}</div>`
       console.log(i)

    //2. DOM에서 태그 넣을 요소 선택
    const m = document.querySelector('#msg')
    if(getDice() == i){
      tag = tag + `<div class=divmsg><img src="tools/image/O.png" ></img id="msgImg"></div>`
    }else{
      tag = tag + `<div class=divmsg><img src="tools/image/X.png" ></img id="msgImg"></div>`
    }
    console.log()
    //3. 선택된 요소의 HTML 변경
    m.innerHTML = tag
    
    

    // m.style.backgroundColor="red";
    //스타일 변경 console.log(m.getComputedStyle());
  
    //4. 동적 요소도 스타일 변경 가능.
    // let msgImg = document.querySelector('#msgImg')
    // msgImg.style.maxWidth="100px";
    // msgImg.style.maxheight="100px";

    document.querySelector(".bt1").style.display = "none";
    document.querySelector(".bt2").style.display = "inline-block";
  }

/////////////////////////////라디오 버튼////////////
// {/* <input type="radio" name="DiceNo" id="radio1" value="green"><label for="radio1">그린</label>
// <input type="radio" name="colors" id="radio2" value="blue" checked><label for="radio2">블루</label>
// <input type="radio" name="colors" id="radio3" value="red"><label for="radio3">레드</label>
// <input type="radio" name="colors" id="radio4" value="black"><label for="radio4">블랙</label> */}


// 콘솔태그 생성 → 


// Dom생성되면
/* document.addEventListener("DOMContentLoaded",()=>{
const formSection = document.querySelector('#formSection');
formSection.style.dispaly = none
})
 */
