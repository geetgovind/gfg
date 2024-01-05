// Type Conversion

// to string
// to number
// to boolean

const a = "3";
const b = "13";

console.log(a+b);
console.log(Number(a) + Number(b));
console.log(typeof (a+b));
// converting string to numbers
const c = Number(a);
const d = Number(b);

console.log(c+d);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

const e = 5;
const f = 89;
// converting numbers to string
const g = String(e);
const h = String(f);

console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);

const userName = "Geet Govind";

console.log(Boolean(userName));// if variable is assigned - true
console.log(Boolean("")); // if blank - false

const num =12;
const num1 = 0;
console.log(Boolean(num));// true if number assigned
console.log(Boolean(num1));// false if value is 0 otherwise true