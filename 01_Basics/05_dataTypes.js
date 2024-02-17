// Primitive data types
// 7 types: String, Number, Boolean,null, undefined, Symbol,Bigint


const score = 100
const scoreValue = 12.33
const isLoggedIn= true
const outsideTemp = null
let userEmail;

const id= Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)
const bigNumber = 73287576483242442424242424242242
console.log(typeof bigNumber)



// Referance (Non - Premetive)
// array, object, function

const heros = ["shaktimaan","naagraaj","doga"]
let myObj = {
    name:"chandra bhushan",
    age: 43
}

const myFunction = function(){
    console.log('hello world')
}

console.log(typeof myFunction)




