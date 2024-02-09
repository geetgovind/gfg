const title = `Object reference and Shallow copy in Objects`;
console.log(title);
console.log("----------------------------------------------");

const person1 = {
    name : "geet",
    age : 25,
    address : {
        city : "Mumbai",
        state : "Maharashtra"
    }
}

console.log(person1);
const person2 = person1;
person1.name = "ashish"; // changing the first person object
console.log(person2)
console.log(person1);// reference // objects are copied by reference[memory]

// copy is a shallow copy for both objects
// both have the same memory location

console.log("----------------------------------------------");
console.log("Making Deep Copy can prevent this.");
// 1. spread
// 2. Zero Dash
// 3. JSON 
// Methods

const person3 = Object.assign({}, person1);
console.log(person3);
person3.name = "person3";
person3.address.city = "Delhi";// property nesting
person3.address.state = "New Delhi";// shallow copy changes the original
console.log(person3);// didn't change the first object person1 and vice-versa
console.log(person1);
// Object.assign is a deep copy for first level only
// Object.assign is a shallow copy for +1 or more level 
