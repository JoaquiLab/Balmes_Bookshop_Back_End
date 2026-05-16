import { Injectable } from '@nestjs/common';
import { Book, GridDataResponse } from '../interfaces/categories.interface';
import { BOOKS } from 'src/mock/books-database';

@Injectable({})
export class BookService {
  private readonly DATABASE_BOOKS: Book[] = BOOKS;

  /**
   * Makes a search in the database for books that match with the param
   * @param name
   * @returns
   */
  searchBooks(name?: string): GridDataResponse {
    let books: Book[] = name
      ? this.getBooksThatMatch(name)
      : this.getAllBooks();
    //Returns a respose withzz
    return {
      metadata: {
        totalProducts: books.length,
        currentPage: 0,
        totalPages: 0,
        searchString: '',
      },
      books: books,
    };
  }
  /**
   * Return a list with all the books of the database
   * @returns
   */
  private getAllBooks(): Book[] {
    return this.DATABASE_BOOKS;
  }
  /**
   * Return a list with all the books that matches with the param
   * @param name
   * @returns
   */
  private getBooksThatMatch(name: string): Book[] {
    return this.DATABASE_BOOKS.filter((book) =>
      book.title.toUpperCase().includes(name.toUpperCase()),
    );
  }
}
