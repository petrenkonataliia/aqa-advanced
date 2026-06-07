const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = allNumbers.filter((number) => {
    return number % 2 === 0;
});

console.log("Початковий масив:", allNumbers);
console.log("Масив парних чисел:", evenNumbers);