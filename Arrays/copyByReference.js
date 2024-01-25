const title = `Copy By Reference : Arrays in JavaScript`;
console.log(title);
console.log("--------------------------------------");

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = arr2;// refering the memory location of arr2
// arr3 is the shallow copy of arr2
console.log("Array1 : ", arr1);
console.log("Array2 : ", arr2);
console.log("Array3 : ", arr3);

// adiing element in an array
arr2.push(9);
console.log("Updated Array2 : ", arr2);
console.log("Updated Array1 : ", arr1);// Referencing not working bcz, diff memory location
console.log("Updated Array3 : ", arr3);// Array refrencing working bcz, of same memory location for storage of the data asllocated in tjhe both of the arrays 2 and 3.

// shallow copy can be avoided by Spread Operation
let arr4 = [...arr2];
console.log(arr4);
arr4.push(10);
console.log("updated Arr 2 :", arr2); // arr2 not changed by above operation
console.log("updated Arr 4 :", arr4); // only arr4 updated not arr2 