// Your goal in this kata is to implement a difference function, whch subtracts one list from another and returns the result. 

// It should remove all values from list a, which are present in list b keeping their order.
// creat a function that takes two arrays as arguments
function arrayDiff(arr1,arr2) {
    // iterate through the first array
    for (let i = 0; i < arr1.length; i++) {
        console.log(i);
        // check if values of a are present in each index of b
        for (let j = 0; j < arr2.length; j++) {
            // if values are present in list a, and list b, remove values from list a
            console.log(j);
            if (arr1[i] == arr2[j]) {
                arr1[i].slice(1,1);
            }   
        }     
    }
    return arr1;  
}

console.log(arrayDiff([1,2,3,4,5,6], [1,3,6]));
