const title = `Given a number, you have to use switch statement to print "One" (without quotes) if the given number is equal to 1 else print "Not One"(without quotes).`;
const number = 1;
switch(number){
    case 1: if(number ===1){
        result = "One";
    }
    break;
    default : result = "Not One";
    break;
}
console.log(result);