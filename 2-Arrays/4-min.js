let arr = [2, 7, 11, 15, 1];

function findMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    console.log("Minimum value in the array is: " + min);
}

findMin(arr);