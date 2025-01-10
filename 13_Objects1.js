// obj 2 types
// literal => no singelton
// constrcutor => singelton bnta

// Object.create() by constrcutor

//Declaring Symbol

const mySym = Symbol('key1')
const jsUser ={
"full name":"Hitesh", 
age:18,
location:"Jaipur",
email:"Prikshit@gmail.com",
isLoggedIn:false,
lastLoginDays:["Monday","Saturday"],
[mySym]:"mykey1"
}

console.log(jsUser.email);
console.log(jsUser["full name"]);
console.log(typeof mySym);
console.log(jsUser[mySym]);

// cant change the object now
// Object.freeze(jsUser)


jsUser.email="prikshit@chatgpt.com"

// Object with Function
jsUser.greeting = function(){
    console.log("Hello JS USER");
}

console.log(jsUser.greeting());


jsUser.greeting2= function(){
    console.log(`Hello js user , ${this.name}`);
}
console.log(jsUser.greeting2())



