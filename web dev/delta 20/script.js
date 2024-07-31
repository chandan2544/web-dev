// 1.this keyword - refers to an object that is executing the current piece of code
const student = {
    name : "chandan",
    age : 23,
    eng : 95,
    math : 45,
    phy : 98,
    getAvg() {
    let avg = (this.eng+ this.math+this.phy)/3
    console.log(avg)
    }
 }
// here this =  student

// // 2.try & catch
// try - allow you to define a block of code to be tested for error while executing
// catch - allow you to define a block of code to be executed, if an error occur in try block

console.log("hello");
try {
    console.log(a)
} catch (error) {
    console.log("caught an error")
}
console.log("hello2")

// 3.Arrow function
const sum = () => console.log("hello");

// 4.Arrow function - implicit return
const mul = (a,b) => (
    a*b
)

// 5.setTimeout (function,timeout)
console.log("setTimeout")
setTimeout(() => {
    console.log("Geeky coder")
}, 4000);
console.log("welcome to : ")

// 6.setTimeout - it will continuely excecuted again & again after give interval time 
// console.log("setInterval")
// setInterval(() => {
//     console.log("Geeky coder")
// }, 10000);
// console.log("welcome to : ")

// let id1 = console.log("setInterval")
// setInterval(() => {
//     console.log("Geeky coder")
// }, 10000);
// console.log(id1)
// // used to stop setInterval func using their id 
// clearInterval(id1)

// let id2 = console.log("setInterval")
// setInterval(() => {
//     console.log("Geeky coder")
// }, 10000);
// console.log(id2)
// clearInterval(id2)

// 7.this with arrow func
const info = {
    name : "chandan",
    age : 23,
    prop : this, //global scope
    getName : function(){
        console.log(this);
        return  this.name;
    },
    getAge : ()=>{
        console.log(this); //parent scope -> window
        return  this.age;
    },
};

// 8.practiceQ  1.Write a arraoe func that return square of a no. 'n'
// 2.WA func that print  "hello" 5 time at interval 0f 2s