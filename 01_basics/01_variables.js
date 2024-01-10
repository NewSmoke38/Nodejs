const accountId = 222444
let accountEmail = "shivani@google.com"
var accountPass = "12345"
accountCity = "bhagalpur"
let accountState

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPass = "8675"
accountCity = "patna"

console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity])

/*
prefer not to use var
cause of issue in block scope and funtional scope which are smthg as curly brackets
*/



