var h1 = document.querySelector("h1");
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");

var interval;
start.addEventListener("click",function(){
    var count = 0;
   
    interval=setInterval(function(){
        h1.textContent=count;
        count++;
    },500);
})

stop.addEventListener("click",function(){
    clearInterval(interval);
})