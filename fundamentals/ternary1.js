console.log(`Ternary Operators - 1`);

const readlineSync = require("readline-sync");

let marks = readlineSync.question("Enter your marks in subject : ");
const passingMarks = 33;
const result = marks >= passingMarks ? true : false;

if (result) {
  console.log(
    `As ${marks} is greter than or equals to the passing marks. You have cleared the subject. `
  );
} else {
  console.log(`As ${marks} is less than passing marks. You need to work hard.`);
}

marks = Number(marks);
let gradePoint;
if (marks >= 0 && marks <= 100) {
  gradePoint =
    marks <= 20 && marks >=0
      ? "E2 : Fail"
      : marks <= 32 && marks >= 21
      ? "E1 : Fail"
      : marks <= 40 && marks >= 33
      ? "D : 4.0"
      : marks <= 50 && marks >= 41
      ? "C2 : 5.0"
      : marks <= 60 && marks >= 51
      ? "C1 : 6.0"
      : marks <= 70 && marks >= 61
      ? "B2 : 7.0"
      : marks <= 80 && marks >= 71
      ? "B1 : 8.0"
      : marks <= 90 && marks >= 81
      ? "A2 : 9.0"
      : "A1 : 10.0";
  console.log(gradePoint);
} else {
  console.log(
    `Entered ${marks} is out of range. Marks should be in range 0-100.`
  );
}