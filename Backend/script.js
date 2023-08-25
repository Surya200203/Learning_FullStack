// let n=5 ;
// for(let i=0;i<n;i++){
//     console.log("hello,",i);
// }

// console.log(process.argv);

/*
//Process in Node
let args = process.argv

for(let i=2;i<args.length;i++){
    console.log("hello & welcome to ",args[i]);
}
*/

// const math = require("./math.js")

// console.log(math);
// console.log(math.sum(2,2));
// console.log(math.mul(2,2));
// console.log(math.g);
// console.log(math.pi);

// Using module.exports to sccess function in other dir

// const fruitInformation = require("./Fruits")

// console.log(fruitInformation);

//  IMPORT V/S REQUIRE


import {sum,pi} from "./math.js"

console.log(sum(1,2));



