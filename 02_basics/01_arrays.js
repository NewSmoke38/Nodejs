// array

const myArr = [3, 4, 5]; // here 3 denotes index 0, 4 denotes index 1, 5 denotes index 2. 3 1st box me hai, 4 2nd box me hai, 5 3rd box me hai.
const myHeroes = ["Iron Man", "Hulk", "Thor", "Spider-Man"];

const myArr2 = new Array(2, 3, 4);

console.log(myArr[2]);

// array methods ++++++++++++++

//myArr and myArr2 are diffrent arrays.

myArr.push(6); // push method adds the element at the end of the array.
myArr.push(7);
myArr2.push(5);
myArr.pop(); // pop method removes the last element of the array.
myArr.unshift(0) // unshift method adds the element at the beginning of the array. for ex. 0. changes all the index values. they all shift in the other box.
myArr.shift() // shift method removes the first element of the array. we can leave it empty.

console.log(myArr);


// we can ask questions from the array through console.log
console.log(myArr.length); // gives 4
console.log(myArr.includes); // gives function
console.log(myArr.includes(9)); // gives ans in boolean i.e false here.
console.log(myArr.indexOf(9)); // tells the number of index of the element. mainly the box number of a number/digit in array. 
// gives -1 if the element is not present in the array.{for all cases} 

const newArr = myArr.join() // newArr got joined by myArr and became a string. 
console.log(myArr); // gives [3,4,5,6]
console.log(newArr); // gives 3,4,5,6


// Slice and Splice

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3); // slice method takes the index of the array and gives the elements in between the index. means it works on the basis of index or boxes to take the digits between 1,3 and print only these.
console.log(myn1); // gives [4,5]



console.log("b ", myArr);
const myn2 = myArr.splice(1, 3); // splice method takes the index of the array and removes the elements in between the index. means it works on the basis of index or boxes to remove the these under coming digits and print the rest but on the C array not on B array.
console.log(myn2); // gives [4,5,6]
console.log("c ", myArr);



