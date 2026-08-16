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
  withAll(
    @Query('name') name: string,
    @Query('sortType', ParseIntPipe) sortType: number,
  ): GridDataResponse {
    const books: Book[] = this.bookService.getBooks(name, sortType);
    this.logger.log('Entry in book findAll')
    return { books };
  }

  /**
   * /books/categoryTree
   */
  @Get('categories')
  findCategories(): CategoryTreeNode[]{
    return this.categories
  }
}



