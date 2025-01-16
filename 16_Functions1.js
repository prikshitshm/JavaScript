// Function Declaration
function sayName(){
    console.log("My Name Is Prikshit");
}

//Function Execution
sayName();


// function addTwoNumbers( Number1 , Number2){ // fnc parameters
//     console.log(Number1+Number2);
//     }

// const result = addTwoNumbers(1,2) // 3 // func arguments

function addTwoNumbers( Number1 , Number2){ // fnc parameters
    return Number1+Number2;
    }

let result = addTwoNumbers(1,4)
console.log("Result is " + result
);


function loginUserMessage(username){
    if(username === undefined){
   console.log("Please enter a username");
   return
    }
    return `${username} just logged in`
}

const ans =loginUserMessage("prikshit")
console.log(ans);






