// basic syntax

//switch (key) {
    //case value:

       //break;

  //default:
//       break;
//}


const month = "april"// to check 12 months will be harder with if else so use switch 


switch (month) {
  case 1: 
      console.log("January");
      break;     // break is important to break the control flow of execution nhi toh it will execute all the cases from the one whch is true  till default one{it doesnt include default tho}. 
  case 2:
      console.log("march");
      break;
  case 3: 
     console.log("ma");
      break;
  case 4:
    console.log("may");
     
  default:
    console.log("default case match");
    break;
}