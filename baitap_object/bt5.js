class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isAvailable = true;
    }
    displayInfo() {
        console.log(`Tiêu đề: ${this.title}`);
        console.log(`Tác giả: ${this.author}`);
        console.log(`Năm xuất bản: ${this.publishedYear}`);
        console.log(`Trạng thái sách: ${this.isAvailable ? "Có sẵn" : "Đã mượn"}`);
        console.log("-----------------------------");
    }
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`Đã mượn sách: ${this.title}`);
        } else {
            console.log(`Sách "${this.title}" không có sẵn để mượn.`);
        }
    }
    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
            console.log(`Đã trả sách: ${this.title}`);
        } else {
            console.log(`Sách "${this.title}" đã có sẵn, không cần trả.`);
        }
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    displayLibrary() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            book.displayInfo();
        });
    }
    isBookAvailable(bookTitle) {
        const book = this.books.find(b => b.title === bookTitle);
        return book ? book.isAvailable : false;
    }
}
let book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
let book3 = new Book("1984", "George Orwell", 1949);
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayLibrary();

 book1.borrow();
book2.borrow();
book3.returnBook();

console.log("Có sẵn để mượn sách 'Harry Potter'?", library.isBookAvailable("Harry Potter"));
console.log("Có sẵn để mượn sách 'To Kill a Mockingbird'?", library.isBookAvailable("To Kill a Mockingbird"));
