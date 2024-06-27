// document.addEventListener("DOMContentLoaded", function() {
//     console.log("안녕!!")
// });

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("화살표 함수!!")

    //변수선언
    // const msg = document.getElementById("msg") 
    const msg = document.querySelector("#msg")
    const bt = document.querySelector("button") 

    //msg.innerHTML = "<h1>안녕</h1>" (h1을 변역하여 글자 크기 수정)
    //msg.textContent = "<h1>안녕</h1>" (내용 모두 출력)

    bt.addEventListener("click", ()=>{
        msg.innerHTML = "<h1>안녕</h1>"
    })
});