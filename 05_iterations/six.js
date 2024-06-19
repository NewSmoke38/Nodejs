const coding = ["js", "rb", "rust", "cpp"] 

 const values = coding.forEach( (item) => {
  console.log(item);
  return item
} )

console.log(values);


// filter function 
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter( (num) => num > 4 )   // i need numbers more than 4 only 
console.log(newNums);

 // OR if we use parenthisis we can write it like this

const newNums = myNums.filter( (num) => {
   return num > 4
  
} ) 
console.log(newNums);

/// by foreach method

const newNums = [];

myNums.forEach = ( (num) => {
  if (num > 4) {
    newNums.push(num)
    
  }
})
console.log(newNums); // gives the same values

/// real world use of filter method

const books = [
  {title: 'book one', genre: 'fiction', publish: 1981, edition: 2004},
  {title: 'book two', genre: 'non-fiction', publish: 1992, edition: 2008},
  {title: 'book three', genre: 'history', publish: 1999, edition: 2007},
  {title: 'book four', genre: 'fiction', publish: 1989, edition: 2010}
  
];

// now i need to get the books that are fiction genre so ill use filter method

const userBooks = books.filter((bk) => bk.genre === 'fiction')
const userbooks = books.filter((bk) => bk.publish >= '2000') // this for the year 2000 and above
const userBks = books.filter((bk) => bk.genre === 'history' && bk.publish <= '2010') // give this for 2 coditions
console.log(userBks);   // gives the history and publish year less than 2010 

  
   
        
