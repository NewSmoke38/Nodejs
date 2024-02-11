// var c = 300
let a = 300 // global scope is dominting over block scope 
if(true){
  let a = 10
  const b = 20
  // var c = 30 // var is not good at all
  //console.log("INNER: ", a);

} // this curly bracket is the block scope


//console.log(a); // print 300 so let is good
//console.log(b);
//console.log(c); // it prints 30 

// nested scopes

function one(){
  const username = "Jonas"

  function two(){
    const website = "youtube"
    console.log(username);
  }
 // console.log(website);

  two()
}

//one()





// global scope ka console block scope se kuch nhi le skta 
// means parent child se nhi lega

if(true) {
 
  const username = "Jonas"
  if (username === "Jonas"){
    const website = "youtube"
    console.log(username + website);
   }
  
// console.log(website); // this wont work because website is not in the global scope
}

// console.log(username);// this wont work because username is not in the global scope






//++++++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++++++++