const score = 450;

const balance  = new Number(100)
console.log(balance);

console.log(balance.toString().length);

//use to set prcision value of the decimal point in the number
console.log(balance.toFixed(1));

const num = 23.424424
//gives precision value to the num of digit defined.
console.log(num.toPrecision(1))


const hundreds = 10000000000
//gives local format to represent a numbr US/IN
console.log(hundreds.toLocaleString());



//++++++++++++++++++++++++++++++++++++++++++++++++  MATHS  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math)
console.log(Math.abs(-23))
console.log(Math.round(4.56))


console.log(Math.floor((Math.random()*10)+1))
const min = 10
const max = 60
console.log(Math.floor(Math.random()*(max-min+1))+min)