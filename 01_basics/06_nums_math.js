// CHANGING NUMBERS TO DIFFERENT TYPES // 

const score = 400

const balance = new Number(100) // ab its guaranteed to be a number 
console.log(balance);

console.log(balance.toString().length); // converted to string and asked the length of it which is 3 characters

console.log(balance.toFixed(1)); // used when there are values coming in decimal no. very big w precision and client doesnt want to see that so we fix it to 1 decimal place or any number we want.
// gives 100.0

const otherNumber = 345.789
console.log(otherNumber.toPrecision(3));  // gives 346 which got rounf off 

const hundreds = 1000000 
console.log(hundreds.toLocaleString('en-IN')); // gives 1,00,00,00 which is indian currency format.




// +++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++ //

// math library

console.log(Math); // gives all the maths functions and a lot of changing propeties and methods including tan, cos, sin, floor, ceil, round, max, min, random, abs, pow, sqrt, log
console.log(Math.abs(-4)); // abs means absolute value which means no negative value. so you can change a negative number into +ve number.
console.log(Math.round(4.3)); // round off the number to nearest integer. gives 5

// but i want to change the way it happens in general. means +1 when more than 5 in decimal and when less than 5 in decimal the number remains the same.
console.log(Math.ceil(4.2)); // ceiling means ki agar zara si bhi value 4 se zyada hui toh 5 mein change kar dega. 
console.log(Math.floor(4.9)); // floor aagaya toh lowest value hi lega

console.log(Math.min(4, 6, 2, -1, 9, 10, -5)); // gives -5
console.log(Math.max(4, 6, 2, -1, 9, 10, -5)); // gives 10

console.log(Math.random()); // this gives a random number between 0 and 1. now if we want to get a random number between 0 and 10 then we can multiply it by 10. and so on
console.log(Math.random() * 10); // gives random no. between 0 and 10

// now what if the number comes 0??
// to avoid that we can add 1 to it
console.log((Math.random() * 10) + 1); // now it wont give 0 at any cost.

// now i want the random no. from 10 to 20 and not 0 to 1 so ill write it like this =>

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // max - min + 1 is the range of numbers we want to generate and this is a formula. 



