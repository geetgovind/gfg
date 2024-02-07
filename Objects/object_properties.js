const title = `Objects in JS and it's properties`;
console.log(title);
console.log("-------------------------------");
// objects are most complex data structures in JS
// Must learn this for using APIs 
let schoolName = {
    name: "Kendriya Vidyalaya", // property
    location: "New Delhi",
    established: 1965,
    displayInfo: function () {
        console.log(`${this.name} was established in ${this.established} and located in ${this.location}`)
    }
};

schoolName.displayInfo();

const obj = {}// object literal method
console.log(typeof obj); // object
// key must be a string, value can be any data type
const details = {
    name : "Geet Govind",
    job : "Web Developer",
    age : 25,
    1 : "Number One"   // key 1 is going to be converted in string implicitily
}
console.log(details);
/**
 * {
  '1': 'Number One', // key 1 is converted in a string
  name: 'Geet Govind',
  job: 'Web Developer',
  age: 25
}
 */

const profile = {
    name : "Geet Govind",
    course : ["html", "CSS", "JS", "reactjs", "vitejs", "redux", "nextjs"],
    "is Admin" : true 
}
console.log(profile)
console.log(profile.name)
console.log(profile.course)
console.log(profile["course"]) // pass as the string only
// why we need both methods
// because of the key naming in objects can hace spaces too & it can be called using .- method

console.log(profile["is Admin"]);
