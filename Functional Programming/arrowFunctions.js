const title = `Arrow Functions`;
console.log(title);
console.log("---------------------------");

// Arrow Functions or Fat Arrow Functions
const calculateSum = (x, y) => {
  return x + y;
};
console.log(calculateSum(15, 4));
console.log("---------------------------");
// Basic Function Expression
const calcSum = function (x, y) {
  return x + y;
};
console.log(calcSum(5, 4));
console.log("---------------------------");
//Small Declaration of Fat Arrow Function
const add = (x, y) => x + y; // short form of arrow function
const subtract = (x, y) => x - y; // short form of arrow function
console.log(add(12, 18));
console.log(subtract(12, 18));
console.log("---------------------------");
// Function cascading
const xGreaterY = (x, y) => {
  if (x > y) {
    return add(x, y);
  } else {
    return subtract(x, y);
  }
};
console.log(xGreaterY(12, 222));
console.log("---------------------------");
// Using ternary operator
// const output = condition ? true : false;
let opsAddSub = (x, y) => (x > y) ? add(x,y) : subtract(x,y);

let result = opsAddSub(100, 45);
console.log(result);
