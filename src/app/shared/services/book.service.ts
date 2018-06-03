import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {

    constructor(
        private http: HttpClient
    ) { 
    }

    getAllBooks() {
        return this.http.get('/api/book');
    }

    getBookById(id) {
        return this.http.get(`/api/book/${id}`);
    }

    addBook(book){
        return this.http.post('/api/book', book);
    }

    updateBook(book){
        return this.http.put('/api/book/'+book._id, book);
    }

    deleteBook(id){
        return this.http.delete(`/api/book/${id}`);
    }

}