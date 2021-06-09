import { Component } from '@angular/core';
import { Book } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'generali';
  book: Book = {
    title: 'Mobi Dick!!',
    author: ':) Herman Melville',
    abstract:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enimreprehenderit eum consectetur debitis, nisi nobis aliquid, amet sint error fuga? Dolorum, harum nesciunt sint voluptatum eligendi velit tempore suscipit!',
  };
}
