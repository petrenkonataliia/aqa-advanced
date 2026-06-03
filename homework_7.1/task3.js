function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
        throw new Error("Both arguments must be numbers");
    }

    if (denominator === 0) {
        throw new Error("Dividing by zero is not allowed");
    }

    return numerator / denominator;
}

// Correct call
try {
    console.log(divide(10, 2));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

// Divided by zero
try {
    console.log(divide(10, 0));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}

// Invalid type
try {
    console.log(divide(10, "5"));
} catch (error) {
    console.log(error.message);
} finally {
    console.log("Робота завершена");
}