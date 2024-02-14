const user = {
  username: "jonas",
  price: 666,

  welcomeMessage: function() {
    console.log(`${this.username} , welcome to website`); // gives jonas , wecome to website 
    console.log(this); // gives user object
  }

}

user.welcomeMessage() // user me se welcomeMessage ko acces kr rhe hai
user.username = "sam"
user.welcomeMessage() // now context changed


console.log(this); // gives empty paranthesis

function chai(){
  let username = "jonas"
  console.log(this.username); // gives undefined because THIS cannot be used in function
}

chai() // gives a lot of things which means THIS conains a lot of things

const chai1 = function () {
  let username = "jonas"
  console.log(this.username); 
}
 chai()

const chai1 =  () => {
  let username = "jonas"
 console.log(this); 
}
chai() // gives undefined

// arrow funtion

const addTwo = (num1, num2) => (num1 + num2) // OR 

const addTwo = (num1, num2) => {
  return num1 + num2
}

console.log(addTwo(3, 4)); // gives 7 

// OR 
const addTwo = (num1, num2) => ({username = "jonas"}) // to return object we need to use round brackets
console.log(addTwo(3, 4)); 