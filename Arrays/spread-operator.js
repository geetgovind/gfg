const title = `Spread Operator`;
console.log(title);
console.log("------------------------");

const arr = [1,2,3,4,5,6];
console.log("Spreaded Array -", ...arr);// spreading the objects in the array

console.log("Array - ", arr)

const arr2 = [7,8,9,10];
const arr3 = [...arr, ...arr2];
console.log("Merged array with spread array method- ", arr3)
const arr1 =[...arr, 2,4,6,...arr2, 7,8,];
console.log(`Added elemets in array - `, arr1)