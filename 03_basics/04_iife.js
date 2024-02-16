// Immediately Invoked Function Expressions (IIFE)
// means jo function immediately execute ho jaye. global scope ke pollution se problem hoti hai kai baar toh uss global scope ke variables ya jo bhi declaration hai usko hatane ke liye ham IIFE ka use karte hai.


// this is the simple way of how we do it
function chai(){
  console.log("DB CONNECTED");
  
}
chai() // gives DB CONNECTED  



// but iife is doing it immediately with diff. syntax with poore me paranthesis
// named iife


(function chai(){
  console.log("DB CONNECTED")
})() // gives DB CONNECTED 

// more explained
//()() // first () is for calling the function 
     // second () is for execution call jo ki chai tha


// lets do it in arrow function
// and when trying to type two iife functions then dont forget abo he semi colon

( () => {
  console.log("DB CONNECTED"); 
  
})(); //here semi colon is imp cause invoked doesnt know where to stop so semi colon ends it


( (name) => {
  console.log("DB CONNECTED TWO $(name)"); 
})('jonas') 
