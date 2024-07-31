//1.object literals - used to  store keyed collection & complex entities

// property => (key,value) pair
// object are  a collection of properties

// 2.creating object literals
let delhi = {
    lattitude : "28.7041 N",
    longitude : "77.1025 E"
};

const student = {
    name : "chandan",
    age : 22,
    marks : 7.4,
    city : "faridabad"
};

// 3.Thread / Twitter Post
// creating an object literal for the properties of thread / twitter post which include -

 let post = {
username : "@chandan123",
content : "coding",
likes : 133,
repost : 56, 
tags : 56
}

// 4.get value
student.name
student["age"]

post["content"]
post.username

// 5.get value - js automatically convert object key to string
// even if made the number as a KeyboardEvent, the number will be converted to string 

const obj = {
    1 : "a",
    2 : "b",
    true : "c",
    null : "d",
    undefined : "e",
}

// 6.add / update value
// 1.change city to "mumbai" 
student.city = "mumbai";

// 7. object of objects - storing info of multiple student
const classInfo = {
    aman : {
        grade: "A",
        city : "fbd"
    },
    chandan : {
        grade: "A+",
        city : "fbd"
    }
} ;

classInfo.aman;

// 8.array of object  - storing info of multiple students

const info = [
    {
        name : "chandan",
        age : 22,
        marks : 7.4,
        city : "faridabad"
    },
    {
        name : "aman",
        age : 22,
        marks : 7,
        city : "faridabad"
    }
];

info[0];
info[1];

// 9.math  object
Math.PI;
Math.E;

Math.abs(12)  //12
Math.abs(-12)  //12

Math.pow(2,3)  //8
Math.floor(3.9)  // nearest smallest no. //3
Math.ceil(3.9)  // nearest largedt no. //4

Math.random() // to get random value

// 10. generate random integer 
let rndm = Math.random()
rndm*=10
rndm=Math.floor(rndm)
rndm+=1
console.log(rndm);

let random = Math.floor(Math.random()*10)+1; 
console.log(random);

// 11.practice1
// generate random integer (1 to 100)

let prandom = Math.floor(Math.random()*10)+1; 
console.log(prandom);

// 12.guessing  game