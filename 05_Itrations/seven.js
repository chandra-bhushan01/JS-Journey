const numbers = [1,2,3,4,5,6,7,8,9,10]

const newnums = numbers.map((num)=> num * 10).map((nums)=>(nums+1)).filter((num) =>(num>40))
console.log(newnums)