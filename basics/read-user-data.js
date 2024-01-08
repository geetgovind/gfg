// Read User Data 

const readlineSync = require("readline-sync");
const userName = readlineSync.question("What is your Name ? : ");
const userAge = readlineSync.question("What is your Age ? : ");
const yearOfBirth = 2023 - userAge;
const profile = `Welcome!! ${userName}, to our very first javaScript I/O program using readline-sync package. Your age is ${userAge}, that means you are born in year ${yearOfBirth} and you are here for the javaScript. And yor'e late i think!!`;
console.log(profile);