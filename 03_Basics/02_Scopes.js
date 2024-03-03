const a = 42;
let b = 47;
// var c = 483;

if (true) {
  const a = 34;
  let b = 54;
  var c = 64;
}


// console.log(a)
// console.log(b)
// console.log(c)



function one(){
    const username = "chandra bhushan"
    function two() {
        const website = "youtube"
        console.log(username)
        
    }
    // console.log(website);
    two()
}
// one()


if (true){
    const username = "chandra "
    if(username ==="chandra "){
        const website = "youtube"
        console.log(username + website)

    }
    // console.log(website)
}



//+++++++++++++++++++++++++++++++++++++++ Function Declaration +++++++++++++++++++++++++++++++++

console.log(addone(4))
function addone(num){
    return num+1
}



//console.log(addtwo(4)) //=> cant use this declaration before  initialization.
const addtwo = function(num){
    return num+2
}
console.log(addtwo(4))

