import { Injectable } from '@nestjs/common';
import { Book } from '../interfaces/categories.interface';
import { DATABASE_BOOKS } from 'src/mock/books-database';

@Injectable({})
export class BookService {
  private readonly BOOKS = DATABASE_BOOKS;

  getBooks(name: string = '', sortType: number = 1): Book[] {
    let bookList: Book[] = [];
    if (name === '') {
      bookList = this.BOOKS;
    } else {
      bookList = this.BOOKS.filter((book) =>
        book.title.toUpperCase().includes(name.toUpperCase()),
      );
    }
    return bookList;
  }
}
