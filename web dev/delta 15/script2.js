// practice Q1 - create a statement of traffic light based on color

// let color = "red";
// let color = "yellow";
let color = "green";

if (color == "red") {
    console.log("Stop");
}else if(color == "yellow"){
    console.log("Ready to go");
}else if(color == "green"){
    console.log("go");
}


// practice Q2 - create a system to calculate popcorn prices based on size customer  asked for
size = "xl";

if (size == "xl") {
    console.log("popcorn price of xl size is : ",250);
}else if(size == "l"){
    console.log("popcorn price of l size is : ",200);
}else if(size == "m"){
    console.log("popcorn price of m size is : ",150);
}else{
    console.log("popcorn price of s size is : ",100);
}

// practice Q3 - A 'good string' is a string that start with 3 letter 'a' & has a length > 3 wap to find string is good or not
let str=null;
if ((str[0]==='a') && (str.length>3)) {
    console.log("good string");
} else {
    console.log("not a good string");
}

// practice Q4 - predict the output of following code
let num = 12;

if ((num%3===0) && ((num+1==15)||(num-1==11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}

// practice Q5 - use switch statement to print the day of the week using a no. variable 'day' with values 1 to 7 
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
