const title = `You have to find exact volume of some objects just by knowing the some of their dimensions. Here we will find volume of a cube and a rectangular box by completing the given functions.`;
console.log(title);
console.log("----------------------------------");

function volCube(s){
    var result = Math.pow(s, 3);
    return result;
}
const result = volCube(3);
console.log(result);
console.log("----------------------------------");

function volRectangle(l, b, h){
    return l*b*h ;
}
const volRect = volRectangle(2,3,4);
console.log(volRect);