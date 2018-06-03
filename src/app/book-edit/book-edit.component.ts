import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../shared/services';
import { Book } from 'src/app/shared/models';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  book: Book = null;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBookDetails(this.route.snapshot.params['id']);
  }

  getBookDetails(id) {
    this.bookService.getBookById(id).subscribe((data:Book) => {
      this.book = data;
      console.log(this.book);
    });
  }

  updateBook() {
    this.bookService.updateBook(this.book).subscribe(res => {
      alert('Book updated');
      this.router.navigate(['/book-details', this.book['_id']]);
    }, (err)=> {
      console.log(err);
    });
  }

}