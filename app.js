// let userInput = prompt("Enter how many times the loop should run");

// for (let i = 0; i < userInput; i++) {
//   console.log(i);
// }
// let userInput = prompt("Enter how many times the loop should run");

// for (let i = userInput; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("Round " + i + " biryani no " + i + " Done");
//   for (let j = 1; j <= 1; j++) {
//     console.log("Pepsi " + i + " Done");
//     for (let k = 1; k <= 1; k++) {
//       console.log("Pastry " + i + " Done");
//     }
//   }
// }

// for (let i = 0; i < 3; i++) {
//   let row = "";
//   for (let j = 0; j < 3; j++) {
//     row = row + "* ";
// }
// console.log(row , i);
// }
// for (let i = 0; i < 30 ; i++) {
//   let row = "";
//   for (let j = 0; j < i; j++) {
//     row = row + "* ";
// }
// console.log(row , i);
// }
// for(let i = 0; i <= 50; i++) {
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// let arr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
// ];

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     count++;
//   }
// }
// console.log(count);


let Myname = prompt("Enter your name");

let uppercase = Myname[0].toUpperCase();
let lowercase = Myname.slice(1).toLowerCase();

console.log(uppercase + lowercase)
