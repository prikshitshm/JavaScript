// passing objects in functions

// adding to cart , arguments ni pta kitna aaege

function calculateCartPrice(val1,val2,...num1){ // rest operator
    return num1 // array bn jaega yeh
}

console.log( calculateCartPrice(200,400,500))




const user ={
    username:"hitesh",
    price:199
}


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price} `);
}
// handleObject(user)

handleObject({
    username:"bawa",
    price:999
})


//passing array in functions


const myNewArray =[200.400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));