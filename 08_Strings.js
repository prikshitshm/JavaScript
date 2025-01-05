let name ="Prikshit"
let repoCount =30

console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Pubg-freefire')
console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('u'));




const newString = gameName.substring(0,4)
console.log(newString);

// slice -ve de skte , substring


const newStringOne ="   prikshit   "

console.log(newStringOne.trim());


const url ="https://hitesh.com/hitesh%20choudhary"

console.log( url.replace('%20','-'))

console.log(gameName.split('-'));