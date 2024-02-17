const accountId = 34246252
let accountEmail = "chandra@gmail.com"
var accountPassword = "12455"
accountCity = "jaipur"


// accountId = 2 //not allowed


accountEmail = "a@gmail.com"
accountPassword = "2121212"
accountCity = "patna"
let accountState;



console.log(accountId);


/*
Prefer not to use var
Beacause of isssue in block scope and function scope.
*/ 


console.table([accountId, accountEmail, accountPassword, accountCity,accountState])