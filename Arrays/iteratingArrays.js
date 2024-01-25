const title = `Basic Properties of Arrays and Iterating over Array`;
console.log(title);
console.log("-------------------------------------");
console.log("Array :- A Non-Primitive Data types.")
console.log("-------------------------------------");
// in JS array can store diff types of values in a single variable
var house = ["1BHK", 2020, "2BHK", 2021, "3BHK", 2022];
for(let i=0; i<house.length; i+=2){
    console.log(`${house[i]} was made in ${house[i+1]}`);
}
console.log("-------------------------------------");
let sampleName = ["Prakash", "Adarsh", "Riya", "Ashish", "Jay", 1, 2, 3, 4, 5, ["HTML", "CSS", "JS"], {schoolName : "SIES"}];
let studentName = ["Prakash", "Adarsh", "Riya", "Ashish", "Jay"];
console.log("-------------------------------------");
// using indices separately
console.log(studentName);
console.log("-------------------------------------");
// using for loop
for(let i=0; i<studentName.length; i++){
    console.log(studentName[i]);
}
console.log("-------------------------------------");
// for let of for loop 
for(let name of studentName){
    console.log(name);// gives values of array
}
console.log("-------------------------------------");
// for let in for loop
for(let name in studentName){
    console.log(name); // gives iindex of array
    console.log(`${studentName[name]} has index value ${name} in the array.`);
}