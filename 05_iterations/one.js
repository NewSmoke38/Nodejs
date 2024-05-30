// for loop
for (let index = 0; index < array.length; index++) {
  console.log(i); 

}        // yaha initialize kr dia index ki value ko as 0 the condition laga di ek length ki suppose 10 hai toh 10 tak chalega loop the index++ means ki ye badha dega fir ye loop chalta rhega. 


//so
for (let i = 0; i< 10; i++) {   // jab tk index ki value 10 se kam hai tb tk chalte rho
  const element = i;
  if (element == 5) {
    console.log("5 is the best number");
 }
  console.log(element); // yaha element ko print bhi kr lenge

}



for (let i = 0; i <= 10; i++) {
  console.log(`Outer loop value: ${i}`)
  for (let j = 0; j <= 10; j++){
    console.log(`Inner loop value: ${j} and inner loop value: ${i}`)
     /// it will print outer loop 0 then inner loop 0 to 10 
          //then ek outer loop 1 then unner loop till 0 to 10 
          //and so on

       // for multiplying
      console.log(i + `*` + j + `=` + i*j);  // i times j is equal to i*j
      // it will print multiplication tables till 10 lol
  }
}

// ab yahapr array.length ko MyArray bana diya hamne

let MyArray = ["flash", "batman", "superman", "spiderman", "wonderwoman", "greenlantern"]

console.log(MyArray.length) // it will give 6 cause we have 6 superheroes in the elemnts

for (let i = 0; i < MyArray.length; i++) {
  const element = MyArray[i];
  console.log(element);  // flash batman will be printed
}


// ab loop kayi baar hamko poora poora run nhi krwaana hota, beech me kuch breaks chahiye hote hai

// breaks and continues


for (let i = 1; i <= 20; i++) {
    
     if (i == 5) {
         console.log(`detected 5`);
         break; // it will break the loop
       // continue means ki chalo ek chance diya aage badhte rho.
        } 
  
    console.log(`value of i is ${i}`)
}