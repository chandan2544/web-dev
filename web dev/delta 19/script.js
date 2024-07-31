// 1.functin in JS
function hello(){
    console.log("hello")
}
hello();

// 2.practiceQ1 - create the func() that print poem
// 3.practiceQ2 - create the func() to roll a dice & always display the value of dice (1 to 6)

function randomN(){
let random = Math.floor(Math.random()*6)+1;
console.log(random);
}

// 4.function with argument
function greet (name) {
    console.log("hii",name);
}
greet("chandan");

function  sum(a,b){
    console.log("sum",a+b);
}
sum(5,5);

// 5.practiceQ3 - create the func() to  calc avg of 3 No.
function avg(a,b,c){
    console.log("avg",(a+b+c)/3);
}
avg(10,56,99);

// 6.practiceQ4 - create the func() to print table.
function table (n) {
    for (let i = 1; i <= 10; i++) {
    console.log(n*i);   
    }
}
table(5);

// 7.return 
function  add(a,b){
    return a+b
}
add(5,5);

// 8.practiceQ4 - create the func() that return sum from (1 to  n)

function getSum (n) {
    let sum=0;
    for (let i = 1; i <= n; i++) {
        sum=sum+i;  
    }
    return sum
}
getSum(5);

// 9.practiceQ4 - create the func() that return concatenation all string
let str = ["hi","sdfgs","jhgjhgk"];

function concat (str) {
    let result="";
    for (let i = 0; i < str.length; i++) {
        result+=str[i];  
    }
    return result
}
concat(str)

// 10.11.12 -scope - determine the accessiblity of variable, Object, and functions from different parts
// of the code 
// 1.function - variable defined inside a func are not accessible from outside func()
// 2.block - variable defined inside a { } are not accessible from outside  { }
// 3.lexical - variable defined outside a func can be accessible inside another func defined
// // after the variable declaration 
// The opposite is not true 

function outerfunc(){
    let x=5;
    let y=9;
    function innerfunc(){
        console.log(x);
        console.log(y);
    }
    innerfunc();
}
outerfunc();

// 13.practiceQ5-output guess

// 14.function expression
// let sum = function(){}

// 15.16. higher order function - that have  one or both 
// 1.take one or multiple function as a argument
// 2.return a function

// 17.methods - action that can be performed on an object as (key:value)  