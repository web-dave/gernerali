import { ThrowStmt } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookApiService } from './book-api.service';
import { Book } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  searchStr: string = '';
  title = 'generali';
  foo: Book | undefined;
  books: Book[] = [];
  // sub = Subscription.EMPTY;
  sub = new Subscription();
  show = true;

  constructor(private service: BookApiService) {}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub.add(
      this.service.getBooks().subscribe(
        (spagetti) => (this.books = spagetti),
        (err) => console.error(err),
        () => console.info('DONE!')
      )
    );
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
