// on singletons
const tinderUser = new Object();
const tinderUser = {}; // both gives same answer

tinderUser.id = "123abc";
tinderUser.name = "Jonas";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "qpmzj@example.com",
  fullName: {
       userfullname:{
           userFirstName: "Jonas",
           userLastName: "Schmedtmann"
      }
  }
}

console.log(regularUser.fullName.userfullname.userFirstName); // gives first name in the nesting

// combining objs.

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {...obj1, ...obj2}; 