const person = {
    firstName: "Василь",
    lastName: "Гринченко",
    age: 31
};

person.email = "test@email.com";

delete person.age;

console.log(person);