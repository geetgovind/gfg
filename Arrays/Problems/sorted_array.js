

const arr = [10, 20, 30, 40, 50];
const n = 5;

function arraySortedOrNot(arr, n) {
    // code here
    var result = 1;
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[i + 1] && i < n - 1) {
            result = 0;
        }
    } return result;
}
// const result = arraySortedOrNot(arr, n);
// console.log(result);

function sortedAscending(arr, n){
    var result = true;
    for(let i=0; i<n; i++){
        if(n==1 || n==0){
            return true;
        }
        if(arr[i-1] < arr[i]){
            result = true;
        }else{
            return false;
        }
    }
}

const result = sortedAscending(arr, n);
console.log(result);
