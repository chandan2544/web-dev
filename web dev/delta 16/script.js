// 1.String methods
// methods - action that can be performed on objects

// format
// StringName.method()

// 2.str.trim() - trim whitespace from both ends of string & return a new onemptied.

// eg - let msg = "   hello   ";

let pswd = prompt("set your password");
let newpass = password.trim();
console.log(newpass); //hello

// 3.string are immutable in js
// no change can be made to strings
// whenever we do try to make a change,a new string is created and old one remains same 

console.log(pswd); // "     hello      "    

// 4.str.toUpperCase()
// str.toLowerCase()
console.log(newpass.toLowerCase);
console.log(newpass.toUpperCase);

// 5.string method with arguments
// Argument - is a some value that we pass to the method

// format
// stringName.method(args)

// indexOf() - returns the 1st index of occurrence of some value in string. or give -1 if not found
let str = "ILoveCoding"

str.indexOf("love")  //1
str.indexOf("J")  //- 1
str.indexOf("o")  //2(only 1 index)

//6.method chaining - using one method after another. order of execution will be left to right
// str.toUpperCase().trim()

pswd.toUpperCase().trim()
console.log(pswd);

// 7.slice() - return a part of the original string as a new string.

str.slice(5)   //"Coding" 
str.slice(1,4)   //"Love"
// str.slice(-num) = str.slice(length-num)  
str.slice(-2) //9

// 8.replace - searches a value in the  string & returns a new string with the  value replaced

str.slice("Love","do")  // IdoCoding
str.slice("o","x")  // ILxveCoding

// repeat - returns a string with the Node. of copies of a string

let str1 = "Mango";

str1.repeat(3)  //'MangoMangoMango'

// 9.practiceQ1

//10.array DS - linear collection of item
let arr = ["aman","chandan","gourav"];

// 11.visualization of Array
arr.length  // 3
typeof arr   //'object'

// 12.creating array
let info = ["adam",25,2.5]   //mixed array
let empArr = []  //empty array
arr[0].length // 4

// 13.arrays are mutable
let fruits = ["mango","apple","lichie"]
fruits[0] = "banana"

console.log(fruits); //"banana","apple","lichie"

// 14.arrays methods
//  -- push = add to end
//  -- pop = delete from end & returns it
//  -- unshift = add to start 
//  -- shift = delete from start & returns it

let cars = ["audi","bmw","xuv","maruti"]
cars.push("toyota")
console.log(cars);  //  "audi","bmw","xuv","maruti","toyota"
cars.pop();
console.log(cars);  //  "audi","bmw","xuv","maruti"
cars.unshift("toyota")
console.log(cars)  //  "toyota","audi","bmw","xuv","maruti"
cars.shift();
console.log(cars);  //  "audi","bmw","xuv","maruti"


// 15.practiceQ2

// 16.array methods
// indexOf - return index of something
cars.indexOf("bmw") //1
cars.indexOf("dfjghsjhg")  // -1

// include - search for values
cars.includes("ferrari")  //false
cars.includes("xuv")  //true

// 17.array methods
// concat - merge 2 Array
// reverse - reverse an array

fruits.concat(cars); // "banana","apple","lichie","audi","bmw","xuv","maruti"

cars.reverse(); // "maruti","xuv","bmw","audi"

// 18.array methods
// slice() - copies a portion of an Array or it does notchange actual array

cars.slice(2); // "xuv","maruti"
cars.slice(1,3); // "bmw","xuv","maruti"
cars.slice(-1); // "audi","bmw","xuv"

// 19.array methods
// splice() - remove / replace / add elements in place  or it change actual array
// splice(start,deleteCount, item0..itemN)

let colors = ["red","yellow","blue","orange","pink","white"]

colors.splice(4); //  "pink","white"
console.log(colors); // "red","yellow","blue","orange"

colors.splice(0,1); //  "red"
console.log(colors); // "yellow","blue","orange"

colors.splice(0,1,"blue","grey"); //  "yellow"
console.log(colors); // "blue","grey","blue","orange"

// 20.array methods
// sort - sort an array
let num = [5,3,4,1,9,70,99,2,4]
num.sort();
console.log(num); //[1, 2, 3, 4, 4, 5, 70, 9, 99]

// 21.practice Q3

// 22.array reference - address in memory
[1] == [1]  //false
let Arr = ['a','b'];
letArrCopy = Arr;

Arr == ArrCopy  //true

// 23.constant Array - does not store value means value are not constant but refrence address are const
 
//24.nested array - arrays of arrays
let nestNo = [[1,2],[3,4],[5,6]]

// 25.practiceQ4