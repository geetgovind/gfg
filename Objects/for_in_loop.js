const title = `For in loop in Objects`;
console.log(title);
console.log("-----------------------------");

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
}

const isPropertyFound = "name" in obj;
console.log(isPropertyFound);

for(let key in obj){ // objects doesn't support indexing
    console.log(key,` : `, obj[key], ` : `, typeof obj[key]);
}