const title = `Logical Operators Part 3`;
console.log(title);

console.log("We don\'t use AND operator for short circuiting, we prefer to use the logical OR operator for that.");

console.log(3||2||1); // 3
console.log(""||0||1); // 1
console.log(""||0||undefined); // undefined
console.log(""||"null"||2); // null - string

console.log(3 && 2 && 12); // 12 - all correct and last truthy val
console.log("" && 0 && 2); // one false - first falsy value
console.log("undefined" && "null" && ""); // one false - first falsy value