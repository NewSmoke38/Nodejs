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

// parameters kaise lete hai
function loginUserMessage(username){
    if(username === undefined){
    console.log("Please enter a username");
    return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("sam")); // couldve given it a name
// console.log(loginUserMessage());

// like a cart in which we can items and get them added
// so like if we dont know that how many arguemts are going to come to us then we will do this => 
 // 3 dots are called rest operater here means number ko bundle me pack kro aur mujhe dedo
function calculateCartPrice(val1, val2 , ...num1){
  return num1
}

console.log(calculateCartPrice(100, 300, 200)); // val1 is 100, val2 is 300, num1 is 200

const user = {
  username: "sam",
  price: 200
}

function handelObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handelObject(user)

// converting function into array
handelObject({
  username: "sam",
  price: 200
})

const myNewArray = [200, 600, 500, 400]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));
