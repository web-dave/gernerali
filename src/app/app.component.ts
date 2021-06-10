import { Component } from '@angular/core';
import { BookApiService } from './book-api.service';
import { Book } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchStr: string = '';
  title = 'generali';
  foo: Book | undefined;
  books: Book[] = [];
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

  constructor(private service: BookApiService) {
    this.books = this.service.getAll();
  }
}
