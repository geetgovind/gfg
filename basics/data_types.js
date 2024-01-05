// Data Types
// String

let userName = "geet123456789";
console.log(typeof(userName));

// Number
let num = 89;
console.log(typeof num);

//Boolean
let isProductInCart = false;
if(isProductInCart){
    console.log("Product is in cart.");
}else{
    console.log("Product is not in cart");
}

// Undefined 
// a assigned value if no value is assigned to an variable
let uName;
console.log(uName);

// null
// type of null is object
let noValue = null;
console.log(typeof noValue);

/* Above all are primitive Data Types */

//Object
// Object is non-primitive data types
// can initialize multiple value to a same variable
const personDetails = {name : "geet", age : 25, occupation : "Developer"};
const arrayOfNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//array of numbers ia also an object
console.log(typeof personDetails);
console.log(typeof arrayOfNumber);
console.log(personDetails.age);
console.log(personDetails.name);
console.log(personDetails.occupation);
console.log(personDetails+arrayOfNumber);