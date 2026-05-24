const number = 2;

console.log("For:");

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

console.log("While:");

let i = 1;

while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}