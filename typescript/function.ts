//example 1
function addTwo(num: number) {
    // return num + 2
    return "hello"; // here is ts is not giving error
}
addTwo(5);

//example 2
function getUpper(val: string) {
    return val.toUpperCase()
}
getUpper("null");

//example 3
function signUpUser(name: string,email: string,isPaid: boolean) {    
}

signUpUser("chandan","chandan@gmail.com",false);

//example 4
function loginUser(name:string,email:string,isPaid:boolean = false) {
}

loginUser("c","c@c.com");
export {}

// // ---  a better way to write function ---
// example 1
function addTwo1(num: number): number {
    return num + 2
    // return "hello"; //it will give the error
}
addTwo(5);

// example 2
function getValue(myVal:number) : boolean | string{
    if (myVal>5) {
        return true;
    }
    return "200 ok";
}

// example 3
const getHello = ():string =>{
    return ""
}

// example 4
const heros = ["thor","spiderman","ironman"]
//heros.map((heros:string): string=>{ // here ts is automatically detect that its string
heros.map((heros): string=>{
    return `heros = ${heros}`;
})

//void
function consoleError(errmsg:string):void {
    console.log(errmsg);
}

// never - type represents values which are never observed in a returnType
// this mean the function throws an exception or terminate execution of the program 
function handleError(errmsg:string):never {
  throw new Error(errmsg);
}