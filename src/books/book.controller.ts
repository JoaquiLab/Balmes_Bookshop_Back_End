import { Get, Query, Controller, Inject } from '@nestjs/common';
import type { Book, GridDataResponse } from './interfaces/categories.interface';
import { BookService } from './infrastructure/books.service';
import { EXAMPLE_DATA } from 'src/mock/books-database';
import { CategoryTreeNode } from 'src/categories/interfaces/categories.interface';

@Controller('books')
export class BookController {
  categories: CategoryTreeNode[] = EXAMPLE_DATA;
  constructor(private readonly bookService: BookService){}

  /**
   * /books
   * /books?name=<book name>
   * @param name 
   * @returns 
   */
  @Get()
  findAll(@Query('name') name: string): GridDataResponse {
    const books: Book[] = this.bookService.getAllBooks();
    if (name == '') {
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
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(name.toLowerCase()),
    );
    return {
      books: filteredBooks,
      metadata: {
        totalProducts: filteredBooks.length,
        currentPage: 0,
        totalPages: 0,
        searchString: '',
      },
    };
  }

  /**
   * /books/categoryTree
   */
  @Get('categories')
  findCategories(): CategoryTreeNode[]{
    return this.categories
  }
}



