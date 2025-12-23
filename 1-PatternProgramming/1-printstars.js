// “Write a JavaScript function that takes a number n and prints n stars (*) on separate lines.”

/* Output : 

     *
     *
     *
     *
     *
*/


function printstars(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*");
    }
}


printstars(5);