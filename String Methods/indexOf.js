const title = `String Method - indexOf`;
console.log(title);
console.log("------------------------------------------");
const str = "geeks for geeks"
console.log(str.indexOf('r'));
console.log("------------------------------------------");
console.log(str.indexOf('g', 3));
console.log("------------------------------------------");
console.log("Find a character in a string.")
console.log("------------------------------------------");
// Normal Function
// function findCharacter(str, char){
//     const index = str.indexOf(char);
//     if(index === -1){
//         return `Character '${char}' not found in ${str}`;
//     }else{
//         return `Character '${char}' found in ${str}`;
//     }
// }

// Arrow function
const findCharacter = (str, char) => str.indexOf(char) === -1 ? `Character '${char}' not found in ${str}` : `Character '${char}' found in ${str}`; 
const result = findCharacter(str, 'f');
console.log(result);