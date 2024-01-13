let score = "33abc"

console.log(typeof score); // pehle jaante hai uska type ki wo kya hai

let valueInNumber = Number(score) // string ko hamne number me convert kr dia yaha pe 
console.log(typeof valueInNumber); // toh ab wo number bnn gya
console.log(valueInNumber) // yaha se pata chala ki wo valueInNumber hai kya aakhir which is NaN cause of abc in it

// conversion 
"33" // hojata convert 
"33abc" // nhi hota convert 
"null" // 0 aayega 
"undefined" // NaN aayega
// NaN means not a number 
"true/false" // true = 1, false = 0 

// converting

let isLoggedIn = "shivani"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 

// 1 = true, 0 = false
// "" empty string = false 
// "shivani" = true

// conversion into string

let stringNumber = 44
let stringNumberInString = String(stringNumber)
//console.log(stringNumber);
//console.log(typeof stringNumberInString); // dikh number raha hai but wo string bnn gaya hai 

// main conversions are between bollean, number, string 


// **************************** Operations *****************************

let value = 3 
let negValue = -value
//console.log(negValue);

console.log(2+2);
console.log(2-2);
// 2 raise to the power 2 => (2**2) 
// 2 is to 3 (2%3) 

let str1 = "hello"
let str2 = "shivani"

let str3 = str1 + str2
console.log(str3);  // we can only add

console.log("1" + 2); // => 12
console.log(1 + "2"); // => 12 

console.log("1" + 2 + 2); // => 122
console.log(1 + 2 + "2"); // => 32
console.log( (3 + 4) % 5 * 6);  // add paranthesis to make it clear 

console.log(true); // => true
console.log(+true); // => 1 
console.log(+""); // => 0 

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2 // not so usable

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

