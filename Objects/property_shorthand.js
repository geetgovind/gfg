const title = `Property Shorthand in Objects`;
console.log(title);
console.log("-------------------------------------------------");

function getObjects(name, city){
    return{
        name : name, // can be written as name, city - shorthand
        city : city // js is smart under the hood
    }
}
const obj = getObjects("Geet", "Delhi");
console.log(typeof obj, obj);

const age =25;
const job = "Developer";
const student = "Ashish";
const course = "Redux";

console.log({student, course})