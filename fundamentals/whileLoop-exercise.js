const title = `User enters a number, if the number is greater than 50 then ask to enter again.`;
console.log(title);

let readlineSync = require("readline-sync");
let number = readlineSync.question("ENter a number < 50 : ");
// We can skip the above statement to make it optimised
// set number = 51 or >50
// let = 500;
while(number > 50){
    number = readlineSync.question("ENter a number < 50 : ");
}

console.log("Number Accepted");
