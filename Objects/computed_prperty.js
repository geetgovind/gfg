const title = `Computed Property and adding property to objects`;
console.log(title);
console.log("-------------------------------------------------");
const readlineSync = require("readline-sync");
const key = readlineSync.question("what you want to know about mentor? (name, age, citi, state): ");
const course = readlineSync.question("what course you want? : ");
let obj = {
    name : "Geet Govind",
    dept : "DICT",
    constUnit : "CIET",
    institute : "NCERT",
    location : "New Delhi",
    pin : 110016,
    displayInfo : function(){// annonymus function
        return (`${this.name} is working in ${this.dept} department of ${this.constUnit}, ${this.institute} situated in ${this.location}, Pincode : ${this.pin}.`);
    },// can't use arrow function here
    bye(){// function name is treated as a key
        console.log("Tata Bye Bye");
    },// direct function as aproperty in an object
    [course] : "not avaliable"
}

obj.city = "Mumbai"; // added another property in the object
obj.state = "Maharashtra";
obj.age = 25;
const result = obj.displayInfo();
console.log(result);
console.log(obj);
console.log(obj.bye());

console.log(obj[key]);
console.log(`Age of your mentor is ${obj[key]}`);
console.log(obj[course]);
console.log(obj["name"]);