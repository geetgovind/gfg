const title = `Destructing Array`;
console.log(title);
console.log("----------------");

const numbers = [1,2,3, ["html", "css", "js"], 5,6];
// it can assign all the objects to distinct variabes
const [a,b,c, courses] = [1,2,3, ["html", "css", "js"]];
console.log(`a- ${a}, b- ${b}, c- ${c}`);
console.log(courses);
// also it can be don ein this way

const [, , , course] = [1,2,3, ["html", "node"]];
console.log(course);
const [, , , dev , ...rest] = numbers; // nested destructuring
console.log(dev);
console.log(rest);

/**
 * Swapping the enumbers
 */

let x =5;
let y=10;

[x, y] = [y, x];
console.log(x, y);
