const marvel_heros =["thor","ironman","spiderman"]

const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // Array ke andr array

// console.log(marvel_heros[3][1]);


// concat operator
// const all_Heros= marvel_heros.concat(dc_heros)
// console.log(all_Heros);


//Spread operator

const all_new_heros =[...marvel_heros,...dc_heros]
console.log(all_new_heros);


//Flat operator
const another_Array =[1,2,3,[4,5,6],7,[6,7],[4,5]]

const real_another_array = another_Array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("hitesh")); // false
console.log(Array.from("hitesh"))

console.log(Array.from({name:"Prikshit"})) // gives empty obj we have to speicfy that we want array of keys or value , array ni bna pata

// of

let score1=100
let score2=200
let score3 =300
console.log(Array.of(score1,score2,score3));



