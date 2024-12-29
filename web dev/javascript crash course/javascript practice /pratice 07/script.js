var prgs = document.querySelector(".progress");


var count = 0;

var int = setInterval(function(){
    if(count === 100){
        clearInterval(int);
        alert("download completed");
    }
    count++;
    prgs.style.width = count + "%";
},100)