// iife => Immediately invoked function expression

(function chai(){
    console.log(`DB CONNECTED`);
})();

// semicolon lgana hota iife ko end krne ke liye

 // (functionname)(execution call)
 //Global scope ke pllution se problem hoti hai kai baar , tho uske us global scope ke vairiable ya pollution se bachane ke liye iife use krte


 ((name)=>{
    console.log(`DB CONNECTED 2 by ${name}`);
 })('hitesh');