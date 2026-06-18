function printWithDelay(text, ms) {
    setTimeout(() => {
        console.log(text);
    }, ms);
}

printWithDelay("This text appears after 2 seconds", 2000);
printWithDelay("This text appears after 4 seconds", 4000);

console.log("End of the script");