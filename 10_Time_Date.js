let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate); // Object


// Defining specific date

// let myCreatedDate = new Date(2024,0,6)

let myCreatedDate = new Date("01-01-2025")
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Date.now() / 1000);

