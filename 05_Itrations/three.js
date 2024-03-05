//for of loops


["","","",""]

[{},{},{},{}]


// const arr = [1,2,3,4,5,6]
// for (const num of arr) {    
//     console.log(num);
// }


// const greeting = "hello world"
// for (const greet of greeting) {
//     console.log("char: "+greet);
// }



//maps in java scripts
const map  = new Map()
map.set("IN","India")
map.set("US","USA")
map.set("FR","France")
// map.set("IN","India") // => This wont be inserted map can have dublicate entries (keys)

console.log(map) 


for (const [key,val] of map) {
    console.log(key,":-", val)
    
}




const obj1 = {
    game1: 'GTA',
    game2:"COD",
    game3:"COC"
}
// for (const [key,val] of obj1) {
//     console.log(key, " = ", val)
    
// } //=> this loop dosent work on objects(as they are not iteratable).



for (const key in obj1) {
    console.log(`${key} for game is ${obj1[key]}`)
}

