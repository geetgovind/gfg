// Comparison operators

console.log(50>32); //true
console.log(50<32); // false

// Greater than or equal to and less than or equal to
console.log(50<=32); // false
console.log(50>=32); // true

// Equality Check

console.log(40 == 40); // true
console.log(40 == 30); // false

// String Comparison
// Compares the ASCII of first character of strings
console.log("apple" > "banana");// false
console.log("apple" < "banana");// true

// if start is same then checks for the length of string
console.log("glow" > "glowing"); // false
console.log("glow" < "glowing"); // true

console.log("Apple" < "apple"); // true acc. to ASCII Code
console.log("Apple" > "apple"); 
// A :- 67   a :- 98

// String and Number Comparision

console.log("2" > 1);
console.log("2" < 5);

// Equality  Operator
console.log("01" == 1); // Doesn't check typeof variable
// Strict Equality Operator 
console.log("01" === 1); // Check type of variables as string =/= number

console.log(null == undefined);
console.log(null === undefined);
// With comparision of number null becomes zero in value except equality
console.log(null > 0);
console.log(null < 0);
console.log(null < 1);
console.log(null > 1);
console.log(null >= 0);
console.log(null == 0);// But, eauality with zero is always false
console.log(null === 0);