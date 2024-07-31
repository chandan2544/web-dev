// // 1.async & await
// async - create an async function

async function greet(){
    return "hello"; //return a promise
}

//arrow asyn func
let hello = async () => {}; //return a promise

// 2.await - pause execution of its surrounding async function until promise is settled
// (resolve or rejected)
 
function getNum(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let num =Math.floor(Math.random()*10)+1
            console.log(num)
            resolve();
        }, 1000);
    });
}

async function demo(){
    await getNum()
    await getNum()
    await getNum()
    await getNum()
}

 //3.handling rejection  - just and try and catch

// 4.api - are like waiter
//api written data in the form of json

// 5.JSON - javascript object notation - www.json.org
// to check json format we can use json validator

 //6.Accessing data from json
// 1.json.parse(data) - to parse a string into a js object
// 2.json.stringify(json) - to parse a js object data into json

let jsonRes = '{"name":"John", "age":30, "car":null}';

let validRes = JSON.parse(jsonRes);
console.log(validRes);

let student = {
    name : "chandan",
    age : 22,
}

let studentJson = JSON.stringify(student);

// 7.api Request testing tool 
// 1.Hoppscoth - not need to download
// 2.Postman - need to download

// 8.Ajax - asynchronous javascript and xml 
// 9.Http verbs - GET, PUT, POST, DELETE 
// 10.status codes

// 1.200 - ok
// 2.404 - Not Found
// 3.400 - Bad Request
// 4.500 - internal server error

// 11.add information in URL
//           https://www.google.com/search?q=harry+porter
// here q is key and else is value

//12.http headers
//13.using fetch our first request

let url = "https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log(response);
})
.catch((err)=>{
    console.log("error",err);
})