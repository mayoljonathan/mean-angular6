import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../shared/services';
import { Book } from 'src/app/shared/models';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book: Book = null;

  constructor(
    private router: Router,
    private bookService: BookService
  ) { 
  }

  ngOnInit() {
    this.book = new Book(null,null,null,null,null,null,null);
  }

  saveBook() {
    this.bookService.addBook(this.book).subscribe(res => {
      let id = res['_id'];
      this.router.navigate(['/book-details', id]);
    }, (err)=> {
      console.log(err);
    });
  }

}