//2.Dom events - are signals that something has occurred (user input /action)
// onclick - when element is clicked
// onmouseenter - whwn mouse enters an element

let btn = document.querySelector("button");

// function sayHello(){
//     alert("hello")
// }

// btn.onclick= sayHello;

//3 eventListeners
btn.addEventListener("click",function(){
    alert("hello")
});

//4.activity - must do

// 8.keyboard event
let inp = document.querySelector("input")

inp.addEventListener("keydown ",function(event){
    console.log("code = ",event.code);
    if (event.code == "ArrowUp") {
        console.log("character move forward")
    }else if(event.code == "ArrowDown") {
        console.log("character move backward")
    }else if(event.code == "ArrowLeft") {
        console.log("character move Left")
    }else if(event.code == "ArrowRight") {
        console.log("character move Right")
    }
});

// change event - occurs when value of an element has been changed (only work on
// <input>,<textarea> and <select> elements)

//input event -fire when the value of an <input>,<select>,or <textarea> element has been changed