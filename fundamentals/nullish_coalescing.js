const title = `Nullish Coalescing introduced in the ECMA 6.`;
console.log(title);

/*
* Nullish Coalescing ??
* || vs ??
*/

const firstName = "";// empty string is a true value treated in nullish coalescing
let fName; // to make it null or undefined use let

console.log(fName ?? "HiddenGeek"); // works in case of null and undefined
console.log(null ?? "HiddenGeeks");

const a =0;

console.log(a||1); // for OR 0- falsy value
console.log(a??1); // for ?? 0- assigned value; it doesn't have truthy and falsy avlue concept

