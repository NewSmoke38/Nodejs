// singleton

// object literlas

const mySym = Symbol('key1') // to make this a symbol put it in square barcjets.

const JsUser = {
  name: "Jonas",
  
  "full name": "Jonas Schmedtmann",
  
  [mySym]: "myKey1", // to make it a symbol always put it in square brackets. that is syntax.
  
  age: 30,
  
  location: "london",
  
  email: "hulu@example.com",
  
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday",]
}
// to access the object with dot 
console.log(JsUser.email); // asked ki email kya hai with dot method
console.log(JsUser["email"]); // but this is preferable
 console.log(JsUser.full name); // because here you cant acces full name by dot syntax. this is wrong
console.log(JsUser["full name"]); // this is correct

// for accesing symbol.  

// symbol is not symbol here until i put it in square brackets in line 12.
console.log(JsUser["mySym"]); // gives myKey1
console.log(typeof JsUser.mySym); // gives string which is wrong
console.log(typeof JsUser[mySym]); // gives symbol this is correct form.

//  how to change values in email. if you want nobody to change values for JsUserthe use freeze.
JsUser.email = "qpmzj@example.com";
object.freeze(JsUser);
JsUser.email = "qpmzj@hulu.com";
console.log(JsUser.email); // this is not possible because of freeze.; no changes will happen


// greeting the user by saying hello
 JsUser.greeting = function(){
   console.log("Hello Js User");
}
console.log(JsUser.greeting());

// string interpolation 
JsUser.greeting2= function(){
   console.log(`Hello Js User, ${this.name}`); // this is a way to access the name.
}
console.log(JsUser.greeting2()); 



   

  



