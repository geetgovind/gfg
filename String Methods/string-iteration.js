const title = `Iterating over Strings`;
console.log(title);
console.log("---------------------------");

const message = "Geet Govind is learning javaScript.";
for(let char of message){
    //here char is a variable which takes the value of every letter in the message
    console.log(char);
}
console.log("---------------------------");
let count = 0;
for(let char of message){
    if(char === 'a' || char === 'e' || char ==='i'){
        count++;
    }
}
console.log(`a,e,i occurs ${count} times in the string.`);
