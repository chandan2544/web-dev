// 1.loops - used to iterate piece of code

for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. Dry run
// 3.print all odd No. (1 to 15) 

for (let o=1; o <= 15; o=o+2) {
        console.log(o)
}

//4.print all odd No. (2 to 10) 
for (let e=2;  e<= 10; e=e+2) {
    console.log(e)
}

// 5. infinite loop

//6.print multiplication table
for (let t=1;  t<= 10; t++) {
    console.log(t*5)
}

// 7.nested for loop
for (let i=1;  i<=5; i++) {
    console.log("outer")
    for (let j=1;  j<=i; j++) {
    console.log("inner")
    }
}

//8.while loop
let m=1
while (m <= 5) {
    console.log("adult")
    m++;
}

// 9. guess favourite movie
const movie = "ironman";
let guess = prompt("guess movie name");
while ((movie != guess) && (guess != "quit")) {
    guess= prompt("wrong guess plz try again");
}
if (guess == movie) {
    console.log("congrates");
}else{
    console.log("you Quit");
}

//10.break keyword 

// 11.loops with array
let food =["paneer","egg","milk","Oats"]
for (let f = 0; f < food.length; f++) {
    console.log(f,food[f]);
}

// 12.nested loop with Array
let heroes = [["tony","thor","steve"],["peter","wanda","dr.strange"],["Antman","panther","hulk"]]

for (let index = 0; index < heroes.length; index++) {
    console.log(`list #${index}`)
  for (let j = 0; j < heroes.length; j++) {
    console.log(heroes[index][j])
  }  
}

// 13.for of loop
let df=["kaaju","badam","kismis","akhrot"]
for (dryfruit of df) {
    console.log(dryfruit);
}

for(char of "apnaCollege"){
    console.log(char);
}

// 14.nested for of loop
let hero = [["peter","wanda","dr.strange"],["Antman","panther","hulk"]]

for (list of hero) {
    for (heros of list) {
        console.log(heros);
    }
}

// 15. to do app