var con = document.querySelector("#container")

var lovei = document.querySelector("i")

con.addEventListener("dblclick",function(){
   lovei.style.transform = "translate(-50%,-50%) scale(1)";
   lovei.style.opacity = 0.8;
   lovei.style.color = "red";

   setTimeout(function(){
    lovei.style.opacity = 0;
   },1000);
   setTimeout(function(){
    lovei.style.transform = "translate(-50%,-50%) scale(0)";
   },2000);
});

