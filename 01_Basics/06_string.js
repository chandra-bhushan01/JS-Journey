const name = "chandra bhushan"
const repoCount = 50


console.log(name + repoCount)
console.log(`my name is ${name} and my repo count is ${repoCount}`)


const myName = new String("chandra bhushan")

console.log(myName.length)
console.log(myName.toLowerCase())
console.log(myName.toUpperCase())

console.log(myName.charAt(0))
console.log(myName.indexOf('b'))

const newStr = myName.substring(2, 6) //=> cant take neg if given prints the whole string ignoring the negitives
console.log(newStr)



const anotherStr = myName.slice(0,6) //=>can take negitive values
console.log(anotherStr)


const str1 = "      chadnrabhushan@gmail.com    "
console.log(str1.trim(" ")) // => removes spaces from fornt and back.


const str2 = " this is my thing and i want this"
console.log(str2.replace(" ", "_")) //=> replace the first instanc in the string with the new value

console.log(str2.includes("is")) //=> is present then true else false

console.log(str2.split(" ")) //=>split string into an array form the input parameter.




