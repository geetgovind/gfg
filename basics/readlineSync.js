// Read-User-Data

const readlinesync = `ReadlineSync is a package in javaScript
 to read user data from input trminal
 1. node should be installed
 2. add it to path
 3. check version from "node -v"
 4. install npm
 5. check version of node package manager "npm -v"
 6. Run "npm install readline-sync" to instaal the package
 7. declare avariable to use it multiple times
 8. (a) : "const readlineSync = require("readline-sync");"
    (b) : "readlineSync.question("May I know your name ?");"
 9. .question() - is adefined method in the package
 10. then run file in terminal using "node filename"
 11. assign value input in 8b in avariable and then console log it
 `;

console.log(readlinesync);


// make a usable variable

const readlineSync = require("readline-sync");
const userName = readlineSync.question("May I know your name ?");
console.log(userName);