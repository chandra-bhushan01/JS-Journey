const mynums= [1,2,3]

const mytotal = mynums.reduce(function(accu, curr){
    console.log(`accu: ${accu} and current: ${curr}`)
    return accu +curr

}, 0)


const total = mynums.reduce((accu,curval)=>(accu+curval),0)


console.log(total)