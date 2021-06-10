import { Component } from '@angular/core';
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
  books: Book[] = [
    {
      title: 'How to win friends',
      author: 'Dale Carnegie',
      abstract: 'How to Win Friends and Influence ...',
    },
    {
      title: 'The Willpower Instinct: How Self-Control Works ...',
      author: 'Kelly McGonigal',
      abstract: 'Based on Stanford University ...',
    },
    {
      author: 'Simon Sinek',
      title: 'Start with WHY',
      abstract: "START WITH WHY shows that the leaders who've ...",
    },
  ];
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

  constructor() {
    // setInterval(() => {
    //   this.searchStr = 'fri';
    // }, 1500);
  }
}
