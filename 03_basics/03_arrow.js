const user = {
  username: "jonas",
  price: 666,

  welcomeMessage: function() {
    console.log(`${this.username} , welcome to website`); // gives jonas , wecome to website 
    console.log(this); // gives user object
  }

}

//user.welcomeMessage() // user me se welcomeMessage ko acces kr rhe hai
//user.username = "sam"
//user.welcomeMessage() // now context changed


console.log(this);