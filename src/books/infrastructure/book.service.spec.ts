import { Test, TestingModule } from '@nestjs/testing';
import { beforeEach, describe, it } from 'node:test';
import { BookService } from './books.service';


describe('BookController', () => {
  let bookService: BookService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      // controllers: [BookController],
      providers: [BookService],
    }).compile();

    bookService = app.get<BookService>(BookService);

  
  });
});
