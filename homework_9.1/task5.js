const users = [
    { name: "Олена", email: "olena@example.com", age: 24 },
    { name: "Ігор", email: "ihor@example.com", age: 30 },
    { name: "Марія", email: "maria@example.com", age: 19 }
];

for (const { name, email, age } of users) {
    console.log(`Користувач: ${name} | Email: ${email} | Вік: ${age}`);
}