import { Component, OnInit } from '@angular/core'
;
import { BookService } from '../shared/services';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: any;

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
      console.log(data);
    });
  }

}
