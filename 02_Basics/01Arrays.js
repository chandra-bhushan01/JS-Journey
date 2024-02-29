//Array in Java Script and there Functions.

//Arrays in Js creates Shallow copies(uses same referance points).
const myArray = [2,4,56,34,23,56]
const myHeros = ['shaktimaan', 'naagraj']

//array declaration using "new" keyword.
const myArr = new Array(1,2,3,4,5)


// console.log(myArray[2])
myArray.length


//Array Methords
// console.log("original: "+myArr)
// myArr.push(6)    //->Insert at the end of the Array
// myArr.pop()      //->removes the last element of an array.
// myArr.unshift(9)    //-> enter element to the front
// myArr.shift()       //->remove the first element of array

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(4))

// console.log(myArr)
// const newArray = myArr.join() //-> Converts array into string
// console.log(typeof newArray)

//Slice and Splice
// console.log("A",myArr);
// const myn1 = myArr.slice(1,4)
// console.log("B", myn1)
// const myn2 = myArr.splice(1,4)
// console.log("C",myn2)





const marvelHeros = ['iron man',"thor","captain amarica"]
const dcHeros = ['superman',"hawk","wonder women"]


// marvelHeros.push(dcHeros)
// console.log(marvelHeros)



// const newarr = marvelHeros.concat(dcHeros)
// console.log(newarr)

const spreadArray = [...dcHeros,...marvelHeros]

// console.log(spreadArray)

const arryOther = [1,2,3,[4,5,6],[7,8,[9,10]]]
const flatArray = arryOther.flat(1)
// console.log(flatArray)



console.log(Array.isArray("chandra bhushan"))
console.log(Array.from("chandra bhushan"))
console.log(Array.from({name:"chandra"})) //intresting



const a= 3920
const b = 97
const c = 2324
console.log(Array.of(a,b,c))







