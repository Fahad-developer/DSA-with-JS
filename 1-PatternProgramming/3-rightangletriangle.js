// 1- triangle pattern
// “Write a JavaScript function that takes a number n and prints a right-angled triangle of stars (*) with n rows.”

/* Output :
    *
    * * 
    * * *
    * * * *
    * * * * *
*/

function triangle(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

triangle(5);



// 2- triangle pattern with numbers
// “Write a JavaScript function that takes a number n and prints a right-angled triangle with n rows, where each row contains increasing numbers starting from 1.”  

/* Output :
    1
    12
    123
    1234
    12345
*/


function triangleNumbers(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j.toString());
        }
        console.log();
    }
}

triangleNumbers(5);


/*

    Function: triangle(n)

    1- Outer loop (i)

    1 se n tak chalega

    Har iteration → ek new row start karega

    2- Inner loop (j)

    1 se i tak chalega

    Har iteration → ek * print karega current row mein

    3- console.log()

    Inner loop ke baad call hota hai

    Line break create karta hai → next row start

*/