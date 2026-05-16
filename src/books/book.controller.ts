import { Get, Query, Controller, Inject } from '@nestjs/common';
import type { Book, GridDataResponse } from './interfaces/categories.interface';
import { BookService } from './infrastructure/books.service';
import { EXAMPLE_DATA } from 'src/mock/categories-database';
import { CategoryTreeNode } from 'src/categories/interfaces/categories.interface';

@Controller('books')
export class BookController {
  categories: CategoryTreeNode[] = EXAMPLE_DATA;
  constructor(private readonly bookService: BookService) {}

  /**
   * /books
   * /books?name=<book name>
   * @param name
   * @returns
   */
  @Get()
  findAll(@Query('name') name: string): GridDataResponse {
    return this.bookService.searchBooks(name);
  }

  /**
   * /books/categoryTree
   */
  @Get('categories')
  findCategories(): CategoryTreeNode[] {
    return this.categories;
  }
}
