const { ALL } = require("dns");

const marvel_heroes = ["Thor", "Iron Man", "Hulk", "Spider-Man"]
const anime_heroes = ["Naruto", "Sasuke", "Sakura", "Kakashi"] 

marvel_heroes.push(anime_heroes) // this won't merge because we are pushing an array into an array but set ke andar set dal jayega and will become one index 4.
//console.log(marvel_heroes[4][1]); // this gives me the index 1 of the array [4] which we added.
marvel_heroes.concat(anime_heroes) // concatination of two arrays.
//console.log(marvel_heroes); 

const allHeroes = marvel_heroes.concat(anime_heroes) // concatination of two arrays.
console.log(allHeroes); // addition{concat} of two arrays gives a new array. 
//CON - we can only add two arrasy here

// easier way to merge these arrays is to use the spread operator{preferable}
// PRO - we can add as many arryas we want.

const all_new_heroes = [...marvel_heroes, ...anime_heroes] // spread operator
console.log(all_new_heroes); // gets merged

const another_array = [1,2,3, [4, 5, 6], 7, [6, 7[4, 5 ]]] // rare situation

const real_another_array = another_array.flat(Infinity) // flat method spreads them all nicely.
console.log(real_another_array); 


console.log(Array.isArray("Shiva")) // asked ki shiva string ek array hai kya? gives false
console.log(Array.from("Shiva")) // makes shiva an array
console.log(Array.from( {name: "Shiva"})) // gives empty array. {{{{INTERESTING}}}}

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // gives an array of these values.