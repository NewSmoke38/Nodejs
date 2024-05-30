// while and do-while loops

let i = 0; // initial value of i
while (i <= 10) {   // condition
  console.log(`value of i is ${i}`);
  i = i + 2  // incerement kr diya so that it works like index++ and doesnt go till infinity and                     gets terminated   // this will give vaue of i is 0, 2, 4, 6, 8, 10
}

let MyArray = ["flash", "batman", "superman", "spiderman", "wonderwoman"]

let j = 0;
while (j <= MyArray.length) {
  console.log(`value of j is ${MyArray}`)
  j = j + 2; // yaha increment ki zaroorat nhi hai as it is defined 
}

// do-while loop
// isme do ke andar ki cheeze pehle execute hoga phir condition check hogi while ki

let score = 1
do {
  console.log(`Score is ${score}`)
  score++
} while(score <= 10);