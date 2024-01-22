const title = `Return and Undefined`;
console.log(title);

function calcSum(x, y){
    console.log(x+y);// Never do a console log in a function
}
calcSum(12, 15);


// Pure function - 
//A function takes a value
// don't change the type of value
// and returns something
// it doesn't mutate
function calculateSum(x, y){
    return(x+y); // stops the execution of function body
}
console.log(calculateSum(12, 15));