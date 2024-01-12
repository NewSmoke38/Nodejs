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
console.log(stringNumber);
console.log(typeof stringNumberInString); // dikh number raha hai but wo string bnn gaya hai 



