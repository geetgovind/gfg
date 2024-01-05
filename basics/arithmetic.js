// Arithmetic Operators

// Javascript behaves differntly when operating with strings 

const x =12;
const y =3;
console.log(x+y);// Addition
console.log(x-y);// Sunbtraction
console.log(x*y);// Multiplication
console.log(x/y);// division
console.log(x%y);// modulo - remainder
console.log(x ** 2); // power - square
console.log(x ** 3); // power - cube

// if we convert them into strings
const x2 ="12";
const y2 ="3";
console.log(x2+y2);// Addition of strings works here
console.log(x2-y2);// Sunbtraction
console.log(x2*y2);// Multiplication
console.log(x2/y2);// division
console.log(x2%y2);// modulo - remainder
console.log(x2 ** 2); // power - square
console.log(x2 ** 3); // power - cube

// if we convert one string and another number

const x4 =12;
const y3 ="3";
console.log(x4+y3);// Addition of strings and number works here
console.log(typeof (x4+y3));// type of result is string
console.log(x4-y3);// Sunbtraction
console.log(x4*y3);// Multiplication
console.log(x4/y3);// division
console.log(x4%y3);// modulo - remainder
console.log(x4 ** 2); // power - square
console.log(x4 ** 3); // power - cube

// if both are strings

const x3 ="mango";
const y4 ="apple";
console.log(x3+y4);// Addition of strings  works here
console.log(typeof (x3+y4));// type of result is string
console.log(x3-y4);// Sunbtraction
console.log(x3*y4);// Multiplication
console.log(x3/y4);// division
console.log(x3%y4);// modulo - remainder
console.log(x3 ** 2); // power - square
console.log(x3 ** 3);

// other than + - concatination all will result in NaN

console.log("NaN : Not a Number");