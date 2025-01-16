//global scope
 var c = 300
let a = 100
if(true){
    // local scope
    let a = 10
    const b =20
    var c = 30 
    console.log("Inner A" , a);
}


 console.log(a);
// console.log(b);
// console.log(c);

// in browser Window GLOBAL SCOPE 
// in node its global 

