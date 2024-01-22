// dates

let myDate = new Date();
console.log(myDate); // gives unreadable thins out of head
console.log(myDate.toString()); // gives kinda readable time
console.log(myDate.toDateString()); // gives more readable time
console.log(myDate.toLocaleString()); // gives best time 
console.log(typeof myDate); // gives object 

// now i want to specify
let myCreatedDate = new Date(2023, 0, 15); 
console.log(myCreatedDate.toLocaleString()); // to get a readable time
