import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Book } from '../book.interface';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit, OnDestroy {
  @Input() content: Book = { abstract: null, author: null, title: null };
  @Output() detailClick = new EventEmitter<Book>();
  customStyle = {
    color: 'red',
  };
  constructor() {}
  ngOnDestroy(): void {
    console.log('DESTROY');
  }

  ngOnInit(): void {
    console.log('INIT');

    setTimeout(() => {
      this.customStyle.color = 'green';
    }, 1500);
  }

  handleClick(click: MouseEvent) {
    click.preventDefault();
    click.stopPropagation();
    console.log('click:', click);
    console.log('click:' + 1);
    console.log('click:', 1);
    this.detailClick.emit(this.content);
  }
}
