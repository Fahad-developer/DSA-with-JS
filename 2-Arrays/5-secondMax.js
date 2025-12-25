let arr = [2, 3, 4, 5, 1, 6, 8, 7];

function secondMax(arr) {
    let firstMax = Math.max(arr[0], arr[1]);
    let secondMax = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > firstMax) {
            secondMax = firstMax;
            firstMax = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] != firstMax) {
            secondMax = arr[i];
        }
    }

    console.log("First Maximum value in the array is: " + firstMax);
    console.log("Second Maximum value in the array is: " + secondMax);

}


secondMax(arr);


/*

How it works:
1. We initialize two variables, firstMax and secondMax, to keep track of the largest and second largest values in the array. We start by comparing the first two elements of the array to set these initial values. 

2. We then iterate through the rest of the array starting from the third element. For each element, we check if it is greater than firstMax. If it is, we update secondMax to be the current firstMax, and then update firstMax to be the current element. This way, we always keep track of the two largest values in the array.

3. Finally, we print out the first and second maximum values found in the array.

*/