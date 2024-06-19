// reduce

//const myNums = [1, 2, 3]

//const myTotl = myNums.reduce(function (acc, currval) {    // acc = accumulator, currval = current value
  //console.log(`acc: ${acc}, currval: ${currval}`) // to get the values of acc & currval atevery point
  //return acc + currval          // acc + currval = new acc which is 6
//}, 0).                          // 0 is the initial value of acc

//console.log(myTotal); 

// OR 

//const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)     // this is kinda smart in oe line
//console.log(myTotal);


// irl example
const shoppingCart =[
  {
    itemName: "sword",
    price: 1000
    
  },

  {
    itemName: "katana",
    price: 1000

  },
  
  {
    itemName: "knife blade",
    price: 10000

  }
] 

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);