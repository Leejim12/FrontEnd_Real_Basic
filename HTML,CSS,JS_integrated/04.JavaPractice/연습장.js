
  const show = () => {
    let tag = ""
    
    const i = Math.floor(Math.random() * 6 + 1);
    tag = tag + `<div class=divmsg><img src="tools/image/${i}.png" ></img id="msgImg"></div>`

       console.log(i)

       
    const m = document.querySelector('#msg')
    
    m.innerHTML = tag
    
    // let msgImg = document.querySelector('#msgImg')
    // msgImg.style.maxWidth="100px";
    // msgImg.style.maxheight="100px";



  }

/////////////////////////////라디오 버튼////////////
// {/* <input type="radio" name="DiceNo" id="radio1" value="green"><label for="radio1">그린</label>
// <input type="radio" name="colors" id="radio2" value="blue" checked><label for="radio2">블루</label>
// <input type="radio" name="colors" id="radio3" value="red"><label for="radio3">레드</label>
// <input type="radio" name="colors" id="radio4" value="black"><label for="radio4">블랙</label> */}







