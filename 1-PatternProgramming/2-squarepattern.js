// “Write a JavaScript function that takes a number n and prints an n × n square of stars (*).”


/* Output :
    * * * * *
    * * * * *
    * * * * *
    * * * * *
    * * * * *
*/


function square(n) {
    // outer loop for rows
    for (let i = 1; i <= n; i++) {
        // inner loop
        for (let j = 1; j <= n; j++) {
            // inner loop for columns
            process.stdout.write("* ");
        }
        // new line after each row
        console.log();
    }
}


square(5);


/* 
    Explanation:

    Function: square(n)

    1- Outer loop (i)

    1 se n tak chalega

    Har iteration → ek new line print hogi

    2- Inner loop (j)

    1 se n tak chalega

    Har iteration → ek * print karega same line par

    3- console.log()

    Inner loop ke baad call hota hai

    Line break create karta hai → next row start

*/