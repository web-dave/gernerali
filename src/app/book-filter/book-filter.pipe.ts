import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book.interface';

@Pipe({
  name: 'bookFilter',
})
export class BookFilterPipe implements PipeTransform {
  transform(books: Book[], searchTerm: string): Book[] {
    console.log('pipe');
    return books.filter((book) => book.title?.includes(searchTerm));
  }
}
