// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==2);
// console.log(2!=1);

console.log("2" > 1);
console.log("02" > 1) //;type coercion.


// value conversion
console.log(null > 0); // false
console.log(null ==0); // false
console.log(null>=0); // true
// For relational comparisons (<, >, <=, >=), JavaScript converts null to a number.

// undefined always give false
console.log(undefined ==0);
console.log(undefined<0);
console.log(undefined>0);


// Strict Check
//===
// checks datatypes too
console.log(2 === "2"); // false