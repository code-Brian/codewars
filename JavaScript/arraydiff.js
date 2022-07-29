// Your goal in this kata is to implement a difference function, whch subtracts one list from another and returns the result. 

// It should remove all values from list a, which are present in list b keeping their order.
// creat a function that takes two arrays as arguments
function arrayDiff(arr1,arr2) {
    // store the values of each array in new variables
    let a = arr1;
    let b = arr2;
    // iterate through the first array
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if(a[i] == b[j]){
                a.splice(i,1);
            }
        }
    }
    return a;
}   

console.log(arrayDiff([1,2,3,4,5,6], [1,3,6]));
