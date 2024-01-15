const title = `Logical Opertaors [ NOT(!), AND(&&), OR(||)]`;
console.log(title);

// NOT operator reverses the condition and boolean
const notOps = true;
if(!notOps){
    console.log("notOps = true");
}else{
    console.log("notOps = false by applying NOT operator.");
}

const phy = 90;
const chem = 88;
const bio = 66;
const maths = 95;

// AND - strict check - all condition must be true
if (phy >= 85 && maths >= 85 && chem >= 85 && bio >= 85) {
    console.log("You are eligible for Medicals and Engg. both.");
} else if (phy >= 85 && maths >= 85 && chem >= 85) {
    console.log("You are only eligible for Engg...");
} else if (phy >= 85 && maths >= 85 && bio >= 85) {
    console.log("You are only eligible for Medicals");
} else {
    console.log("You need to work hard!!");
}

// OR - non-strict check - all condition must be true
if (phy >= 85 || maths >= 85 || chem >= 85 || bio >= 85) {
    console.log("You are eligible for Medicals and Engg. both."); // results this always
} else if (phy >= 85 || maths >= 85 || chem >= 85) {
    console.log("You are only eligible for Engg...");
} else if (phy >= 85 || maths >= 85 || bio >= 85) {
    console.log("You are only eligible for Medicals");
} else {
    console.log("You need to work hard!!");
}
