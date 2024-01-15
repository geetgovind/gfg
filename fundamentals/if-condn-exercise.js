const title = `IF Condn Exercise`;
console.log(title);

const programmeStatement = `WAP in javaScript using readlin-sync that reads 3 strings and print the smallest in length of characters string amongst of them.`;
console.log(programmeStatement);

const readlineSync = require("readline-sync");
const string1 = readlineSync.question("First String : ");
const string2 = readlineSync.question("Second String : ");
const string3 = readlineSync.question("Third String : ");

const str1Length = string1.length;
const str2Length = string2.length;
const str3Length = string3.length;

if(str1Length < str2Length && str1Length < str3Length){
    console.log(`${string1} is smallest in length of characters.`);
}else if(str2Length < str1Length && str2Length < str3Length){
    console.log(`${string2} is smallest in length of characters.`);
}else if(str3Length < str1Length && str3Length < str2Length){
    console.log(`${string3} is smallest in length of characters.`)
}else{
    console.log(`Two or more strings are equal in length of characters.`);
}


console.log("Without readlineSync");
const firstString = "apple";
const secondString = "banana";
const thirdString = "pineapple";

const firstLength = firstString.length;
const secondLength = secondString.length;
const thirdLength = thirdString.length;



console.log(firstLength, secondLength, thirdLength);

if(firstLength < secondLength && firstLength < thirdLength){
    console.log(`${firstString} is smallest in length of characters.`);
}else if(secondLength < firstLength && secondLength < thirdLength){
    console.log(`${secondString} is smallest in length of characters.`);
}else if(thirdLength < firstLength && thirdLength < secondLength){
    console.log(`${thirdString} is smallest in length of characters.`)
}else{
    console.log(`Two or more strings are equal in length of characters.`);
}

