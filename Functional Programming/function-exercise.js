const title = `Function Exercise`;
console.log(title);
console.log("-----------------")
console.log("Sum of All number from 1-200");
console.log("-------------------------")
function calculateSum(min, max){
    let result = 0;
    for(let i=min; i<=max; i++ ){
        result = result+i;
    }
    return result;
}
const result = calculateSum(1, 200);
console.log(result);