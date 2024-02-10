// var c = 300
let a = 300 // global scope is dominting over block scope 
if(true){
  let a = 10
  const b = 20
  // var c = 30 // var is not good at all
  console.log("INNER: ", a);

}


console.log(a); // print 300 so let is good
//console.log(b);
//console.log(c); // it prints 30 