const name = "shiva"
const repoCount = 10 

 // console.log(name + repoCount); // concatenation {means addition of strings}  but this way is outdated

// rather we write is as like this
console.log(`hello my name is ${name} and my repo count is ${10}`);  // string interpolation more readable

const gameName = new String('new-smoke');

console.log(gameName[0]); // key value pair means we can access the string characters, here we want to know the first character of the string jiska key [0] hai or value "n" hai.
// 0 = "n"
// 1 = "e"
// 2 = "w"
// 3 = "s"
// 4 = "m"
// 5 = "o"
// 6 = "k"
// 7 = "e"

// methods of strings

console.log(gameName.__proto__); // gives {}
console.log(gameName.length); // gives 8
console.log(gameName.toUpperCase()); // gives NEWSOKE but the original value hasnt changed cause its stack and primitive 
console.log(gameName.charAt(2)); // here we are asking for the position of a character. like on 2 number and it gives us "w"
console.log(gameName.indexOf('t')); // gives -1 cause its not there. 

 const newString = gameName.substring(0, 3); 
console.log(newString); // gives "mew" cause we have asked it to give values on 0,1,2,3 and here 4 doesnt count and we divided into substring

const anotherString = gameName.slice(-8, 3); // same as substring but not divided and here we can put negative values too 
console.log(anotherString); // gives "smok"

