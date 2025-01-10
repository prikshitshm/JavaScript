// const tinderUser = new Object()
const tinderUser ={}
console.log(tinderUser);

tinderUser.id ="123abc"
tinderUser.name="Prikshit"
tinderUser.isLoggedIn= false

console.log(tinderUser);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"prikshit",
            lastname:"sharma"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname);

//Adding 2 objects

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

// const obj3 ={obj1,obj2}
// console.log(obj3); same array


// const obj3 =Object.assign({},obj1,obj2) // target baki source
// console.log(obj3);

// spread
const obj3 = {...obj1,...obj2}

const users=[
    {name:"prikshit",
    email:"prikshit@gmail.com"
    }
]

// get all keys

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// has

console.log(tinderUser.hasOwnProperty('name')); // true

