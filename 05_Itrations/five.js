// Higher Order funcitons in JavaScript



const coding  = ["js","ruby","python","cpp","java"]

// coding.forEach( function(item){console.log(item)}       )

// coding.forEach(   (val)=>{
//     console.log(val);
// }      )


// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)


// coding.forEach((item, index, arr)=>{
//     console.log(item,index,arr)
// })




const mycoding = [
    {
        languageName: "javascript",
        languageFileName: 'js'
    },
    {
        languageName: "java",
        languageFileName: 'java'
    },
    {
        languageName: "python",
        languageFileName: 'py'
    }
]


// mycoding.forEach(function(val){
//     console.log(val.languageName,"=>" ,val.languageFileName)
// })




const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter((num)=>(num>4 ))



// if {} ie scope is used then we should use return keyword in arrow function to return, it will automatically return if we use ()
// console.log(newNums)





