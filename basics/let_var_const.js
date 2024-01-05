// var v/s let v/s const

var message;
message = "hello";
var message = "hiii";
var message = "byee";
console.log(message); // var is re-declareable

let text;
text = "let is not re-declareable";
text = "let can be re-assigned but not re-initialised."
console.log(text);

const num = 5;
const msg = "const must be initialised at the time of declaration and can't change again";
console.log(num);
console.log(msg);

