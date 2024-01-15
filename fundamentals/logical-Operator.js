const title = `Logical Opertaors [ NOT(!), AND(&&), OR(||)]`;
console.log(title);

const phy = 90;
const chem = 88;
const bio = 96;
const maths = 95;

if(phy >=85 && maths >=85 && chem >= 85){
    console.log("You are eligible for Engg...");
}else if(phy >=85 && maths >=85 && bio >= 85){
    console.log("You are eligible for Medicals");
}else{
    console.log("You need to work hard!!");
}