const title = `Given a number, you have to use the if statement to print "Big" (without quotes) if the given number is greater than 100, and use the else statement to print "Number" (without quotes) when the number is smaller than or equal to 100.
Note: You should print the newline after printing"Number" or"Big".`;
console.log(title);
const number = 56;
if(number>100){
    console.log("Big")
}else if(number<= 100){
    console.log("Number")
}