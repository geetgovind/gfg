const title=`While & D0-While loop in JavaScript`;
console.log(title);

let i =1; // >5 always
while(i<5){ // infinite loop
    console.log(i);
    i=i+1;
}
console.log("Whie ends");

let j = 10
do{ // will run first time before checking the condition
    console.log(j);
    j++;
}while(j<15);
console.log("Do-While executed");