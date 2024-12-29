var inp = document.querySelector("input");
var add = document.querySelector(".add");
var remove = document.querySelector(".remove");
var ul = document.querySelector("ul");

var li;

add.addEventListener("click",function(){

    console.log(inp.value);

    if (inp.value.trim() === '') {}
    else{
        li=document.createElement("li");
        li.textContent=inp.value;
        ul.appendChild(li);

        inp.value = '';
    }
})

remove.addEventListener("click",function(){
    if (li) {
        ul.removeChild(li);
        li = null;
    }else{
        alert("please select an item to remove")
    }
})