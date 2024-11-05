// string syntax
let greetings: string = "hello hitesh";

// greetings=5
console.log(greetings.toLowerCase());

// its used to get rid from errors temporarily
export {}

// number syntax
let num: number = 3345.3

// boolean syntax
let isloggedIn: boolean=true


//  TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.

 //  any - you should avoid to this becoz any isn't type-checked
let hero;

 function getHero() {
    return "thor";
 }

 hero = getHero(); //any

// its preferred
 let hero1: string;

 function getHero1() {
    return "thor";
 }

 hero = getHero();