const title = `You are given a number  and you have to print your answer according to the following:
If the number is divisible by 3, you print "Fizz" (without quotes)
If the number is divisible by 5, you print "Buzz" (without quotes)
If the number is divisible by both 3 and 5, you print "FizzBuzz" (without quotes)
In any other case, you print the number itself`;

const number = 57676;

if(number % 3 === 0 && number % 5 === 0){
    console.log("FizzBuzz")
}else if(number % 5 === 0){
    console.log("Buzz")
}else if(number % 3 === 0 ){
    console.log("Fizz")
}else{
    console.log(number)
}