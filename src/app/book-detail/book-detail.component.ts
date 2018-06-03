import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookService } from '../shared/services';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id) {
    this.bookService.getBookById(id).subscribe(data => {
      this.book = data;
      console.log(this.book);
    }, err => {
      console.log(err);
    });
  }

  deleteBook(id){
    this.bookService.deleteBook(id).subscribe(res => {
      console.log(res);
      alert('Book deleted');
      this.router.navigate(['/books']);
    }, err => {
      console.log(err)
    });
  }

}