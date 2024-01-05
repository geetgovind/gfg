//Concatination 
// process to add many data into a single line

let userName = "Geet Govind";
let userAge = 25;

// My namw is geet Gvoind and my age is 25.
let message = "My name is " +userName + " and my age is "+ userAge+".";
console.log(message);

// This is bachha things
// In industry we use Template Literals

//Template Literals
// use backticks ` ` and no \n is required to break line
let finalText = `My anme is ${userName} and my age is ${userAge}.`;
console.log(finalText);
let multiLineInput = `Numbers: Represent both integer and floating-point numbers. Example: 5, 6.5, 7 etc.
String: A string is a sequence of characters. In JavaScript, strings can be enclosed within the single or double quotes. Example: “Hello GeeksforGeeks” etc.
Boolean: Represent a logical entity and can have two values: true or false.
Null: This type has only one value : null.
Undefined: A variable that has not been assigned a value is undefined.
Symbol: Unlike other primitive data types, it does not have any literal form. It is a built-in object whose constructor returns a symbol-that is unique. 
BigInt: The Bigint type represents the whole numbers that are larger than 253-1. To form a BigInt literal number, you append the letter n at the end of the number.
Object: It is the most important data-type and forms the building blocks for modern JavaScript. We will learn about these data types in detail in further articles.`;
console.log(multiLineInput);