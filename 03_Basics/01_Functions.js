


function sayMyName(){
    console.log("c")
    console.log("h")
    console.log("a")
    console.log("n")
    console.log("d")
    console.log("r")
    console.log("a")
}

// sayMyName()

// function add2Numbers(number1, number2) {
//     console.log(number1+number2)
// }


function add2Numbers(number1, number2) {
    // let result  = number1 + number2
    // return result
    return number1+number2
}

const result = add2Numbers(53,6)
// console.log(result)

function loginUserMessage(username = "sam"){

    if(username == undefined){  /// also use !username in the if condition
        console.log("please enter a username.")
        return

    }
    return `${username} just logged in.`
}
// console.log(loginUserMessage("chandra bhushan"))
console.log(loginUserMessage("raju"))
