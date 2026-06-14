class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Поле 'Назва книги' не може бути пустим.");
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value !== "string" || value.trim() === "") {
            throw new Error("Поле 'Автор' не може бути пустим.");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }
    set year(value) {
        const currentYear = 2026;
        if (typeof value !== "number" || value <= 0 || value > currentYear) {
            throw new Error(`Рік видання не коректний.`);
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Книга: "${this.title}" | Автор: ${this.author} | Рік: ${this.year}`);
    }

    static findOldestBook(booksArray) {
        if (!Array.isArray(booksArray) || booksArray.length === 0) {
            return null;
        }

        return booksArray.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}

module.exports = Book;