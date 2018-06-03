export class Book {
    isbn: String;
    title: String;
    author: String;
    description: String;
    published_year: String;
    publisher: String;
    updated_date: { 
        type: Date,
        default: Date
    }

    constructor(isbn,title,author,description,published_year,publisher,updated_date) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.description = description;
        this.published_year = published_year;
        this.publisher = publisher;
        this.updated_date = updated_date;
    }
}