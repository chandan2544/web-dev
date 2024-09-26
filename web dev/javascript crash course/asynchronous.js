// asychronous js tutorial

// topics :-
// 1.sync and async kya hota h 

// sync - mtlb ek k baad dusra hoga, jb tk ek cmd complete na ho, dusra shuru nhi hoga
// async - mtlb saare kaam ek saath shuru krdo jiska ans pehle aajaye uska ans dedena

// kaise pta chalta h ki hum sync code likh rhe ya async

// these are used in asynchronous code :- 
setInterval
setTimeout
promises
fetch
axious
XMLHttpRequest

// rest of this all are sync coding 

// 2.async js h kya

//kai baar apke final code dependent hota h kisi or k server pr is case me nhi pta hota ki ans
//uske server se kb laut kr aega to hum kya nhi kr skte is writing sync code, ise niptaane k liye hum log async code
//likh dete h taaki blocking na ho & jb v ans aaye humara answer ke respect me chalne wala code chal jaye 

// async code ka main motive hota h ki un cases mein jinmein hume pta nhi code ka ans kitni der me  
// aaega to jb v answer aa jaye uske answer k respect m koi particular code chala dena

// console.log("hey1");
// setTimeout(function(){},2000)
// console.log("hey2");

console.log("hey1");
setTimeout(function(){       //callback func - ye sirf tb chalta h jb async code completion ho jata h 
    console.log("hey2");
},2000);

// 3.js is not asynchronous
// jo v main stack pr hota h vo output show krta h & jo v side stack pr hota h vo behind the scene processing kr skta h 
// or jb uski processing complete ho use main stack m la kr chalaya ja skta h  

// event loop - is basically middle layer between main stack & side stack who is responsible for interaction b/w them

console.log("hey1");
console.log("hey2");
setTimeout(function(){       
    console.log("hey3");
},0);
console.log("hey4");

//callbacks me request bhejne k liye
fetch
axios
Promise
setInterval
setTimeout

//callbacks me request receive or output k liye
// then catch
// callbacks
// async await

// then catch eg
// user will ask no. b/w 0-9 if no. below 5 rersolve it if not reject
var ans = new promises((res,rej)=>{
    var n = Math.floor(Math.random()*10);
    if(n<5){
        return res;
    }else{
        return rej;
    }
})

ans.then(function(){
    console.log("below");
})
.catch(function(){
    console.log("above");
})


//  withot async await
// function abcd (){
//     fetch(`dfsdsf`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//        console.log(data)
//     });
// }

//async await
async function abcd(){
     let raw = await fetch(`sdfsdf`)
     let ans = await raw.json();
     console.log(ans);
}

// concurrency - js  me sync code and async code ek saath process ho rha tha ye hai concurrency
// parallelism - focus jyada krta h different processors and unke cores pr kaam ko chalaane pr 
// throttling - kisi code ko control krna no. of executions