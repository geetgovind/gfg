const title = `Nested For Loop`;
console.log(title);

for(let i=1; i<=2; i++){
    for(let j=1; j<=5; j++){
        console.log(`Value of i= ${i} and j= ${j}.`);
    }
    console.log("--------------------------");
}
console.log("Iteration of I and J completed in Nested Loop");

// Create a multiplication table for 2
console.log("--------------------------");
console.log("Multiplication tabel for 2");
for(let i=2; i<3; i++){
    for(let j=1; j<=10; j++){
        console.log(`${i} x ${j} = ${i*j}`);
    }
}
