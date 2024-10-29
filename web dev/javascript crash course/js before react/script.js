// immutablity and mutablity
// array and Object destructuring import and export
// map filter arrow func spread operator 

var state = [1,2,3,4,5];
var copy = [...state]; // spread operator 
// var copy = state;
copy.pop();

state = copy

// destructuring 1
var obj = {name : "harsh",age : 25}
const {age} = obj;

// destructuring 2
var obj = {
    name : "string",
    social : {
        facebook : {
            first : "jaajj",
            sec : "klsfghkjlhf"
        },
    },
};

const {sec}=obj.social.facebook; 

// destructuring 3
var arr = [12,function () {},15];

var [first,,last]=arr;

// map and filter - dono hi array pr chalte h or dono ka kaam h 
// array pr kuch perform krna and ek naya array return krna

var arr1 = [1,2,3,4,5];

// map - har Element pr kuch karo and naya array m rakho 
// foreach k ander ata h function and function k ander ata h value

const ans = arr1.map(val=>val*2) 

//Ques - ek array h sare no. jo ki five se bade ho unme 5 jod dena
// or baaki no. ko waise return karo new array m

var state = [1,2,3,4,5,6,7,8,9,12];

const result = state.map(data=>data>5 ? data+5 : data);

// filter - har Element pr kuch karo and naya array m rakho but array ka size ka change
// km kar deta h based on conditions (true/false)

var state2 = [1,2,3,4,5,6,7,8,9,12];

const result2 = state2.filter(data=>data>5);

// filter eg 2

var items = [
    {product: "iphone",price:200000},
    {product: "ipad",price:70000},
    {product: "airpod",price:50000},
    {product: "munch",price:5},
];

const output = items.filter(val=>val.price<20 );

