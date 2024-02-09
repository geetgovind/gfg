const title = `Optional Chaining`;
console.log(title);
console.log("=-=-=-=-=-=-=-=-=-=-=-");

const user = {
    name : "geet",
    age : 25,
    address : {
        street : "Kalina",
        city : "Mumbai",
        state : "Maharashtra"
    },
    likes : "Eat Sleep Code Repeat",
    getDisplayMessage : function(){
        console.log(`Welcome ${this.name}`);
    }
}

console.log(user.address.city);
console.log(user.address.landmark);// property not found = undefined
// undefined is only in the case in first level
// if in second level called if first one is not defined then it'll throw the error

// console.log(user.hobby);// undefined
// console.log(user.hobby.type);// Error

// Solution 01
if(user.address !== undefined){// to check for error or undefined
    console.log(user.address.city);
}

// Sol 02

console.log(user.address?.city);// optional chaining
// checks for city only if address id defined

console.log(user.getDisplayMessage());
user.getDisplayAddress?.();// error without option chaining ?. -> chaining

console.log(user?.hobbies);