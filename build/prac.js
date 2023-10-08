"use strict";

// let lemonJuice = 3
// let water = 3
// let sugar = 1.5
// let iceCubes = 10

// // old way to make a object
// const lemonade = {
//     lemonJuice: lemonJuice,
//     water: water,
//     sugar: sugar,
//     iceCubes: iceCubes,
//     calculatePrice: function calculatePrice() {
//         return this.lemonJuice * 3 + this.water * .01 + this.sugar * .25 + this.iceCubes * .05 + .75
//     }
// }

// //new way if variable are already established
// const lemonade2 = {
//     lemonJuice,
//     water,
//     sugar,
//     iceCubes,
//     calculatePrice() {
//         return this.lemonJuice * 3 + this.water * .01 + this.sugar * .25 + this.iceCubes * .05 + .75
//     }
// }

// console.log(lemonade)
// console.log(lemonade2)
// console.log(lemonade.calculatePrice())

// for(let key in lemonade) {
//     const newLemonade = {
//         //using ...objectName, will copy keys & values to the new object
//         [key]: lemonade[key] // this way only replaces the current key & value in the object without ...objectName 
//     }
// }

console.log('testing callbacks');
setTimeout(function () {
  return console.log('I waited 5 seconds');
}, 5000);
console.log('Did not wait. Too eager!');
setTimeout(function () {
  return console.log('I waited 2 seconds');
}, 2000);