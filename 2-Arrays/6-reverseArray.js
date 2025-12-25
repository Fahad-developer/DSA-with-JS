// Reverse using Extra Space

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp = new Array(arr.length);

console.log(temp)

function reverse(arr, temp) {
    j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp[j] = arr[i];
        j++;
    }

    console.log(temp);
}

reverse(arr, temp);