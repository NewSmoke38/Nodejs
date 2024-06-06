// for of

["", "", ""]  // these are strings in array
[{}, {}, {}]  // these are objects in array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// main syntax
//for (const iterator of object) {        // here iterator = i, val, num{uss cheez ka type} etc   AND   object = arr {ki kis cheez ke upar loop lagana hai}
  //console.log(element)
//}

for (const num of arr) {
  console.log(num);         // gives 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}


// now for strings
const greetings = "hello world!"
for (const greet of greetings) {   // here we can use any word in place of greet like i, o, s etc
  console.log(greet);      // gives h, e, l, l, o, w, o, r, l, d, ! 
}

//   OR 

const greetings = "hello world!"
for (const greet of greetings) {   
  console.log(`each char is ${greet}`);  // gives each char is h, each char is e, each char is l, each char is l, each char is o, each char is w, each char is
}


// Maps [known for unique values like if i add india 2 times it wont print it two times]
//      [known for that maps remebers the order of the elements]
//      [maps are not iterable]  
 
const map = new Map()
map.set("key value", "full name")
map.set("IN", "INDIA")
map.set("USA", "UNITED STATES OF AMERICA")
map.set("UK", "UNITED KINGDOM")

console.log(map);


// now loop in maps

for (const key of map) {
  console.log(key);  // key ki wajah se sab kuch array ke andar hoke print hojaega, we dont want that, so we use destructuring. [key, value]  key alag aur value alag
} 

for (const [key, value] of map) {
  console.log(key); // this will print only keys
} 

for (const [key, value] of map) {
  console.log(key, ':-', value);  // this will print key and value both with :- between them
}

for (const [key, value] of map) { // not good at all 
  console.log(key, value);  // this will print key and value both without :- between them
}



// now for objects

const MyObj = {
  'game1' : 'GTA VICE CITY'
  'game2' : 'MINI MILITIA'
}

for (const [key, value] of MyObj) {
  console.log(`key, ':-', value`); // this is not iterable as objects have a diff method for this, maps can be done like this 
}