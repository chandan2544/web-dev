console.log("heloo");
let a=5;
let b=10;
let sum=a+b;
console.log("sum : ",sum)

// 3.literal in js 

let pencilPrice = 10;
let eraserPrice = 5;
//let output = " the total price is : " + (pencilPrice + eraserPrice) +" Rupees.";
let output = `the total price is : ${pencilPrice + eraserPrice} Rupees.`;
console.log(output);

// 4.operators in js

// 1.Arithmetic operator
// 2.unary operator
// 3.Assignment operator
// 4.comparison operator (<,>,<=,>=,!=,==)
// 5.logical operator

// 5.conditional statement
// 1.if-else
// 2.nested if-else
// 3.switch

// 6.nested if

let marks=0;
if(marks>=33){
    if(marks>=80){
        console.log("O");
    }else{
        console.log("A")
    }
}else{
    console.log("better luck next time");
}

// 7. truthy & falsy - everything in js is true or false (in boolean context)
// falsy values - 0,-0,""(empty string),undefined,NaN
// truthy values - everything else 

// 8.switch statement
let day = 3; // Example value

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
    break;
}

// 9.Alert - display an alert message on the page 

alert("something is wrong ");
console.error("error");
console.warn("warning");

// 10.Prompt - display a dialog box that ask user for some intput
let username = prompt("please enter your roll no");