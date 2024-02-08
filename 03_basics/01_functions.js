// i want to write this all with less effort 

function sayMyName(){
console.log("s");
console.log("h");
console.log("i");
console.log("v");
console.log("a");
}

// sayMyName()

//function addTwoNumbers(number1, number2){
   
  // console.log(number1 + number2);
//}
function addTwoNumbers(number1, number2){
   
  //let result = number1 + number2;
  //return result // result ke baad nothing prints

  return number1 + number2;
}

const result = addTwoNumbers(1, 2);

// addTwoNumbers(3, 5); // gives 8
// addTwoNumbers(2, "q"); // gives 2q

console.log("Result: ", result); // result = 3


function loginUserMessage(username){
    if(username === undefined){
    console.log("Please enter a username");
    return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("sam")); // couldve given it a name
console.log(loginUserMessage());
