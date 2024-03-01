// control flow means that not all the written code will be executed everytime but only when the condition is true or when it is needed.

// if
 //if (true){
   
 //} // this will be executed

//if (false){

 //} // this wont be executed
const isUserLoggedIn = true
if (2 == "2"){
  console.log("executed");
}

//<, >, <=, ==, !=, ===, !==
const temperature1 = 30
if (temperature1 < 50){
  console.log("less than 50");
}
console.log("temprature1 greater than 50"); // this will print cause it doesnt sees the if thing


// if i want to see ki inn dono console logs me se shio baat kya hai 
const temperature2 = 30
if (temperature2 === 30){
  console.log("less than 50"); // this will print cause this it true
} else {
  console.log("temperature2 greater than 50"); // not this
}

const score = 300 

if (score > 100) {
  let power = "fly"
  console.log(`user power: ${power}`);
}
console.log(`User power: ${power}`); // gives power undefined. thats good


// shorthand notation(dont use it its unreadable)

const balance = 7000 
//if (balance > 200) console.log("test") , console.log("test2"); // never use



// if i have to choose between many(multiple) conditions

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 1000) {
  console.log("less than 1000");
  
} else if (balance < 2000) {
  console.log( "less than 2000");
  
} else {
  console.log("greater than 2000");
}


// real life practical

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard && 3==2) {
  console.log("Allow to buy course");
} // and operator means allconditions should be true

if (loggedInFromGoogle || loggedInFromEmail){
  console.log("Allow user to buy");
} // or operater means any one condition should be true then condition will be applied


//  Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10 // database me aata hai ye. jo pehle aata hai wo assign hota hai
val2 = null ?? 10    // gives 10
val1 = undefined ?? 10    // gives 15
val1 = null ?? undefined ?? 10    // gives 10
val1 = null ?? 10 ?? 20 // gives 10

console.log(val1); // gives 5



// terniary operator{if else ka ek syntx hai}

condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");




