function calculateArea(width, height) {
    return width * height;
}

console.log(calculateArea(7, 20));


const calculateAreaExpression = function (width, height) {
    return width * height;
};

console.log(calculateAreaExpression(9, 10));


const calculateAreaArrow = (width, height) => {
    return width * height;
};

console.log(calculateAreaArrow(22, 10));