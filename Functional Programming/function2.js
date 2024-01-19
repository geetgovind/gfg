const title =`Annonymus Function & Function Expressions`;
console.log(title);

// annonymusFunction(); - can't be accessed before initialization
// function Expression
let annonymusFunction = function (){
    console.log("hello....");
}
console.log(typeof annonymusFunction);
annonymusFunction();

// Named function expresssion
let anFunction = function greetUser(){ // only accessed with name of variable
    console.log("hello....");
}
console.log(typeof anFunction);
anFunction();