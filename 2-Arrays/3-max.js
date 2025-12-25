let arr = [2, 7, 11, 15];


function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log("Maximum value in the array is: " + max);
}

findMax(arr);
