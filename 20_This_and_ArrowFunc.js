const user ={
    username:"Prikshit",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`); // current contect ko refer this keyword

        console.log(this);


    }
}

// console.log(this); empty object


user.welcomeMessage() // prikshit welcome to website


user.username="Sam"
user.welcomeMessage() // context change kr diya , sam ko refer kr rhe ab


// console.log(this); // in node environemnt this refer to empty object

// this -> in browser this refer to window



// this work in object not in function

function chai(){
    let username="prikshit"
    console.log(this.username); // undefined
}

chai();


// const chaa = function(){
//     let username="prikshit"
//     console.log(this.username);
// }
// chaa()


const chaiii =()=>{
    let username ="Prikshit"
    console.log(this.username); // undefined
    console.log(this);// empty parathensis
}



// basic arrow function
const addTwo = (num1,num2) =>{
    return num1 + num2
}

console.log(addTwo(3,4));

// implicity return arrow function 
// me man leta hu apko return krne ki jrrurt ni hai 

const addThree=(num1,num2,num3) => num1 + num2+num3

// {} return likhna pdega
// () no need to write return 


// explicyty return , return keyword likhna hot
console.log(addThree(1,2,3));


// return object 
const returnObject =(n1,n2) =>({
    username:"Prikshit"
})