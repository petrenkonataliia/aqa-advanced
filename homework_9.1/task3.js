const car1 = {
    brand: "Wolkswagen",
    model: "Polo",
    year: 2020
};

const car2 = {
    brand: "BMW",
    model: "X5",
    owner: "Олена"
};

const car3 = { ...car1, ...car2 };

console.log(car3);