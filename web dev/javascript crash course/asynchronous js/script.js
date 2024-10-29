// 1.settimeout

// setTimeout(function() {
//     console.log("hello");
// },2000)

//2.settimeinterval

// setInterval(() => {
//     console.log("hello");
// }, 2000); 

// to stop settimeinterval 

// var a = setInterval(() => {
//     console.log("hello");
// }, 2000); 

// clearInterval(a); // do this

// 3.fetch used with then 

// fetch(`https://randomuser.me/api/`)
// .then(raw => raw.json())
// .then(readable => console.log(readable))

//4.axios 
// axios.get(`https://randomuser.me/api/`)
// .then(res => console.log(res));

//5.promises - obj represent the eventual completion (or failure) of async operation & 
// its resulting value
// Promise - has 3 state - pending,fullfiled,reject

// const res = new Promise(function(resolve,reject){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result=>{
//         if (result.result[0].gender === "male") resolve();
//         else reject();
//     })
// });
// console.log(res);

//6.callback function - function that is passed as an argument to another function 


//7.async / await 
// async - create an async function that return a promise
// await - pause execution of its surrounding async function until promise is settled
async function abcd() {
    let a =await fetch(`https://randomuser.me/api/`)
    a=await a.json()
    console.log(a)
}
abcd();

//event loop

//generator 