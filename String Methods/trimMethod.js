const title = `JS String Method - trim()`;
console.log(title);
// trim method used to remove spaces in strings
const str = "   Hola!!     Geeksforgeeks    ";
console.log(str.length); // counts spaces
console.log(str.trim()); // trims only spaces from start and end of string
console.log(str.trim().substring(0,6)+"..."); // use another method over another in strings