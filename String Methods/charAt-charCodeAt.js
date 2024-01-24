const title = `String Method : charAt() and charCodeAt()`;
console.log(title);
console.log("------------------------------------------");

const message = "Geet Govind";
for(let i=0; i<message.length; i++){
    console.log(message.charAt(i));
}
console.log("------------------------------------------");
function getChar(str){
    return str.charAt(5);
    
}

const result = getChar(message);
console.log(result);
console.log("------------------------------------------");
console.log("charCodeAt");// gives ASCII code for characters
console.log("------------------------------------------");

for(let i=0; i<message.length; i++){
    console.log(`ASCII code for ${message[i]} is : ${message.charCodeAt(i)}`);
}

console.log("------------------------------------------");
console.log("Encode \"geeks\" with 2nd next characters in series.");
console.log("------------------------------------------");
const readlineSync = require("readline-sync");
const geek = readlineSync.question("Enetr a string to encode : ")
 
var encode = "";
for(let i=0; i<geek.length; i++){
    var code = geek.charCodeAt(i) +2;
    code = String.fromCharCode(code);
    encode += code; 
}
console.log(encode);