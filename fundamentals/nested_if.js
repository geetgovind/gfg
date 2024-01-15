console.log("Nested IF Statements");

const readlineSync = require("readline-sync");

const number = readlineSync.question("Eneter a number : ");
const remainder = number % 2;

if(number > 6){
    console.log(`${number} is greater than 6.`);
}else{
    console.log(`${number} is less than 6.`);
}

if(remainder === 0){
    console.log(`${number} is an even number.`);
    if(number % 4 ===0){
        console.log(`${number} is divisible by 4.`);
    }else{
        console.log(`${number} is not divisible by 4.`);
    }
}else{
    console.log(`${number} is an odd number, and also not divisible by 4.`);
    if(number % 5 === 0){
        console.log(`${number} is divisible by 5.`);
    }else{
        console.log(`${number} is not divisible by 5.`);
    }
}