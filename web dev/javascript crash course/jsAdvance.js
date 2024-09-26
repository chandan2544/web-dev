// difference between (var,let,const)
// js has 2 version 
// 1.es5 - var 

// var are function scoped - var apne parent function me kahi v use ho skta h
// var add itself to the window object

function abcd() {
    for (let i = 1; i < 12; i++) {
        console.log(i);
    }
    console.log(i);
}

// 2.es6 - let, const

// let const are brace scoped
// let const does not adds itself to window object

//3.window object
//note : js language mkuch chije nhi h jo hum use kr skte h or wo chije hume js se nhi bulki
// browser se milti h, aise saare features jo js ka part nhi h but fir v hum use kr skte h 
// unhe hum dhund skte h ek particular object me jiska naam h window  
// eg - alert,prompt,console

// 4.browser context Api inside this
// 1.window
// 2.stack
// 3.heap memory

// 5.execution context  - mtlb jb v hum func chalaenge func ek khudka imaginary container bna lega 
// jisme 3 chije hogi & isi imaginary container ko execution context kehte h

// 1.variable
// 2.function inside that function
// 3.lexical environment of that function - tells us about what our function can or can't use or acess 

// 6.lexical environment 

// how to copy reference value
var a = [1,2,3,4,5,6,7,8,9];

//In JavaScript, the spread operator is represented by three dots ...
//It allows you to expand iterables, like arrays or strings, into individual elements.

var b = [...a];

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];

const combinedNumbers = [...numbers1, ...numbers2]; // [1, 2, 3, 4, 5, 6]

// it also can be used with Object
var obj = {name: "harsh"};
var copyObj = {...obj};

// 7. Truthy or falsy (everything in js is  divided into things) 
// falsy - 0, false, undefined, null, NaN, document.all
// truthy - everything else 

// 8.if-else
// 9.switch case

// 10.foreach forin do-while 

//foreach - loop sirf array p chalta h mtlb ki jb v tumhare paas 1 array ho, tb use me foreach ata h

 // foreach kabhi v by default apke array me change nhi krta vo aapko change krke deta h
 // array ki temporary copy pr jiske vajah  se array humesa same rehta h

var fe=[1,2,3,4,45,56];

fe.forEach(function(val){ 
    console.log(val+2)
 })

 // forin - loop object pr loop krne k liye hota h
 var obj = {
    name:"harsh",
    age:24,
    city:"bhopal"
 } 

 for(var key in obj){
    console.log(obj[key])
 }

//  11.callback func 
setTimeout(function(){
    console.log("2 sec baad chalega");
},2000); // it take time in ms

// 12.first class func 
// js m ek concept h jiska mtlab hota h ki ap func ko  use kr skte ho as a value

var a = function(){};

// 13.how the arrays made behind the scenes
var arr=[1,2,3,4];

// js convert it behind the scene
arr = {
    0 : 1,
    1 : 2,
    2 : 3,
    3 : 4
}

//14. how to check its Array or not
Array.isArray([])
Array.isArray({})

// 15.how to delete object prop
var a = {
    name : "harsh",
    age : 24
}

delete a.age;