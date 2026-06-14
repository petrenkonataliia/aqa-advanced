const Book = require("./Book");

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(value) {
        const validFormats = ["PDF", "JPG"];
        if (typeof value !== "string" || !validFormats.includes(value.toUpperCase())) {
            throw new Error(`Некоректний формат файлу! Дозволені: ${validFormats.join(", ")}`);
        }
        this._fileFormat = value.toUpperCase();
    }

    printInfo() {
        console.log(`Е-Книга: "${this.title}" | Автор: ${this.author} | Рік: ${this.year} | Формат: ${this.fileFormat}`);
    }

    static fromBook(bookInstance, fileFormat) {
        if (!(bookInstance instanceof Book)) {
            throw new Error("Перший аргумент має бути екземпляром класу Book!");
        }
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

module.exports = EBook;