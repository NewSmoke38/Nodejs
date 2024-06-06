// for each loop

// basic function is written as

coding.forEach( fuction name() {} )     here its a call back fn so it will have no name 



const coding = ["js", "rb", "rust", "cpp"] // array le liya 

coding.forEach(function(item) {
 console.log(item);  // gives all the values of array
} )

// by arrow function

coding.forEach((item) => {
  console.log(item);    // gives same values as above
})



// another case

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe) // prints all the values of array




// another case

coding.forEach( (item) => {
  console.log(item);  // this we know the most simple and best w arrow fn
})

// now

 coding.forEach( (item, index, arr ) => {
   console.log(item, index, arr);  // prints all three things
 })


// example of [{}, {}, {}]

const MyCoding = [ {
      languageName : "javascript",
      languageFileName : "js"
  }, 
 {
      languageName : "python",
      languageFileName : "py"
   }, 
 {
      languageName : "ruby",
      languageFileName : "rb"
 }, 
]

  MyCoding.forEach( (item) => {
      console.log(item.languageName);
  } )
  
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
 