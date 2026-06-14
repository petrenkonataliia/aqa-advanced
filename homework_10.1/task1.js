const Book = require("./Book");
const EBook = require("./EBook");

console.log("--- Book ---");
const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("Тарас Бульба", "  Н.В. Гоголь", 1835);
const book3 = new Book("Гуляй-поле", "Багряний Іван Павлович", 1944);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log("\n--- EBook ---");
const ebook1 = new EBook("Місто", "Валер'ян Підмогильний", 1928, "PDF");
ebook1.printInfo();

console.log("\n--- Getters and Setters Validation Test ---");
book1.title = "Новий Кобзар";
console.log(`Getter title validation: ${book1.title}`);

try {
    book1.year = -50;
} catch (error) {
    console.log(`Caught by validation: ${error.message}`);
}

console.log("\n--- Oldest book search ---");
const allBooks = [book1, book2, book3, ebook1];
const oldestBook = Book.findOldestBook(allBooks);

console.log("The oldest book in the list:");
oldestBook.printInfo();

console.log("\n--- Converting paper book onto e-book ---");
const convertedEbook = EBook.fromBook(book2, "PDF");
convertedEbook.printInfo();