import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NEVER, Observable } from 'rxjs';
import { BookApiService } from '../book-api.service';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  inner = '<b>Hurz</b>';
  book$: Observable<Book> = NEVER;
  constructor(private route: ActivatedRoute, private service: BookApiService) {}

  ngOnInit(): void {
    this.book$ = this.service.getBook(this.route.snapshot.params.isbn);
  }
}
