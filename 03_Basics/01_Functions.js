


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
// console.log(loginUserMessage("raju"))


function calculateCartPrice(val1,val2, ...val3) {
    return val3
    
}

// console.log(calculateCartPrice(200,400,500,695,432))

const user = {
    username:"chandra",
    price:3424
}


function handleObject(anyObj) {

    console.log(`${anyObj.username} is username and price is ${anyObj.price}`)
    
}

handleObject(user)

function returnSecondElement(getArray){
    return getArray[1]
}

console.log(returnSecondElement([23,434,54,676,43,23,6,47]))
