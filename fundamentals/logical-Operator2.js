/*
*logical Operators with truthy and falsy values
* 1. OR || 
* 2. AND &&
*/

/* Values :-
* Truthy
* Falsy : Empty String, 0, null, undefined
*/

const fullName = "Geet Govind";
const firstName = "Geet";
const lastName = "Govind";
const nickName = "geet";

console.log(fullName || firstName || lastName || nickName);
// OR condition moves from left to right to check the condition
// It will search for the first truthy value
// If all are false then, last valur will be printed
console.log(Boolean(firstName)); // true
console.log(Boolean(" ")); // true as it have a space
console.log(Boolean("")); // false
console.log(Boolean(1)); // true 
console.log(Boolean(0)); // false 
console.log(Boolean(null)); // false 
console.log(Boolean(undefined)); // false 

const fName = null;
const lname = undefined;
const userName = fName || lname || null || "AnnonymusGeek";
console.log(` Name:- ${userName}`);

let a=12;
let b;
console.log(a+b); // Nan = Not A Number as b is undefined

console.log(a + (b || 0)); // b is replaced by 0

