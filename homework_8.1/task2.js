const originalArray = [1, 2, 3, 4, 5];

const mutatedArray = originalArray.map((element, index) => {
    return element * index;
});

console.log("Початковий масив:", originalArray);
console.log("Новий масив:", mutatedArray);