const title = `For loop Exercise`;
console.log(title);
console.log("--------------------------");

/**
 * 
 * *
 * * *
 * * * *
 * * * * *

 */

const star ="* ";
for(let i=1; i<=5; i++){
    console.log(star.repeat(i));
} 
console.log("--------------------------");
/**
*
* * 
* * * 
* * * * 
* * * * * 
* * * * 
* * * 
* * 
* 
*/
for(let i=1; i<=5; i++){
    console.log(star.repeat(i));
} 
for(let i=4; i>=1; i--){
    console.log(star.repeat(i));
} 
console.log("--------------------------");
const userName = "Geet Govind";
let count=0;
for(let i=0; i<userName.length; i++){
    console.log(`Index value of ${userName[i]} is ${i}`)
    count++;
}
console.log("--------------------------");
console.log(`No. of Characters : ${count}`);
console.log("--------------------------");
console.log("Find all the even numbers from 1 to 101;")
console.log("--------------------------");
for(let i=1; i<=10; i++){
    if(i%2===0){
        console.log(`${i} is a even number.`);
    }else{
        console.log(`${i} is a odd number.`)
    }
}

console.log("--------------------------");
console.log("Check vowels in an given string.")
console.log("--------------------------");
const string = "hello, I love GeeksForGeeks...";
const vowels = "aeiouAEIOU";
let vCount = 0;
let cCount = 0;
for(let i=0; i<string.length; i++){
    for(let j=0; j<vowels.length; j++ ){
        if(string[i]===vowels[j]){
            console.log(string[i]);
            vCount++;
        }
    }
}
console.log(`Given string \"${string}\" have ${vCount} vowels.`)