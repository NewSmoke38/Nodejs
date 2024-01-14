// datatypes are of mainly of two types : primitive and non-primitive

// in primitive all the data is called by value , inka copy hame milta hai to edit
// primitive datatypes are of 7 types : number, string, boolean, null, undefined, symbol, bigint

const score = 100 
const scoreValue = 100.4
const isLoggedIn = true
const outsideTemp = null
let userEmail; // idk it as of now so its undefined or i can write it as = undefined both ways are same
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); // === trple eqaul means ki kya id and anotherId same hai? no they are not that is coz of Symbol. 
const bigNumber = 1234567890123456789012345678901234567890n; // bigint me last me bss n aaya

// non-primitive (reference) 
// Array, Object, Functions {inn sanka datatype function hi aayega means typeof}

const heroes = ["spiderman", "superman", "batman"] // reference type or non primitive
 let myObj = {

  name: "shiva",
  age: 34,
  
} // the things in the curly brackets is called object.

 const myFunction = function(){
   console.log("hello world")
 } // function is also a reference type

console.log(typeof myFunction); // gives  object function 