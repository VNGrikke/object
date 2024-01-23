class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    displayInfo() {
        console.log(`Tiêu đề: ${this.title}`);
        console.log(`Tác giả: ${this.author}`);
        console.log(`Năm xuất bản: ${this.publishedYear}`);
        console.log("-----------------------------");
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
}
let book1 = new Book("Harry Potter", "J.K. Rowling", 1997);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
let book3 = new Book("1984", "George Orwell", 1949);
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.displayLibrary();
