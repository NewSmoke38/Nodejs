// truthy values

const userEmail = "jonas.ai"

if (userEmail) { // agar user ka email hai toh got user email
  console.log("Got user email");
} else { // nhi toh ye likhdo
  console.log("Dont have user email");
}

// falsy values

false, 0, -0, BigInit 0n, "", null, undefined, NaN // if i put these in the string then it will be falsy

// truthy values {string ke andar false bhi likh hai toh wo truthy hai}
// "0", "false", "null", "undefined", "NaN", "2", "Infinity", "42", "42n", empty array [], empty object {}, empty function(){}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}