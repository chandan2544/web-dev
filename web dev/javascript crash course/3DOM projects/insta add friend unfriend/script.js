let addf = document.querySelector("#add")

let istatus = document.querySelector("h5")

// let removef = document.querySelector("#remove")

let flag = 0

addf.addEventListener("click",function(){
    if (flag === 0) {
    istatus.innerHTML = "Friends"
    istatus.style.color = "green"
    flag = 1
    }else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        flag = 0
    }    
})

// removef.addEventListener("click",function(){
//     istatus.innerHTML = "Stranger"
//     istatus.style.color = "red"
// })