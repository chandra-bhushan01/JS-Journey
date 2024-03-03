const user = {
    username:"chandra",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "bittu"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "chandra"
//     console.log(this.username)
// }
// chai()


// const chai = function(){
//     let username = "chandra"
//     console.log(this.username)
// }
// chai()


const chai =() =>{
    let username = "chandra"
    console.log(this)
}
// chai()




// const twosum = (num1, num2)=>{
//     return num1+num2
// }


// const twosum = (num1, num2)=>(num1+num2)
const twosum = (num1, num2)=>({user:"chandra"})

console.log(twosum(3,4))
