// const tinderUser  = new Object()
const tinderUser = {}
tinderUser.id = "123bca"
tinderUser.name = "chandrra bhushan"
tinderUser.isLoggedIn = false

// console.log(tinderUser)



const user = {
    name:"chandra ",
    id:3442424,
    add:{
        vill:"chandpur",
        dist:"katihar",
        pin:231345,
        local:{
            landmark: "PGS",
            Street: "narayan temple"
        }
    }
}

// console.log(user.add.local)



const obj1={ 
    1:"a",
    2:"b",
    3:"c"

}

const obj2 = {
    4:"d",
    5:"e"
}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)//assign is less used


const obj3 = {...obj1,...obj2}

// console.log(obj3)



const arr =[
    {email:"chandra@gmail.com"},
    {b:1},
    {c:1}
]

// console.log(arr)
// console.log(arr[0].email)


// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// console.log(tinderUser.hasOwnProperty("name")




//=> OBJECT DE-SRUCTURE
const course = {
    courseName: "js india",
    coursePrice:999,
    courseInstructor:"chandra bhushan"
}

const {courseInstructor:instructor} = course
// console.log(courseInstructor)
console.log(instructor)