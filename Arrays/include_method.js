const title = `Array Includes  methods`;
console.log(title);
console.log("------------------------------------");

const avaliablSize = ["S", "M", "L", "XL", "XXL", "XXXL"];

const readlineSync = require("readline-sync");
const userSize = readlineSync.question(`Which Size you want ? We have ${avaliablSize} :`);
const userInput = userSize.toUpperCase();
const isSizeAvaliable = avaliablSize.includes(userInput);
if(isSizeAvaliable){
    console.log(`"${userSize}" Size is avaliable`);
}else{
    console.log(`"${userSize}"Size is not avaliable`);
}