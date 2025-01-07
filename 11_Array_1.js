//Array


const myArray = [0,1,2,3,4,5,true,"hitesh"]

console.log(myArray[0]);

// deep copy && shallow copy

const myHeros =["shaktiman","naagraj"]

const myArr2 = new Array([1,2,3,4])
console.log(myArr2[1]);


// Array Methods

myArray.push(6)
console.log(myArray);

myArray.push(7) // end me dalta
console.log(myArray);

myArray.pop() // end se udata

myArray.unshift(1) // start me push krta
myArray.shift()
console.log(myArray);

console.log(myArray.includes(8)); // false

console.log(myArray.indexOf(8)); // -1 hai ni 

const newArr = myArray.join();

console.log(newArr);



// slice splice
console.log("A ", myArray);

const myn1 = myArray.slice(1,4) // 1 to 3
console.log(myn1);
console.log(myArray);



const myn2 = myArray.splice(1,4) // 1 to 3
console.log(myn2);
console.log(myArray);





