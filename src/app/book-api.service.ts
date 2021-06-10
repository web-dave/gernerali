import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private books: Book[] = [
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
  constructor() {}

  getAll(): Observable<Book[]> {
    return of(this.books);
  }
}
