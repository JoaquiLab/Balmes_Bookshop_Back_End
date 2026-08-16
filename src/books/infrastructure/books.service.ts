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
    //Apply the sortType
    const sortedList = this.sortBooks(bookList, sortType);
    return sortedList;
  }

  /**
   * Function to sort a list in 3 differents ways:
   * - 1 High Price to low price
   * - 2 Low Price to high price
   * - 3 newest to lowest
   * @param bookList
   * @param sortType
   */
  sortBooks(bookList: Book[], sortType: number): Book[] {
    //High price to Low price
    if (sortType === 1) {
      bookList.sort((a, b) => {
        return a.price - b.price;
      });
    }
    //Low price to High price
    else if (sortType === 2) {
      bookList.sort((a, b) => {
        return b.price - a.price;
      });
    }
    //New to old
    else {
      bookList.sort((a, b) => {
        if (a.onSaleDate === b.onSaleDate) return 0;
        else if (a.onSaleDate < b.onSaleDate) return -1;
        else return 1;
      });
    }

    return bookList;
  }
}
