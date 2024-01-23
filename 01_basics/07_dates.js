// dates

let myDate = new Date();
console.log(myDate); // gives unreadable thins out of head
console.log(myDate.toString()); // gives kinda readable time
console.log(myDate.toDateString()); // gives more readable time
console.log(myDate.toLocaleString()); // gives best time 
console.log(typeof myDate); // gives object 

// now i want to specify
let myCreatedDate = new Date(2023, 0, 15); // month starts from 0 in javascript
console.log(myCreatedDate.toLocaleString()); // to get a readable time


let myCreatedDate = new Date("01-14-2023");  // gives date in ddmmyyyy format
console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime()); // gives time in milliseconds to do comparision in sites like bookmyshow
console.log(Date.now()/1000); // to convert in seconds

let newDate = new Date()
console.log(newDate.getFullYear()); // gives year
console.log(newDate.getMonth()); // gives month
console.log(newDate.getDay()); // gives day of the week

newDate.toLocaleString('default', {
  weekday: "long"
})

