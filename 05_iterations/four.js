// for in 


// loop for object

// objects me we can add our own keys like maps

const MyObj = {
  js : 'javascript',
  rb : "ruby",
  rust : 'rust',
  cpp : 'c++'
}

for (const key in MyObj) {
  console.log(key);  // this only gives keys 
}

for (const key in MyObj) {
  console.log(MyObj[key]);  // this gives only values(objects here)
}

for (const key in MyObj) {
  console.log(`${key} is shortcut for ${MyObj[key]}`);  // gives cpp is shortcut for c++ 
}




// loops in arrays

// arrays me hum apne mnn se keys nhi daal skte 


const programming = ["js", "rb", "rust", "cpp"]

for (const key in programming) {
  console.log(key);  // this only gives key that is nothing so 0,1,2,3 
}

for (const key in programming) {
  console.log(programming[key]);  // this gives all their names acc to 0 = js, 1 = rb, 2 = rust, 3 = cpp
}