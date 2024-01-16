console.log(`Ternary Operators - 1`);

const readlineSync = require("readline-sync");

let marks = readlineSync.question("Enter your marks in subject : ");
marks = Number(marks);
const passingMarks = 33;
const result = marks >= passingMarks ? true : false;

if (result) {
  console.log(
    `As ${marks} is greter than or equals to the passing marks. You have cleared the subject. `
  );
} else {
  console.log(`As ${marks} is less than passing marks. You need to work hard.`);
}


