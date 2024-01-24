const title = `JS String Method - includes()`;
console.log(title);
console.log("---------------------------------");

const str = "Geeks for Geeks";
const check = "Geeks";
function checkString(str, check){
    var check = str.includes(check);
    if(check){
        return "present";
    }else{
        return "not present";
    }
}
const result = checkString(str, check);
console.log(result);

console.log("----------------------------------");
