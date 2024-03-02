//object litrals


const mySym = Symbol("key1")

const JsUser  ={
    "full name": "chandra bhushan",
    [mySym]:"myKey1",
    age: 23,
    location: "bihar",
    email: "chandrabhushan@gmail.com",
    lastLogin: ["monday","tuesday"]
}
console.log(JsUser.email)
console.log(JsUser["full name"]) //need to pass it through string
console.log(JsUser[mySym])


JsUser.email = "chandra@gamil.com"
Object.freeze(JsUser)
JsUser.email = "x@gmail.com"
console.log(JsUser)





