// control flow means that not all the written code will be executed everytime but only when the condition is true or when it is needed.

// if
 //if (true){
   
 //} // this will be executed

//if (false){

 //} // this wont be executed
const isUserLoggedIn = true
if (2 == "2"){
  console.log("executed");
}

//<, >, <=, ==, !=, ===, !==
const temperature1 = 30
if (temperature1 < 50){
  console.log("less than 50");
}
console.log("temprature1 greater than 50"); // this will print cause it doesnt sees the if thing


// if i want to see ki inn dono console logs me se shio baat kya hai 
const temperature2 = 30
if (temperature2 === 30){
  console.log("less than 50");
} else {
  console.log("temperature2 greater than 50");
}
