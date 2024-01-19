const title = `Functions in javaScript.`;
/**
 * Function Statement 
 * Function Declaration
 * Parameters
 * Arguments
 */
greetUser("Govind");  // Calling the function - can also be called before declaration
function greetUser(userName, city){ // initialization
    // userName - parameter
    console.log(`Hello Geeks...${userName} from ${city}`);
}
greetUser("Geet", "Delhi");  // Calling the function
// "Geet" - argument


console.log("--------------------------------------------------------------");
console.log("Calculate sum from min to max passed as arguments in function.");
console.log("--------------------------------------------------------------");
function calculateSum(min, max){
    let sum =0;
    for(let i=min; i<=max; i++){
        sum = sum+i;
    }
    console.log(sum);
}
calculateSum(1, 10);