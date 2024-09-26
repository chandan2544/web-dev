// DOM learn what matters

//1. DOM - document object model
//2. 4 pillar of DOM
// i.selection of an Element
// ii.changing HTML
// iii.changing CSS
// iv.event listner

//Selection
var a = document.querySelector("h1")
console.log(a)

//changing html
a.innerHTML = "hehehe"
a.textContent = "jhgjhfjf"

//changing css
a.style.color="yellow"
a.style.backgroundColor="black"

//event listener  
a.addEventListener("click",function(){
    a.innerHTML="DOM learning"
    a.style.color="purple"
    a.style.border="2px solid black"
})


// bulb code logic

 var bulb = document.querySelector(".bulb")
 var btn = document.querySelector("button")

var flag = 0

 btn.addEventListener("click",function(){
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow"
        console.log("bulb on");    
        flag = 1   
    }else{
        bulb.style.backgroundColor = "transparent"
        console.log("bulb off");    
        flag = 0
    }
 })

var h = document.querySelectorAll("h1")
h.forEach(function(e){
    console.log(e)
})

document.getElementById("container")
document.getElementsByClassName("box")