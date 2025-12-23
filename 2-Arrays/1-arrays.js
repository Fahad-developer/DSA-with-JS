// array is a collection of values which can be of different data types
// let arr = [1, 'hello', true, null, undefined, { name: 'John' }, [1, 2, 3]];



let arr = [];

arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
arr.push(false);
arr.push("JavaScript");
arr.push({ key: 'value' });
arr.push([1, 2, 3]);
arr.push(99.99);
arr.push(null);
arr.push(undefined);
arr.push(function() { return "I'm a function"; });
arr.push(BigInt(9007199254741991));

console.log(arr)

console.log(arr[0]);
