import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input() content: Book = { abstract: null, author: null, title: null };
  customStyle = {
    color: 'red',
  };
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.customStyle.color = 'green';
    }, 1500);
  }
}
