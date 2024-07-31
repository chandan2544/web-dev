///1.array methods
// forEach
// Map
// filter
// some
// every
// reduce

// 1.forEach -  arr.forEach(some function definition or name);
let arr = [1,2,3,4,5];

function print(el) {
    console.log(el);
}

arr.forEach(print)

//or

arr.forEach(function(el){
    console.log(el);
})

// 2.map - let newArr=arr.map(some function definition or name);
let newArr=arr.map(function (el) {
 return el*2
});

// 3.every - return true if every element ofarray gives true for some func else return false
// syntax - arr.every (some function definition or name);

[2,4,6,8].every((el)=>el%2==0);  //true

[2,4,6,1].every((el)=>el%2==0);  //false

// 4.reduce - reduce the array to a single value
[1,2,3,4].reduce((res,el)=>(res+el));

//5.reduce - finding max in an array 
let nums =[2,3,4,5,3,4,7,8,1,2];

let result = nums.reduce((max,el)=>{
    if(el>max){
        return el;
    }else{
        return max;  
    }
});

//6.practice Q - check all no.in arr arr multiple of 10 or not
//practice Q - create a function to find the min no. in an array

// 7.default parameters - giving a default value to the arguments
function sum(a,b = 3){
    return a+b
}
sum(5);

// 8.spread - expands an iterable into multiple values
let spread = [1,2,3,4,5];
Math.min(...spread);
console.log(...spread);
let str = "chandan"
console.log(...str);

//9. spread with object literal
let data = {
    email:"chandank2456@gmail",
    password:"dsfds"
}
let dataCopy = { ...data ,id:123};

// 10.rest - allows a func to take an indefinite Node. of args & bundle them in an Arr
function add(...args){
    return args.reduce((res,el)=> res+el);
}
add(1,2,3,5,6,55,44,88)

//11.destructuring - storing value of array into multiple varibles
let  names = ["tony","bruce","steve","peter"];
let [winner,runnerup] = names;
console.log(winner,runnerup);