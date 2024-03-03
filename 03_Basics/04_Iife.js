//Immediatly Invoked Function Expression (IFFE)


(function chai(){
    //Named IFFE
    console.log("DB Connected")
})(); //=> SEMI COLON is needed to end the iife  funciton.



((name)=>{
    // Unammed IFFE
    console.log(`DB CONNECTED to ${name}`)
})("chandra bhushan");