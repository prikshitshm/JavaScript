//Nested Scope
//ice cream lena jesa chote le skte bdo se but bde ni le skte

function one(){
    const username="prikshit"

    function two(){
        const website ="youtube"
        console.log(username);
    }
console.log(website);
two();
}

//one();


if(true){
    const username="prikshit"
    if(username === 'prikshit'){
        const website =" youtube"
        console.log(username + website);
    }
   // console.log(website); error
}

// console.log(username); // error


// ++++++++++++ Interesting +++++++

console.log( addOne(5))
function addOne(num){
return num + 1
}


// holding varabile function

console.log(addTwo(4)); // cannot access before initilization
const addTwo = function(num){
    return num +2
}

