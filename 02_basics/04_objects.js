// on singletons
const tinderUser = new Object();
// const tinderUser = {}; // both gives same answer

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

//const obj3 = {...obj1, ...obj2}; // ye best hai known as spread operater.
const obj3 = Object.assign({}, obj1, obj2); // this is the right way always to get a nice nested ans.

// mainly the thing happening here is that obj1 and obj2 are getting in the {} empty parenthesis. but if i dont use {} then all values will go straight into obj1.
console.log(obj3); // gives {1: "a", 2: "b", 3: "c", 4: "d"} nested answer.


// now data about many users will come to me in array form which will contain many objects
const users = [
  {
    id: 1,
    email: "qpmzj@example.com",
  },
  {
    id: 1,
    email: "qpmzj@example.com",
  },
  {
    id: 1,
    email: "qpmzj@example.com",
  },
]

// how to access
users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // gives all keys in the object.;
