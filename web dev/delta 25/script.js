// 1.call stack
function  hello(){
    console.log("hello")
}

function demo(){
    hello()
}
demo();

// 2.visualization of call stack
// 3.breakpoint -  check error as per line
// // 4.js is single threaded  

// callback function
setTimeout(() => {
    console.log("geeky coder")
}, 2000);
//browser execute setTimeoutfunc therefore it behave as multithread 
console.log("heello..")  

// 5.callback hell = callback nesting 
let h1 = document.querySelector("h1")

function changeColor(color,delay,nextColor){
    setTimeout(()=>{
        h1.style.color = color;
        nextColor();
    },delay);
}

changeColor("red",1000,()=>{
    changeColor("purple",1000,()=>{
        changeColor("green",1000);
    });
});

// 7.Promise - obj represent the eventual completion (or failure) of async operation & 
// its resulting value

function saveToDb(data){
    return new Promise((success,failure)=>{
        let internetSpeed = Math.floor(Math.random()*10)+1
    if (internetSpeed > 4) {
        success("success : data was saved");
    } else {
        failure("failure : weak connection");
    }
    }); 
}

saveToDb("sdgf")
// Promise - has 3 state - pending,fullfiled,reject

//8. then() & catch()
 saveToDb("jkdfghjks")
.then(()=>{
    console.log("promise resolved");
    console.log(Promise)
})
.catch(()=>{
    console.log("promise rejected");
    console.log(Promise)
});

//9.promise chaining

saveToDb("jkdfghjks")
.then((result)=>{
    console.log("data1 saved. promise resolved");
    console.log(result)
    return saveToDb("helloworld")
})
.then((result)=>{
    console.log("data2 saved");
    console.log(result)
})
.catch((error)=>{
    console.log("promise rejected");
    console.log(errror)
});