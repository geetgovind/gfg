const title = `Array Sort methods`;
console.log(title);
console.log("------------------------------------");

// Sorting the array in the ascending an the descending order
// sorting in-place
// doesn't make another array will change the same array
const objects = ["apple", "banana", "cherry", "ball", "chair", "orange"];
objects.sort();
console.log(objects);// comparision is done by character by character
// just like the comparision in the dictionary
// UTF-16 
// Unicode Transformation Code

const numbers = [1,4,23,3,5,7,43,5,87,8,4,5,4,6,8,5,34,5,345];
numbers.sort();
console.log(numbers);// also uses UTF-16
// checking only the first digit

// to remove this anamoly use a recurcive function
function returnAescOrder(a, b){
    return a-b;
}
const arr1 = numbers;
arr1.sort(returnAescOrder);
console.log(`Ascending Order : `,arr1); 

function returnDescOrder(a, b){
    return b-a;
}
const arr2 = numbers;
arr2.sort(returnDescOrder)
console.log(`Descending Order : `, arr2)