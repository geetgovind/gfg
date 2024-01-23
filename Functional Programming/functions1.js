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

/**
 * The main difference between let and var in JavaScript is that let variables 
 * are block-scoped, while var variables are function-scoped. 
 * This means that let variables can only be accessed within the block in
 *  which they are declared, while var variables can be accessed 
 * anywhere within the function in which they are declared.
 */

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