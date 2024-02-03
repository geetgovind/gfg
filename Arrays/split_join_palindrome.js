const title = `Array Methods : Split and join`;
console.log(title);
console.log("--------------------------------");

const inputStr = "madam may i come in";
const myName = "geetgovind";
const palindrome = "malayalam"
// we can't apply reverse method to a string
// we use split method to string to convert in an array
let arrOfInputStr = inputStr.split();
console.log(typeof arrOfInputStr," : ",arrOfInputStr);//not splitted converted in array : no argument
let arrOfInputStr2 = inputStr.split("");
console.log(typeof arrOfInputStr2," : ",arrOfInputStr2);// completely separated
let arrOfInputStr3 = inputStr.split(" ");
console.log(typeof arrOfInputStr3," : ",arrOfInputStr3); // separated over space : made all words an element in array
let arrName = myName.split("");
console.log(typeof arrName," : ",arrName);
let joinedNameWithComma = arrName.join(",");// converted array object into string
let joinedName = arrName.join("");// converted array object into string without comma
console.log(typeof joinedNameWithComma," : ", joinedNameWithComma)
console.log(typeof joinedName," : ", joinedName)
console.log("------------------------------------");
console.log("WAP to check the string is palindrome or not?")
console.log("------------------------------------");

// string -> array [use split]-> reverse array [use reverse on array] -> 
// -> string [use join] -> compare string
// advance cases : use a uppercase or lower case to strict compare

let arrpalindrome = palindrome.split("");
let strPalindrome = arrpalindrome.reverse();
let revStrPal = strPalindrome.join("");
if(revStrPal == palindrome){
    console.log("it's Palindrome");
}else{
    console.log("not a palindrome")
}