import { Component, OnInit } from '@angular/core';
import { Observable, NEVER } from 'rxjs';
import { BookApiService } from '../book-api.service';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  searchStr: string = '';
  title = 'generali';
  foo: Book | undefined;
  books$: Observable<Book[]> = NEVER;
  show = true;

  constructor(private service: BookApiService) {}
  ngOnInit(): void {
    this.books$ = this.service.getBooks();
  }

  goToBookDetails(book: Book) {
    console.log('Navigate to book details, soon...');
    console.table(book);
    this.foo = book;
  }
  updateSearchString(e: Event) {
    this.searchStr = (e.target as HTMLInputElement).value;
  }
  filter(books: Book[], searchTerm: string): Book[] {
    console.log('filter');
    return books.filter((book) => book.title?.includes(searchTerm));
  }
}
