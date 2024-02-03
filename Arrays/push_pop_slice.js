const title = `Array Methods : Push, Pop, Slice`;
console.log(title);
console.log("----------------------------------");
console.log("POP, SLICE, SPLICE");
console.log("--------------------")
/**
 * pop - removes last object
 * slice - removes object specified with indexes
 * splice - does both the work unlike both of them 
 */

let course = ["html", "css", "js", "reactjs", "jquery"];
console.log(typeof course, " : ", course);
let popCourse = course.pop();
console.log("popped object : ", popCourse)
console.log("updated course : ", course) // changes the original array

let sliceCourse = course.slice(3, 4);
console.log(typeof sliceCourse," : ",sliceCourse);
console.log("updated course : ", course) // doesn't changes the original array
// returns a shallow copy

// we can make a new array out of a given one
let newArray = course.slice(1, 4);
console.log(newArray)


