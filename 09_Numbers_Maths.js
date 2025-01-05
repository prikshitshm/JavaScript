const score = 400

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));// 100.00

const anothernumber = 23.8966
console.log(anothernumber.toPrecision(3)); // 23.9


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

////////////////////////////////////

console.log( typeof Math); // Object

console.log(Math.abs(-4)); // abs => -ne to +ve

console.log(Math.round(4.3));//4
console.log(Math.ceil(4.3)); // 5 top vaue

console.log(Math.floor(4.9)); // 4

console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

console.log(Math);


