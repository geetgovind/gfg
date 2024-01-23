const title = `Given a positive integer, N. Find the factorial of N.`;
console.log(title);

console.log("-----------------------------------------");

function factorial(N){
    let fact = 1; // use var here that it can be accessed out of the function
    for(let i=N; i>=1; i--){
        fact = fact*i;
    }
    return fact;
}
for(let i=1; i<=18; i++){
    const result = factorial(i);
console.log(result);
}

/**
 * The main difference between let and var in JavaScript is that let variables 
 * are block-scoped, while var variables are function-scoped. 
 * This means that let variables can only be accessed within the block in
 *  which they are declared, while var variables can be accessed 
 * anywhere within the function in which they are declared.
 */