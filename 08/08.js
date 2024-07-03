document.addEventListener("DOMContentLoaded", ()=>{
  // DOM 요소 가져오기
  const txt1 = document.querySelector("#txt1");
  const btAdds = document.querySelectorAll(".btAdd");
  const btDels = document.querySelectorAll(".btDel");  
  const btChanges = document.querySelectorAll(".btChange");  

  // 배열 만들기
  let arr = [];

  // 오브젝트 만들기
  let obj = {
    "사과" : "🍎",
    "바나나" : "🍌",
    "오렌지" : "🍊",
    "수박" : "🍉",
    "오이" : "🥒",
    "당근" : "🥕",
    "가지" : "🍆",
    "브로콜리" : "🥦"
  }

  for(let bt of btAdds) { // bt변수는 이 반복문 안에서만 유효하다
    bt.addEventListener("click", ()=>{
      console.log(bt.textContent);

      // if(bt.textContent == "사과") {
      //   arr.push("🍎");
      // }
      // else if(bt.textContent == "바나나") {
      //   arr.push("🍌");
      // }
      // else if(bt.textContent == "오렌지") {
      //   arr.push("🍊");
      // }
      // else if(bt.textContent == "수박") {
      //   arr.push("🍉");
      // }
      // console.log(arr);
      // 아래는 if문을 사용하지 않고 오브젝트를 사용하는 같은 기능의 코드이다

      arr.push(obj[bt.textContent]);

      txt1.value = arr.join(" ");
    });

    // 삭제버튼
    for(let bt of btDels) {
      bt.addEventListener("click", ()=>{
        
        const btkey = bt.textContent.replace("삭제", "");
        console.log(btkey);

        //arr = arr.filter((item) => {return item != obj[btkey]}); 아래와 같은코드이다
        // 안의 자료가 하나일경우 ()와 {return }을 삭제 가능하다
        arr = arr.filter(item => item != obj[btkey]);

        txt1.value = arr.join(" ");
      });
    }

    // 변경버튼
    for(let bt of btChanges) {
      bt.addEventListener("click", ()=>{
        const w1 = bt.textContent.split("→")[0];
        const w2 = bt.textContent.split("→")[1];
        console.log(w1, w2);
        
        // 앞의 조건과 맞으면 obj[w2]가 return되고 아니면 itme이 return된다 
        //arr = arr.map((item) => {return item == obj[w1] ? obj[w2] : item}) 아래와 같다
        // 안의 자료가 하나일경우 ()와 {return }을 삭제 가능하다
        arr = arr.map(item => item == obj[w1] ? obj[w2] : item)
        
        txt1.value = arr.join(" ");
      });
    }
  }

});